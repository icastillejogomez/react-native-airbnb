import { usePalette } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import { StyleSheet, ScrollView, ScrollViewProps } from 'react-native'

export type AirbnbModalLayoutProps = ScrollViewProps & PropsWithChildren<{}>

const AirbnbModalLayout: FC<AirbnbModalLayoutProps> = ({ children, style: parentStyle, ...rest }) => {
  const palette = usePalette()
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={[styles.scrollContainer, { backgroundColor: palette.background.primary }, parentStyle]}
      {...rest}
    >
      {children}
    </ScrollView>
  )
}
AirbnbModalLayout.displayName = 'AirbnbModalLayout'

export { AirbnbModalLayout }

const styles = StyleSheet.create({
  scrollView: {},
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
})
