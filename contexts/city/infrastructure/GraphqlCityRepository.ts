import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { gql } from '@apollo/client'
import { City, CityPrimitives, CityRepository } from '../domain'

export class GraphqlCityRepository implements CityRepository {
  constructor(private readonly client: ApolloClient<NormalizedCacheObject>) {}

  public async getAll(): Promise<City[]> {
    const data = await this.client.query<{ allCities: CityPrimitives[] }>({
      query: gql`
        query {
          allCities {
            id
            key
            name
            nativeName
            currency
            language
          }
        }
      `,
    })

    if (data.error) {
      // TODO: Send error to Error Tracking system and handle it in a better way
      throw new Error('Error fetching cities')
    }

    return data.data.allCities.map((city) => new City(city))
  }

  public async find(cityKey: string): Promise<City | null> {
    const allCities = await this.getAll()
    return allCities.find((city) => city.getKey() === cityKey) ?? null
  }
}
