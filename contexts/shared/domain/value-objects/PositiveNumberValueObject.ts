import { NumberValueObject } from './NumberValueObject'

export class PositiveNumberValueObject extends NumberValueObject {
  constructor(value: number) {
    super(value)
    this.ensureValueIsPositive()
  }

  private ensureValueIsPositive(): void {
    const value = this.getValue()
    if (value <= 0) {
      throw new Error('Value must be positive')
    }
  }
}
