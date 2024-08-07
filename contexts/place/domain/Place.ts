import { AggregateRoot } from '@/contexts/shared/domain'
import { PlacePrimitives } from './PlacePrimitives'
import { PlaceCityKey, PlaceName, PlaceCoordinates, PlaceType } from './value-objects'
import type { PlaceType as PlaceTypeType } from '@/types'

export class Place implements AggregateRoot<PlacePrimitives> {
  private readonly cityKey: PlaceCityKey
  private readonly type: PlaceType
  private readonly name: PlaceName
  private readonly coordinates: PlaceCoordinates

  constructor(primitives: PlacePrimitives) {
    const { cityKey, type, name, coordinates } = primitives
    this.cityKey = new PlaceCityKey(cityKey)
    this.type = new PlaceType(type)
    this.name = new PlaceName(name)
    this.coordinates = new PlaceCoordinates(coordinates[0], coordinates[1])
  }

  public getCityKey(): string {
    return this.cityKey.getValue()
  }

  public getType(): PlaceTypeType {
    return this.type.getValue() as PlaceTypeType
  }

  public getName(): string {
    return this.name.getValue()
  }

  public getCoordinates(): [number, number] {
    return this.coordinates.getValue()
  }

  public toPrimitives(): PlacePrimitives {
    return {
      cityKey: this.cityKey.getValue(),
      type: this.type.getValue() as PlaceTypeType,
      name: this.name.getValue(),
      coordinates: this.coordinates.getValue(),
    }
  }
}
