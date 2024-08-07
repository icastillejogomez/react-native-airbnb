import { FCMPalette } from './FCMPalette'
import { FCMThemeSpacing } from './FCMThemeSpacing'
import { FCMThemeTypography } from './FCMThemeTypography'

export type FCMTheme = {
  palette: {
    light: FCMPalette
    dark: FCMPalette
  }
  typography: FCMThemeTypography
  spacing: FCMThemeSpacing
}
