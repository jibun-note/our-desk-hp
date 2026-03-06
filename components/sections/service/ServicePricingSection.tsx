'use client'

import { useRef, useEffect } from 'react'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { PricingItem } from '@/lib/data/service'

type Head = {
  eyebrow: string
  headline: string
  sub: string
  note: string
}

type Props = {
  head: Head
  items: readonly PricingItem[]
}

function getRankChar(rank: string): string {
  return rank.replace(/^ランク/, '').trim().charAt(0) || rank
}

export default function ServicePricingSection({ head, items }: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const sectionObs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) section.classList.add('is-section-visible')
      },
      { threshold: 0.05 }
    )
    sectionObs.observe(section)

    const animElements = section.querySelectorAll<HTMLElement>('[data-anim]')
    const observers: IntersectionObserver[] = []
    const timeouts: ReturnType<typeof setTimeout>[] = []

    animElements.forEach((el) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          const delay = parseInt(el.getAttribute('data-delay') ?? '0', 10)
          const t = setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          timeouts.push(t)
          obs.disconnect()
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      sectionObs.disconnect()
      observers.forEach((o) => o.disconnect())
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mt-8 md:mt-12 pt-20 pb-14 md:pt-28 md:pb-16"
      style={{ background: '#ffffff' }}
      aria-label={head.eyebrow}
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        {/* ヘッド */}
        <div className="mb-12 md:mb-14">
          <p
            className="flex items-center gap-2 text-sm tracking-[0.2em] text-[#F08300] font-medium mb-3 opacity-0 -translate-x-3 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0"
            data-anim
            data-delay="0"
          >
            <span className="w-6 h-px bg-[#F08300] shrink-0" aria-hidden />
            {head.eyebrow}
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
            data-anim
            data-delay="50"
          >
            {head.headline}
          </h2>
          <div className="mb-10">
            <HandwrittenLine variant={1} color="#FDD000" width={120} align="left" />
          </div>
        </div>

        {/* 料金リスト */}
        <div className="border-t-2 border-[#1a1209]">
          {items.map((item, i) => {
            const rankChar = getRankChar(item.rank)
            return (
              <div
                key={i}
                className="group border-b border-[#ddd8ce] py-6 md:py-8 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] opacity-0 -translate-x-4 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 transition-colors duration-300 hover:bg-[rgba(240,131,0,.03)] hover:mx-[-16px] hover:px-4"
                data-anim
                data-delay={String(i * 100)}
              >
                <div className="grid grid-cols-[1fr_auto] md:grid-cols-[96px_1fr_auto] gap-4 items-start">
                  {/* RANK列 md以上 */}
                  <div className="hidden md:block">
                    <span className="font-serif text-xl md:text-2xl font-semibold text-[#1a1209]">
                      {rankChar}
                    </span>
                  </div>

                  {/* 中央列 */}
                  <div>
                    <p className="md:hidden text-xs tracking-[.15em] text-[#1a1209] mb-1">
                      {item.rank}
                    </p>
                    <p className="font-serif text-sm md:text-base font-medium text-[#1a1209] mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.examples.map((ex, j) => (
                        <span
                          key={j}
                          className="text-xs text-[#666] border border-[#c8c2b4] px-2.5 py-0.5 rounded-sm transition-colors duration-200 group-hover:border-[#F08300] group-hover:text-[#F08300]"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 価格列 */}
                  <div className="text-right min-w-[100px] md:min-w-[160px]">
                    <p className="font-serif font-semibold text-3xl md:text-5xl leading-none tracking-[-0.04em] text-[#1a1209]">
                      {item.price}
                    </p>
                    <p className="text-xs text-[#999] mt-1">円/h（税別）</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 注記 */}
        <p className="text-xs text-[#999] leading-relaxed pt-5 border-t border-[#ddd8ce] whitespace-pre-line">
          {head.note}
        </p>
      </div>
    </section>
  )
}
