import { FCMThemeScheme } from '@/constants'
import { useColorScheme } from 'react-native'

export const useThemeScheme = (): FCMThemeScheme => {
  const theme = useColorScheme()

  return theme === 'dark' ? 'dark' : 'light'
}
