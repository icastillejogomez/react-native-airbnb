import React from 'react'
import { Link, Stack } from 'expo-router'
import { HeaderCloseModalButton } from '@/components/atoms'
import { usePalette } from '@/theme'

const AuthRouterLayout = () => {
  const palette = usePalette()

  return (
    <Stack>
      <Stack.Screen
        name="sign-in-up"
        options={{
          title: 'Log in or sign up',
          headerTintColor: palette.icon.primary,
          headerTitleAlign: 'center',
          headerLeft: (props) => (
            <Link href="../" asChild>
              <HeaderCloseModalButton {...props} />
            </Link>
          ),
        }}
      />
    </Stack>
  )
}

export default AuthRouterLayout
