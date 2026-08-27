import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'
import { ProgressBar } from '@/components/ui/progress-bar'
import { SatelliteStats } from '@/components/home/satellite-stats'
import type { FundOverview, SatelliteStat } from '@/types/relief-fund'

interface HeroProps {
  overview: FundOverview
  satellites: SatelliteStat[]
}

export function Hero({ overview, satellites }: HeroProps) {
  const { t } = useTranslation()

  const totalAmount = t('amount.plain', { value: overview.totalAmount })
  const unit = t('hero.unit')
  const disbursedAmount = `${t('amount.plain', { value: overview.disbursedAmount })} ${unit}`

  return (
    <section className="border-b border-rule bg-card">
      <Container className="grid gap-6 py-6 sm:py-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-10">
        <div>
          <p className="mb-2 text-[11px] font-medium tracking-[0.08em] text-faint uppercase sm:mb-2.5 sm:text-xs">
            {t('hero.eyebrow')}
          </p>
          <p className="text-[40px] leading-none font-medium tracking-tight tabular-nums text-ink sm:text-[64px]">
            {totalAmount} <small className="text-base font-normal text-muted sm:text-[22px]">{unit}</small>
          </p>
          <ProgressBar percent={overview.disbursedPercent} className="my-4 sm:my-5.5" />
          <div className="flex justify-between text-xs text-muted sm:text-[13px]">
            <b className="font-medium text-accent">
              {t('hero.disbursedLabel', { amount: disbursedAmount })}
            </b>
            <span>{t('hero.percentOfCollections', { percent: overview.disbursedPercent })}</span>
          </div>
        </div>
        <SatelliteStats stats={satellites} />
      </Container>
    </section>
  )
}
