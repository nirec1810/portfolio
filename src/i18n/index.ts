import { ui, type Locale, type TranslationKeys } from './ui'

export const defaultLocale: Locale = 'es'
export const locales: Locale[] = ['es', 'en']

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) as string | undefined
}

export function t(key: string, lang: Locale): string {
  return getNestedValue(ui[lang], key) || getNestedValue(ui[defaultLocale], key) || key
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/')
  if (lang && isValidLocale(lang)) return lang
  return defaultLocale
}
