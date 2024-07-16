import 'react-native'
import { renderRouter, screen } from 'expo-router/testing-library'

// Note: import explicitly to use the types shipped with jest.
import { it, describe } from '@jest/globals'

describe('When rendering the app', () => {
  it('should render the app', () => {
    renderRouter(['index'], {
      initialUrl: '/',
    })

    expect(screen).toHavePathname('/')
  })
})
