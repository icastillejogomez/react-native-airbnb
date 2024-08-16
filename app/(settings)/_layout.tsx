import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { usePalette } from '@/theme'
import { HeaderBackChevron } from '@/components/atoms/HeaderBackChevron'

const SettingsGroupRouterLayout = () => {
  const palette = usePalette()
  const router = useRouter()

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: palette.background.primary,
        },
        headerTintColor: palette.text.primary,
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          headerLargeTitle: true,
          title: 'Settings',
          headerLargeTitleShadowVisible: false,
          headerLeft: ({ canGoBack, tintColor }) => canGoBack && <HeaderBackChevron tintColor={tintColor} onPress={() => router.back()} />,
        }}
      />
    </Stack>
  )
}

export default SettingsGroupRouterLayout
