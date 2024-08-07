import { View, Platform, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CitySelector, CurrencySelector, MainApplicationLayout } from '@/ui'
import { useThemePalette } from '@/hooks'

export default function Modal() {
  const palette = useThemePalette()

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: palette.text.default }]}>Filters</Text>
        </View>
        <MainApplicationLayout style={styles.content}>
          <CitySelector />
          <View style={styles.divider} />
          <CurrencySelector />
        </MainApplicationLayout>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 'auto',
  },
  content: {
    gap: 24,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
  },
})
