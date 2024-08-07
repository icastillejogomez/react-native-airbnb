import { SharedValue, interpolate, useDerivedValue } from 'react-native-reanimated'
import { usePlacesBottomSheetSharedValue } from './usePlacesBottomSheetSharedValue'
import { appConfig } from '@/constants'

const TOP_INSET = -94
const DEFAULT_TAB_BAR_HEIGHT = appConfig.ui.tabBar.defaultHeight

export const useTabBarHeight = (): SharedValue<number> => {
  const placesBottomSheetHeight = usePlacesBottomSheetSharedValue()
  // const tabBarHeight = useContext(AnimatedContext).get('tabBarHeight')

  const tabBarHeight = useDerivedValue(() => {
    if (!placesBottomSheetHeight) return DEFAULT_TAB_BAR_HEIGHT
    return interpolate(placesBottomSheetHeight.value, [TOP_INSET, 574], [100, 0])
  }, [placesBottomSheetHeight])

  return tabBarHeight
}
