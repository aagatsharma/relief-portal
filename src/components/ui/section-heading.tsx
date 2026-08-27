import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: ReactNode
  subtitle?: ReactNode
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className={subtitle ? 'mb-3.5 sm:mb-4.5' : 'mb-1'}>
      <h2 className="flex items-baseline gap-2 font-serif text-[17px] font-semibold tracking-tight text-ink sm:text-[19px]">
        <span aria-hidden="true" className="h-[0.62em] w-[3px] flex-none rounded-full bg-crimson" />
        {title}
      </h2>
      {subtitle ? <p className="mt-1 text-xs text-muted sm:text-[13px]">{subtitle}</p> : null}
    </div>
  )
}
