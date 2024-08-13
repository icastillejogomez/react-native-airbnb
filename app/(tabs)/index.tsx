import { ScrollView, View } from 'react-native'
import React from 'react'
import { AirbnbText } from '@/components'

const weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'] as const
const variants = ['body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'overline'] as const

const Index = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', paddingVertical: 32 }}>
      <AirbnbText size="l">
        <AirbnbText color="primary-core" size="inherit">
          Airbnb
        </AirbnbText>
        {' is super cool'}
      </AirbnbText>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 24 }}>
        <View>
          <AirbnbText size="l" align="center">
            Default
          </AirbnbText>
          <AirbnbText size="l" bold align="center">
            Bold
          </AirbnbText>
          {weights.map((weight) => (
            <AirbnbText key={`normal-${weight}`} size="l" weight={weight} align="center">
              Airbnb
            </AirbnbText>
          ))}
          {variants.map((variant) => (
            <AirbnbText key={`normal-${variant}`} size="l" variant={variant} align="center">
              {`[${variant}] Airbnb`}
            </AirbnbText>
          ))}
        </View>
        <View>
          <AirbnbText size="l" italic align="center">
            Default
          </AirbnbText>
          <AirbnbText size="l" italic bold align="center">
            Default
          </AirbnbText>
          {weights.map((weight) => (
            <AirbnbText key={`italic-${weight}`} size="l" italic weight={weight} align="center">
              Airbnb
            </AirbnbText>
          ))}
          {variants.map((variant) => (
            <AirbnbText key={`normal-${variant}`} size="l" italic variant={variant} align="center">
              {`[${variant}] Airbnb`}
            </AirbnbText>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Index
