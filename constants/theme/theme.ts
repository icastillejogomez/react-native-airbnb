import { darkPalette, lightPalette } from './palette'
import { themeSpacing } from './spacing'
import { AirbnbTheme } from './types'
import { themeTypography } from './typography'

export const theme: AirbnbTheme = {
  palette: {
    light: lightPalette,
    dark: darkPalette,
  },
  spacing: themeSpacing,
  typography: themeTypography,
}
