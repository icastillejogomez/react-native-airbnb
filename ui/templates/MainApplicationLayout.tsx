import { FC, PropsWithChildren } from 'react'
import { StyleSheet, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTabBarHeight, useThemeSpacing } from '@/hooks'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

type MainApplicationLayoutProps = ViewProps

export const MainApplicationLayout: FC<PropsWithChildren<MainApplicationLayoutProps>> = ({
  children,
  style: propsStyle,
  ...props
}) => {
  // Declare hooks
  const tabBarHeight = useTabBarHeight()
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      marginBottom: tabBarHeight.value + spacing.medium,
    }
  })

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingLeft: insets.left + spacing.appHorizontalPadding / 2,
          paddingRight: insets.right + spacing.appHorizontalPadding / 2,
          paddingTop: spacing.medium,
        },
        propsStyle,
        animatedStyles,
      ]}
      {...props}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})
