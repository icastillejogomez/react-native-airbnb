import { useEffect, useState } from 'react'
import { CityPrimitives } from '@/contexts/city/domain'
import { useUseCase } from './useUseCase'

type UseAllCities = {
  loading: boolean
} & (
  | {
      data: CityPrimitives[]
      error: null
    }
  | {
      error: Error
      data: null
    }
)

export function useAllCities(): UseAllCities {
  const getAllCities = useUseCase('getAllCities')
  const [cities, setCities] = useState<CityPrimitives[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllCities
      .execute()
      .then(setCities)
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [getAllCities, setCities, setError, setLoading])

  return { loading, data: cities, error } as UseAllCities
}
