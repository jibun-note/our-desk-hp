import type { PainItem } from '@/lib/data/service'

const ROW_BGS = ['#ffffff', '#ffffff', '#ffffff'] as const

type Props = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  headline: string
  items: readonly PainItem[]
}

export default function ServicePainSection({
  eyebrow,
  headline,
  items,
}: Props) {
  return (
    <>
      {/* ① 上端wave（Pain セクション背景すべて白） */}
      <div className="leading-[0]" style={{ background: '#ffffff' }}>
        <svg
          viewBox="0 0 1440 48"
          className="block w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,0 C480,48 960,0 1440,32 L1440,48 L0,48 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ② メインsection（背景すべて白） */}
      <section style={{ background: '#ffffff' }} aria-label="こんな悩みありませんか">
        {/* ヘッダー（eyebrow + headline） */}
        <div className="max-w-4xl mx-auto px-12 pt-14 pb-12 text-center">
          {eyebrow && (
            <p className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line">
            {headline}
          </h2>
        </div>

        {/* 3行のrow */}
        {items.slice(0, 3).map((item, index) => (
          <div
            key={index}
            style={{ background: ROW_BGS[index] }}
            className="border-t border-[#E5E0D7] relative"
          >
            <div className="max-w-4xl mx-auto px-12 py-11 relative">
              <p className="text-[17px] font-bold text-gray-900 leading-relaxed mb-2">
                {item.title}
              </p>
              <p className="text-sm text-[#888] leading-[1.95] pr-20">
                {item.body}
              </p>
              <span
                className="absolute right-12 bottom-3 select-none pointer-events-none"
                style={{
                  fontSize: 64,
                  fontWeight: 200,
                  color: 'rgba(240, 131, 0, 0.13)',
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}

        {/* CTAエリア（ボタンは非表示） */}
        <div className="py-10 text-center" style={{ background: '#ffffff' }} />

      </section>
    </>
  )
}
