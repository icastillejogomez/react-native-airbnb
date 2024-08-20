import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { AirbnbText } from '@/components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AirbnbButton } from '@/components/atoms'
import { useRouter } from 'expo-router'
import { useAuth } from '@/state'

const ExploreRouterScreen = () => {
  const [authChecked, setAuthChecked] = useState(false)
  const router = useRouter()
  const auth = useAuth()

  const handlePress = useCallback(() => {
    console.log('handlePress')
  }, [])

  /**
   * We want to open the login modal when user opens the app but
   * not if user just logged out
   */
  useEffect(() => {
    if (auth && !authChecked) {
      setAuthChecked(true)
      if (!auth.userProfile) {
        router.push('/(auth)/login')
      }
    }
  }, [router, auth, authChecked, setAuthChecked])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 32 }}>
        <AirbnbText color="primary-core" style={{ fontSize: 32, lineHeight: 40 }} bold>
          Airbnb
        </AirbnbText>
        <View style={{ alignItems: 'center', marginTop: 32, gap: 16, width: '100%' }}>
          <AirbnbButton title="Continue" style={{ alignSelf: 'stretch', marginHorizontal: 40 }} onPress={handlePress} />
          <AirbnbButton title="Continue" variant="outlined" style={{ alignSelf: 'stretch', marginHorizontal: 40 }} onPress={handlePress} />
        </View>
        <AirbnbText variant="body2" color="secondary" style={{ marginTop: 32 }}>
          {auth && auth.userProfile ? 'Logged in as ' + auth.userProfile.name : 'Not logged in'}
        </AirbnbText>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreRouterScreen
