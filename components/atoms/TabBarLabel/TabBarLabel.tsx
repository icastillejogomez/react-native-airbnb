import { AirbnbText } from '@/components/native'
import { FC } from 'react'

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
      size="xxs"
    >
      {label}
    </AirbnbText>
  )
}
TabBarLabel.displayName = 'TabBarLabel'
export { TabBarLabel }
