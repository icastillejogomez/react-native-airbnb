import { usePalette } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import { StyleSheet, ScrollView, ScrollViewProps } from 'react-native'
import { useAppHorizontalPadding } from '@/state'

export type AirbnbModalLayoutProps = ScrollViewProps &
  PropsWithChildren<{
    noHorizontalPadding?: boolean
  }>

const AirbnbModalLayout: FC<AirbnbModalLayoutProps> = (props) => {
  // Destructure props
  const { children, style: parentStyle, noHorizontalPadding, ...rest } = props

  // Declare hooks
  const palette = usePalette()
  const mainApplicationHorizontalLayout = useAppHorizontalPadding()

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: palette.background.primary },
        { paddingHorizontal: noHorizontalPadding ? 0 : mainApplicationHorizontalLayout },
        parentStyle,
      ]}
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
