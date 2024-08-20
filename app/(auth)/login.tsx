import { LoginOrSignupScreen } from '@/components/screens'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const AuthRouterLogin = () => {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <LoginOrSignupScreen />
    </>
  )
}

export default AuthRouterLogin
