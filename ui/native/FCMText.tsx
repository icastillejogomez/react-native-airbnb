import { useThemePalette } from '@/hooks'
import { FC, PropsWithChildren } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

type FCMTextProps = TextProps & {
  // variant?: FCMTextVariant
  // weight?: FCMTextWeight
  // color?: FCMTextColor
  // size?: FCMTextSize
}

export const FCMText: FC<PropsWithChildren<FCMTextProps>> = ({ children, style, ...props }) => {
  // Declare hooks
  const palette = useThemePalette()

  return (
    <Text {...props} style={[styles.defaults, { color: palette.text.default }, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaults: {},
})
