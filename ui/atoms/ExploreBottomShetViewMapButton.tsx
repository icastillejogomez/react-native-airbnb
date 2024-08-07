import { FC, useCallback } from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import { BottomSheetFooter, BottomSheetFooterProps, useBottomSheet } from '@gorhom/bottom-sheet'
import { useThemePalette } from '@/hooks'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

type ExploreBottomShetViewMapButtonProps = BottomSheetFooterProps & {}

export const ExploreBottomShetViewMapButton: FC<ExploreBottomShetViewMapButtonProps> = ({
  ...props
}) => {
  // Declare hooks
  const { height } = Dimensions.get('window')
  const bottomSheet = useBottomSheet()
  const palette = useThemePalette()

  const handlePress = useCallback(() => {
    bottomSheet.snapToIndex(0)
  }, [bottomSheet])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(bottomSheet.animatedPosition.value, [0, height / 4], [1, 0]),
    }
  })

  return (
    <BottomSheetFooter {...props} bottomInset={120} style={styles.container}>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.82}
          style={[
            styles.button,
            {
              backgroundColor: palette.background.header,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            },
          ]}>
          <Text style={[styles.caption, { color: palette.text.default }]}>View map</Text>
          <Image
            source={require('../../assets/icons/map.svg')}
            tintColor={palette.text.default}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>
    </BottomSheetFooter>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 32,
    zIndex: 200,
  },
  caption: {
    textAlign: 'center',
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },
})
