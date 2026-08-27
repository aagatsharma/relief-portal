import { Trans, useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/section-heading'
import { LinkButton } from '@/components/ui/button'
import { BankAccountCard } from '@/components/home/bank-account-card'
import { Notice } from '@/components/home/notice'
import type { BankAccount } from '@/types/relief-fund'

interface DepositAccountsProps {
  accounts: BankAccount[]
}

export function DepositAccounts({ accounts }: DepositAccountsProps) {
  const { t } = useTranslation()

  return (
    <section>
      <SectionHeading title={t('deposit.title')} subtitle={t('deposit.subtitle')} />

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {accounts.map((account) => (
          <BankAccountCard key={account.id} account={account} />
        ))}
      </div>

      <Notice variant="verify">
        <Trans i18nKey="deposit.verifyNotice" components={{ strong: <strong className="font-semibold" /> }} />
      </Notice>
      <Notice variant="warn">{t('deposit.warnNotice')}</Notice>

      <div className="mt-5 sm:mt-6">
        <SectionHeading title={t('deposit.internationalTitle')} subtitle={t('deposit.internationalSubtitle')} />
        <LinkButton href="#">{t('deposit.internationalCta')}</LinkButton>
      </div>
    </section>
  )
}
