import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, useMemo } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { usePlacesBottomSheetSharedValue, useThemePalette } from '@/hooks'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type TabBarProps = {}

export const TabBar: FC<BottomTabBarProps & TabBarProps> = (props) => {
  // Destructure props
  const { state, descriptors, navigation } = props

  // Declare hooks
  const bottomSheetPosition = usePlacesBottomSheetSharedValue()
  const insets = useSafeAreaInsets()
  const palette = useThemePalette()

  const TOP = useMemo(() => 573, [])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      bottom: interpolate(bottomSheetPosition?.value ?? TOP, [-94, TOP], [0, -100]),
    }
  }, [insets.bottom])

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
        {
          height: 100,
          borderColor: palette.tabBar.border,
          borderTopWidth: 1,
          backgroundColor: palette.tabBar.background,
        },
        animatedStyles,
      ]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const Label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index
          const Icon = options.tabBarIcon

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              activeOpacity={0.8}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabBarElement}>
              <>
                {Icon && (
                  <Icon
                    color={isFocused ? palette.tabBar.iconTint : palette.tabBar.icon}
                    size={24}
                    focused={isFocused}
                  />
                )}
                {typeof Label === 'string' && (
                  <Text
                    style={{
                      color: isFocused ? palette.tabBar.labelTint : palette.tabBar.label,
                      fontSize: 11,
                      fontWeight: isFocused ? '500' : '400',
                      textAlign: 'center',
                    }}>
                    {Label}
                  </Text>
                )}
              </>
            </TouchableOpacity>
          )
        })}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
  },
  tabBarElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 4,
  },
})
