import { Text, View } from 'react-native'
import React from 'react'
import { AirbnbText } from '@/components'

const str =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laboriosam iste? Ea tenetur ratione laboriosam. Modi iste itaque voluptates repellendus, et deserunt corporis sequi tempora mollitia voluptate veritatis neque blanditiis.'

const Two = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <View style={{ width: 300, height: 60, borderWidth: 1, borderColor: 'black' }}>
        <Text>{str}</Text>
      </View>
      <View style={{ width: 300, height: 60, borderWidth: 1, borderColor: 'black' }}>
        <AirbnbText numberOfLines={1} variant="body2">
          {str}
        </AirbnbText>
      </View>
    </View>
  )
}

export default Two
