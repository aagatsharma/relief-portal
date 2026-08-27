import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/cn'

type PanelProps<T extends ElementType> = {
  as?: T
  padding?: 'sm' | 'md'
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export function Panel<T extends ElementType = 'div'>({
  as,
  padding = 'md',
  className,
  ...props
}: PanelProps<T>) {
  const Component = as ?? 'div'
  return (
    <Component
      className={cn(
        'rounded-lg border border-rule bg-card shadow-[var(--shadow-card)]',
        padding === 'md' ? 'p-4 sm:p-5' : 'p-3.5 sm:p-4',
        className,
      )}
      {...props}
    />
  )
}
