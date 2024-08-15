import { render } from '@testing-library/react-native'
import { TabBarLabel } from '../TabBarLabel'
import { expectElementToHaveStyleProperty } from '@/test-utils'

describe('TabBarLabel', () => {
  it('should render', () => {
    render(<TabBarLabel label={'Explore'} isFocused={true} />)
  })

  it('should match snapshot', () => {
    expect(render(<TabBarLabel label={'Explore'} isFocused={true} />)).toMatchSnapshot()
  })

  it('should render 10 pixels font size', () => {
    const tree = render(<TabBarLabel testID="label" label={'Explore'} isFocused={true} />)
    const $elements = tree.getAllByTestId('label')
    expect(Array.isArray($elements)).toBe(true)
    expect($elements).toHaveLength(2)
    const $element = $elements.at(-1)!
    expectElementToHaveStyleProperty($element, 'fontSize', 10)
  })
})
