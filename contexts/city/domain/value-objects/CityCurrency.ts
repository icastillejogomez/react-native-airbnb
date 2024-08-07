import { NonEmptyStringValueObject } from '@/contexts/shared/domain'

export class CityCurrency extends NonEmptyStringValueObject {
  private readonly validCurrencies = ['euro', 'pound', 'yen']
  constructor(value: string) {
    super(value)
    this.ensureCurrencyIsValid()
  }

  private ensureCurrencyIsValid(): void {
    const value = this.getValue()
    if (!this.validCurrencies.includes(value)) {
      throw new Error(`Invalid currency: ${value}`)
    }
  }
}
