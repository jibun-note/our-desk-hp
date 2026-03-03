'use client'

import Link from 'next/link'
import BlobDecoration from '@/components/ui/BlobDecoration'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import WaveClipLayer from '@/components/sections/WaveClipLayer'

type Props = {
  headline: string
  headlineGrad: string
  sub: string
  buttonLabel: string
  ctaBgImage: string
}

export default function ServiceCtaSection({
  headline,
  headlineGrad,
  sub,
  buttonLabel,
  ctaBgImage,
}: Props) {
  const parts = headline.split(headlineGrad)
  const headlineBefore = parts[0] ?? ''
  const headlineAfter = parts[1] ?? ''

  return (
    <section
      id="contact"
      className="relative z-[14] mt-20 md:mt-28 min-h-[32rem] md:min-h-[36rem] bg-white"
      aria-label="お問い合わせ"
    >
      <WaveClipLayer idPrefix="service-cta">
        <div className="absolute inset-0">
          <img
            src={ctaBgImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-orange-900/70" />
        </div>
      </WaveClipLayer>

      <div className="relative z-10 flex items-center justify-center min-h-[32rem] md:min-h-[36rem] px-6 py-16 md:px-8 md:py-20 overflow-hidden">
        <BlobDecoration
          shape="K"
          drift="float-f"
          fill="rgba(249, 115, 22, 0.2)"
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] max-w-[400px] max-h-[400px] pointer-events-none"
        />

        <div className="relative z-10 max-w-2xl text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance whitespace-pre-line">
            {headlineBefore}
            <span className="text-gradient-hero">{headlineGrad}</span>
            {headlineAfter}
          </h2>
          <div className="flex justify-center">
            <HandwrittenLine variant={2} color="#FDD000" width={100} align="center" />
          </div>
          <p className="text-white/95 text-base md:text-lg leading-relaxed text-pretty">
            {sub}
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-block bg-white text-orange-600 px-10 py-4 md:px-12 text-base md:text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-transform min-h-[48px] flex items-center justify-center mx-auto"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
