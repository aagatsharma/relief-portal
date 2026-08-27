import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/section-heading'
import { Panel } from '@/components/ui/panel'
import { LinkButton } from '@/components/ui/button'
import { useFormatAmount } from '@/i18n/use-format-amount'
import { institutionalThresholdLakh } from '@/data/relief-fund'
import type { InstitutionalContribution } from '@/types/relief-fund'

interface InstitutionalContributionsProps {
  contributions: InstitutionalContribution[]
}

export function InstitutionalContributions({ contributions }: InstitutionalContributionsProps) {
  const { t } = useTranslation()
  const formatAmount = useFormatAmount()

  return (
    <section>
      <SectionHeading
        title={t('institutional.title')}
        subtitle={t('institutional.subtitle', { value: institutionalThresholdLakh })}
      />
      <Panel>
        <table className="w-full border-collapse text-[12.5px] sm:text-[13px]">
          <thead>
            <tr>
              <th className="border-b border-rule pb-2 text-left text-[10.5px] font-medium tracking-[0.06em] text-faint uppercase sm:text-[11px]">
                {t('institutional.contributorColumn')}
              </th>
              <th className="border-b border-rule pb-2 text-left text-[10.5px] font-medium tracking-[0.06em] text-faint uppercase sm:text-[11px]">
                {t('institutional.amountColumn')}
              </th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((contribution, index) => (
              <tr key={contribution.id}>
                <td
                  className={`py-2.5 pr-2 ${index === contributions.length - 1 ? '' : 'border-b border-rule'}`}
                >
                  {contribution.contributor}
                </td>
                <td
                  className={`py-2.5 text-right tabular-nums whitespace-nowrap ${
                    index === contributions.length - 1 ? '' : 'border-b border-rule'
                  }`}
                >
                  {formatAmount(contribution.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <LinkButton href="#" className="mt-4">
          {t('institutional.download')}
        </LinkButton>
      </Panel>
    </section>
  )
}
