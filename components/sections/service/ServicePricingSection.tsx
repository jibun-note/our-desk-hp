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

export default function ServicePricingSection({ head, items }: Props) {
  return (
    <section className="bg-[#fffdf5] py-20 md:py-32" aria-label={head.eyebrow}>
      <div className="container mx-auto max-w-5xl px-4 md:px-8">

        {/* ヘッド */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-3">
            {head.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-3">
            {head.headline}
          </h2>
          <p className="text-sm md:text-base text-[#666] leading-relaxed">
            {head.sub}
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ece8de] px-6 py-7 flex flex-col"
            >
              <p className="text-xs tracking-[0.15em] text-[#F08300] font-medium mb-2">
                {item.rank}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-3xl md:text-4xl text-gray-900">
                  {item.price}
                </span>
                <span className="text-sm text-[#999]">円/h（税別）</span>
              </div>
              <p className="text-xs text-[#888] mb-4 leading-relaxed border-b border-[#ece8de] pb-4">
                {item.description}
              </p>
              <ul className="space-y-1.5">
                {item.examples.map((ex, j) => (
                  <li key={j} className="text-sm text-[#555] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F08300] flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <p className="text-xs text-[#999] leading-relaxed whitespace-pre-line">
          {head.note}
        </p>

      </div>
    </section>
  )
}
