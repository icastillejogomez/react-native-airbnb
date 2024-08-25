import { StatusBar } from 'expo-status-bar'
import { Platform, View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const AuthSignUpRouterScreen = () => {
  const { email } = useLocalSearchParams()

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40 }}>Password screen boy {email}</Text>
      </View>
    </>
  )
}

export default AuthSignUpRouterScreen
