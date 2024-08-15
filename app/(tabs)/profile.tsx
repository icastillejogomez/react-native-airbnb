import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfileRouterScreen = () => {
  return (
    <View>
      <Text>ProfileRouterScreen</Text>
      <Link href="/(auth)/sign-in-up">Sign in</Link>
    </View>
  )
}

export default ProfileRouterScreen
