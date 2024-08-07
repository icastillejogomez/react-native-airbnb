import { FCMThemeSpacing } from '@/constants'
import { useTheme } from './useTheme'

export const useThemeSpacing = (): FCMThemeSpacing => {
  const theme = useTheme()
  return theme.spacing
}
