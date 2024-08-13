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

export const variants = StyleSheet.create<Record<AirbnbTextVariant, TextStyle>>({
  body1: {
    fontSize: 16,
    lineHeight: 24, // 16 * 1.5
  },
  body2: {
    fontSize: 15,
    lineHeight: 21, // 15 * 1.4
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 28, // 16 * 1.75
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 22, // 14 * 1.57
  },
  caption: {
    fontSize: 12,
    lineHeight: 20, // 12 * 1.66
  },
  overline: {
    fontSize: 12,
    lineHeight: 32, // 12 * 2.66
    textTransform: 'uppercase',
  },
})

export const weightsRegular = StyleSheet.create<Record<AirbnbTextWeight, TextStyle>>({
  default: {
    fontFamily: 'Montserrat-Regular',
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

export const weightItalic = StyleSheet.create<Record<AirbnbTextWeight, TextStyle>>({
  default: {
    fontFamily: 'Montserrat-Italic',
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

export const sizes = StyleSheet.create<Record<AirbnbTextSize, TextStyle>>({
  inherit: {
    fontSize: undefined,
    lineHeight: undefined,
  },
  xs: {
    fontSize: 12,
    lineHeight: 16, // 12 * 1.33
  },
  s: {
    fontSize: 14,
    lineHeight: 19.6, // 14 * 1.4
  },
  m: {
    fontSize: 16,
    lineHeight: 24, // 16 * 1.5
  },
  l: {
    fontSize: 18,
    lineHeight: 25.2, // 18 * 1.4
  },
  xl: {
    fontSize: 20,
    lineHeight: 28, // 20 * 1.4
  },
  xxl: {
    fontSize: 24,
    lineHeight: 33.6, // 24 * 1.4
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
