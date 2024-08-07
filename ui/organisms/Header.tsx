import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useThemePalette, useThemeSpacing } from '@/hooks'

export const Header: FC<BottomTabHeaderProps> = (props) => {
  // Destructure props
  const { options } = props

  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()
  const palette = useThemePalette()

  const HeaderRight = options.headerRight

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.background.header,
          paddingTop: insets.top,
          paddingHorizontal: spacing.appHorizontalPadding,
        },
      ]}>
      <StatusBar style="auto" />
      <View style={[styles.actions, { minHeight: spacing.unit * 4 }]}>
        <View style={styles.headerLeft}></View>
        <View style={styles.headerRight}></View>
        {HeaderRight && <HeaderRight />}
      </View>
      <View style={[styles.content]}>
        {typeof options.headerTitle === 'string' ? (
          <Text style={[styles.headerTitle, { color: palette.text.default }]}>
            {options.headerTitle}
          </Text>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
  },
  content: {
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '500',
  },
})
