'use client'

import { useRef, useEffect } from 'react'
import HandwrittenLine from '@/components/ui/HandwrittenLine'

export type ServiceCategoryItem = {
  title: string
  lines: string[]
}

export type ServiceGroup = {
  label: string
  cards: ServiceCategoryItem[]
}

type ServiceHead = {
  eyebrow: string
  headline: string
  body: string
  footer?: string
}

type Props = {
  head: ServiceHead
  cards?: readonly ServiceCategoryItem[]
  groups?: readonly ServiceGroup[]
}

export default function ServiceServicesSection({
  head,
  cards,
  groups,
}: Props) {
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

  const group1Count = groups?.[0]?.cards.length ?? 0

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#fffdf5] relative"
      aria-label="対応できる業務"
    >
      {/* 右上オレンジドット装飾 */}
      <div
        className="absolute top-12 right-10 grid grid-cols-6 gap-1"
        aria-hidden
      >
        {Array.from({ length: 30 }, (_, i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-[#F08300] opacity-0 scale-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(.16,1,.3,1)] [.is-section-visible_&]:opacity-25 [.is-section-visible_&]:scale-100"
            style={{ transitionDelay: `${0.2 + i * 0.02}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl px-4 md:px-8 pt-16 pb-14 md:pt-20 md:pb-16 relative">
        {/* ヘッド 2カラム */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-14">
          <div>
            <p
              className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-3 opacity-0 -translate-x-3 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0"
              data-anim
              data-delay="0"
            >
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
              <HandwrittenLine variant={5} color="#F08300" width={120} align="left" />
            </div>
          </div>
          <div className="md:pt-9">
            <p
              className="text-sm md:text-base text-[#666] leading-relaxed opacity-0 blur-sm translate-y-2 transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:blur-0 [&.is-visible]:translate-y-0"
              data-anim
              data-delay="200"
            >
              {head.body}
            </p>
          </div>
        </div>

        {groups ? (
          <div className="space-y-12 md:space-y-14">
            {groups.map((group, gi) => (
              <div key={gi}>
                <h3
                  className="text-sm tracking-[0.22em] text-[#F08300] pb-3 border-b-2 border-[#F08300] mb-6 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
                  data-anim
                  data-delay={String(250 + gi * 70)}
                >
                  {group.label}
                </h3>
                <div
                  className={`border-l border-t border-[#ddd8ce] grid ${
                    group.cards.length === 3
                      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2'
                  }`}
                >
                  {group.cards.map((card, ci) => {
                    const globalIndex =
                      gi === 0 ? ci : (group1Count ?? 0) + ci
                    return (
                      <div
                        key={card.title}
                        className="group border-r border-b border-[#ddd8ce] p-5 md:p-6 opacity-0 translate-y-5 scale-[0.98] transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100"
                        data-anim
                        data-delay={String(300 + globalIndex * 70)}
                      >
                        <h4 className="font-serif text-sm md:text-base font-medium text-[#1a1209] mb-3 pb-3 border-b border-[#ddd8ce]">
                          {card.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {card.lines.map((line, li) => (
                            <span
                              key={li}
                              className="text-xs text-[#666] bg-[#f5f0e6] px-2.5 py-0.5 rounded-sm transition-colors duration-200 group-hover:bg-[rgba(240,131,0,.08)] group-hover:text-[#F08300]"
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : cards ? (
          <div className="border-l border-t border-[#ddd8ce] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="group border-r border-b border-[#ddd8ce] p-5 md:p-6 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
                data-anim
                data-delay={String(i * 70)}
              >
                <h4 className="font-serif text-sm md:text-base font-medium text-[#1a1209] mb-3 pb-3 border-b border-[#ddd8ce]">
                  {card.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {card.lines.map((line, li) => (
                    <span
                      key={li}
                      className="text-xs text-[#666] bg-[#f5f0e6] px-2.5 py-0.5 rounded-sm transition-colors duration-200 group-hover:bg-[rgba(240,131,0,.08)] group-hover:text-[#F08300]"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {head.footer && (
          <p className="mt-10 text-xs text-[#999] leading-relaxed text-center">
            {head.footer}
          </p>
        )}
      </div>
    </section>
  )
}
