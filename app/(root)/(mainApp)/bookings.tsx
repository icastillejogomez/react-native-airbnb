import { StyleSheet } from 'react-native'
import React from 'react'
import { MainApplicationLayout } from '@/ui'
import { FCMText } from '@/ui/native'

const BookingsPage = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <FCMText>BookingsPage</FCMText>
    </MainApplicationLayout>
  )
}

export default BookingsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
