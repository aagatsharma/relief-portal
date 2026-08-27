import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-8 border-t border-rule bg-card sm:mt-13">
      <Container className="flex flex-col gap-3 py-5 text-[11.5px] leading-relaxed text-muted sm:flex-row sm:justify-between sm:gap-10 sm:py-8.5 sm:text-[12.5px]">
        <p className="sm:max-w-[520px]">
          <strong className="font-semibold text-ink">{t('footer.methodologyLabel')} </strong>
          {t('footer.methodology')}
        </p>
        <p>
          {t('footer.office')}
          <br />
          {t('footer.address')}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          {t('footer.helpline')}
        </p>
      </Container>
    </footer>
  )
}
