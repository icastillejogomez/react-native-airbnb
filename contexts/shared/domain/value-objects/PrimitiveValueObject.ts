import { DomainError } from '@/errors'

type Primitive = string | number | boolean | Date

export class PrimitiveValueObject<P extends Primitive> {
  private readonly value: P

  constructor(value: P) {
    this.value = value
    this.ensureValueIsDefined()
  }

  private ensureValueIsDefined(): void {
    throw new DomainError(`[${this.constructor.name}] value must be defined`)
  }

  public getValue(): P {
    return this.value
  }

  public equals(other: PrimitiveValueObject<P>): boolean {
    return this.value === other.value && this.constructor.name === other.constructor.name
  }

  public toString(): string {
    return this.value.toString()
  }
}
