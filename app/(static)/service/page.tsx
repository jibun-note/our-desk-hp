import BlobDecoration from '@/components/ui/BlobDecoration'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import WaveDivider from '@/components/ui/WaveDivider'
import HeroSection from '@/components/sections/HeroSection'
import ServiceIntroSection from '@/components/sections/service/ServiceIntroSection'
import ServiceAnchorSection from '@/components/sections/service/ServiceAnchorSection'
import ServicePainSection from '@/components/sections/service/ServicePainSection'
import ServiceServicesSection from '@/components/sections/service/ServiceServicesSection'
import ServiceBackDeskReasonsSection from '@/components/sections/service/ServiceBackDeskReasonsSection'
import ServiceProcessSection from '@/components/sections/service/ServiceProcessSection'
import ServiceCaseStudiesSection from '@/components/sections/service/ServiceCaseStudiesSection'
import ServiceStatsSection from '@/components/sections/service/ServiceStatsSection'
import ServiceFaqSection from '@/components/sections/service/ServiceFaqSection'
import ServiceCtaSection from '@/components/sections/service/ServiceCtaSection'
import { createPageMetadata } from '@/lib/seo'
import {
  HERO,
  ANCHOR_ITEMS,
  PAIN,
  PAIN_ITEMS,
  SERVICES_HEAD,
  SERVICES_GROUPS,
  BACKDESK_REASONS,
  PROCESS_HEAD,
  PROCESS_STEPS,
  CASE_STUDIES_HEAD,
  CASE_STUDIES,
  STATS,
  STATS_HEAD,
  FAQ_HEAD,
  FAQ_ITEMS,
  CTA,
  IMG,
} from '@/lib/data/service'

export const metadata = createPageMetadata(
  '/service/',
  'BackDesk（サービス） | OurDesk株式会社',
  'メール対応・スケジュール調整・請求書処理など、本業に集中したい方のバックオフィスをBackDeskが支えます。月数時間からご利用可能。'
)

export default function ServicePage() {
  return (
    <>
      <BreadcrumbJsonLdServer path="/service/" name="Service" />
      <main className="min-h-screen bg-white relative">
        {/* Blob をヒーロー〜Anchor にかけてはみ出して表示（セクション超え） */}
        <div className="relative">
          <BlobDecoration
            shape="H"
            drift="float-b"
            fill="rgba(253,208,0,0.12)"
            className="absolute top-[-12vw] md:top-[-5vw] left-[-28vw] md:left-[-15vw] w-[75vw] h-[110vw] md:w-[45vw] md:h-[70vw] pointer-events-none z-10"
          />
          {/* ヒーロー＋イントロをクリーム背景で一体に */}
          <div className="relative z-[1] bg-[#fffdf5]">
            <HeroSection
              title="Service"
              description="OurDeskのバックオフィス支援"
              activeIndex={0}
            />
            <ServiceIntroSection
              imageSrc={IMG.hero}
              imageAlt="チームで働く様子"
              eyebrow={HERO.eyebrow}
              headline={HERO.headline}
              sub={HERO.sub}
              backDeskIntro={HERO.backDeskIntro}
              ctaPrimary={HERO.ctaPrimary}
            />
          </div>

          <div className="relative z-0">
            <ServiceAnchorSection items={ANCHOR_ITEMS} />
          </div>
        </div>

        <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

        <ServicePainSection
          imageSrc={IMG.pain}
          imageAlt="バックオフィス業務"
          eyebrow={PAIN.eyebrow}
          headline={PAIN.headline}
          items={PAIN_ITEMS}
          ctaLabel={PAIN.cta}
        />

        <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" flip />

        <ServiceServicesSection head={SERVICES_HEAD} groups={SERVICES_GROUPS} />

        <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

        <ServiceBackDeskReasonsSection
          eyebrow={BACKDESK_REASONS.eyebrow}
          headline={BACKDESK_REASONS.headline}
          sub={BACKDESK_REASONS.sub}
          items={BACKDESK_REASONS.items}
        />

        <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

        <ServiceProcessSection head={PROCESS_HEAD} steps={PROCESS_STEPS} />

        <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" flip />

        <ServiceCaseStudiesSection head={CASE_STUDIES_HEAD} cases={CASE_STUDIES} />

        <ServiceStatsSection stats={STATS} head={STATS_HEAD} />

        <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

        <ServiceFaqSection
          imageSrc={IMG.faq}
          imageAlt=""
          head={FAQ_HEAD}
          items={FAQ_ITEMS}
        />

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
