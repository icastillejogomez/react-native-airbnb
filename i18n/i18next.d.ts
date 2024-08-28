import { Dictorionary } from './namespaces'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: Dictorionary['en']
  }
}
