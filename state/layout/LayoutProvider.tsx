import { FC, PropsWithChildren } from 'react'
import { LayoutContext } from './LayoutContext'
import { LayoutContextProps } from './LayoutContextProps'
import { Constants } from '@/Constants'

export type LayoutProviderProps = PropsWithChildren<{}>

const contextState: LayoutContextProps = {
  mainApplicationHorizontalLayout: Constants.layout.appHorizontalPadding,
}

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  return <LayoutContext.Provider value={contextState}>{children}</LayoutContext.Provider>
}
LayoutProvider.displayName = 'LayoutProvider'

export { LayoutProvider }
