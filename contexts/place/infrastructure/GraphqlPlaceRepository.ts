import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { gql } from '@apollo/client'
import { Place, PlaceRepository } from '../domain'
import { PlaceType } from '@/types'

type GrapqlPlacePrimitives = {
  key: string
  place: {
    type: PlaceType
    name: string
    coordinates: [number, number]
  }
}

export class GraphqlPlaceRepository implements PlaceRepository {
  constructor(private readonly client: ApolloClient<NormalizedCacheObject>) {}

  public async getAll(): Promise<Place[]> {
    const data = await this.client.query<{ allPlaces: GrapqlPlacePrimitives[] }>({
      query: gql`
        query {
          allPlaces {
            key
            place
          }
        }
      `,
    })

    if (data.error) {
      // TODO: Send error to Error Tracking system and handle it in a better way
      throw new Error('Error fetching cities')
    }

    return data.data.allPlaces.map(
      (primitives) =>
        new Place({
          cityKey: primitives.key,
          type: primitives.place.type,
          name: primitives.place.name,
          coordinates: primitives.place.coordinates,
        }),
    )
  }

  public async getCityPlaces(cityKey: string): Promise<Place[]> {
    throw new Error('Method not implemented.')
  }
}
