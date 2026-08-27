import { Panel } from '@/components/ui/panel'
import { QrGlyph } from '@/components/home/qr-glyph'
import { useFormatAmount } from '@/i18n/use-format-amount'
import type { BankAccount } from '@/types/relief-fund'

interface BankAccountCardProps {
  account: BankAccount
}

export function BankAccountCard({ account }: BankAccountCardProps) {
  const formatAmount = useFormatAmount()

  return (
    <Panel
      className="flex gap-3 transition-shadow duration-150 hover:shadow-[var(--shadow-raised)]"
      padding="sm"
    >
      <QrGlyph seed={account.accountNumber} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <strong className="text-[13.5px] font-semibold text-ink">{account.bankName}</strong>
          <span className="font-serif text-[14.5px] font-semibold tabular-nums whitespace-nowrap text-accent">
            {formatAmount(account.amount)}
          </span>
        </div>
        <p className="mt-0.5 text-[11.5px] text-muted">{account.fundName}</p>
        <code className="mt-1 inline-block rounded-sm bg-paper px-1.5 py-0.5 font-mono text-xs tracking-wide text-ink">
          {account.accountNumber}
        </code>
      </div>
    </Panel>
  )
}
