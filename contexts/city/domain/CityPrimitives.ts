import { Currency, LangCode } from '@/types'

export interface CityPrimitives {
  id: number
  key: string
  name: string
  nativeName: string
  currency: Currency
  language: LangCode
}
