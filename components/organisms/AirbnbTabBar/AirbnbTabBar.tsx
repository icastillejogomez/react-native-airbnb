import { FC, useMemo } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { usePalette } from '@/theme'
import styles from './styles'
import { TabBarIcon } from '@/components/atoms'
import { TabBarItem } from '@/components/molecules'

export type AirbnbTabBarProps = BottomTabBarProps

const AirbnbTabBar: FC<AirbnbTabBarProps> = ({ state, descriptors, navigation, insets }) => {
  const palette = usePalette()

  const tabIcons = useMemo(() => {
    return {
      index: {
        focused: <TabBarIcon tintColor={palette.icon['primary-core'].plainColor} icon={'explore'} />,
        unfocused: <TabBarIcon tintColor={palette.icon.primary} icon={'explore'} />,
      },
      wishlist: {
        focused: <TabBarIcon tintColor={palette.icon['primary-core'].plainColor} icon={'wishlist'} />,
        unfocused: <TabBarIcon tintColor={palette.icon.secondary} icon={'wishlist'} />,
      },
      trips: {
        focused: <TabBarIcon tintColor={palette.icon['primary-core'].plainColor} icon={'trips'} />,
        unfocused: <TabBarIcon tintColor={palette.icon.secondary} icon={'trips'} />,
      },
      messages: {
        focused: <TabBarIcon tintColor={palette.icon['primary-core'].plainColor} icon={'messages'} />,
        unfocused: <TabBarIcon tintColor={palette.icon.secondary} icon={'messages'} />,
      },
      profile: {
        focused: <TabBarIcon tintColor={palette.icon['primary-core'].plainColor} icon={'profile'} />,
        unfocused: <TabBarIcon tintColor={palette.icon.secondary} icon={'profile'} />,
      },
    } as const
  }, [palette])

  return (
    <View
      style={[
        styles.conatiner,
        { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: palette.background.primary },
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = (
          options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name
        ) as string

        const isFocused = state.index === index
        const icon = tabIcons[route.name as keyof typeof tabIcons][isFocused ? 'focused' : 'unfocused']

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return (
          <TouchableOpacity key={`tab-bar-${route.name}`} activeOpacity={1} onPress={onPress} style={styles.item}>
            <TabBarItem icon={icon} isFocused={isFocused} label={label} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
AirbnbTabBar.displayName = 'AirbnbTabBar'

export { AirbnbTabBar }
