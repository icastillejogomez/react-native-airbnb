import { useLayout } from './useLayout'

export const useAppHorizontalPadding = (): number => {
  const { mainApplicationHorizontalLayout } = useLayout()
  return mainApplicationHorizontalLayout
}
