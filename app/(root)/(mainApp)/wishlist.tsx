import { useCallback, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Alert, StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'
import { FCMText } from '@/ui/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WishlistScreen = () => {
  // Declare hooks
  const navigation = useNavigation()

  const handlePressEdit = useCallback(() => {
    Alert.alert('Functionality not implemented yet')
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={handlePressEdit} activeOpacity={0.8}>
            <FCMText style={{ textDecorationLine: 'underline' }}>Edit</FCMText>
          </TouchableOpacity>
        )
      },
    })
  }, [navigation, handlePressEdit])

  return (
    <MainApplicationLayout style={styles.container}>
      <FCMText>WishlistScreen</FCMText>
    </MainApplicationLayout>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
