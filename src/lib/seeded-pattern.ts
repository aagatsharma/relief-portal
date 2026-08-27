/**
 * Deterministic pseudo-random boolean grid derived from a seed string.
 * Used to render a stable "QR-like" glyph per bank account without a real
 * QR encoding dependency — same seed always produces the same pattern.
 */
export function seededPattern(seed: string, cells: number): boolean[] {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }

  const pattern: boolean[] = []
  for (let i = 0; i < cells; i++) {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff
    pattern.push((hash >> 3) % 5 !== 0)
  }
  return pattern
}
