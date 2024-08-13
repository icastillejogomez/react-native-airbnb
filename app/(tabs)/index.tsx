import { View } from 'react-native'
import React from 'react'
import { AirbnbText } from '@/components'

const Index = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AirbnbText size="xxl">
        <AirbnbText color="primary-core" size="inherit">
          Airbnb
        </AirbnbText>
        {' is super cool'}
      </AirbnbText>
    </View>
  )
}

export default Index
