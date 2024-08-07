import { AirbnbPalette } from './AirbnbPalette'
import { AirbnbThemeSpacing } from './AirbnbThemeSpacing'
import { AirbnbThemeTypography } from './AirbnbThemeTypography'

export type AirbnbTheme = {
  palette: {
    light: AirbnbPalette
    dark: AirbnbPalette
  }
  typography: AirbnbThemeTypography
  spacing: AirbnbThemeSpacing
}
