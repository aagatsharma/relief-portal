import { useMemo } from 'react'
import { seededPattern } from '@/lib/seeded-pattern'

interface QrGlyphProps {
  seed: string
  className?: string
}

const GRID_SIZE = 5

export function QrGlyph({ seed, className }: QrGlyphProps) {
  const cells = useMemo(() => seededPattern(seed, GRID_SIZE * GRID_SIZE), [seed])

  return (
    <div
      aria-hidden="true"
      className={`grid size-14 flex-none grid-cols-5 grid-rows-5 gap-0.5 rounded-md border border-rule bg-paper p-1.25 sm:size-15.5 ${className ?? ''}`}
    >
      {cells.map((filled, index) => (
        <b key={index} className={`rounded-[1px] ${filled ? 'bg-ink' : 'bg-transparent'}`} />
      ))}
    </div>
  )
}
