'use client'

import HandwrittenLine from '@/components/ui/HandwrittenLine'
import BlobDecoration from '@/components/ui/BlobDecoration'
import type { ProcessStepItem } from '@/lib/data/service'
import { cn } from '@/lib/utils'

type Props = {
  head: { eyebrow: string; headline: string }
  steps: readonly ProcessStepItem[]
}

export default function ServiceProcessSection({ head, steps }: Props) {
  return (
    <section className="bg-[#fffdf5] py-20 md:py-28 relative overflow-visible" aria-label="ご利用の流れ">
      <BlobDecoration
        shape="P"
        drift="float-c"
        fill="rgba(178,186,230,0.18)"
        className="top-16 right-[-60px] w-[280px] h-[280px] hidden md:block pointer-events-none"
      />
      <div className="container mx-auto max-w-5xl px-4 md:px-8 relative z-10">
        <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-20">
          <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center justify-center gap-3 mb-2">
            <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
            {head.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line">
            {head.headline}
          </h2>
          <div className="mt-3 flex justify-center">
            <HandwrittenLine variant={5} color="rgba(240,131,0,0.6)" width={120} align="center" />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-4">
          {/* Timeline line (desktop) */}
          <div
            className="hidden md:block absolute top-[22px] left-[calc(10%+11px)] right-[calc(10%+11px)] h-px bg-[#ece8de] z-0"
            aria-hidden
          />

          {steps.map((step) => (
            <div
              key={step.num}
              className={cn(
                'flex-1 flex flex-col items-center text-center relative z-10 px-2',
                'md:min-w-0'
              )}
            >
              <div
                className={cn(
                  'w-11 h-11 rounded-full flex items-center justify-center mb-5 shrink-0',
                  'border-[1.5px] shadow-[0_0_0_6px_#fffdf5]',
                  step.active
                    ? 'bg-gradient-to-br from-[#FDD000] to-[#F08300] border-transparent'
                    : 'bg-white border-[#ece8de]'
                )}
              >
                <span
                  className={cn(
                    'font-serif italic text-base leading-none',
                    step.active ? 'text-white font-normal' : 'text-[#999]'
                  )}
                >
                  {step.num}
                </span>
              </div>
              <div className="w-full bg-white border border-[#ece8de] p-4 md:p-5 rounded">
                <div className="text-sm font-medium text-gray-900 mb-1">{step.title}</div>
                <p className="text-[0.71rem] leading-relaxed text-[#999] text-pretty">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
