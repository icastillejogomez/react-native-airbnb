import { StyleSheet } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { useTabBarHeight, useThemeSpacing } from '@/hooks'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ExploreBottomSheetLayoutProps = {}

export const ExploreBottomSheetLayout: FC<PropsWithChildren<ExploreBottomSheetLayoutProps>> = ({
  children,
}) => {
  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()
  const tabBarHeight = useTabBarHeight()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      paddingBottom: tabBarHeight.value,
    }
  })

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingLeft: insets.left + spacing.appHorizontalPadding,
          paddingRight: insets.right + spacing.appHorizontalPadding,
          paddingTop: spacing.medium,
        },
        animatedStyles,
      ]}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})
