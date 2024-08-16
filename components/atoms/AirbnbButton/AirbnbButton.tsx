import { AirbnbText } from '@/components/native'
import { forwardRef, useCallback } from 'react'
import { View, Pressable, PressableProps, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { styles } from './styles'
import { usePalette } from '@/theme'

// Create pressable animated component
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export type AirbnbButtonVariant = 'contained' | 'outlined'

export type AirbnbButtonProps = Omit<PressableProps, 'style'> & {
  variant?: AirbnbButtonVariant
  title: string
  style?: ViewStyle
}

const AirbnbButton = forwardRef<View, AirbnbButtonProps>((props, ref) => {
  const { title, variant = 'contained', style: parentStyle, onPressIn, onPressOut, ...rest } = props

  const palette = usePalette()
  const isScaled = useSharedValue(0)

  const style: StyleProp<ViewStyle> = [
    styles.container,
    variant === 'contained' ? [{ ...styles.contained }, { backgroundColor: palette.background['primary-core'] }] : styles.outlined,
    parentStyle || {},
  ]

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      isScaled.value = withTiming(1)
      onPressIn?.(e)
    },
    [onPressIn, isScaled],
  )

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      isScaled.value = withTiming(0)
      onPressOut?.(e)
    },
    [onPressOut, isScaled],
  )

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(isScaled.value, [0, 1], [1, 0.95], 'clamp') }],
    }
  })

  return (
    <AnimatedPressable style={[style, animatedStyle]} {...rest} ref={ref} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <AirbnbText
        color={variant === 'contained' ? 'primary-inverse' : 'primary'}
        weight={variant === 'contained' ? '600' : '500'}
        variant="body1"
      >
        {title}
      </AirbnbText>
    </AnimatedPressable>
  )
})
AirbnbButton.displayName = 'AirbnbButton'

export { AirbnbButton }
