import { forwardRef, ReactNode, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import {
  View,
  ViewStyle,
  TextInputProps,
  ViewProps,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Pressable,
  StyleSheet,
  StyleProp,
  LayoutChangeEvent,
} from 'react-native'

import { styles } from './styles'
import { usePalette } from '@/theme'
import { runOnUI, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { AirbnbText } from '@/components/native'
import { ImageSource } from 'expo-image'
import { TextFieldHelperText } from '../TextFieldHelperText'

export type TextFieldProps = Omit<TextInputProps, 'style'> & {
  containerTestID?: string
  labelTestID?: string
  helperTextTestID?: string
  containerStyles?: StyleProp<ViewStyle>
  label: string
  helperText?: string | ReactNode
  keepHelperTextSpace?: boolean
  leftDecorator?: ReactNode
  rightDecorator?: ReactNode
  hideHelperTextLeftErrorIcon?: boolean
  helperTextLeftErrorIconSource?: ImageSource
  error?: boolean
  inputContainerStyles?: StyleProp<ViewStyle>
  onInputContainerLayout?: (e: LayoutChangeEvent) => void
}

const TextField = forwardRef<TextInput, TextFieldProps>((props, outerRef) => {
  // Destructure props
  const {
    containerStyles,
    containerTestID,
    labelTestID,
    helperTextTestID,
    label,
    helperText,
    error,
    onFocus,
    onBlur,
    value,
    onChangeText,
    placeholder,
    keepHelperTextSpace,
    leftDecorator,
    rightDecorator,
    hideHelperTextLeftErrorIcon,
    helperTextLeftErrorIconSource,
    inputContainerStyles,
    onInputContainerLayout,
    ...rest
  } = props

  // Declare hooks
  const innerRef = useRef<TextInput>(null)
  const palette = usePalette()
  const [localValue, setLocalValue] = useState(value || '')
  const localSharedValue = useSharedValue<string>(value || '')
  const isSharedFocus = useSharedValue(0)
  const [isFocus, setIsFocus] = useState<boolean>(false)

  useImperativeHandle(outerRef, () => innerRef.current!, [])

  // Declare callback
  const forceFocus = useCallback(() => {
    innerRef.current?.focus()
  }, [])

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      runOnUI((isFocus: number) => {
        isSharedFocus.value = isFocus
      })(1)
      setIsFocus(true)
      onFocus?.(e)
    },
    [onFocus, setIsFocus, isSharedFocus],
  )

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      runOnUI((isFocus: number) => {
        isSharedFocus.value = isFocus
      })(0)
      setIsFocus(false)
      onBlur?.(e)
    },
    [onBlur, setIsFocus, isSharedFocus],
  )

  const handleChangeText = useCallback(
    (newValue: string) => {
      runOnUI((newSharedValue: string) => {
        localSharedValue.value = newSharedValue
      })(newValue)
      setLocalValue(newValue)
      onChangeText?.(newValue)
    },
    [localSharedValue, setLocalValue, onChangeText],
  )

  // Declare constants
  const style: ViewProps['style'] = useMemo(() => [styles.container, containerStyles], [containerStyles])

  // Animated styles
  const labelAnimatedStyles = useAnimatedStyle(() => {
    const isLabelUp = localSharedValue.value || isSharedFocus.value
    const duration = 300
    return {
      transform: [
        { translateY: withTiming(isLabelUp ? -10 : 0, { duration }) },
        { translateX: withTiming(isLabelUp ? -3 : 0, { duration }) },
        { scale: withTiming(isLabelUp ? 0.9 : 1, { duration }) },
      ],
    }
  }, [])

  return (
    <View style={style} testID={containerTestID}>
      <Pressable onPress={forceFocus}>
        <View
          onLayout={onInputContainerLayout}
          style={[
            styles.inputContainer,
            { borderColor: error ? palette.text['primary-error'] : palette.text.secondary },
            { backgroundColor: error ? palette.background['primary-error'] : palette.background.primary },
            { borderWidth: isFocus ? 1 : StyleSheet.hairlineWidth },
            inputContainerStyles,
          ]}
        >
          {/* left decorator */}
          {leftDecorator}

          <View style={styles.contentContainer}>
            <AirbnbText
              variant="body2"
              size="s"
              color="secondary"
              weight={error ? '600' : '500'}
              testID={labelTestID}
              style={[styles.label, { color: error ? palette.text['primary-error'] : palette.text.secondary }]}
              animatedStyle={labelAnimatedStyles}
            >
              {label}
            </AirbnbText>
            <TextInput
              {...rest}
              ref={innerRef}
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={localValue}
              onChangeText={handleChangeText}
            />
          </View>

          {/* right decorator */}
          {rightDecorator}
        </View>
      </Pressable>
      {(helperText || keepHelperTextSpace) && (
        <TextFieldHelperText
          error={error}
          hideLeftErrorIcon={hideHelperTextLeftErrorIcon}
          leftErrorIconSource={helperTextLeftErrorIconSource}
        >
          {helperText}
        </TextFieldHelperText>
      )}
    </View>
  )
})
TextField.displayName = 'TextField'

export { TextField }
