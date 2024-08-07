import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useThemePalette } from '@/hooks'

type CitySelectorProps = {}

export const CurrencySelector: FC<CitySelectorProps> = () => {
  // Declare hooks
  const palette = useThemePalette()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: palette.text.default }]}>Currency</Text>
      <Text style={[styles.caption, { color: palette.text.neutral }]}>
        Select the currency you want to use on those places
      </Text>
      <View style={styles.skeleton}>
        <Text style={styles.notImplemented}>Not implemented yet</Text>
      </View>
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
  skeleton: {
    backgroundColor: 'grey',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notImplemented: {
    fontSize: 12,
    fontWeight: '400',
  },
})
