import { AirbnbText } from '@/components/native'
import { usePalette } from '@/theme'
import { Image, ImageSource } from 'expo-image'
import { FC } from 'react'
import { StyleSheet, View, TouchableHighlight, ViewProps, TouchableHighlightProps } from 'react-native'

export type SocialSingleSignOnButtonProps = ViewProps & {
  onPress?: TouchableHighlightProps['onPress']
  label: string
  iconSource: ImageSource
  tintColor?: string
}

const SocialSingleSignOnButton: FC<SocialSingleSignOnButtonProps> = ({ label, iconSource, tintColor, style, onPress, ...rest }) => {
  const palette = usePalette()

  return (
    <TouchableHighlight style={styles.touchable} onPress={onPress} underlayColor={'rgba(0,0,0, 0.1)'} activeOpacity={0.9}>
      <View style={[styles.container, { borderColor: palette.text.secondary }, style]} {...rest}>
        <View style={styles.icon}>
          <Image source={iconSource} contentFit="cover" style={styles.image} tintColor={tintColor} />
        </View>
        <AirbnbText variant="body2" color="primary" weight="600" align="center" style={styles.label}>
          {label}
        </AirbnbText>
        <View style={[styles.icon, { opacity: 0 }]} />
      </View>
    </TouchableHighlight>
  )
}
SocialSingleSignOnButton.displayName = 'SocialSingleSignOnButton'

export { SocialSingleSignOnButton }

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 11,
    gap: 16,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 'auto',
    height: 24,
  },
  label: {
    flex: 1,
  },
})
