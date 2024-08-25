import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  StyleSheet,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  LayoutChangeEvent,
} from 'react-native'
import { TextFieldProps } from '../TextField/TextField'
import { usePalette } from '@/theme'
import Animated, { runOnUI, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { ControlledTextFieldProps } from '../ControlledTextField'
import { TextFieldHelperText } from '../TextFieldHelperText'

type OnFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
type OnBlurHandler = OnFocusHandler

export type TextFieldGroupProps = PropsWithChildren<
  ViewProps & {
    error?: boolean
    helperText?: string | ReactNode
  }
>

const TextFieldGroup: FC<TextFieldGroupProps> = (props) => {
  // Destructure props
  const { children, error, helperText, style: parentStyle, ...rest } = props

  // Declare hooks
  const palette = usePalette()
  const [localError, setLocalError] = useState<boolean | undefined | null>(null)
  const [localHelperText, setLocalHelperText] = useState<string | ReactNode | undefined | null>(null)
  const onFocusHandlers = useRef<(OnFocusHandler | undefined)[]>([])
  const onBlurHandlers = useRef<(OnBlurHandler | undefined)[]>([])
  const focusedTextFieldIndex = useSharedValue(-1)
  const lastFocusedTextFieldIndex = useSharedValue(-1)
  const textFieldHeights = useSharedValue<number[]>([])
  const blurTimer = useRef<NodeJS.Timeout>()

  const handleFocus = useCallback(
    (index: number) => {
      return (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocusHandlers.current[index]?.(e)
        focusedTextFieldIndex.value = index
        clearTimeout(blurTimer.current)
        setTimeout(() => {
          lastFocusedTextFieldIndex.value = index
        }, 300)
      }
    },
    [focusedTextFieldIndex, lastFocusedTextFieldIndex],
  )

  const handleBlur = useCallback(
    (index: number) => {
      return (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlurHandlers.current[index]?.(e)
        focusedTextFieldIndex.value = -1
        blurTimer.current = setTimeout(() => {
          lastFocusedTextFieldIndex.value = -1
        }, 300)
      }
    },
    [focusedTextFieldIndex, lastFocusedTextFieldIndex],
  )

  const handleInputContainerLayout = useCallback(
    (index: number) => {
      return (e: LayoutChangeEvent) => {
        const { height } = e.nativeEvent.layout
        runOnUI((height: number) => {
          textFieldHeights.value[index] = height
        })(height)
      }
    },
    [textFieldHeights],
  )

  // Declare styles
  const style: StyleProp<ViewStyle> = [styles.container, parentStyle]

  const activeBorderAnimatedStyle = useAnimatedStyle(() => {
    const translateY = textFieldHeights.value.reduce((acc, height, index) => {
      if (index + 1 <= focusedTextFieldIndex.value) {
        return acc + height
      }
      return acc
    }, 0)

    const height = focusedTextFieldIndex.value !== -1 ? textFieldHeights.value[focusedTextFieldIndex.value] : 0

    return {
      opacity: focusedTextFieldIndex.value !== -1 ? 1 : 0,
      height,
      transform: [
        {
          translateY: withTiming(translateY, { duration: lastFocusedTextFieldIndex.value !== -1 ? 300 : 0 }),
        },
      ],
    }
  })

  // Declare effects
  useEffect(() => {
    setLocalError(error)
  }, [error, setLocalError])

  useEffect(() => {
    setLocalHelperText(helperText)
  }, [helperText, setLocalHelperText])

  return (
    <View style={style} {...rest}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child) || !Array.isArray(children)) {
          return child
        }

        const childType = child.type as React.ComponentType
        if (childType.displayName !== 'TextField' && childType.displayName !== 'ControlledTextField') {
          return child
        }

        const isFirstChild = index === 0
        const isLastChild = index === children.length - 1

        const currentProps = child.props as TextFieldProps

        // Save child parent onFocus and onBlur handlers
        if (!onFocusHandlers.current[index]) {
          onFocusHandlers.current[index] = currentProps.onFocus
        }

        if (!onBlurHandlers.current[index]) {
          onBlurHandlers.current[index] = currentProps.onBlur
        }

        const newProps: TextFieldProps = {
          ...currentProps,
          helperText: null,
          keepHelperTextSpace: false,
          inputContainerStyles: [
            styles.inputContainer,
            isFirstChild && styles.firstInputContainer,
            isLastChild && styles.lastInputContainer,
          ],
          onFocus: handleFocus(index),
          onBlur: handleBlur(index),
          onInputContainerLayout: handleInputContainerLayout(index),
        }

        if (childType.displayName === 'ControlledTextField') {
          const controlledTextFieldNewProps = {
            ...newProps,
            hideHelperText: true,
          } as ControlledTextFieldProps

          return cloneElement(child as ReactElement, controlledTextFieldNewProps)
        }

        return cloneElement(child as ReactElement, newProps)
      })}
      <Animated.View style={[styles.activeBorder, { borderColor: palette.text.primary }, activeBorderAnimatedStyle]} pointerEvents="none" />

      {localHelperText && (
        <TextFieldHelperText style={styles.helperText} error={localError ?? false}>
          {localHelperText}
        </TextFieldHelperText>
      )}
    </View>
  )
}
TextFieldGroup.displayName = 'TextFieldGroup'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  firstInputContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  inputContainer: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  lastInputContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  activeBorder: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    borderWidth: 2,
    borderRadius: 8,
  },
  helperText: {
    marginTop: 4,
  },
})

export { TextFieldGroup }
