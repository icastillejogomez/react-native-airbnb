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
      screenOptions={{
        tabBarActiveTintColor: palette.icon['primary-core'].plainColor,
        tabBarInactiveTintColor: palette.icon.secondary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerShown: false,
          // tabBarIcon: ({ color }) => <TabBarIcon tintColor={color} icon="explore" />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          // tabBarIcon: ({ color }) => <TabBarIcon tintColor={color} icon="wishlist" />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'Trips',
          // tabBarIcon: ({ color }) => <TabBarIcon tintColor={color} icon="trips" />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerTitle: 'Inbox',
          // tabBarIcon: ({ color }) => <TabBarIcon tintColor={color} icon="messages" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // tabBarIcon: ({ color }) => <TabBarIcon tintColor={color} icon="profile" />,
        }}
      />
    </Tabs>
  )
}
