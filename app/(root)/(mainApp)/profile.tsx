import React from 'react'
import { StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'
import { FCMText } from '@/ui/native'

const ProfileScreen = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <FCMText>ProfileScreen</FCMText>
    </MainApplicationLayout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
