import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('mx-auto max-w-[1180px] px-4 lg:px-8', className)} {...props} />
}
