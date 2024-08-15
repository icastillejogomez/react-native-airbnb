import { AirbnbText } from '@/components/native'
import { FC } from 'react'
import { StyleSheet } from 'react-native'

export type TabBarLabelProps = {
  testID?: string
  isFocused: boolean
  label: string
}

const TabBarLabel: FC<TabBarLabelProps> = ({ isFocused, label, testID }) => {
  return (
    <AirbnbText
      testID={testID}
      variant="caption"
      weight={isFocused ? '600' : '400'}
      color={isFocused ? 'primary-core' : 'primary'}
      style={styles.label}>
      {label}
    </AirbnbText>
  )
}
TabBarLabel.displayName = 'TabBarLabel'
export { TabBarLabel }

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
  },
})
