import { AggregateRoot } from '@/contexts/shared/domain'
import { CityPrimitives } from './CityPrimitives'

import {
  CityCurrency,
  CityId,
  CityKey,
  CityLangCode,
  CityName,
  CityNativeName,
} from './value-objects'
import { Currency, LangCode } from '@/types'

export class City implements AggregateRoot<CityPrimitives> {
  private readonly id: CityId
  private readonly key: CityKey
  private readonly name: CityName
  private readonly nativeName: CityNativeName
  private readonly currency: CityCurrency
  private readonly language: CityLangCode

  constructor(primitives: CityPrimitives) {
    const { id, key, name, nativeName, currency, language } = primitives
    this.id = new CityId(id)
    this.key = new CityKey(key)
    this.name = new CityName(name)
    this.nativeName = new CityNativeName(nativeName)
    this.currency = new CityCurrency(currency)
    this.language = new CityLangCode(language)
  }

  public getId(): number {
    return this.id.getValue()
  }

  public getKey(): string {
    return this.key.getValue()
  }

  public getName(): string {
    return this.name.getValue()
  }

  public getNativeName(): string {
    return this.nativeName.getValue()
  }

  public getCurrency(): Currency {
    return this.currency.getValue() as Currency
  }

  public getLanguage(): LangCode {
    return this.language.getValue() as LangCode
  }

  public toPrimitives(): CityPrimitives {
    return {
      id: this.id.getValue(),
      key: this.key.getValue(),
      name: this.name.getValue(),
      nativeName: this.nativeName.getValue(),
      currency: this.currency.getValue() as Currency,
      language: this.language.getValue() as LangCode,
    }
  }
}
