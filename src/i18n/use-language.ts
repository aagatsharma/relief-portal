import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/i18n'

/** Current resolved language, guaranteed to be one of SUPPORTED_LANGUAGES. */
export function useLanguage(): SupportedLanguage {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? i18n.language
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(current)
    ? (current as SupportedLanguage)
    : 'ne'
}
