import { render, userEvent } from '@testing-library/react-native'
import { AirbnbButton } from '../AirbnbButton'

jest.useFakeTimers()

describe('AirbnbButton', () => {
  it('renders without crashing', () => {
    const tree = render(<AirbnbButton title="Airbnb" />)
    expect(tree).toMatchSnapshot()
  })

  it('render the title on it', () => {
    const tree = render(<AirbnbButton title="Airbnb" />)
    expect(tree.getByText('Airbnb')).toBeTruthy()
  })

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn()
    const tree = render(<AirbnbButton testID="button" title="Airbnb" onPress={onPress} />)

    userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    const $element = tree.getByTestId('button')
    await userEvent.press($element)
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
