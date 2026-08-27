import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'
import { LanguageToggle } from '@/components/layout/language-toggle'
import { SUPPORTED_LANGUAGES } from '@/i18n'
import { useLanguage } from '@/i18n/use-language'

export function Masthead() {
  const { t, i18n } = useTranslation()
  const activeLanguage = useLanguage()

  const languageOptions = SUPPORTED_LANGUAGES.map((code) => ({
    code,
    label: t(`languages.${code}`),
  }))

  return (
    <header className="border-b border-rule bg-card">
      <Container className="flex items-center gap-3 py-3.5 sm:gap-4.5 sm:py-5">
        <div className="flex size-9.5 flex-none items-center justify-center rounded-full border border-rule text-[10px] font-semibold text-crimson sm:size-11.5 sm:text-[11px]">
          {t('masthead.seal')}
        </div>
        <div className="min-w-0">
          <h1 className="truncate font-deva text-[17px] font-semibold leading-snug text-ink sm:text-[22px]">
            {t('masthead.title')}
          </h1>
          <p className="truncate text-[11px] text-muted sm:text-[13px]">{t('masthead.subtitle')}</p>
        </div>
        <LanguageToggle
          options={languageOptions}
          active={activeLanguage}
          onChange={(code) => void i18n.changeLanguage(code)}
          className="ml-auto"
        />
      </Container>
    </header>
  )
}
