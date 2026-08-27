import { cn } from '@/lib/cn'

interface ProgressBarProps {
  percent: number
  size?: 'sm' | 'lg'
  className?: string
}

export function ProgressBar({ percent, size = 'lg', className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  return (
    <div
      className={cn(
        'overflow-hidden rounded-full bg-[#EFEDE7]',
        size === 'lg' ? 'h-2.5' : 'h-1.5',
        className,
      )}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full rounded-full bg-accent" style={{ width: `${clamped}%` }} />
    </div>
  )
}
