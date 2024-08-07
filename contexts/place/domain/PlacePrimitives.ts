import { PlaceType } from '@/types'

export interface PlacePrimitives {
  cityKey: string
  type: PlaceType
  name: string
  coordinates: [number, number]
}
