import { AggregateRootIdPrimitive } from './AggregateRootIdPrimitive'
import { AggregateRootId } from './value-objects'

export abstract class AggregateRoot<Primitives extends Record<string, unknown>> {
  private readonly primitives: AggregateRootId

  constructor(id: AggregateRootIdPrimitive) {
    this.primitives = new AggregateRootId(id)
  }

  public getId(): AggregateRootIdPrimitive {
    return this.primitives.getValue()
  }

  public abstract getPrimitives(): Primitives
}
