import type { AirbnbPalette } from './AirbnbPalette'

export type AirbnbTextColor = keyof (AirbnbPalette['text'] & AirbnbPalette['color'])
