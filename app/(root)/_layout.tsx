import { useThemePalette } from '@/hooks'
import { Stack } from 'expo-router'

export default function ModalLayout() {
  const palette = useThemePalette()
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: palette.background.primary,
          position: 'relative',
        },
      }}>
      <Stack.Screen
        name="search"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="place/[name]"
        options={{
          headerBackTitle: 'Explore',
          headerStyle: { backgroundColor: palette.background.header },
          headerTitleStyle: { color: palette.text.default },
          headerShown: true,
        }}
      />
    </Stack>
  )
}
