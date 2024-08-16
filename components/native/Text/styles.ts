import { TextStyle, StyleSheet } from 'react-native'
import { AirbnbTextAlign, AirbnbTextDecoration, AirbnbTextSize, AirbnbTextVariant, AirbnbTextWeight } from './AirbnbText'

export const decorations = StyleSheet.create<Record<AirbnbTextDecoration, TextStyle>>({
  none: {},
  underline: {
    textDecorationLine: 'underline',
  },
  'line-through': {
    textDecorationLine: 'line-through',
  },
  'underline line-through': {
    textDecorationLine: 'underline line-through',
  },
})

const variants = StyleSheet.create<Record<AirbnbTextVariant, TextStyle>>({
  body1: {
    fontSize: 16,
    // lineHeight: 24, // 16 * 1.5
  },
  body2: {
    fontSize: 15,
    // lineHeight: 21, // 15 * 1.4
  },
  subtitle1: {
    fontSize: 16,
    // lineHeight: 28, // 16 * 1.75
  },
  subtitle2: {
    fontSize: 14,
    // lineHeight: 22, // 14 * 1.57
  },
  caption: {
    fontSize: 13,
    // lineHeight: 20, // 12 * 1.66
  },
  overline: {
    fontSize: 12,
    // lineHeight: 32, // 12 * 2.66
    textTransform: 'uppercase',
  },
})

export const weightsRegular = StyleSheet.create<Record<AirbnbTextWeight, TextStyle>>({
  normal: {
    fontFamily: 'Montserrat-Medium',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  '100': {
    fontFamily: 'Montserrat-Thin',
  },
  '200': {
    fontFamily: 'Montserrat-ExtraLight',
  },
  '300': {
    fontFamily: 'Montserrat-Light',
  },
  '400': {
    fontFamily: 'Montserrat-Regular',
  },
  '500': {
    fontFamily: 'Montserrat-Medium',
  },
  '600': {
    fontFamily: 'Montserrat-SemiBold',
  },
  '700': {
    fontFamily: 'Montserrat-Bold',
  },
  '800': {
    fontFamily: 'Montserrat-ExtraBold',
  },
  '900': {
    fontFamily: 'Montserrat-Black',
  },
})

export const weightsItalic = StyleSheet.create<Record<AirbnbTextWeight, TextStyle>>({
  normal: {
    fontFamily: 'Montserrat-MediumItalic',
  },
  bold: {
    fontFamily: 'Montserrat-BoldItalic',
  },
  '100': {
    fontFamily: 'Montserrat-ThinItalic',
  },
  '200': {
    fontFamily: 'Montserrat-ExtraLightItalic',
  },
  '300': {
    fontFamily: 'Montserrat-LightItalic',
  },
  '400': {
    fontFamily: 'Montserrat-Italic',
  },
  '500': {
    fontFamily: 'Montserrat-MediumItalic',
  },
  '600': {
    fontFamily: 'Montserrat-SemiBoldItalic',
  },
  '700': {
    fontFamily: 'Montserrat-BoldItalic',
  },
  '800': {
    fontFamily: 'Montserrat-ExtraBoldItalic',
  },
  '900': {
    fontFamily: 'Montserrat-BlackItalic',
  },
})

export const variantsRegular = StyleSheet.create<Record<AirbnbTextVariant, TextStyle>>({
  body1: {
    ...variants.body1,
    ...weightsRegular['500'],
  },
  body2: {
    ...variants.body2,
    ...weightsRegular['500'],
  },
  subtitle1: {
    ...variants.subtitle1,
    ...weightsRegular['600'],
  },
  subtitle2: {
    ...variants.subtitle2,
    ...weightsRegular['600'],
  },
  caption: {
    ...variants.caption,
    ...weightsRegular['500'],
  },
  overline: {
    ...variants.overline,
    ...weightsRegular['600'],
  },
})

export const variantsItalic = StyleSheet.create<Record<AirbnbTextVariant, TextStyle>>({
  body1: {
    ...variants.body1,
    ...weightsItalic['500'],
  },
  body2: {
    ...variants.body2,
    ...weightsItalic['500'],
  },
  subtitle1: {
    ...variants.subtitle1,
    ...weightsItalic['600'],
  },
  subtitle2: {
    ...variants.subtitle2,
    ...weightsItalic['600'],
  },
  caption: {
    ...variants.caption,
    ...weightsItalic['500'],
  },
  overline: {
    ...variants.overline,
    ...weightsItalic['600'],
  },
})

export const sizes = StyleSheet.create<Record<AirbnbTextSize, TextStyle>>({
  inherit: {
    fontSize: undefined,
    // lineHeight: undefined,
  },
  xxs: {
    fontSize: 10,
  },
  xs: {
    fontSize: 12,
    // lineHeight: 16, // 12 * 1.33
  },
  s: {
    fontSize: 14,
    // lineHeight: 19.6, // 14 * 1.4
  },
  m: {
    fontSize: 16,
    // lineHeight: 24, // 16 * 1.5
  },
  l: {
    fontSize: 20,
    // lineHeight: 25.2, // 18 * 1.4
  },
  xl: {
    fontSize: 24,
    // lineHeight: 28, // 20 * 1.4
  },
  xxl: {
    fontSize: 32,
    // lineHeight: 33.6, // 24 * 1.4
  },
})

export const alignments = StyleSheet.create<Record<AirbnbTextAlign, TextStyle>>({
  auto: {
    textAlign: 'auto',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  justify: {
    textAlign: 'justify',
  },
})

export const baseStyles = StyleSheet.create({
  defaults: {
    fontSize: 16,
  },
})
