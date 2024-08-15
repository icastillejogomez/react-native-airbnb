import { FC, memo } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { iconsSources } from '@/assets/icons'

export type TabBarIconProps = {
  icon: 'explore' | 'wishlist' | 'trips' | 'messages' | 'profile'
  tintColor: string
}

function propsAreEqual(prevProps: TabBarIconProps, nextProps: TabBarIconProps) {
  return prevProps.icon === nextProps.icon && prevProps.tintColor === nextProps.tintColor
}

const TabBarIcon: FC<TabBarIconProps> = memo(({ icon, tintColor }) => {
  return <Image source={iconsSources[icon]} style={styles.image} tintColor={tintColor} contentFit="cover" cachePolicy={'memory-disk'} />
}, propsAreEqual)
TabBarIcon.displayName = 'TabBarIcon'

export { TabBarIcon }

const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26,
  },
})
