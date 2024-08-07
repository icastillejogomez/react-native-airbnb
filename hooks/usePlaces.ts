import { useEffect, useState } from 'react'
import { useUseCase } from './useUseCase'
import { PlacePrimitives } from '@/contexts/place/domain'

type UsePlaces = {
  loading: boolean
} & (
  | {
      data: PlacePrimitives[]
      error: null
    }
  | {
      error: Error
      data: null
    }
)

export function usePlaces(): UsePlaces {
  const getAllPlaces = useUseCase('getAllPlaces')
  const [places, setPlaces] = useState<PlacePrimitives[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllPlaces
      .execute()
      .then(setPlaces)
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [getAllPlaces, setPlaces, setError, setLoading])

  return { loading, data: places, error } as UsePlaces
}
