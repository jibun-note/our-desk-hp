'use client'

import Link from 'next/link'
import { Shippori_Mincho_B1 } from 'next/font/google'
import SplitText from '@/components/ui/SplitText'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import { cn } from '@/lib/utils'

const shipporiMincho = Shippori_Mincho_B1({
  weight: '500',
  subsets: ['latin'],
  preload: false,
})

/** イントロ見出し用 SplitText 設定（マウント後すぐに1文字ずつアニメ） */
const INTRO_SPLIT_PROPS = {
  delay: 70,
  duration: 1.1,
  ease: 'power3.out' as const,
  splitType: 'chars' as const,
  from: { opacity: 0, y: 36 },
  to: { opacity: 1, y: 0 },
  textAlign: 'center' as const,
  useScrollTrigger: false as const,
}

type Props = {
  eyebrow: string
  headline: string
  sub: string
  ctaPrimary: string
}

/**
 * サービスページのイントロセクション（他ページの RecruitIntroSection に相当）。
 * 斜め写真・見出し「本業に集中できていますか？」・手書きライン・CTA を表示。
 */
export default function ServiceIntroSection({
  eyebrow,
  headline,
  sub,
  ctaPrimary,
}: Props) {
  return (
    <section
      className="service-intro-section relative flex-1 overflow-hidden grid place-items-center py-3 md:py-6"
      style={{
        background: 'linear-gradient(to right, #fffdf5 42%, transparent 100%)',
      }}
      aria-label="BackDesk サービス"
    >
      {/* 中央テキストゾーン（スクロールなしで全表示・高さに合わせてコンパクトに） */}
      <div className="service-intro-content relative z-10 w-full max-w-6xl px-4 md:px-12 py-0 flex flex-col items-center text-center min-h-0">
        <p className="text-xs md:text-sm tracking-[0.18em] text-[#F08300] font-medium flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-5 flex-shrink-0">
          <span className="w-6 md:w-8 h-px bg-[#F08300] flex-shrink-0" aria-hidden />
          {eyebrow}
          <span className="w-6 md:w-8 h-px bg-[#F08300] flex-shrink-0" aria-hidden />
        </p>

        <h2
          className={cn(
            'text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] text-gray-900 text-balance mb-1.5 md:mb-2 max-w-4xl flex-shrink-0',
            shipporiMincho.className
          )}
        >
          {headline.split('\n').map((line, i) => (
            <div key={i} className="block">
              <SplitText
                text={line}
                tag="span"
                className="inline-block"
                {...INTRO_SPLIT_PROPS}
                startDelay={i * 0.45}
              />
            </div>
          ))}
        </h2>

        <div className="mb-2 md:mb-5 flex justify-center w-full flex-shrink-0">
          <HandwrittenLine
            variant={1}
            color="#FDD000"
            width={240}
            align="center"
            delayWhenInViewMs={2000}
          />
        </div>

        <p className="text-xs md:text-sm leading-relaxed text-[#666] max-w-[480px] mb-2 md:mb-5 text-pretty flex-shrink-0">
          {sub.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <div className="flex flex-wrap gap-3 justify-center items-center flex-shrink-0">
          <Link
            href="#contact"
            className="inline-block text-xs md:text-sm font-medium text-gray-900 bg-gradient-to-r from-[#FDD000] to-[#F08300] py-2.5 md:py-3 px-6 md:px-8 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            {ctaPrimary}
          </Link>
        </div>
      </div>
    </section>
  )
}
