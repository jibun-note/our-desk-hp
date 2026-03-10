'use client'

import { useState } from 'react'
import Image from 'next/image'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import { cn } from '@/lib/utils'

export type FaqItem = {
  q: string
  a: string
}

type Props = {
  imageSrc: string
  imageAlt: string
  head: { headline: string; eyebrow?: string; body?: string }
  items: readonly FaqItem[]
}

export default function ServiceFaqSection({ imageSrc, imageAlt, head, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32" style={{ background: '#fffdf5' }} aria-label="よくある質問">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] gap-12 md:gap-16 items-start">
          <div className="space-y-0 border-t border-[#ece8de] order-2 md:order-1">
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="border-b border-[#ece8de] first:border-t first:md:border-t-[#ece8de]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full py-6 flex items-start gap-4 text-left hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F08300] focus-visible:ring-inset focus-visible:rounded"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="font-serif italic text-lg text-[#F08300] flex-shrink-0 leading-snug">
                      Q
                    </span>
                    <span className="flex-1 flex items-center justify-between gap-3">
                      <h3 className="text-sm md:text-base font-medium text-gray-900 text-balance">
                        {item.q}
                      </h3>
                      <span
                        className={cn(
                          'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200',
                          isOpen ? 'bg-[#F08300]/10 rotate-180' : 'bg-[#ece8de]'
                        )}
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-200 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm md:text-base leading-relaxed text-[#666] pl-7 md:pl-8 pb-6 text-pretty whitespace-pre-line">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="md:sticky md:top-24 order-1 md:order-2">
            <div className="w-full h-64 md:h-[340px] overflow-hidden rounded-none rounded-bl-[3rem] md:rounded-bl-[5rem]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={340}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 md:mt-10">
              {head.eyebrow != null && (
                <p className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-2">
                  {head.eyebrow}
                </p>
              )}
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
                {head.headline}
              </h2>
              <div className="mb-4 md:mb-10">
                <HandwrittenLine variant={2} color="rgba(240,131,0,0.65)" width={120} align="left" />
              </div>
              {head.body != null && (
                <p className="text-sm text-[#666] max-w-[280px] mt-4 text-pretty">{head.body}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
