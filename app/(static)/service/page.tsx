import Image from 'next/image'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import WaveDivider from '@/components/ui/WaveDivider'
import HeroSection from '@/components/sections/HeroSection'
import ServiceIntroSection from '@/components/sections/service/ServiceIntroSection'
import ServiceBridgeSection from '@/components/sections/service/ServiceBridgeSection'
import ServicePainSection from '@/components/sections/service/ServicePainSection'
import ServiceHowSection from '@/components/sections/service/ServiceHowSection'
import ServicePricingSection from '@/components/sections/service/ServicePricingSection'
import ServiceProcessSection from '@/components/sections/service/ServiceProcessSection'
import ServiceServicesSection from '@/components/sections/service/ServiceServicesSection'
import ServiceCaseStudiesSection from '@/components/sections/service/ServiceCaseStudiesSection'
import ServiceFaqSection from '@/components/sections/service/ServiceFaqSection'
import ServiceCtaSection from '@/components/sections/service/ServiceCtaSection'
import { createPageMetadata } from '@/lib/seo'
import {
  HERO,
  BRIDGE,
  PAIN,
  PAIN_ITEMS,
  HOW,
  HOW_ITEMS,
  PRICING_HEAD,
  PRICING_ITEMS,
  PROCESS_HEAD,
  PROCESS_STEPS,
  SERVICES_HEAD,
  SERVICES_GROUPS,
  CASE_STUDIES_HEAD,
  CASE_STUDIES,
  FAQ_HEAD,
  FAQ_ITEMS,
  CTA,
  IMG,
} from '@/lib/data/service'

export const metadata = createPageMetadata(
  '/service/',
  'BackDesk（サービス） | OurDesk株式会社',
  '「働きたい」人材があなたのバックオフィスを支えます。分単位から依頼可能。将来の正式採用にもつながる、新しい人材確保の仕組みです。'
)

export default function ServicePage() {
  return (
    <>
      <BreadcrumbJsonLdServer path="/service/" name="Service" />
      <main className="min-h-screen bg-white relative">

        {/* 1. Hero + Intro ── 白背景で一体化 */}
        <div className="relative z-[1] bg-white">
          <div className="relative min-h-[80vh] flex flex-col overflow-hidden">
            <div
              className="absolute top-0 right-[-5%] bottom-0 w-[58%] z-0 pointer-events-none"
              style={{ clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            >
              <Image
                src={IMG.hero}
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
              title="Service"
              description="OurDeskのバックオフィス支援"
              activeIndex={0}
              className="relative z-10 flex-shrink-0 flex flex-col justify-center"
            />
            <ServiceIntroSection
              eyebrow={HERO.eyebrow}
              headline={HERO.headline}
              sub={HERO.sub}
              ctaPrimary={HERO.ctaPrimary}
            />
          </div>
        </div>

        <WaveDivider bgColor="#ffffff" fillColor="#ffffff" />

        {/* 2. Bridge ── 「外注ではない」宣言 */}
        <ServiceBridgeSection
          headline={BRIDGE.headline}
          body={BRIDGE.body}
        />

        <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

        {/* 3. Pain ── 課題（業務負担 × 採用リスク） */}
        <ServicePainSection
          imageSrc={IMG.pain}
          imageAlt="バックオフィス業務"
          eyebrow={PAIN.eyebrow}
          headline={PAIN.headline}
          items={PAIN_ITEMS}
          ctaLabel={PAIN.cta}
        />

        {/* 4. How ── 仕組みの説明（上端はアーチ型で ServiceHowSection 内で描画） */}
        <ServiceHowSection head={HOW} items={HOW_ITEMS} />

        {/* 5. Pricing ── 料金 */}
        <ServicePricingSection head={PRICING_HEAD} items={PRICING_ITEMS} />

        <WaveDivider bgColor="#fffdf5" fillColor="#f5f0e6" flip />

        {/* 6. Process ── ご利用の流れ */}
        <ServiceProcessSection head={PROCESS_HEAD} steps={PROCESS_STEPS} imageSrc={IMG.pain} />

        <WaveDivider bgColor="#f5f0e6" fillColor="#fffdf5" />

        {/* 7. Services ── 対応業務一覧 */}
        <ServiceServicesSection head={SERVICES_HEAD} groups={SERVICES_GROUPS} />

        <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" flip />

        {/* 8. Case Studies ── 活用シーン */}
        <ServiceCaseStudiesSection head={CASE_STUDIES_HEAD} cases={CASE_STUDIES} />

        {/* 9. FAQ */}
        <ServiceFaqSection
          imageSrc={IMG.faq}
          imageAlt=""
          head={FAQ_HEAD}
          items={FAQ_ITEMS}
        />

        {/* 10. CTA */}
        <ServiceCtaSection
          headline={CTA.headline}
          headlineGrad={CTA.headlineGrad}
          sub={CTA.sub}
          buttonLabel={CTA.button}
          ctaBgImage={IMG.ctaBg}
        />

      </main>
    </>
  )
}
