import { AirbnbTheme } from './types/AirbnbTheme'

export const theme: AirbnbTheme = {
  palette: {
    background: {
      primary: '#FFFFFF',
      'primary-disabled': '#F7F7F7',
      'primary-selected': '#F7F7F7',
      'primary-error': '#FFF8F6',
      'primary-core': '#FF385C',
      'primary-luxe': '#460479',
      'primary-plus': '#92174D',
      inverse: '#222222',
      'inverse-disabled': '#DDDDDD',
      'inverse-error': '#C13515',
      secondary: '#F7F7F7',
      'secondary-core': {
        direction: 'to right',
        colors: ['#E61E4D', '#E31C5F', '#D70466'],
        locations: [0, 0.5, 1],
      },
      'secondary-luxe': {
        direction: 'to right',
        colors: ['#59086E', '#460479', '#440589'],
        locations: [0, 0.5, 1],
      },
      'secondary-plus': {
        direction: 'to right',
        colors: ['#BD1E59', '#92174D', '#861453'],
        locations: [0, 0.5, 1],
      },
      tertiary: '#B0B0B0',
      'tertiary-disabled': '#EBEBEB',
      'tertiary-core': '#E00B41',
    },
    text: {
      primary: '#222222',
      'primary-disabled': '#DDDDDD',
      'primary-error': '#C13515',
      'primary-inverse': '#FFFFFF',
      'primary-core': {
        direction: 'to right',
        colors: ['#E61E4D', '#E31C5F', '#D70466'],
        locations: [0, 0.5, 1],
      },
      secondary: '#6A6A6A',
      'secondary-disabled': '#DDDDDD',
      'secondary-error': '#C13515',
      legal: '#428BFF',
    },
    icon: {
      primary: '#222222',
      'primary-disabled': '#DDDDDD',
      'primary-error': '#C13515',
      'primary-inverse': '#FFFFFF',
      secondary: '#6A6A6A',
      'secondary-disabled': '#F7F7F7',
      error: '#C13515',
    },
  },
}
