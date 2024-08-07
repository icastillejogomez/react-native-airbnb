import { City } from './City'

export interface CityRepository {
  getAll(): Promise<City[]>
  find(cityKey: string): Promise<City | null>
}
