import { Children, cloneElement, FC, isValidElement, useMemo } from 'react'
import { Color, LinearGradient, Palette, useTheme } from '@/theme'
import { StyleProp, Text, TextProps, TextStyle, Platform } from 'react-native'
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient'

import * as styles from './styles'
import MaskedView from '@react-native-masked-view/masked-view'
import { truncateTextLength } from '@/utils'

export type AirbnbTextVariant = 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline'
export type AirbnbTextColor = keyof Palette['text']
export type AirbnbTextSize = 'inherit' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type AirbnbTextWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type AirbnbTextDecoration = 'none' | 'underline' | 'line-through' | 'underline line-through'
export type AirbnbTextAlign = 'auto' | 'left' | 'center' | 'right' | 'justify'

export type AirbnbTextProps = TextProps & {
  variant?: AirbnbTextVariant
  color?: AirbnbTextColor
  size?: AirbnbTextSize
  weight?: AirbnbTextWeight
  decoration?: AirbnbTextDecoration
  align?: AirbnbTextAlign
  bold?: boolean
  italic?: boolean
  avoidGradient?: boolean
  maxLength?: number
}

function isLinearGradient(color: Palette['text'][keyof Palette['text']]): color is LinearGradient {
  return typeof color !== 'string'
}

type NumericWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
function getNumericWeightFromLabel(weight: TextStyle['fontWeight']): NumericWeight {
  switch (weight) {
    case 'normal':
    case undefined:
      return '400'
    case 'bold':
      return '700'
    case 'ultralight':
      return '100'
    case 'thin':
      return '200'
    case 'light':
      return '300'
    case 'medium':
      return '500'
    case 'regular':
      return '400'
    case 'semibold':
      return '600'
    case 'condensedBold':
      return '800'
    case 'condensed':
      return '900'
    case 'heavy':
      return '900'
    case 'black':
      return '900'
    default:
      return weight.toString() as NumericWeight
  }
}

const AirbnbText: FC<AirbnbTextProps> = (props) => {
  const {
    children,
    style: parentStyle,
    color,
    size,
    weight,
    variant,
    bold,
    decoration,
    avoidGradient,
    italic,
    align,
    maxLength,
    ...rest
  } = props

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
    /**
     * It's possible that parent style has somethign like { fontWeight: '300' } but this is not possible
     * while we're using custom fonts. In order to let parent components custimize fontWeight we need to
     * overwrite fontWeight with the correct fontFamily.
     *
     * It occurs the same with the italic flag. Someone could pass the italic flag and style={{ fontStyle: 'normal' }}
     * in all cases, parentStyles has precedence over other props and flags
     */
    let overwriteStyles: StyleProp<TextStyle> = {}
    if (parentStyle && 'fontWeight' in parentStyle && 'fontStyle' in parentStyle) {
      // Double overwrite
      const numericWeight = getNumericWeightFromLabel(parentStyle.fontWeight)
      overwriteStyles =
        parentStyle.fontStyle === 'italic' ? { ...styles.weightsItalic[numericWeight] } : { ...styles.weightsRegular[numericWeight] }
      delete parentStyle.fontStyle
      delete parentStyle.fontWeight
    } else if (parentStyle && 'fontWeight' in parentStyle) {
      // Determine if italic shortcut was given and fontFamily
      const numericWeight = getNumericWeightFromLabel(parentStyle.fontWeight)
      overwriteStyles = italic ? { ...styles.weightsItalic[numericWeight] } : { ...styles.weightsRegular[numericWeight] }
      delete parentStyle.fontWeight
    } else if (parentStyle && 'fontStyle' in parentStyle) {
      // Determine weight
      const numericWeight = getNumericWeightFromLabel(bold ? 'bold' : weight || 'normal')
      overwriteStyles =
        parentStyle.fontStyle === 'italic' ? { ...styles.weightsItalic[numericWeight] } : { ...styles.weightsRegular[numericWeight] }
      // Get italic fontFamily for specified weight
      delete parentStyle.fontStyle
    }

    return [
      styles.baseStyles.defaults,
      !isGradientColor || avoidGradient ? { color: themeColor as Color } : {},
      italic ? { ...styles.variantsItalic[variant || 'body1'] } : { ...styles.variantsRegular[variant || 'body1'] },
      italic
        ? { ...styles.weightsItalic[bold ? 'bold' : weight || 'normal'] }
        : { ...styles.weightsRegular[bold ? 'bold' : weight || 'normal'] },
      size ? { ...styles.sizes[size] } : {},
      { ...styles.decorations[decoration || 'none'] },
      { ...styles.alignments[align || 'auto'] },
      parentStyle || {},
      overwriteStyles,
    ]
  }, [themeColor, isGradientColor, avoidGradient, parentStyle, size, weight, variant, bold, italic, decoration, align])

  if (isGradientColor && !avoidGradient) {
    const c = themeColor as LinearGradient
    return (
      <MaskedView
        // androidRenderingMode="hardware"
        maskElement={
          <Text {...rest} style={style}>
            {typeof children === 'string' && maxLength !== undefined ? truncateTextLength(children, maxLength, true) : children}
          </Text>
        }
      >
        <ExpoLinearGradient
          dither={Platform.OS === 'ios'}
          colors={c.colors}
          locations={c.locations}
          start={gradientStart}
          end={gradientEnd}
        >
          <Text {...rest} style={[style, { opacity: 0 }]}>
            {typeof children === 'string' && maxLength !== undefined ? truncateTextLength(children, maxLength, true) : children}
          </Text>
        </ExpoLinearGradient>
      </MaskedView>
    )
  }

  return (
    <Text {...rest} style={style}>
      {Children.map(children, (child) => {
        if (typeof child === 'string') return maxLength !== undefined ? truncateTextLength(child, maxLength, true) : child

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
