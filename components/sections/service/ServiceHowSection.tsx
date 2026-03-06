import type { HowItem } from '@/lib/data/service'
import { cn } from '@/lib/utils'

type Head = {
  eyebrow: string
  headline: string
  sub: string
}

type Props = {
  head: Head
  items: readonly HowItem[]
}

export default function ServiceHowSection({ head, items }: Props) {
  const [accentItem, ...restItems] = items

  return (
    <section aria-label={head.eyebrow}>

      {/* ① ダーク帯 */}
      {accentItem && (
        <div className="bg-[#1a1209] pt-0 pb-0 relative overflow-hidden">

          {/* 上端：アーチ型（ベージュ→ダークの境界） */}
          <div className="w-full bg-[#fffdf5] leading-[0]">
            <svg
              viewBox="0 0 1440 72"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block w-full"
              aria-hidden
            >
              <path d="M0,72 C360,0 1080,0 1440,72 L1440,72 L0,72 Z" fill="#1a1209" />
            </svg>
          </div>

          {/* 背景グロー */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(240,131,0,0.08) 0%, transparent 60%)',
                'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(240,131,0,0.05) 0%, transparent 50%)',
              ].join(', '),
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center pb-14 md:pb-20">

            {/* ヘッド */}
            <p className="text-[11px] tracking-[0.22em] text-[#F08300] font-bold mb-4">
              {head.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-relaxed whitespace-pre-line mb-4">
              {head.headline}
            </h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-10">
              {head.sub}
            </p>

            {/* 区切り */}
            <div className="w-full h-px bg-white/10 mb-10" />

            {/* 01 ラベル */}
            <div className="flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] text-[#F08300] font-bold mb-6">
              <span className="block w-5 h-px bg-[#F08300]/40" />
              01
              <span className="block w-5 h-px bg-[#F08300]/40" />
            </div>

            {/* タイトル */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-relaxed mb-5">
              {accentItem.title}
            </h3>

            {/* 本文 */}
            <p className="text-base md:text-lg text-white/75 leading-[2] mb-12">
              {accentItem.body}
            </p>

            {/* 数値 */}
            <div className="flex justify-center border-t border-white/10 pt-9">
              {(
                [
                  { num: '0', unit: '円', label: '初期費用' },
                  { num: '0', unit: 'h', label: '最低時間' },
                  { num: '分', unit: '', label: '単位から使える' },
                ] as const
              ).map((s, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex-1 text-center px-4',
                    i < 2 && 'border-r border-white/10'
                  )}
                >
                  <div className="font-serif text-4xl md:text-5xl font-black text-[#F08300] leading-none mb-2">
                    {s.num}
                    {s.unit && (
                      <span className="text-2xl font-bold">{s.unit}</span>
                    )}
                  </div>
                  <div className="text-[13px] text-white/55 tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ③ テキスト列 */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto px-4 md:px-0 bg-white">
        {restItems.map((item, i) => (
          <div
            key={i}
            className={cn(
              'px-8 md:px-10 py-14 md:py-16',
              i < restItems.length - 1 &&
                'border-b md:border-b-0 md:border-r border-[#ece8de]'
            )}
          >
            {/* 番号 */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[13px] font-bold tracking-[0.12em] text-[#F08300]">
                0{i + 2}
              </span>
              <span className="block w-7 h-px bg-[#ece8de]" />
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-3">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
