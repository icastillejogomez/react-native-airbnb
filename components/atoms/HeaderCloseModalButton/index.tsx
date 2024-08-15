import { iconsSources } from '@/assets/icons'
import { usePalette } from '@/theme'
import { Image } from 'expo-image'
import { forwardRef, memo, useMemo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export type HeaderCloseModalButtonProps = {
  onPress?: () => void
  tintColor?: string
  canGoBack?: boolean
}

const HeaderCloseModalButton = memo(
  forwardRef<TouchableOpacity, HeaderCloseModalButtonProps>((props, ref) => {
    const palette = usePalette()
    const tintColor = useMemo(() => props.tintColor || palette.icon.primary, [props.tintColor, palette])

    if (!props.canGoBack) {
      return null
    }

    return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.container} ref={ref}>
        <Image source={iconsSources.closeCross} style={{ width: 24, height: 24 }} tintColor={tintColor} />
      </TouchableOpacity>
    )
  }),
)
HeaderCloseModalButton.displayName = 'HeaderCloseModalButton'

export { HeaderCloseModalButton }

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
})
