'use client'

import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { ServiceCategoryItem, ServiceGroup } from '@/lib/data/service'

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

function ServiceCardGrid({ cards }: { cards: readonly ServiceCategoryItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-[#ece8de] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/7"
        >
          <h3 className="font-serif text-base md:text-[0.98rem] font-semibold text-gray-900 mb-4">
            {card.title}
          </h3>
          <ul className="space-y-2">
            {card.lines.map((line, j) => (
              <li
                key={j}
                className="text-[0.78rem] leading-relaxed text-[#666] text-pretty flex gap-2"
              >
                <span className="text-[#F08300] flex-shrink-0">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function ServiceServicesSection({ head, cards, groups }: Props) {
  return (
    <section id="services" className="bg-white py-20 md:py-28 relative" aria-label="対応できる業務">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12 md:mb-16">
          <div>
            <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center gap-3 mb-2">
              <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
              {head.eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight">
              {head.headline}
            </h2>
            <div className="mt-2">
              <HandwrittenLine variant={2} color="#FDD000" width={120} align="left" />
            </div>
          </div>
          <p className="text-sm text-[#666] leading-relaxed max-w-[340px] text-pretty">
            {head.body}
          </p>
        </div>

        {groups ? (
          <div className="space-y-12 md:space-y-16">
            {groups.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-sm font-medium text-[#F08300] mb-6 md:mb-8">
                  {group.label}
                </h3>
                <ServiceCardGrid cards={group.cards} />
              </div>
            ))}
          </div>
        ) : cards ? (
          <ServiceCardGrid cards={cards} />
        ) : null}

        {head.footer && (
          <p className="mt-10 md:mt-12 text-sm text-[#666] leading-relaxed text-center text-pretty max-w-3xl mx-auto">
            {head.footer}
          </p>
        )}
      </div>
    </section>
  )
}
