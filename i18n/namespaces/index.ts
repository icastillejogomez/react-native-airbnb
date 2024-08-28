/* eslint-disable camelcase */

import { Language } from '../Languages'
import { auth_en, auth_es, AuthNamespace } from './auth'
import { common_en, common_es, CommonNamespace } from './common'

type Namespaces = 'auth' | 'common'

export type Dictorionary = {
  [key in Language]: {
    [key in Namespaces]: key extends 'auth' ? AuthNamespace : CommonNamespace
  }
}

export const namespaces: Dictorionary = {
  en: {
    auth: auth_en,
    common: common_en,
  },
  es: {
    auth: auth_es,
    common: common_es,
  },
} as const
