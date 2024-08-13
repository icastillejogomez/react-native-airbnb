import { Color } from './Color'

export type LinearGradient = {
  direction: 'to bottom' | 'to top' | 'to left' | 'to right'
  colors: Color[]
  locations: number[]
  plainColor: Color
}
