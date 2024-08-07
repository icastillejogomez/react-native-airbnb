import { darkPalette, lightPalette } from './palette'
import { themeSpacing } from './spacing'
import { FCMTheme } from './types'
import { themeTypography } from './typography'

export const theme: FCMTheme = {
  palette: {
    light: lightPalette,
    dark: darkPalette,
  },
  spacing: themeSpacing,
  typography: themeTypography,
}
