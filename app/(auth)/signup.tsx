import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { FinishSigninUpScreen } from '@/components/screens'

const AuthSignUpRouterScreen = () => {
  const { email } = useLocalSearchParams()

  if (!email) {
    throw new Error('email is required to render this screen')
  }

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FinishSigninUpScreen email={Array.isArray(email) ? email[0] : email} />
    </>
  )
}

export default AuthSignUpRouterScreen
