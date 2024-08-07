import { PositiveNumberValueObject } from './PositiveNumberValueObject'

export class PositiveIntegerValueObject extends PositiveNumberValueObject {
  constructor(value: number) {
    super(value)
    this.ensureValueIsInteger()
  }

  private ensureValueIsInteger(): void {
    const value = this.getValue()
    if (value % 1 !== 0) {
      throw new Error('Value must be an integer')
    }
  }
}
