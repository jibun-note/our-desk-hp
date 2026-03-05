'use client'

import Image from 'next/image'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { CaseStudyItem } from '@/lib/data/service'

type Props = {
  head: { eyebrow: string; headline: string }
  cases: readonly CaseStudyItem[]
}

export default function ServiceCaseStudiesSection({ head, cases: caseList }: Props) {
  return (
    <section className="bg-white py-20 md:py-32" aria-label="実際の活用シーン">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <p className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-2">
          {head.eyebrow}
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
          {head.headline}
        </h2>
        <div className="mb-10">
          <HandwrittenLine variant={4} color="#FDD000" width={120} align="left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14">
          {caseList.map((item, i) => (
            <article
              key={i}
              className="border border-[#ece8de] overflow-hidden rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-black/7"
            >
              <div className="h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={900}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block text-xs tracking-widest text-[#F08300] border border-[#F08300]/30 px-3 py-1 rounded-full mb-4">
                  {item.chip}
                </span>
                <p className="text-sm md:text-base leading-relaxed text-[#666] mb-4 pb-4 border-b border-[#ece8de] text-pretty">
                  {item.situation}
                </p>
                <div className="text-xs tracking-widest text-[#999] mb-2">依頼した業務</div>
                {item.tasks.map((task, j) => (
                  <div
                    key={j}
                    className="text-sm text-[#666] py-0.5 flex gap-2 items-start"
                  >
                    <span className="text-[#F08300] flex-shrink-0">—</span>
                    <span>{task}</span>
                  </div>
                ))}
                <p className="text-xs tracking-widest text-[#999] mt-4 mb-1">効果</p>
                <p className="pt-2 text-sm md:text-base text-gray-900 leading-relaxed">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
