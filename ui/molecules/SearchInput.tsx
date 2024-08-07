import { FC } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useThemePalette } from '@/hooks'
import { Image } from 'expo-image'
import { Link } from 'expo-router'

type SearchInputProps = {}

export const SearchInput: FC<SearchInputProps> = () => {
  // Declare hooks
  const palette = useThemePalette()

  return (
    <Link href="/search" asChild>
      <TouchableOpacity style={styles.container}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/icons/search.svg')}
            style={styles.icon}
            tintColor={palette.text.default}
          />
        </View>
        <View style={styles.content}>
          <Text style={[styles.placeholder, { color: palette.text.default }]}>Where to?</Text>
          <Text style={[styles.caption, { color: palette.text.neutral }]}>Anywhere · Any week</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 32,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
  content: {
    gap: 4,
  },
  placeholder: {
    fontSize: 12,
    fontWeight: '600',
  },
  caption: {
    fontSize: 10,
  },
})
