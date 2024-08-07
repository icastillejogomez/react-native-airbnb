import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React, { FC, PropsWithoutRef, useCallback, useMemo, useRef } from 'react'
import MapView from 'react-native-map-clustering'
import { Marker } from 'react-native-maps'
import Animated from 'react-native-reanimated'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheet, { BottomSheetVirtualizedList } from '@gorhom/bottom-sheet'
import {
  usePlaces,
  usePlacesBottomSheetSharedValue,
  useTabBarHeight,
  useThemePalette,
} from '@/hooks'
import { ExploreBottomSheetLayout, ExploreBottomShetViewMapButton, MapMarker } from '@/ui'
import { PlacePrimitives } from '@/contexts/place/domain'
import PlaceCard from '@/ui/molecules/PlaceCard'
import { Link, router } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { appConfig } from '@/constants'

const ExploreScreen: FC<PropsWithoutRef<object>> = () => {
  const { data: places, loading } = usePlaces()

  const { height } = Dimensions.get('window')
  const tabBarHeight = useTabBarHeight()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const insets = useSafeAreaInsets()
  const palette = useThemePalette()

  const contentHeightOnClose = useMemo(
    () =>
      Platform.select({
        ios: 45,
        android: 60,
        native: 45,
      }) ?? 45,
    [],
  )
  const snapBottom = useMemo(
    () => insets.bottom + contentHeightOnClose,
    [insets, contentHeightOnClose],
  )
  const snapTop = useMemo(() => height - insets.top + snapBottom, [height, insets, snapBottom])
  const snapPoints = useMemo(() => [snapBottom, snapTop], [snapBottom, snapTop])
  const animatedValue = usePlacesBottomSheetSharedValue()

  const handlePress = useCallback((place: PlacePrimitives) => {
    router.navigate(`place/${place.name}`)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={{ marginBottom: tabBarHeight }}>
        <MapView
          style={styles.map}
          initialRegion={appConfig.ui.map.iniitalRegion}
          clusterColor={palette.background.primary}
          clusterTextColor={palette.text.neutral}>
          {places &&
            places.map((place, index) => (
              <Marker
                key={index}
                onPress={() => handlePress(place)}
                coordinate={{ latitude: place.coordinates[0], longitude: place.coordinates[1] }}
                title={place.name}
                description={place.name}>
                <MapMarker type={place.type} />
              </Marker>
            ))}
        </MapView>
      </Animated.View>
      <BottomSheet
        ref={bottomSheetRef}
        backgroundStyle={{ backgroundColor: palette.background.primary }}
        index={1}
        snapPoints={snapPoints}
        topInset={-snapBottom}
        bottomInset={0}
        footerComponent={ExploreBottomShetViewMapButton}
        animateOnMount={false}
        handleIndicatorStyle={{ backgroundColor: palette.text.neutral }}
        animatedPosition={animatedValue}>
        <View style={[styles.contentOnClose, { height: contentHeightOnClose }]}>
          <Text style={[styles.placesPlaceholder, { color: palette.text.default }]}>
            {loading
              ? 'Loading...'
              : places
                ? `${places.length} places to see`
                : 'There was an error loading the places'}
          </Text>
        </View>
        <ExploreBottomSheetLayout>
          {places && (
            <BottomSheetVirtualizedList<PlacePrimitives>
              data={places}
              keyExtractor={(item) => item.name}
              getItemCount={(data) => data.length}
              getItem={(data, index) => data[index]}
              renderItem={({ item }) => (
                <Link href={`/place/${item.name}`} asChild>
                  <TouchableOpacity activeOpacity={1}>
                    <PlaceCard place={item} />
                  </TouchableOpacity>
                </Link>
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.list}
            />
          )}
        </ExploreBottomSheetLayout>
      </BottomSheet>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  contentOnClose: {
    alignItems: 'center',
  },
  placesPlaceholder: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  list: {
    gap: 32,
    marginTop: 16,
    paddingBottom: 100,
  },
})
