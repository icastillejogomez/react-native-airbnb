import { iconsSources } from '@/assets/icons'
import { Image } from 'expo-image'
import { FC } from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export type HeaderBackChevronProps = TouchableOpacityProps & {
  tintColor?: string
}

const HeaderBackChevron: FC<HeaderBackChevronProps> = ({ tintColor, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.iconContainer}>
        <Image source={iconsSources.goBackChevron} contentFit="cover" style={styles.icon} tintColor={tintColor} />
      </View>
    </TouchableOpacity>
  )
}
HeaderBackChevron.displayName = 'HeaderBackChevron'

export { HeaderBackChevron }

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  icon: {
    width: 20,
    height: 20,
  },
})
