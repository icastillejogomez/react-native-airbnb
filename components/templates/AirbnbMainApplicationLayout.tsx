import { FC, PropsWithChildren } from 'react'
import { ScrollView, StyleSheet, View, SafeAreaView, Platform, ViewStyle, ScrollViewProps } from 'react-native'
import { AirbnbText } from '../native'

export type AirbnbMainApplicationLayoutProps = ScrollViewProps &
  PropsWithChildren<{
    headerTitle?: string
    headerContainerStyle?: ViewStyle
  }>

const AirbnbMainApplicationLayout: FC<AirbnbMainApplicationLayoutProps> = ({ children, headerTitle, headerContainerStyle, ...rest }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} {...rest}>
        {headerTitle && (
          <View style={[styles.header, headerContainerStyle]}>
            <AirbnbText variant="body1" size="xxl" weight="600">
              {headerTitle}
            </AirbnbText>
          </View>
        )}
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}
AirbnbMainApplicationLayout.displayName = 'AirbnbMainApplicationLayout'

export { AirbnbMainApplicationLayout }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: 20,
      },
    }),
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
})
