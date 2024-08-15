import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePalette } from '@/theme'
import { iconsSources } from '@/assets/icons'

export default function TabLayout() {
  const palette = usePalette()
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      safeAreaInsets={insets}
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: palette.icon['primary-core'].plainColor,
        tabBarInactiveTintColor: palette.icon.secondary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={iconsSources.search}
              style={{ width: 24, height: 24 }}
              tintColor={color}
              contentFit="cover"
              cachePolicy={'memory-disk'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => (
            <Image
              source={iconsSources.wishlist}
              style={{ width: 24, height: 24 }}
              tintColor={color}
              contentFit="cover"
              cachePolicy={'memory-disk'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'Trips',
          tabBarIcon: ({ color }) => (
            <Image
              source={iconsSources.trips}
              style={{ width: 24, height: 24 }}
              tintColor={color}
              contentFit="cover"
              cachePolicy={'memory-disk'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerTitle: 'Inbox',
          tabBarIcon: ({ color }) => (
            <Image
              source={iconsSources.messages}
              style={{ width: 24, height: 24 }}
              tintColor={color}
              contentFit="cover"
              cachePolicy={'memory-disk'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image
              source={iconsSources.profile}
              style={{ width: 24, height: 24 }}
              tintColor={color}
              contentFit="cover"
              cachePolicy={'memory-disk'}
            />
          ),
        }}
      />
    </Tabs>
  )
}
