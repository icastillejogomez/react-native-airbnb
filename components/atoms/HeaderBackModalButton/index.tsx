import { iconsSources } from '@/assets/icons'
import { usePalette } from '@/theme'
import { Image } from 'expo-image'
import { forwardRef, memo, useMemo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export type HeaderBackModalButtonProps = {
  onPress?: () => void
  tintColor?: string
  canGoBack?: boolean
}

const HeaderBackModalButton = memo(
  forwardRef<TouchableOpacity, HeaderBackModalButtonProps>((props, ref) => {
    const palette = usePalette()
    const tintColor = useMemo(() => props.tintColor || palette.icon.primary, [props.tintColor, palette])

    if (!props.canGoBack) {
      return null
    }

    return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.container} ref={ref}>
        <Image source={iconsSources.chevronLeft} style={{ width: 24, height: 24 }} tintColor={tintColor} />
      </TouchableOpacity>
    )
  }),
)
HeaderBackModalButton.displayName = 'HeaderBackModalButton'

export { HeaderBackModalButton }

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
})
