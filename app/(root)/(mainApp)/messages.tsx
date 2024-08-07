import React from 'react'
import { StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'
import { AirbnbText } from '@/ui/native'

const MessagesScreen = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <AirbnbText>MessagesScreen</AirbnbText>
    </MainApplicationLayout>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
