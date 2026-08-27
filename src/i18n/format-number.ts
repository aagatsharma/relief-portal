const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']

function toDevanagariDigits(value: string) {
  return value.replace(/\d/g, (digit) => DEVANAGARI_DIGITS[Number(digit)])
}

/** Groups digits as ...,XX,XX,XXX (lakh/crore style) instead of the Western ...,XXX,XXX. */
function groupIndian(integerDigits: string) {
  const negative = integerDigits.startsWith('-')
  const digits = negative ? integerDigits.slice(1) : integerDigits
  if (digits.length <= 3) return (negative ? '-' : '') + digits

  const lastThree = digits.slice(-3)
  const rest = digits.slice(0, -3)
  const groups: string[] = []
  for (let i = rest.length; i > 0; i -= 2) {
    groups.unshift(rest.slice(Math.max(0, i - 2), i))
  }
  return `${negative ? '-' : ''}${groups.join(',')},${lastThree}`
}

/**
 * Formats a number for the given language. `Intl.NumberFormat('ne', ...)` would normally do this,
 * but it silently falls back to Latin digits and Western grouping on a runtime without full ICU
 * data for 'ne', so digits never actually get translated there. This formats via the always-available
 * 'en-US' data and applies Devanagari digits + lakh/crore grouping manually for 'ne', guaranteeing
 * correct output regardless of the runtime's ICU support.
 */
export function formatNumber(value: number, lng: string | undefined, options?: Intl.NumberFormatOptions) {
  if (!lng?.startsWith('ne')) {
    return new Intl.NumberFormat('en-US', options).format(value)
  }

  const [integerPart, fractionPart] = new Intl.NumberFormat('en-US', { ...options, useGrouping: false })
    .format(value)
    .split('.')

  const groupedInteger = options?.useGrouping === false ? integerPart : groupIndian(integerPart)
  const formatted = fractionPart ? `${groupedInteger}.${fractionPart}` : groupedInteger
  return toDevanagariDigits(formatted)
}
