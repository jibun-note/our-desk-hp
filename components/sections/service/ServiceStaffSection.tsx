'use client'

import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { StaffItem } from '@/lib/data/service'

function AvatarPlaceholder() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-[#999]"
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

type Props = {
  head: { eyebrow: string; headline: string; body: string }
  staff: readonly StaffItem[]
}

export default function ServiceStaffSection({ head, staff }: Props) {
  return (
    <section className="bg-[#fffdf5] py-20 md:py-28" aria-label="スタッフ紹介">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="max-w-[500px] mb-12 md:mb-14">
          <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center gap-3 mb-2">
            <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
            {head.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
            {head.headline}
          </h2>
          <div className="mb-4">
            <HandwrittenLine variant={6} color="rgba(240,131,0,0.55)" width={120} align="left" />
          </div>
          <p className="text-sm text-[#666] leading-relaxed max-w-[480px] whitespace-pre-line">
            {head.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ece8de]">
          {staff.map((person, i) => (
            <div key={i} className="bg-white p-6 md:p-8">
              <div className="flex gap-4 md:gap-5 items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fffdf5] border-[1.5px] border-[#ece8de] flex items-center justify-center flex-shrink-0">
                  <AvatarPlaceholder />
                </div>
                <div>
                  <span className="inline-block text-[0.62rem] tracking-widest text-[#F08300] border border-[#F08300]/25 px-2.5 py-1 rounded-full mb-1">
                    {person.badge}
                  </span>
                  <div className="text-[0.68rem] text-[#999]">{person.hours}</div>
                </div>
              </div>
              <div
                className="w-7 h-[3px] rounded-sm bg-gradient-to-r from-[#FDD000] to-[#F08300] my-4"
                aria-hidden
              />
              <p className="text-sm md:text-[0.8rem] leading-relaxed text-[#666] text-pretty">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
