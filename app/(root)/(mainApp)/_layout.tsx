import { Image } from 'expo-image'
import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette } from '@/hooks'
import { ExploreHeader, Header, TabBar } from '@/ui'
import React, { useMemo, useRef } from 'react'
import { AnimatedContext } from '@/hooks'
import { useSharedValue } from 'react-native-reanimated'
import { appConfig } from '@/constants'

export default function MainAppExpoRouterLayout() {
  const insets = useSafeAreaInsets()
  const palette = useThemePalette()
  const tabBarHeightAnimatedValue = useRef(useSharedValue(appConfig.ui.tabBar.defaultHeight))
  const placesBottomSheetHeightAnimatedValue = useRef(useSharedValue(insets.bottom))

  const animatedContextMap = useMemo(() => {
    const map = new Map()
    map.set('tabBarHeight', tabBarHeightAnimatedValue)
    map.set('placesBottomSheetHeight', placesBottomSheetHeightAnimatedValue)
    return map
  }, [])

  return (
    <>
      <AnimatedContext.Provider value={animatedContextMap}>
        <Tabs
          tabBar={(props) => {
            return <TabBar {...props} />
          }}
          sceneContainerStyle={{
            backgroundColor: palette.background.primary,
            position: 'relative',
          }}>
          <Tabs.Screen
            name="explore"
            options={{
              headerTitle: 'Explore',
              header: (props) => {
                return <ExploreHeader {...props} />
              },
              tabBarIcon: ({ color, size }) => {
                return (
                  <Image
                    source={require('../../../assets/icons/search.svg')}
                    style={{ width: size, height: size }}
                    tintColor={color}
                  />
                )
              },
              tabBarLabel: 'Explore',
            }}
          />
          <Tabs.Screen
            name="wishlist"
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Image
                    source={require('../../../assets/icons/heart.svg')}
                    style={{ width: size, height: size }}
                    tintColor={color}
                  />
                )
              },
              header: (props) => {
                return <Header {...props} />
              },
              headerTitle: 'Wishlist',
              tabBarLabel: 'Wishlist',
            }}
          />
          <Tabs.Screen
            name="bookings"
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Image
                    source={require('../../../assets/icons/bookings.svg')}
                    style={{ width: size, height: size }}
                    tintColor={color}
                  />
                )
              },
              header: (props) => {
                return <Header {...props} />
              },
              headerTitle: 'Bookings',
              tabBarLabel: 'Bookings',
            }}
          />
          <Tabs.Screen
            name="messages"
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Image
                    source={require('../../../assets/icons/messages.svg')}
                    style={{ width: size, height: size }}
                    tintColor={color}
                  />
                )
              },
              header: (props) => {
                return <Header {...props} />
              },
              headerTitle: 'Messages',
              tabBarLabel: 'Messages',
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Image
                    source={require('../../../assets/icons/profile.svg')}
                    style={{ width: size, height: size }}
                    tintColor={color}
                  />
                )
              },
              header: (props) => {
                return <Header {...props} />
              },
              headerTitle: 'Profile',
              tabBarLabel: 'Profile',
            }}
          />
        </Tabs>
      </AnimatedContext.Provider>
    </>
  )
}
