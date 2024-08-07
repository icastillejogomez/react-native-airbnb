import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { GetAllCities, GetCityByKey } from '@/contexts/city/application'
import { CityRepository } from '@/contexts/city/domain'
import { GraphqlCityRepository } from '@/contexts/city/infrastructure'
import { PlaceRepository } from '@/contexts/place/domain'
import { GraphqlPlaceRepository } from '@/contexts/place/infrastructure'
import { GetAllPlaces } from '@/contexts/place/application'

export type Kernel = {
  repositories: {
    city: CityRepository
    place: PlaceRepository
  }
  useCases: {
    getAllCities: GetAllCities
    getCityByKey: GetCityByKey
    getAllPlaces: GetAllPlaces
  }
}

type PopulateKernelParams = {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

let kernel: Kernel

export function populateKernel({ apolloClient }: PopulateKernelParams): void {
  const cityRepository = new GraphqlCityRepository(apolloClient)
  const placeRepository = new GraphqlPlaceRepository(apolloClient)

  const getAllCities = new GetAllCities(cityRepository)
  const getCityByKey = new GetCityByKey(cityRepository)
  const getAllPlaces = new GetAllPlaces(placeRepository)

  kernel = {
    repositories: {
      city: cityRepository,
      place: placeRepository,
    },
    useCases: {
      getAllCities,
      getCityByKey,
      getAllPlaces,
    },
  }
}

export function getKernel(): Kernel {
  if (!kernel) {
    throw new Error('Kernel not initialized')
  }

  return kernel
}
