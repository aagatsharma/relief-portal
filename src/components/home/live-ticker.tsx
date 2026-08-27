import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'
import { useFormatAmount } from '@/i18n/use-format-amount'
import type { TickerEntry } from '@/types/relief-fund'

interface LiveTickerProps {
  entries: TickerEntry[]
}

export function LiveTicker({ entries }: LiveTickerProps) {
  const { t } = useTranslation()
  const formatAmount = useFormatAmount()

  const renderEntries = (duplicate: boolean) =>
    entries.map((entry) => (
      <span key={entry.id} className="flex-none" aria-hidden={duplicate}>
        {t('ticker.minutesAgo', { count: entry.minutesAgo })} ·{' '}
        <em className="font-normal tabular-nums text-ink not-italic">{formatAmount(entry.amount)}</em> ·{' '}
        {entry.bankName}
      </span>
    ))

  return (
    <div className="border-b border-rule bg-paper">
      <Container className="flex h-10 items-center gap-3 sm:h-11 sm:gap-5">
        <span className="inline-flex flex-none items-center gap-1.5 rounded-sm bg-live-bg px-2 py-1 text-[11px] text-live sm:gap-1.75 sm:px-2.5 sm:text-xs">
          <i className="size-1.25 animate-pulse rounded-full bg-live motion-reduce:animate-none sm:size-1.5" />
          {t('ticker.live')}
        </span>
        <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_16px,#000_calc(100%-16px),transparent)]">
          <div className="animate-ticker flex w-max gap-5 text-xs text-muted whitespace-nowrap motion-reduce:animate-none hover:[animation-play-state:paused] sm:gap-7 sm:text-[13px]">
            {renderEntries(false)}
            {renderEntries(true)}
          </div>
        </div>
      </Container>
    </div>
  )
}
