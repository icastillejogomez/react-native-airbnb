/**
 * If you want to implement a dark mode theme, expand the theme object and use
 * the useColorScheme hook to determine if the theme should be dark or light.
 */

// import { useColorScheme } from 'react-native'
import { AirbnbTheme } from '../types/AirbnbTheme'
import { theme } from '../theme'

type UseTheme = () => AirbnbTheme

export const useTheme: UseTheme = () => {
  // const colorScheme = useColorScheme()

  return theme
}
