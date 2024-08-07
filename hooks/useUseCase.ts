import { GetAllPlaces } from '@/contexts/place/application'
import { useKernel } from './useKernel'
import type { GetAllCities, GetCityByKey } from '@/contexts/city/application'

type UseCaseKey = 'getAllCities' | 'getAllPlaces' | 'getCityByKey'

type UseCase<K extends UseCaseKey> = K extends 'getAllCities'
  ? GetAllCities
  : K extends 'getAllPlaces'
    ? GetAllPlaces
    : K extends 'getCityByKey'
      ? GetCityByKey
      : null

export const useUseCase = <K extends UseCaseKey>(useCaseKey: K): UseCase<K> => {
  const kernel = useKernel()

  if (useCaseKey === 'getAllCities') return kernel.useCases.getAllCities as UseCase<K>
  if (useCaseKey === 'getCityByKey') return kernel.useCases.getCityByKey as UseCase<K>
  if (useCaseKey === 'getAllPlaces') return kernel.useCases.getAllPlaces as UseCase<K>

  return null as UseCase<K>
}
