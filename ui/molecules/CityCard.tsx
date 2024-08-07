import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { CityPrimitives } from '@/contexts/city/domain'
import { Image } from 'expo-image'
import { cityImagesSources } from '@/assets/places'

type CityCardProps = {
  city: CityPrimitives
}

export const CityCard: FC<CityCardProps> = ({ city }) => {
  const imageSource = useMemo(
    () => cityImagesSources[city.key as keyof typeof cityImagesSources],
    [city.key],
  )
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} contentFit="cover" />
      <View style={styles.cityNameOverlay}>
        <Text style={styles.cityName}>{city.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 140,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cityNameOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
})
