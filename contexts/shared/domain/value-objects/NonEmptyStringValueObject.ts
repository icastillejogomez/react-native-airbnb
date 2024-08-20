import { DomainError } from '@/errors'
import { StringValueObject } from './StringValueObject'

export class NonEmptyStringValueObject extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsNotEmpty()
  }

  private ensureValueIsNotEmpty(): void {
    if (this.getValue().length === 0) {
      throw new DomainError(`[${this.constructor.name}] string value must not be empty`)
    }
  }
}
