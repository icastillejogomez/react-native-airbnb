import { render } from '@testing-library/react-native'

import { HeaderCloseModalButton } from '..'

describe('HeaderCloseModalButton', () => {
  test('renders without crashing', () => {
    const tree = render(<HeaderCloseModalButton />)
    expect(tree).toMatchSnapshot()
  })

  test('run onPress handler when pressed', () => {
    const onPress = jest.fn()
    const tree = render(<HeaderCloseModalButton onPress={onPress} />)
    tree.UNSAFE_getByType(HeaderCloseModalButton).props.onPress()
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
