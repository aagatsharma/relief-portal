import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative mt-8 overflow-hidden border-t-2 border-navy bg-navy text-white/85 sm:mt-13">
      <div
        aria-hidden="true"
        className="bg-contour pointer-events-none absolute inset-y-0 right-0 w-[34rem] opacity-[0.08] [background-position:right_-4rem_bottom_-6rem] [background-size:640px_440px] [filter:invert(1)]"
      />
      <Container className="relative flex flex-col gap-3 py-6 text-[11.5px] leading-relaxed sm:flex-row sm:justify-between sm:gap-10 sm:py-8.5 sm:text-[12.5px]">
        <p className="sm:max-w-[520px]">
          <strong className="font-semibold text-white">{t('footer.methodologyLabel')} </strong>
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
