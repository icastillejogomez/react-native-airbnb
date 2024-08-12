import { Color } from './Color'
import { LinearGradient } from './LinearGradient'

export type Palette = {
  background: {
    primary: Color
    'primary-disabled': Color
    'primary-selected': Color
    'primary-error': Color
    'primary-core': Color
    'primary-luxe': Color
    'primary-plus': Color
    inverse: Color
    'inverse-disabled': Color
    'inverse-error': Color
    secondary: Color
    'secondary-core': LinearGradient
    'secondary-luxe': LinearGradient
    'secondary-plus': LinearGradient
    tertiary: Color
    'tertiary-disabled': Color
    'tertiary-core': Color
  }
  text: {
    primary: Color
    'primary-disabled': Color
    'primary-error': Color
    'primary-inverse': Color
    'primary-core': LinearGradient
    secondary: Color
    'secondary-disabled': Color
    'secondary-error': Color
    legal: Color
  }
  icon: {
    primary: Color
    'primary-disabled': Color
    'primary-error': Color
    'primary-inverse': Color
    secondary: Color
    'secondary-disabled': Color
    error: Color
  }
}
