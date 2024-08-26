import React, { useCallback } from 'react'
import { Link, Stack } from 'expo-router'
import { HeaderBackModalButton, HeaderCloseModalButton } from '@/components/atoms'
import { usePalette } from '@/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import { iconsSources } from '@/assets/icons'
import { Alert } from 'react-native'
import { Constants } from '@/Constants'

const AuthRouterLayout = () => {
  const palette = usePalette()

  const handlePressInfo = useCallback(() => {
    Alert.alert(
      'Valid credentials',
      'You can emulate the sign up process using some valid email. If you want to log in you must use the credentials below:\n' +
        `Email: ${Constants.auth.registerUser.email}\n` +
        `Password: ${Constants.auth.registerUser.password}\n`,
    )
  }, [])

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: palette.background.primary },
        headerTintColor: palette.icon.primary,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Log in or sign up',
          headerLeft: (props) => (
            <Link href="../" asChild>
              <HeaderCloseModalButton {...props} />
            </Link>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handlePressInfo}>
              <Image source={iconsSources.infoContained} contentFit="cover" style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: 'Log in',
          headerLeft: (props) => (
            <Link href="/(auth)/" asChild>
              <HeaderBackModalButton {...props} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: 'Finish signing up',
          headerLeft: (props) => (
            <Link href="/(auth)/" asChild>
              <HeaderBackModalButton {...props} />
            </Link>
          ),
        }}
      />
    </Stack>
  )
}

export default AuthRouterLayout
