import { CityPrimitives, CityRepository } from '../domain'

export class GetCityByKey {
  constructor(private readonly repository: CityRepository) {}

  public async execute(cityKey: string): Promise<CityPrimitives> {
    const city = await this.repository.find(cityKey)
    if (!city) {
      throw new Error(`City with key ${cityKey} not found`)
    }

    return city.toPrimitives()
  }
}
