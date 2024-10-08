import { useFonts } from 'expo-font'
import { Stack, useSegments } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AuthProvider } from '@/state/auth'
import { loadKernel } from '@/kernel'
import { LayoutProvider } from '@/state'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@/i18n'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

// eslint-disable-next-line camelcase
export const unstable_settings = {
  initialRouteName: '(tabs)/index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

type AppReadiness = {
  fontsLoaded: boolean
  kernelLoaded: boolean
}

const defaultAppReadinessState: AppReadiness = {
  fontsLoaded: false,
  kernelLoaded: false,
}

function isAppReady(readiness: AppReadiness): boolean {
  return readiness.fontsLoaded && readiness.kernelLoaded
}

export default function RootLayout() {
  const [appReadiness, setAppReadiness] = useState<AppReadiness>(defaultAppReadinessState)

  const [fontsLoaded, error] = useFonts({
    'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-BlackItalic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-ThinItalic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
  })

  useEffect(() => {
    loadKernel()
    setAppReadiness((prev) => ({ ...prev, kernelLoaded: true }))
  }, [setAppReadiness])

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    setAppReadiness((prev) => ({ ...prev, fontsLoaded }))
  }, [fontsLoaded, setAppReadiness])

  if (!isAppReady(appReadiness)) {
    return null
  }

  return <App />
}

function App() {
  const segment = useSegments()

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <LayoutProvider>
      <AuthProvider>
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <Stack initialRouteName="(tabs)/index">
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="(auth)"
                options={{
                  headerShown: false,
                  presentation: 'modal',
                  animation: Platform.OS === 'ios' ? 'default' : 'fade',
                  gestureEnabled: segment.length === 1 && segment[0] === '(auth)',
                }}
              />
              <Stack.Screen name="(settings)" options={{ headerShown: false }} />
            </Stack>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </LayoutProvider>
  )
}
