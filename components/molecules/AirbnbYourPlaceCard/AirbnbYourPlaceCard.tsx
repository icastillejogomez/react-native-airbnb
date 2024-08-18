import { AirbnbCard } from '@/components/atoms'
import { AirbnbText } from '@/components/native'
import { Image } from 'expo-image'
import { FC } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export type AirbnbYourPlaceCardProps = ViewProps & {}

const AirbnbYourPlaceCard: FC<AirbnbYourPlaceCardProps> = ({ style: parentStyle, ...rest }) => {
  return (
    <AirbnbCard style={[styles.card, parentStyle]} {...rest}>
      <View style={styles.content}>
        <AirbnbText variant="body1" color="primary" weight="600">
          Airbnb your place
        </AirbnbText>
        <AirbnbText color="secondary" weight="400" variant="caption" size="xs">
          It's simple to get set up and start earning.
        </AirbnbText>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/images/house-3d.png')} style={styles.image} contentFit="cover" />
      </View>
    </AirbnbCard>
  )
}
AirbnbYourPlaceCard.displayName = 'AirbnbYourPlaceCard'

export { AirbnbYourPlaceCard }

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 8,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  image: {
    width: 72,
    height: 72,
  },
})
