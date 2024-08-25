import { render } from '@testing-library/react-native'

import { HeaderBackModalButton } from '..'

describe('HeaderBackModalButton', () => {
  test('renders without crashing', () => {
    const tree = render(<HeaderBackModalButton />)
    expect(tree).toMatchSnapshot()
  })

  test('run onPress handler when pressed', () => {
    const onPress = jest.fn()
    const tree = render(<HeaderBackModalButton onPress={onPress} />)
    tree.UNSAFE_getByType(HeaderBackModalButton).props.onPress()
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
