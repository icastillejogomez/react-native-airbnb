import { TextStyle, StyleSheet } from 'react-native'
import { AirbnbTextDecoration, AirbnbTextSize, AirbnbTextVariant, AirbnbTextWeight } from './AirbnbText'

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
    fontWeight: '400',
    lineHeight: 24, // 16 * 1.5
  },
  body2: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 21, // 15 * 1.4
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 28, // 16 * 1.75
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22, // 14 * 1.57
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20, // 12 * 1.66
  },
  overline: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 32, // 12 * 2.66
    textTransform: 'uppercase',
  },
})

export const weights = StyleSheet.create<Record<AirbnbTextWeight, TextStyle>>({
  default: {},
  bold: {
    fontWeight: 'bold',
  },
  '100': {
    fontWeight: '100',
  },
  '200': {
    fontWeight: '200',
  },
  '300': {
    fontWeight: '300',
  },
  '400': {
    fontWeight: '400',
  },
  '500': {
    fontWeight: '500',
  },
  '600': {
    fontWeight: '600',
  },
  '700': {
    fontWeight: '700',
  },
  '800': {
    fontWeight: '800',
  },
  '900': {
    fontWeight: '900',
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

export const baseStyles = StyleSheet.create({
  defaults: {
    fontSize: 16,
  },
})
