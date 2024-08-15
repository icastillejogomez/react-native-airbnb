import React from 'react'
import { ScrollView } from 'react-native'
import { AirbnbText } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

const ExploreRouterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 32 }}>
        <AirbnbText color="primary-core" style={{ fontSize: 32, lineHeight: 40 }} bold>
          Airbnb
        </AirbnbText>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreRouterScreen
