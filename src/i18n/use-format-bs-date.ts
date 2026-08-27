import { useTranslation } from 'react-i18next'
import { formatNumber } from '@/i18n/format-number'
import type { BsDate } from '@/types/relief-fund'

/** Renders a Bikram Sambat date with a translated month name and digits matching the active language. */
export function useFormatBsDate() {
  const { t, i18n } = useTranslation()
  const lng = i18n.resolvedLanguage ?? i18n.language

  return (date: BsDate) => {
    const day = formatNumber(date.day, lng, { useGrouping: false })
    const month = t(`months.${date.month}`)
    if (date.year === undefined) return `${day} ${month}`
    return `${day} ${month} ${formatNumber(date.year, lng, { useGrouping: false })}`
  }
}
