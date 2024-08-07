import { FC, useCallback } from 'react'
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette, useThemeSpacing } from '@/hooks'
import { SearchInput } from '../molecules'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { placeTypes } from '@/constants'

export const ExploreHeader: FC<BottomTabHeaderProps> = (props) => {
  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()
  const palette = useThemePalette()

  const handlePress = useCallback((placeTypeKey: string) => {
    Alert.alert('Functionality not implemented yet')
  }, [])

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.background.header,
          paddingTop: insets.top,
          borderBottomColor: palette.header.exploreHeader.border,
        },
      ]}>
      <View style={[styles.searchContainer, { paddingHorizontal: spacing.appHorizontalPadding }]}>
        <SearchInput />
      </View>
      <View style={styles.placeTypesSelectorContainer}>
        <ScrollView
          style={[styles.placeTypesSelector]}
          contentContainerStyle={[
            styles.placeTypesScroll,
            { paddingHorizontal: spacing.appHorizontalPadding },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {placeTypes.map((placeType, index) => (
            <TouchableOpacity
              key={index}
              style={styles.placeType}
              activeOpacity={0.8}
              onPress={() => handlePress(placeType.key)}>
              <Image
                source={placeType.icon}
                style={styles.placeTypeImage}
                tintColor={palette.text.default}
              />
              <Text style={[styles.placeTypeText, { color: palette.text.default }]}>
                {placeType.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderBottomWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  placeTypesSelectorContainer: {
    paddingBottom: 10,
  },
  placeTypesSelector: {
    paddingTop: 4,
  },
  placeTypesScroll: {
    gap: 32,
  },
  placeType: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    // width: 90,
  },
  placeTypeImage: {
    width: 28,
    height: 28,
  },
  placeTypeText: {
    fontSize: 11,
    fontWeight: '500',
  },
})
