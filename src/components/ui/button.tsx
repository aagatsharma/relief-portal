import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = ComponentPropsWithoutRef<'a'>

export function LinkButton({ className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-block rounded border border-[#C9C5BB] bg-transparent px-3.5 py-2 font-sans text-[13px] text-ink no-underline transition-colors hover:bg-[#F2F0EA]',
        className,
      )}
      {...props}
    />
  )
}
