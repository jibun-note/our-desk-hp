'use client'

import Image from 'next/image'
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
  imageSrc: string
  imageAlt: string
  eyebrow: string
  headline: string
  sub: string
  /** BackDeskの立ち位置（OurDeskのシステムとして一言紹介）。省略可 */
  backDeskIntro?: string
  ctaPrimary: string
}

/**
 * サービスページのイントロセクション（他ページの RecruitIntroSection に相当）。
 * 斜め写真・見出し「本業に集中できていますか？」・手書きライン・CTA を表示。
 */
export default function ServiceIntroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  sub,
  backDeskIntro,
  ctaPrimary,
}: Props) {
  return (
    <section
      className="relative min-h-[80vh] overflow-hidden bg-[#fffdf5] grid place-items-center py-16 md:py-24"
      aria-label="BackDesk サービス"
    >
      {/* 斜めクリップの写真（右下に流れ込む） */}
      <div
        className="absolute top-0 right-[-5%] bottom-0 w-[58%] z-0"
        style={{ clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1400}
          height={900}
          className="w-full h-full object-cover object-[60%_20%] block"
          priority
          sizes="58vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #fffdf5 0%, rgba(255,253,245,0.3) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* 中央テキストゾーン */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 py-12 flex flex-col items-center text-center">
        <p className="text-[0.7rem] tracking-[0.18em] text-[#F08300] font-medium flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#F08300] flex-shrink-0" aria-hidden />
          {eyebrow}
          <span className="w-8 h-px bg-[#F08300] flex-shrink-0" aria-hidden />
        </p>

        <h2
          className={cn(
            'text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] text-gray-900 text-balance mb-3 max-w-4xl',
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

        <div className="mb-8 flex justify-center w-full">
          <HandwrittenLine
            variant={1}
            color="#FDD000"
            width={280}
            align="center"
            delayWhenInViewMs={1800}
          />
        </div>

        <p className="text-sm md:text-base leading-relaxed text-[#666] max-w-[480px] mb-4 text-pretty">
          {sub.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        {backDeskIntro && (
          <p className="text-xs md:text-sm leading-relaxed text-[#888] max-w-[480px] mb-10 text-pretty">
            {backDeskIntro}
          </p>
        )}
        {!backDeskIntro && <div className="mb-10" />}

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href="#contact"
            className="inline-block text-sm font-medium text-gray-900 bg-gradient-to-r from-[#FDD000] to-[#F08300] py-3.5 px-8 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            {ctaPrimary}
          </Link>
        </div>
      </div>
    </section>
  )
}
