'use client'

import Image from 'next/image'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { FaqItem } from '@/lib/data/service'

type Props = {
  imageSrc: string
  imageAlt: string
  head: { eyebrow: string; headline: string; body: string }
  items: readonly FaqItem[]
}

export default function ServiceFaqSection({ imageSrc, imageAlt, head, items }: Props) {
  return (
    <section id="faq" className="bg-white py-20 md:py-28" aria-label="よくある質問">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-12 md:gap-16 items-start">
          <div className="md:sticky md:top-24">
            <div className="w-full h-64 md:h-[340px] overflow-hidden rounded-none rounded-br-[3rem] md:rounded-br-[5rem]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={340}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 md:mt-10">
              <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center gap-3 mb-2">
                <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
                {head.eyebrow}
              </p>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line">
                {head.headline}
              </h2>
              <p className="text-sm text-[#666] max-w-[280px] mt-4">{head.body}</p>
            </div>
          </div>

          <div className="space-y-0 border-t border-[#ece8de]">
            {items.map((item, i) => (
              <div
                key={i}
                className="py-6 border-b border-[#ece8de] first:border-t first:md:border-t-[#ece8de]"
              >
                <div className="flex gap-4 mb-2">
                  <span className="font-serif italic text-lg text-[#F08300] flex-shrink-0 leading-snug">
                    Q
                  </span>
                  <h3 className="text-sm md:text-base font-medium text-gray-900 text-balance">
                    {item.q}
                  </h3>
                </div>
                <p className="text-sm md:text-[0.82rem] leading-relaxed text-[#666] pl-7 md:pl-8 text-pretty">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
