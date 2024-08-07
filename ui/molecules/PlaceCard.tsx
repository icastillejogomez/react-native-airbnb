import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { PlacePrimitives } from '@/contexts/place/domain'
import { useCity, useThemePalette } from '@/hooks'
import { Image } from 'expo-image'
import { cityImagesSources } from '@/assets/places'

type PlaceCardProps = {
  place: PlacePrimitives
}

const PlaceCard: FC<PlaceCardProps> = ({ place }) => {
  // Declare hooks
  const palette = useThemePalette()
  const { data: city } = useCity(place.cityKey)

  if (!city) return null

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={cityImagesSources[city.key as keyof typeof cityImagesSources]}
          style={styles.image}
          contentFit="cover"
        />
        <View style={styles.typeChip}>
          <Text style={styles.type}>{place.type}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.leftSide}>
          <Text
            style={[
              styles.name,
              { color: palette.text.default },
            ]}>{`${place.name}, ${city.name}`}</Text>
          <Text style={[styles.nativeName, { color: palette.text.neutral }]}>
            {city.nativeName}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={[styles.currency, { color: palette.text.neutral }]}>euro</Text>
        </View>
      </View>
    </View>
  )
}

export default PlaceCard

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    position: 'relative',
    backgroundColor: 'grey',
    borderRadius: 8,
    height: 300,
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  typeChip: {
    position: 'absolute',
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 10,
    left: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  type: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  content: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 32,
  },
  leftSide: {
    flex: 3,
  },
  rightSide: {
    flex: 1,
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  nativeName: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
  },
  currency: {
    fontSize: 12,
    fontWeight: '400',
  },
})
