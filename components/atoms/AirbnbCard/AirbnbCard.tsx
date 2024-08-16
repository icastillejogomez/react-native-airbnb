import { usePalette } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import { Platform, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

export type AirbnbCardProps = ViewProps &
  PropsWithChildren<{
    shadow?: boolean
  }>

const AirbnbCard: FC<AirbnbCardProps> = ({ children, shadow = true, style: parentStyle, ...rest }) => {
  const palette = usePalette()

  const style: StyleProp<ViewStyle> = [
    styles.container,
    shadow ? styles.shadow : {},
    { backgroundColor: palette.background.primary, borderColor: palette.background.secondary },
    parentStyle,
  ]

  return (
    <View style={style} {...rest}>
      {children}
    </View>
  )
}
AirbnbCard.displayName = 'AirbnbCard'

export { AirbnbCard }

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: Platform.select({ ios: 28, android: 16 }),
    borderRadius: 8,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
})
