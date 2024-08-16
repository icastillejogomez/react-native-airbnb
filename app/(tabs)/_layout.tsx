import React from 'react'
import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePalette } from '@/theme'
import { AirbnbTabBar } from '@/components'

export default function TabLayout() {
  const palette = usePalette()
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      safeAreaInsets={insets}
      initialRouteName="index"
      tabBar={(props) => <AirbnbTabBar {...props} />}
      sceneContainerStyle={{
        backgroundColor: palette.background.primary,
      }}
      screenOptions={{
        tabBarActiveTintColor: palette.icon['primary-core'].plainColor,
        tabBarInactiveTintColor: palette.icon.secondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'Trips',
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerTitle: 'Inbox',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
