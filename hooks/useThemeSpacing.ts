import { AirbnbThemeSpacing } from '@/constants'
import { useTheme } from './useTheme'

export const useThemeSpacing = (): AirbnbThemeSpacing => {
  const theme = useTheme()
  return theme.spacing
}
