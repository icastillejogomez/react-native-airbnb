import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback } from 'react'
import { CityCard } from '../molecules'
import { useAllCities, useThemePalette } from '@/hooks'
import { TouchableOpacity } from '@gorhom/bottom-sheet'

type CitySelectorProps = {}

export const CitySelector: FC<CitySelectorProps> = () => {
  // Declare hooks
  const { data: cities } = useAllCities()
  const palette = useThemePalette()

  const handlePress = useCallback((cityId: number) => {
    Alert.alert('Functionality not implemented yet')
  }, [])

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: palette.text.default }]}>Choose your city</Text>
      <Text style={[styles.caption, { color: palette.text.neutral }]}>
        Select your desire city to filter all interest places
      </Text>
      <FlatList
        data={cities}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(item.id)}>
            <CityCard city={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 32,
  },
  list: {
    gap: 24,
  },
})
