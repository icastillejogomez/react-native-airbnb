import { Palette } from '../types'
import { useTheme } from './useTheme'

export type UsePalette = () => Palette

export const usePalette: UsePalette = () => {
  const theme = useTheme()
  return theme.palette
}
