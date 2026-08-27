import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = ComponentPropsWithoutRef<'a'>

export function LinkButton({ className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'group inline-flex items-center gap-1.5 rounded-md border border-[#C9C5BB] bg-transparent px-3.5 py-2 font-sans text-[13px] font-medium text-ink no-underline transition-colors hover:border-navy/30 hover:bg-[#F2F0EA]',
        className,
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-none text-faint transition-transform group-hover:translate-x-0.5"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  )
}
