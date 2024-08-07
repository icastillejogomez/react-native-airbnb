import { FCMPalette, FCMThemeScheme } from '@/constants'
import { useTheme } from './useTheme'
import { useThemeScheme } from './useThemeMode'

export const useThemePalette = (mode?: FCMThemeScheme): FCMPalette => {
  const themeScheme = useThemeScheme()
  const theme = useTheme()
  return theme.palette[mode ?? themeScheme]
}
