import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'

export function GovBar() {
  const { t } = useTranslation()
  return (
    <div className="bg-crimson text-[11px] text-white sm:text-xs">
      <Container className="flex flex-col gap-px py-1.5 sm:h-8.5 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0">
        <span className="opacity-90">{t('govBar.line1')}</span>
        <span className="opacity-90">{t('govBar.line2')}</span>
      </Container>
    </div>
  )
}
