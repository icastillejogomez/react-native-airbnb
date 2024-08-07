import type { FCMPalette } from './FCMPalette'

export type FCMTextColor = keyof (FCMPalette['text'] & FCMPalette['color'])
