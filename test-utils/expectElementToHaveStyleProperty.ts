import { ReactTestInstance } from 'react-test-renderer'

export function expectElementToHaveStyleProperty(element: ReactTestInstance, styleProperty: string, value: any) {
  const style = element.props.style

  expect(style).toBeDefined()
  if (!Array.isArray(style)) {
    return expect(style![styleProperty]).toEqual(value)
  }

  expect(Array.isArray(style)).toBeTruthy()
  const styleValue = style!.reduce((previousValue: string | undefined, style: Record<string, any> | null | false | undefined) => {
    if (style && styleProperty in style) {
      previousValue = style[styleProperty] as string
    }
    return previousValue
  }, undefined)

  expect(styleValue).toBe(value)
}
