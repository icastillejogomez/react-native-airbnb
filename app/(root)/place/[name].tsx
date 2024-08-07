import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { MainApplicationLayout } from '@/ui'
import { FCMText } from '@/ui/native'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const PlaceDetailsScreen = () => {
  const { name } = useLocalSearchParams()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    })
  }, [navigation, name])

  return (
    <MainApplicationLayout style={styles.container}>
      <FCMText>Details page not implemented yet</FCMText>
    </MainApplicationLayout>
  )
}

export default PlaceDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
