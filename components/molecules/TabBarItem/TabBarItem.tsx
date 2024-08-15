import { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { TabBarLabel } from '@/components/atoms'

export type TabBarItemProps = {
  icon: ReactNode
  isFocused: boolean
  label: string
}

const TabBarItem: FC<TabBarItemProps> = ({ icon, isFocused, label }) => {
  return (
    <View style={styles.container}>
      {icon}
      <TabBarLabel isFocused={isFocused} label={label} />
    </View>
  )
}
TabBarItem.displayName = 'TabBarItem'

export { TabBarItem }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
})
