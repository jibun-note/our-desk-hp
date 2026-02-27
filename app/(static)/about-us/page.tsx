import WaveDivider from '@/components/ui/WaveDivider'
import HeroSection from '@/components/sections/HeroSection'
import AboutUsIntroSection from '@/components/sections/about-us/AboutUsIntroSection'
import AboutUsMissionSection from '@/components/sections/about-us/AboutUsMissionSection'
import AboutUsVisionSection from '@/components/sections/about-us/AboutUsVisionSection'
import AboutUsValueSection from '@/components/sections/about-us/AboutUsValueSection'
import AboutUsMessageSection from '@/components/sections/about-us/AboutUsMessageSection'
import AboutUsClosingSection from '@/components/sections/about-us/AboutUsClosingSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'
import { ABOUT_US_VALUE_ITEMS } from '@/lib/data/aboutUs'

export const metadata = createPageMetadata(
    '/about-us/',
    'About Us | OurDesk株式会社',
    'OurDesk株式会社の代表メッセージとMVV（Mission、Vision、Value）をご紹介します。'
)

export default function AboutUsPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/about-us/" name="About Us" />
            <main className="min-h-screen bg-white relative">
                {/* ① HeroSection + 直下セクション: 白背景とグラデーションぼかしで一体化 */}
                <div className="relative z-[1] bg-white overflow-hidden">
                    {/* ヒーロー〜MVV導入にかけてのグラデーションぼかし */}
                    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-yellow-50 rounded-full blur-3xl" />
                    </div>
                    <HeroSection title="About Us" description="OurDeskについて" activeIndex={1} />
                    <AboutUsIntroSection />
                </div>

                {/* ② Mission（白）。同色のため Wave なし */}
                <AboutUsMissionSection />

                {/* Wave: 白 → クリーム */}
                <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" className="z-[4]" />

                {/* Vision（クリーム） */}
                <AboutUsVisionSection />

                {/* Wave: クリーム → 白 */}
                <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" className="z-[6]" />

                {/* Value（白） */}
                <AboutUsValueSection items={ABOUT_US_VALUE_ITEMS} />

                {/* Wave: 白 → やや白に近いクリーム */}
                <WaveDivider bgColor="#ffffff" fillColor="#fefcf7" className="z-[8]" />

                {/* 代表メッセージ（#fefcf7） */}
                <AboutUsMessageSection />

                {/* ④ 締めくくり（ArchClip）。直前に WaveDivider を置かない */}
                <AboutUsClosingSection />
            </main>
        </>
    )
}
