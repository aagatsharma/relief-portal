import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className={subtitle ? 'mb-3.5 sm:mb-4.5' : 'mb-1'}>
      <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">{title}</h2>
      {subtitle ? <p className="mt-0.5 text-xs text-muted sm:text-[13px]">{subtitle}</p> : null}
    </div>
  )
}
