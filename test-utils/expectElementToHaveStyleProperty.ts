import { ReactTestInstance } from 'react-test-renderer'

const reduceStyles =
  (styleProperty: string) =>
  (previousValue: string | undefined, style: Record<string, any> | null | false | undefined): string | number | undefined => {
    if (Array.isArray(style)) {
      return style.reduce(reduceStyles(styleProperty), undefined) as string | undefined
    }
    if (style && styleProperty in style) {
      previousValue = style[styleProperty] as string
    }
    return previousValue
  }

export function expectElementToHaveStyleProperty(element: ReactTestInstance, styleProperty: string, value: any) {
  const style = element.props.style

  expect(style).toBeDefined()
  if (!Array.isArray(style)) {
    return expect(style![styleProperty]).toEqual(value)
  }

  expect(Array.isArray(style)).toBeTruthy()
  const styleValue = style!.reduce(reduceStyles(styleProperty), undefined)

  expect(styleValue).toBe(value)
}
