import { MutableRefObject, createContext } from 'react'
import { SharedValue } from 'react-native-reanimated'

type ValueKey = 'tabBarHeight' | 'placesBottomSheetHeight'

export const AnimatedContext = createContext<Map<ValueKey, MutableRefObject<SharedValue<number>>>>(
  new Map(),
)
