import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { GovBar } from '@/components/layout/gov-bar'
import { Masthead } from '@/components/layout/masthead'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/home/hero'
import { LiveTicker } from '@/components/home/live-ticker'
import { DepositAccounts } from '@/components/home/deposit-accounts'
import { SpendingBreakdown } from '@/components/home/spending-breakdown'
import { InstitutionalContributions } from '@/components/home/institutional-contributions'
import { Container } from '@/components/ui/container'
import {
  bankAccounts,
  fundOverview,
  institutionalContributions,
  satelliteStats,
  spendingCategories,
  tickerEntries,
} from '@/data/relief-fund'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language
  }, [t, i18n, i18n.resolvedLanguage])

  return (
    <div className="min-h-svh bg-paper">
      <GovBar />
      <Masthead />
      <Hero overview={fundOverview} satellites={satelliteStats} />
      <LiveTicker entries={tickerEntries} />

      <main className="pt-7 sm:pt-10 lg:pt-13">
        <Container className="grid grid-cols-1 gap-9 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <DepositAccounts accounts={bankAccounts} />

          <div className="flex flex-col gap-9 sm:gap-10">
            <SpendingBreakdown overview={fundOverview} categories={spendingCategories} />
            <InstitutionalContributions contributions={institutionalContributions} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
