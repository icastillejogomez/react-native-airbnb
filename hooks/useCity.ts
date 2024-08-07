import { useEffect, useState } from 'react'
import { CityPrimitives } from '@/contexts/city/domain'
import { useUseCase } from './useUseCase'

type UseCity = {
  loading: boolean
} & (
  | {
      data: CityPrimitives
      error: null
    }
  | {
      error: Error
      data: null
    }
)

export function useCity(key: string): UseCity {
  const getCityByKey = useUseCase('getCityByKey')
  const [city, setCity] = useState<CityPrimitives | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getCityByKey
      .execute(key)
      .then(setCity)
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [getCityByKey, setCity, setError, setLoading, key])

  return { loading, data: city, error } as UseCity
}
