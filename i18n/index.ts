import { pt } from './pt.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      pt,
      en: {
        welcome: 'Welcome'
      },
      fr: {
        welcome: 'Bienvenue'
      }
    }
 }))  