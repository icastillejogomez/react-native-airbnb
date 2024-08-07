import { NonEmptyStringValueObject } from '@/contexts/shared/domain'

export class CityLangCode extends NonEmptyStringValueObject {
  private readonly validLangCodes = ['de', 'en', 'es', 'fr', 'gr', 'it', 'jp', 'nl', 'pt']
  constructor(value: string) {
    super(value)
    this.ensureLangCodeIsValid()
  }

  private ensureLangCodeIsValid(): void {
    const value = this.getValue()
    if (!this.validLangCodes.includes(value)) {
      throw new Error(`Invalid language code: ${value}`)
    }
  }
}
