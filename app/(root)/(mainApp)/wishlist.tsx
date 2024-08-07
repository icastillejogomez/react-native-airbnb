import { useCallback, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Alert, StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'
import { AirbnbText } from '@/ui/native'
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
            <AirbnbText style={{ textDecorationLine: 'underline' }}>Edit</AirbnbText>
          </TouchableOpacity>
        )
      },
    })
  }, [navigation, handlePressEdit])

  return (
    <MainApplicationLayout style={styles.container}>
      <AirbnbText>WishlistScreen</AirbnbText>
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
