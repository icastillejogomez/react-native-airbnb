import { DomainError } from '@/errors'
import { NumberValueObject } from './NumberValueObject'

export class PositiveIntegerValueObject extends NumberValueObject {
  constructor(value: number) {
    super(value)
    this.ensureValueIsPositiveAndInteger()
  }

  private ensureValueIsPositiveAndInteger(): void {
    const value = this.getValue()
    if (value < 0 || !Number.isInteger(value)) {
      throw new DomainError(`[${this.constructor.name}] value must be a positive integer`)
    }
  }
}
