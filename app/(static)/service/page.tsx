import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import WaveDivider from '@/components/ui/WaveDivider'
import ServiceHeroBlockSection from '@/components/sections/service/ServiceHeroBlockSection'
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
            <div className="min-h-screen bg-white relative">
                {/* 横スクロール防止 */}
                <div className="overflow-x-hidden">
                {/* 1. Hero ── ファーストビュー */}
                <ServiceHeroBlockSection
                    heroImageSrc={IMG.hero}
                    heroTitle="Service"
                    heroDescription="OurDeskのバックオフィス支援"
                    activeIndex={0}
                    introEyebrow={HERO.eyebrow}
                    introHeadline={HERO.headline}
                    introSub={HERO.sub}
                    introCtaPrimary={HERO.ctaPrimary}
                />

                <WaveDivider bgColor="#ffffff" fillColor="#ffffff" />

                {/* 2. Pain */}
                <div style={{ background: '#ffffff' }}>
                    <ServicePainSection
                        imageSrc={IMG.pain}
                        imageAlt="バックオフィス業務"
                        eyebrow={PAIN.eyebrow}
                        headline={PAIN.headline}
                        items={PAIN_ITEMS}
                    />
                </div>

                <WaveDivider bgColor="#ffffff" fillColor="#ffffff" />

                {/* 3. Bridge */}
                <ServiceBridgeSection
                    headline={BRIDGE.headline}
                    body={BRIDGE.body}
                    ctaLabel={BRIDGE.ctaLabel}
                    ctaHref={BRIDGE.ctaHref}
                />

                <WaveDivider bgColor="#ffffff" fillColor="#ffffff" />

                {/* 4. How */}
                <div style={{ background: '#ffffff' }}>
                    <ServiceHowSection head={HOW} items={HOW_ITEMS} />
                </div>

                <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

                {/* 4. Services */}
                <div style={{ background: '#fffdf5' }}>
                    <ServiceServicesSection head={SERVICES_HEAD} groups={SERVICES_GROUPS} />
                </div>

                <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" />

                {/* 5. Pricing */}
                <ServicePricingSection head={PRICING_HEAD} items={PRICING_ITEMS} />

                <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

                {/* 6. Case Studies */}
                <div style={{ background: '#fffdf5' }}>
                    <ServiceCaseStudiesSection head={CASE_STUDIES_HEAD} cases={CASE_STUDIES} />
                </div>

                <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" />

                {/* 7. Process */}
                <div style={{ background: '#ffffff' }}>
                    <ServiceProcessSection head={PROCESS_HEAD} steps={PROCESS_STEPS} imageSrc={IMG.process} />
                </div>

                <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" />

                {/* 8. FAQ */}
                <ServiceFaqSection
                    imageSrc={IMG.faq}
                    imageAlt=""
                    head={FAQ_HEAD}
                    items={FAQ_ITEMS}
                />

                {/* 9. CTA */}
                <ServiceCtaSection
                    headline={CTA.headline}
                    headlineGrad={CTA.headlineGrad}
                    sub={CTA.sub}
                    buttonLabel={CTA.button}
                    ctaBgImage={IMG.ctaBg}
                />
                </div>

            </div>
        </>
    )
}
