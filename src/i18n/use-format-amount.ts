import { useTranslation } from 'react-i18next'
import type { Amount } from '@/types/relief-fund'

/** Renders an Amount through i18next's number interpolation, so digits and grouping follow the active language. */
export function useFormatAmount() {
  const { t } = useTranslation()
  return (amount: Amount) => t(`amount.${amount.unit ?? 'plain'}`, { value: amount.value })
}
