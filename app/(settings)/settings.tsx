import { View } from 'react-native'
import React, { useCallback } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { AirbnbButton } from '@/components/atoms'
import { AirbnbMainApplicationLayout } from '@/components/templates'

const SettingsRouterScreen = () => {
  const handlePress = useCallback(() => {
    WebBrowser.openBrowserAsync('https://www.airbnb.com/help/article/2908')
  }, [])

  return (
    <AirbnbMainApplicationLayout contentInsetAdjustmentBehavior="automatic">
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
        <AirbnbButton title="Terms of Service" onPress={handlePress} />
      </View>
      {/* </ScrollView> */}
    </AirbnbMainApplicationLayout>
  )
}

export default SettingsRouterScreen
