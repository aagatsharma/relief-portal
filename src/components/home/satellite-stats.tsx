import { useTranslation } from 'react-i18next'
import { useFormatAmount } from '@/i18n/use-format-amount'
import { useFormatBsDate } from '@/i18n/use-format-bs-date'
import type { SatelliteStat } from '@/types/relief-fund'

interface SatelliteStatsProps {
  stats: SatelliteStat[]
  className?: string
}

export function SatelliteStats({ stats, className }: SatelliteStatsProps) {
  const { t } = useTranslation()
  const formatAmount = useFormatAmount()
  const formatBsDate = useFormatBsDate()

  return (
    <div
      className={`grid grid-cols-2 gap-px self-start overflow-hidden rounded-lg border border-rule bg-rule shadow-[var(--shadow-card)] ${className ?? ''}`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="bg-card px-4 py-3.5 sm:px-5 sm:py-4">
          <p className="mb-1 text-[11px] text-muted sm:text-xs">{t(`satellites.${stat.id}.label`)}</p>
          <b className="block font-serif text-[20px] leading-tight font-semibold tabular-nums text-ink sm:text-[26px]">
            {stat.amount ? formatAmount(stat.amount) : t('count', { value: stat.count })}
          </b>
          <span className="text-[11px] text-faint sm:text-xs">
            {t(`satellites.${stat.id}.hint`, {
              ...stat.meta,
              ...(stat.asOfDate ? { date: formatBsDate(stat.asOfDate) } : {}),
            })}
          </span>
        </div>
      ))}
    </div>
  )
}
