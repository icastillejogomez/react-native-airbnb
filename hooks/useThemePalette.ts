import { AirbnbPalette, AirbnbThemeScheme } from '@/constants'
import { useTheme } from './useTheme'
import { useThemeScheme } from './useThemeMode'

export const useThemePalette = (mode?: AirbnbThemeScheme): AirbnbPalette => {
  const themeScheme = useThemeScheme()
  const theme = useTheme()
  return theme.palette[mode ?? themeScheme]
}
