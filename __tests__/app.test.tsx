import 'react-native'

import { FC, PropsWithChildren } from 'react'
import { renderRouter, screen } from 'expo-router/testing-library'

// Note: import explicitly to use the types shipped with jest.
import { it, describe } from '@jest/globals'
import { SectionListProps } from 'react-native'

jest.mock('@gorhom/bottom-sheet', () => {
  const { VirtualizedList } = jest.requireActual('react-native')

  const BottomSheetVirtualizedList: FC<PropsWithChildren<SectionListProps<any>>> = ({
    children,
    ...otherProps
  }) => {
    return (
      <VirtualizedList testID="mocked-flatlist" {...otherProps}>
        {children}
      </VirtualizedList>
    )
  }

  const module = jest.requireActual('@gorhom/bottom-sheet')
  module.BottomSheetVirtualizedList = VirtualizedList

  return {
    ...module,
    __esModule: true,
    BottomSheetVirtualizedList,
  }
})

jest.mock('expo-image', () => {
  const actualExpoImage = jest.requireActual('expo-image')
  const { Image } = jest.requireActual('react-native')

  return { ...actualExpoImage, Image }
})

describe('When rendering the app', () => {
  it('should render the app', async () => {
    const app = renderRouter()

    expect(screen).toHavePathname('/explore')
    app.getByText('Where to?')
    expect(screen).toMatchSnapshot()
  })
})
