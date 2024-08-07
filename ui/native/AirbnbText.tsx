import { useThemePalette } from '@/hooks'
import { FC, PropsWithChildren } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

type AirbnbTextProps = TextProps & {
  // variant?: AirbnbTextVariant
  // weight?: AirbnbTextWeight
  // color?: AirbnbTextColor
  // size?: AirbnbTextSize
}

export const AirbnbText: FC<PropsWithChildren<AirbnbTextProps>> = ({
  children,
  style,
  ...props
}) => {
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
