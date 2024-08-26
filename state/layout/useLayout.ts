import { useContext } from 'react'
import { LayoutContext } from './LayoutContext'
import { LayoutContextProps } from './LayoutContextProps'

export const useLayout = (): NonNullable<LayoutContextProps> => {
  const context = useContext(LayoutContext)

  if (context !== null && !context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }

  if (context === null) {
    throw new Error('useLayout must be used within a LayoutProvider with non-nullable context state')
  }

  return context
}
