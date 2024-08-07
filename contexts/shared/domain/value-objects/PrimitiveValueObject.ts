type Primitive = string | number | boolean

export class PrimitiveValueObject<T extends Primitive> {
  private readonly value: T

  // consturctor and ensureValueIsDefined method
  constructor(value: T) {
    this.value = value
    this.ensureValueIsDefined()
  }

  private ensureValueIsDefined(): void {
    if (this.value === undefined) {
      throw new Error('Value must be defined')
    }
  }

  public getValue(): T {
    return this.value
  }

  public equals(other: PrimitiveValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value
  }
}
