import { useContext } from 'react'
import { AnimatedContext } from './contexts/AnimatedContext'

export const usePlacesBottomSheetSharedValue = () => {
  const placesBottomSheetHeight =
    useContext(AnimatedContext).get('placesBottomSheetHeight')?.current

  return placesBottomSheetHeight
}
