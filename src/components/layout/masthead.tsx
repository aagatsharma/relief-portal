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
      <Container className="flex items-center gap-3.5 py-4 sm:gap-5 sm:py-5.5">
        <img
          src="/pmo.png"
          alt={t('masthead.sealAlt')}
          className="size-13 flex-none object-contain sm:size-15.5"
        />
        <div className="min-w-0">
          <h1 className="truncate font-serif text-[19px] font-semibold leading-snug tracking-tight text-ink sm:text-[25px]">
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
