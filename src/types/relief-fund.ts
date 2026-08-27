export interface Amount {
  value: number
  unit?: 'cr' | 'lakh'
}

export interface BankAccount {
  id: string
  bankName: string
  fundName: string
  accountNumber: string
  amount: Amount
}

export interface SpendingCategory {
  id: string
  amount: Amount
  percent: number
}

export interface InstitutionalContribution {
  id: string
  contributor: string
  amount: Amount
}

export interface TickerEntry {
  id: string
  minutesAgo: number
  amount: Amount
  bankName: string
}

export interface SatelliteStat {
  id: string
  amount?: Amount
  count?: number
  meta?: Record<string, string | number>
}

export interface FundOverview {
  totalAmount: number
  disbursedAmount: number
  disbursedPercent: number
  asOfDate: string
}
