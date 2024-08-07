import { AirbnbThemeScheme } from '@/constants'
import { useColorScheme } from 'react-native'

export const useThemeScheme = (): AirbnbThemeScheme => {
  const theme = useColorScheme()

  return theme === 'dark' ? 'dark' : 'light'
}
