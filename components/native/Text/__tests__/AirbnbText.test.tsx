import { render } from '@testing-library/react-native'

import { AirbnbText, AirbnbTextAlign, AirbnbTextDecoration, AirbnbTextSize, AirbnbTextVariant, AirbnbTextWeight } from '..'
import { expectElementToHaveStyleProperty } from '@/test-utils'

const BLACK_REGULAR_FONT_FAMILY = 'Montserrat-Black'
const BLACK_ITALIC_FONT_FAMILY = 'Montserrat-BlackItalic'
const BOLD_REGULAR_FONT_FAMILY = 'Montserrat-Bold'
const BOLD_ITALIC_FONT_FAMILY = 'Montserrat-BoldItalic'
const EXTRA_BOLD_REGULAR_FONT_FAMILY = 'Montserrat-ExtraBold'
const EXTRA_BOLD_ITALIC_FONT_FAMILY = 'Montserrat-ExtraBoldItalic'
const EXTRA_LIGHT_REGULAR_FONT_FAMILY = 'Montserrat-ExtraLight'
const EXTRA_LIGHT_ITALIC_FONT_FAMILY = 'Montserrat-ExtraLightItalic'
const ITALIC_FONT_FAMILY = 'Montserrat-Italic'
const LIGHT_REGULAR_FONT_FAMILY = 'Montserrat-Light'
const LIGHT_ITALIC_FONT_FAMILY = 'Montserrat-LightItalic'
const MEDIUM_REGULAR_FONT_FAMILY = 'Montserrat-Medium'
const MEDIUM_ITALIC_FONT_FAMILY = 'Montserrat-MediumItalic'
const SEMI_BOLD_REGULAR_FONT_FAMILY = 'Montserrat-SemiBold'
const SEMI_BOLD_ITALIC_FONT_FAMILY = 'Montserrat-SemiBoldItalic'
const THIN_REGULAR_FONT_FAMILY = 'Montserrat-Thin'
const THIN_ITALIC_FONT_FAMILY = 'Montserrat-ThinItalic'
const REGULAR_FONT_FAMILY = 'Montserrat-Regular'

describe('AirbnbText', () => {
  test('renders without crashing', () => {
    const tree = render(<AirbnbText />)
    expect(tree).toMatchSnapshot()
  })

  test('renders with children', () => {
    const text = 'Hello world'
    const tree = render(<AirbnbText>{text}</AirbnbText>)
    tree.getByText(text)
    expect(tree).toMatchSnapshot()
  })

  test('renders with Montserrat font', () => {
    const str = 'Hello world'
    const tree = render(<AirbnbText>{str}</AirbnbText>)
    const $element = tree.getByText(str)
    expectElementToHaveStyleProperty($element, 'fontFamily', MEDIUM_REGULAR_FONT_FAMILY)
    expect(tree).toMatchSnapshot()
  })

  describe('variants', () => {
    test.each(['body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'overline'] as AirbnbTextVariant[])(
      'renders with variant="%s"',
      (variant) => {
        const tree = render(<AirbnbText variant={variant}>{variant}</AirbnbText>)
        tree.getByText(variant)
        expect(tree).toMatchSnapshot()
      },
    )
  })

  describe('weights', () => {
    describe('regular font family', () => {
      test.each([
        { weight: 'default', fontFamily: MEDIUM_REGULAR_FONT_FAMILY },
        { weight: 'bold', fontFamily: BOLD_REGULAR_FONT_FAMILY },
        { weight: '100', fontFamily: THIN_REGULAR_FONT_FAMILY },
        { weight: '200', fontFamily: EXTRA_LIGHT_REGULAR_FONT_FAMILY },
        { weight: '300', fontFamily: LIGHT_REGULAR_FONT_FAMILY },
        { weight: '400', fontFamily: REGULAR_FONT_FAMILY },
        { weight: '500', fontFamily: MEDIUM_REGULAR_FONT_FAMILY },
        { weight: '600', fontFamily: SEMI_BOLD_REGULAR_FONT_FAMILY },
        { weight: '700', fontFamily: BOLD_REGULAR_FONT_FAMILY },
        { weight: '800', fontFamily: EXTRA_BOLD_REGULAR_FONT_FAMILY },
        { weight: '900', fontFamily: BLACK_REGULAR_FONT_FAMILY },
      ] as { weight: AirbnbTextWeight; fontFamily: string }[])('renders with regular weight="%s"', ({ weight, fontFamily }) => {
        const tree = render(<AirbnbText weight={weight}>{weight}</AirbnbText>)
        const $element = tree.getByText(weight)
        expectElementToHaveStyleProperty($element, 'fontFamily', fontFamily)
        expect(tree).toMatchSnapshot()
      })
    })

    describe('italic font family', () => {
      test.each([
        { weight: 'default', fontFamily: MEDIUM_ITALIC_FONT_FAMILY },
        { weight: 'bold', fontFamily: BOLD_ITALIC_FONT_FAMILY },
        { weight: '100', fontFamily: THIN_ITALIC_FONT_FAMILY },
        { weight: '200', fontFamily: EXTRA_LIGHT_ITALIC_FONT_FAMILY },
        { weight: '300', fontFamily: LIGHT_ITALIC_FONT_FAMILY },
        { weight: '400', fontFamily: ITALIC_FONT_FAMILY },
        { weight: '500', fontFamily: MEDIUM_ITALIC_FONT_FAMILY },
        { weight: '600', fontFamily: SEMI_BOLD_ITALIC_FONT_FAMILY },
        { weight: '700', fontFamily: BOLD_ITALIC_FONT_FAMILY },
        { weight: '800', fontFamily: EXTRA_BOLD_ITALIC_FONT_FAMILY },
        { weight: '900', fontFamily: BLACK_ITALIC_FONT_FAMILY },
      ] as { weight: AirbnbTextWeight; fontFamily: string }[])('renders with italic weight="%s"', ({ weight, fontFamily }) => {
        const tree = render(
          <AirbnbText italic weight={weight}>
            {weight}
          </AirbnbText>,
        )
        const $element = tree.getByText(weight)
        expectElementToHaveStyleProperty($element, 'fontFamily', fontFamily)
        expect(tree).toMatchSnapshot()
      })
    })
  })

  describe('sizes', () => {
    test.each(['inherit', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as AirbnbTextSize[])('renders with size="%s"', (size) => {
      const tree = render(<AirbnbText size={size}>{size}</AirbnbText>)
      tree.getByText(size)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('alignments', () => {
    test.each(['auto', 'left', 'center', 'right', 'justify'] as AirbnbTextAlign[])('renders with align="%s"', (align) => {
      const tree = render(<AirbnbText align={align}>{align}</AirbnbText>)
      const $element = tree.getByText(align)
      expectElementToHaveStyleProperty($element, 'textAlign', align)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('decorations', () => {
    test.each(['none', 'underline', 'line-through', 'underline line-through'] as AirbnbTextDecoration[])(
      'renders with decoration="%s"',
      (decoration) => {
        const tree = render(<AirbnbText decoration={decoration}>{decoration}</AirbnbText>)
        const $element = tree.getByText(decoration)
        expectElementToHaveStyleProperty($element, 'textDecorationLine', decoration === 'none' ? undefined : decoration)
        expect(tree).toMatchSnapshot()
      },
    )
  })

  describe('shortcuts', () => {
    test('renders with bold', () => {
      const tree = render(<AirbnbText bold>bold</AirbnbText>)

      const $element = tree.getByText('bold')
      expectElementToHaveStyleProperty($element, 'fontFamily', BOLD_REGULAR_FONT_FAMILY)

      expect(tree).toMatchSnapshot()
    })

    test('renders with italic', () => {
      const tree = render(<AirbnbText italic>italic</AirbnbText>)

      const $element = tree.getByText('italic')
      expectElementToHaveStyleProperty($element, 'fontFamily', MEDIUM_ITALIC_FONT_FAMILY)

      expect(tree).toMatchSnapshot()
    })

    test('renders with bold and italic', () => {
      const tree = render(
        <AirbnbText bold italic>
          bold italic
        </AirbnbText>,
      )

      const $element = tree.getByText('bold italic')
      expectElementToHaveStyleProperty($element, 'fontFamily', BOLD_ITALIC_FONT_FAMILY)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('gradients', () => {
    //
  })

  describe('overwrites', () => {
    // bold flag take predecence over weight prop
    test('bold overwrite over given weight', () => {
      const str = 'This text should be light regular'
      const tree = render(
        <AirbnbText bold weight="300">
          {str}
        </AirbnbText>,
      )

      const $element = tree.getByText(str)
      expectElementToHaveStyleProperty($element, 'fontFamily', BOLD_REGULAR_FONT_FAMILY)

      expect(tree).toMatchSnapshot()
    })

    describe('parent style overwrites', () => {
      test('font size', () => {
        const str = 'This text should be light regular'
        const tree = render(
          <AirbnbText size="s" style={{ fontSize: 100 }}>
            {str}
          </AirbnbText>,
        )

        const $element = tree.getByText(str)
        expectElementToHaveStyleProperty($element, 'fontSize', 100)

        expect(tree).toMatchSnapshot()
      })

      test('decoration', () => {
        const tree = render(
          <AirbnbText testID="text" decoration="underline" style={{ textDecorationLine: 'none' }}>
            Some text here
          </AirbnbText>,
        )

        const $element = tree.getByTestId('text')
        expectElementToHaveStyleProperty($element, 'textDecorationLine', 'none')

        expect(tree).toMatchSnapshot()
      })

      test('alignment', () => {
        const tree = render(
          <AirbnbText testID="text" align="left" style={{ textAlign: 'right' }}>
            Some text here
          </AirbnbText>,
        )

        const $element = tree.getByTestId('text')
        expectElementToHaveStyleProperty($element, 'textAlign', 'right')

        expect(tree).toMatchSnapshot()
      })

      test('font weight through injected styles overwrite over weight prop', () => {
        const tree = render(
          <AirbnbText testID="text" weight="400" style={{ fontWeight: '300' }}>
            Some text here
          </AirbnbText>,
        )

        const $element = tree.getByTestId('text')
        expectElementToHaveStyleProperty($element, 'fontFamily', LIGHT_REGULAR_FONT_FAMILY)
        expectElementToHaveStyleProperty($element, 'fontWeight', undefined)

        expect(tree).toMatchSnapshot()
      })

      describe('font style through injected styles overwrite over italic prop', () => {
        test('without specific weight', () => {
          const tree = render(
            <AirbnbText testID="text" italic style={{ fontStyle: 'normal' }}>
              Some text here
            </AirbnbText>,
          )

          const $element = tree.getByTestId('text')
          expectElementToHaveStyleProperty($element, 'fontFamily', REGULAR_FONT_FAMILY)
          expectElementToHaveStyleProperty($element, 'fontStyle', undefined)

          expect(tree).toMatchSnapshot()
        })

        test('with specific weight', () => {
          const tree = render(
            <AirbnbText testID="text" weight="700" italic style={{ fontStyle: 'normal' }}>
              Some text here
            </AirbnbText>,
          )

          const $element = tree.getByTestId('text')
          expectElementToHaveStyleProperty($element, 'fontFamily', BOLD_REGULAR_FONT_FAMILY)
          expectElementToHaveStyleProperty($element, 'fontStyle', undefined)

          expect(tree).toMatchSnapshot()
        })
      })

      test('font weight and font style through injected styles overwrite over weight and italic props', () => {
        const tree = render(
          <AirbnbText testID="text" bold italic style={{ fontStyle: 'normal', fontWeight: '400' }}>
            Some text here
          </AirbnbText>,
        )

        const $element = tree.getByTestId('text')
        expectElementToHaveStyleProperty($element, 'fontFamily', REGULAR_FONT_FAMILY)
        expectElementToHaveStyleProperty($element, 'fontStyle', undefined)
        expectElementToHaveStyleProperty($element, 'fontWeight', undefined)

        expect(tree).toMatchSnapshot()
      })
    })
  })

  describe('wrapping', () => {
    test('max text length', () => {
      const str =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laboriosam iste? Ea tenetur ratione laboriosam. Modi iste itaque voluptates repellendus, et deserunt corporis sequi tempora mollitia voluptate veritatis neque blanditiis.'
      const maxLength = 30
      const expected = 'Lorem ipsum dolor sit amet ...'

      const tree = render(
        <AirbnbText testID="text" maxLength={maxLength}>
          {str}
        </AirbnbText>,
      )

      const $element = tree.getByTestId('text')
      expect(Array.isArray($element.children)).toBeTruthy()
      expect($element.children.length).toBe(1)
      expect($element.children[0]).toBe(expected)
      expect(tree).toMatchSnapshot()
    })
  })
})
