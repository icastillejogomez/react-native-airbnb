import { render } from '@testing-library/react-native'
import { TabBarItem } from '../TabBarItem'
import { TabBarIcon } from '@/components/atoms'

describe('TabBarItem', () => {
  it('should render', () => {
    render(<TabBarItem label={'Explore'} isFocused={true} icon={null} />)
  })

  it('should match snapshot', () => {
    expect(
      render(<TabBarItem label={'Explore'} isFocused={true} icon={<TabBarIcon tintColor={'red'} icon={'explore'} />} />),
    ).toMatchSnapshot()
  })
})
