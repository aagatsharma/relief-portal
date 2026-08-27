import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/section-heading'
import { Panel } from '@/components/ui/panel'
import { ProgressBar } from '@/components/ui/progress-bar'
import { useFormatAmount } from '@/i18n/use-format-amount'
import type { FundOverview, SpendingCategory } from '@/types/relief-fund'

interface SpendingBreakdownProps {
  overview: FundOverview
  categories: SpendingCategory[]
}

export function SpendingBreakdown({ overview, categories }: SpendingBreakdownProps) {
  const { t } = useTranslation()
  const formatAmount = useFormatAmount()

  const disbursedAmount = `${t('amount.plain', { value: overview.disbursedAmount })} ${t('hero.unit')}`

  return (
    <section>
      <SectionHeading
        title={t('spending.title')}
        subtitle={t('spending.asOf', { amount: disbursedAmount, date: overview.asOfDate })}
      />
      <Panel>
        {categories.map((category, index) => (
          <div key={category.id} className={index === categories.length - 1 ? '' : 'mb-3.5 sm:mb-4'}>
            <div className="mb-1.5 flex justify-between gap-2.5 text-xs sm:text-[13px]">
              <span className="text-ink">{t(`spending.categories.${category.id}`)}</span>
              <span className="tabular-nums whitespace-nowrap text-muted">{formatAmount(category.amount)}</span>
            </div>
            <ProgressBar percent={category.percent} size="sm" />
          </div>
        ))}
      </Panel>
    </section>
  )
}
