import { PlacePrimitives, PlaceRepository } from '../domain'

export class GetAllPlaces {
  constructor(private readonly repository: PlaceRepository) {}

  public async execute(): Promise<PlacePrimitives[]> {
    return (await this.repository.getAll()).map((place) => place.toPrimitives())
  }
}
