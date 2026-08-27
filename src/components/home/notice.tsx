import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface NoticeProps {
  variant: 'verify' | 'warn'
  children: ReactNode
  className?: string
}

const ICONS: Record<NoticeProps['variant'], ReactNode> = {
  verify: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7" />
    </svg>
  ),
  warn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6z" />
    </svg>
  ),
}

const VARIANT_CLASSES: Record<NoticeProps['variant'], string> = {
  verify: 'bg-accent-bg text-[#0C447C]',
  warn: 'bg-warn-bg text-warn-ink',
}

export function Notice({ variant, children, className }: NoticeProps) {
  return (
    <div
      className={cn(
        'mt-3.5 flex gap-2.5 rounded-md p-3.5 text-[13px] leading-relaxed',
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      <span className="mt-0.5 flex-none">{ICONS[variant]}</span>
      <span>{children}</span>
    </div>
  )
}
