import React from 'react'
import { Link, Stack } from 'expo-router'
import { HeaderBackModalButton, HeaderCloseModalButton } from '@/components/atoms'
import { usePalette } from '@/theme'

const AuthRouterLayout = () => {
  const palette = usePalette()

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
