import { useTranslation } from 'react-i18next'

export function SampleBanner() {
  const { t } = useTranslation()
  return (
    <div className="bg-[#2C2C2A] px-3 py-1.5 text-center text-[11px] leading-relaxed text-[#EFEDE7] sm:text-xs">
      {t('sampleBanner')}
    </div>
  )
}
