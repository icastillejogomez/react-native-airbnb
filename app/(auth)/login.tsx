import { AirbnbButton } from '@/components'
import { useAuth } from '@/state'
import { useRouter } from 'expo-router'
import React, { useCallback } from 'react'
import { View } from 'react-native'

const AuthRouterLogin = () => {
  const router = useRouter()
  const auth = useAuth()

  const handlePress = useCallback(() => {
    if (auth) {
      auth.login('john.doe@example.com', 'password').then(() => {
        router.back()
      })
    }
  }, [router, auth])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AirbnbButton title="Log in" variant="contained" onPress={handlePress} />
    </View>
  )
}

export default AuthRouterLogin
