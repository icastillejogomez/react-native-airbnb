import { placeTypes } from '@/constants'
import { useThemePalette } from '@/hooks'
import { PlaceType } from '@/types'
import { Image } from 'expo-image'
import { FC, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

type MapMarkerProps = {
  type: PlaceType
}

export const MapMarker: FC<MapMarkerProps> = ({ type }) => {
  const palette = useThemePalette()
  const iconSource = useMemo(() => {
    return placeTypes.find((t) => t.key === type)?.icon
  }, [type])

  return (
    <View style={[styles.container, { backgroundColor: palette.background.primary }]}>
      <Image source={iconSource} style={styles.icon} tintColor={palette.text.default} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
})
