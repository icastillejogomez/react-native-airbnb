import { DomainError } from '@/errors'
import { NonEmptyStringValueObject } from './NonEmptyStringValueObject'

export class AggregateRootId extends NonEmptyStringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsValidAggregateRootId()
  }

  private ensureValueIsValidAggregateRootId(): void {
    const value = this.getValue()
    if (!value.match(/^[a-zA-Z0-9_-]+$/)) {
      throw new DomainError(`[${this.constructor.name}] value must be a valid aggregate root id`)
    }
  }
}
