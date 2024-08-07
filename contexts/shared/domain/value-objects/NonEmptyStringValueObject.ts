import { StringValueObject } from './StringValueObject'

export class NonEmptyStringValueObject extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureValueIsNonEmpty()
  }

  private ensureValueIsNonEmpty(): void {
    if (super.getValue().length === 0) {
      throw new Error('Value must be non-empty')
    }
  }
}
