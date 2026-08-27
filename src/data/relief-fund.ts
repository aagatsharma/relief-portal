import type {
  BankAccount,
  FundOverview,
  InstitutionalContribution,
  SatelliteStat,
  SpendingCategory,
  TickerEntry,
} from '@/types/relief-fund'

export const institutionalThresholdLakh = 10

export const fundOverview: FundOverview = {
  totalAmount: 84.6,
  disbursedAmount: 12.3,
  disbursedPercent: 14.5,
  asOfDate: '11 Bhadra 2083',
}

export const satelliteStats: SatelliteStat[] = [
  { id: 'remaining', amount: { value: 72.3, unit: 'cr' }, meta: { count: 8 } },
  { id: 'contributions', count: 48201, meta: { date: '10 Bhadra' } },
  { id: 'largest', amount: { value: 2.5, unit: 'cr' } },
  { id: 'abroad', amount: { value: 19.8, unit: 'cr' }, meta: { percent: 23 } },
]

export const tickerEntries: TickerEntry[] = [
  { id: 't1', minutesAgo: 2, amount: { value: 5000 }, bankName: 'Global IME' },
  { id: 't2', minutesAgo: 3, amount: { value: 100000 }, bankName: 'Kumari' },
  { id: 't3', minutesAgo: 4, amount: { value: 2500 }, bankName: 'Sunrise' },
  { id: 't4', minutesAgo: 6, amount: { value: 25000 }, bankName: 'RBB' },
  { id: 't5', minutesAgo: 7, amount: { value: 10000 }, bankName: 'NMB' },
]

export const bankAccounts: BankAccount[] = [
  {
    id: 'rbb',
    bankName: 'Rastriya Banijya Bank',
    fundName: 'PM Disaster Relief Fund',
    accountNumber: '0010100004021',
    amount: { value: 31.4, unit: 'cr' },
  },
  {
    id: 'nbl',
    bankName: 'Nepal Bank Limited',
    fundName: 'PM Relief Fund',
    accountNumber: '0020200007734',
    amount: { value: 14.2, unit: 'cr' },
  },
  {
    id: 'gime',
    bankName: 'Global IME Bank',
    fundName: 'PM Disaster Relief Fund',
    accountNumber: '1001000101188',
    amount: { value: 12.8, unit: 'cr' },
  },
  {
    id: 'kumari',
    bankName: 'Kumari Bank',
    fundName: 'PM Disaster Relief Fund',
    accountNumber: '0450100009052',
    amount: { value: 8.6, unit: 'cr' },
  },
  {
    id: 'siddhartha',
    bankName: 'Siddhartha Bank',
    fundName: 'PM Relief Fund',
    accountNumber: '0330100003307',
    amount: { value: 6.9, unit: 'cr' },
  },
  {
    id: 'nmb',
    bankName: 'NMB Bank',
    fundName: 'PM Relief Fund',
    accountNumber: '0110100006642',
    amount: { value: 5.1, unit: 'cr' },
  },
  {
    id: 'sunrise',
    bankName: 'Sunrise Bank',
    fundName: 'PM Relief Fund',
    accountNumber: '0070100002915',
    amount: { value: 3.4, unit: 'cr' },
  },
  {
    id: 'citizens',
    bankName: 'Citizens Bank Intl.',
    fundName: 'PM Relief Fund',
    accountNumber: '0130100005470',
    amount: { value: 2.2, unit: 'cr' },
  },
]

export const spendingCategories: SpendingCategory[] = [
  { id: 'families', amount: { value: 5.2, unit: 'cr' }, percent: 100 },
  { id: 'rescue', amount: { value: 3.6, unit: 'cr' }, percent: 69 },
  { id: 'shelter', amount: { value: 2.1, unit: 'cr' }, percent: 40 },
  { id: 'medical', amount: { value: 1.4, unit: 'cr' }, percent: 27 },
]

export const institutionalContributions: InstitutionalContribution[] = [
  { id: 'nba', contributor: "Nepal Bankers' Association", amount: { value: 2.5, unit: 'cr' } },
  { id: 'fnc', contributor: 'Federation of Nepalese Chambers', amount: { value: 1.8, unit: 'cr' } },
  { id: 'ntc', contributor: 'Nepal Telecom', amount: { value: 1.2, unit: 'cr' } },
  { id: 'nrna', contributor: 'NRNA — North America', amount: { value: 98, unit: 'lakh' } },
  { id: 'han', contributor: 'Hydropower Association Nepal', amount: { value: 75, unit: 'lakh' } },
]
