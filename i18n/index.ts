import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'
import { getLocales } from 'expo-localization'
import * as SecureStore from 'expo-secure-store'
import { Constants } from '@/Constants'
import { namespaces } from './namespaces'

const locales = getLocales()

const preferedLanguage: string | null = SecureStore.getItem(Constants.secureStore.keys.preferedLanguage)
const langCode: string | undefined = locales.at(0)?.languageCode ?? preferedLanguage ?? undefined

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    compatibilityJSON: 'v3',
    ns: ['common', 'auth'],
    fallbackLng: 'en',
    defaultNS: 'common',
    lng: langCode,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: namespaces,
  })

export default i18n
