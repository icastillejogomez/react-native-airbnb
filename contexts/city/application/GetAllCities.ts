import { CityPrimitives, CityRepository } from '../domain'

export class GetAllCities {
  constructor(private readonly repository: CityRepository) {}

  public async execute(): Promise<CityPrimitives[]> {
    return (await this.repository.getAll()).map((city) => city.toPrimitives())
  }
}
