import Image from 'next/image'
import HeroSection from '@/components/sections/HeroSection'
import ServiceIntroSection from '@/components/sections/service/ServiceIntroSection'

type Props = {
  heroImageSrc: string
  heroTitle: string
  heroDescription: string
  activeIndex: number
  introEyebrow: string
  introHeadline: string
  introSub: string
  introCtaPrimary: string
}

export default function ServiceHeroBlockSection({
  heroImageSrc,
  heroTitle,
  heroDescription,
  activeIndex,
  introEyebrow,
  introHeadline,
  introSub,
  introCtaPrimary,
}: Props) {
  return (
    <section
      className="relative z-[1] bg-white"
      aria-label="BackDesk サービス ファーストビュー"
    >
      <div className="relative min-h-[80vh] flex flex-col overflow-hidden">
        <div
          className="absolute top-0 right-[-5%] bottom-0 w-[58%] z-0 pointer-events-none"
          style={{ clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <Image
            src={heroImageSrc}
            alt=""
            width={1400}
            height={900}
            className="w-full h-full object-cover object-[60%_20%] block"
            priority
            sizes="58vw"
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, #ffffff 0%, transparent 25%), linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.3) 40%, transparent 70%)',
            }}
          />
        </div>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          activeIndex={activeIndex}
          className="relative z-10 flex-shrink-0 flex flex-col justify-center"
        />
        <ServiceIntroSection
          eyebrow={introEyebrow}
          headline={introHeadline}
          sub={introSub}
          ctaPrimary={introCtaPrimary}
        />
      </div>
    </section>
  )
}
