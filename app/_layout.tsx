import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { View } from 'react-native'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { populateKernel } from '@/constants'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

type ReadyState = {
  fontsLoaded: boolean
  kernelInitialized: boolean
}

const initialReadyState: ReadyState = {
  fontsLoaded: false,
  kernelInitialized: false,
}

function isAppReady(readyState: ReadyState): boolean {
  return readyState.fontsLoaded && readyState.kernelInitialized
}

const apolloClient = new ApolloClient({
  uri: 'http://10.4.0.2:3000/',
  cache: new InMemoryCache(),
})

const FCMTravelGuideAppLayout = () => {
  // Declare hooks
  const [readyState, setReadyState] = useState<ReadyState>(initialReadyState)

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    // wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000 * 1))
  }, [])

  const hideSplashScreen = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    loadFonts().finally(() => {
      setReadyState((prev) => ({ ...prev, fontsLoaded: true }))
    })
  }, [loadFonts, setReadyState])

  useEffect(() => {
    populateKernel({ apolloClient })
    setReadyState((prev) => ({ ...prev, kernelInitialized: true }))
  }, [setReadyState])

  const Wrappers: FC<PropsWithChildren> = (props) => {
    return (
      <>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <StatusBar style="auto" />
            <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </>
    )
  }

  if (!isAppReady(readyState)) {
    return (
      <Wrappers>
        <Slot />
      </Wrappers>
    )
  }

  return (
    <Wrappers>
      <View style={{ flex: 1 }} onLayout={hideSplashScreen}>
        <Slot />
      </View>
    </Wrappers>
  )
}

export default FCMTravelGuideAppLayout
