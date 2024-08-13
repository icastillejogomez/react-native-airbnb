import { Children, cloneElement, FC, isValidElement, useMemo } from 'react'
import { Color, LinearGradient, Palette, useTheme } from '@/theme'
import { StyleProp, Text, TextProps, TextStyle, Platform } from 'react-native'
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient'

import * as styles from './styles'
import MaskedView from '@react-native-masked-view/masked-view'

export type AirbnbTextVariant = 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline'
export type AirbnbTextColor = keyof Palette['text']
export type AirbnbTextSize = 'inherit' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type AirbnbTextWeight = 'default' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type AirbnbTextDecoration = 'none' | 'underline' | 'line-through' | 'underline line-through'

export type AirbnbTextProps = TextProps & {
  variant?: AirbnbTextVariant
  color?: AirbnbTextColor
  size?: AirbnbTextSize
  weight?: AirbnbTextWeight
  decoration?: AirbnbTextDecoration
  bold?: boolean
  avoidGradient?: boolean
}

function isLinearGradient(color: Palette['text'][keyof Palette['text']]): color is LinearGradient {
  return typeof color !== 'string'
}

const AirbnbText: FC<AirbnbTextProps> = (props) => {
  const { children, style: parentStyle, color, size, weight, variant, bold, decoration, avoidGradient, ...rest } = props

  const theme = useTheme()
  const isGradientColor = useMemo(() => isLinearGradient(theme.palette.text[color || 'primary']), [theme, color])
  const themeColor = useMemo(() => {
    const c = theme.palette.text[color || 'primary']
    if (isLinearGradient(c) && avoidGradient) return (c as LinearGradient).plainColor
    return c
  }, [theme, color, avoidGradient])

  const [gradientStart, gradientEnd] = useMemo(() => {
    if (!isGradientColor || avoidGradient) return [null, null]
    switch ((themeColor as LinearGradient).direction) {
      case 'to bottom':
        return [
          { x: 0.5, y: 0 },
          { x: 0.5, y: 1 },
        ]
      case 'to top':
        return [
          { x: 0.5, y: 1 },
          { x: 0.5, y: 0 },
        ]
      case 'to left':
        return [
          { x: 1, y: 0.5 },
          { x: 0, y: 0.5 },
        ]
      case 'to right':
      default:
        return [
          { x: 0, y: 0.5 },
          { x: 1, y: 0.5 },
        ]
    }
  }, [isGradientColor, avoidGradient, themeColor])

  const style: StyleProp<TextStyle> = useMemo(() => {
    return [
      styles.baseStyles.defaults,
      !isGradientColor || avoidGradient ? { color: themeColor as Color } : {},
      { ...styles.variants[variant || 'body1'] },
      { ...styles.weights[weight || bold ? 'bold' : 'default'] },
      size ? { ...styles.sizes[size] } : {},
      { ...styles.decorations[decoration || 'none'] },
      parentStyle || {},
    ]
  }, [themeColor, isGradientColor, avoidGradient, parentStyle, size, weight, variant, bold, decoration])

  if (isGradientColor && !avoidGradient) {
    const c = themeColor as LinearGradient
    return (
      <MaskedView
        // androidRenderingMode="hardware"
        maskElement={
          <Text {...rest} style={style}>
            {children}
          </Text>
        }>
        <ExpoLinearGradient
          dither={Platform.OS === 'ios'}
          colors={c.colors}
          locations={c.locations}
          start={gradientStart}
          end={gradientEnd}>
          <Text {...rest} style={[style, { opacity: 0 }]}>
            {children}
          </Text>
        </ExpoLinearGradient>
      </MaskedView>
    )
  }

  return (
    <Text {...rest} style={style}>
      {Children.map(children, (child) => {
        if (typeof child === 'string') return child
        /* @ts-ignore */
        if (isValidElement(child) && child.type.displayName === 'AirbnbText') {
          return cloneElement(child, { avoidGradient: true } as AirbnbTextProps)
        }
        return child
      })}
    </Text>
  )
}
AirbnbText.displayName = 'AirbnbText'
export { AirbnbText }
