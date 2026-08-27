import { cn } from '@/lib/cn'

interface LanguageOption {
  code: string
  label: string
}

interface LanguageToggleProps {
  options: LanguageOption[]
  active: string
  onChange: (code: string) => void
  className?: string
}

export function LanguageToggle({ options, active, onChange, className }: LanguageToggleProps) {
  return (
    <div className={cn('flex flex-none overflow-hidden rounded border border-rule', className)}>
      {options.map((option) => {
        const isActive = option.code === active
        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.code)}
            className={cn(
              'px-2 py-1.5 font-sans text-[11px] transition-colors sm:px-3 sm:text-xs',
              isActive ? 'bg-ink text-white' : 'bg-transparent text-muted hover:bg-[#F2F0EA]',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
