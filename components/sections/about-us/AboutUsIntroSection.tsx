import { Playfair_Display } from 'next/font/google'
import GradientHeading from '@/components/ui/GradientHeading'
import HandwrittenLine from '@/components/ui/HandwrittenLine'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], display: 'swap' })

export default function AboutUsIntroSection() {
  return (
    <>
      {/* アーチ型区切り: クリーム背景から白セクションへ */}
      <div className="relative z-[2] leading-none" style={{ marginTop: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: '80px' }}
          aria-hidden
        >
          <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* MVV 導入セクション */}
      <section
        className="relative bg-white py-12 md:py-20 px-4 md:px-6"
        aria-label="MVV について"
        style={{ marginTop: '-2px' }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <GradientHeading
            text="MVV"
            className={`${playfairDisplay.className} text-2xl md:text-4xl font-bold mb-2 text-balance`}
            as="h2"
          />
          <div className="flex justify-center mb-8">
            <HandwrittenLine
              variant={1}
              color="#FDD000"
              width={100}
              align="center"
              delayWhenInViewMs={2000}
            />
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-pretty" style={{ color: '#8a7460' }}>
            私たちの使命、目指す未来、大切にする価値観。<br />
            OurDeskが何を信じ、どこへ向かっているのか。<br className="hidden md:block" />
            <br className="md:hidden" />
            その想いをお伝えします。
          </p>
        </div>
      </section>
    </>
  )
}
