import React, { useCallback } from 'react'
import { ScrollView, View } from 'react-native'
import { AirbnbText } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AirbnbButton } from '@/components/atoms'

const ExploreRouterScreen = () => {
  const handlePress = useCallback(() => {
    console.log('handlePress')
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 32 }}>
        <AirbnbText color="primary-core" style={{ fontSize: 32, lineHeight: 40 }} bold>
          Airbnb
        </AirbnbText>
        <View style={{ alignItems: 'center', marginTop: 32, gap: 16, width: '100%' }}>
          <AirbnbButton title="Continue" style={{ alignSelf: 'stretch', marginHorizontal: 40 }} onPress={handlePress} />
          <AirbnbButton title="Continue" variant="outlined" style={{ alignSelf: 'stretch', marginHorizontal: 40 }} onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreRouterScreen
