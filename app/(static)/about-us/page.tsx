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
            <main className="min-h-screen bg-white relative overflow-x-clip">
                {/* ① HeroSection + MVV導入: クリーム背景。右 blob はラッパー内でセクションをまたいで表示 */}
                <div className="relative z-[1] bg-[#fffdf5] overflow-visible">
                    {/* ヒーロー用 blob: 右 */}
                    <div
                        className="absolute pointer-events-none z-0 about-us-blob-1"
                        style={{
                            top: '-520px', right: '-120px',
                            width: '480px', height: '85vh',
                            minHeight: '600px',
                            borderRadius: '52% 48% 50% 50% / 50% 50% 48% 52%',
                            background: 'linear-gradient(135deg, rgba(253,208,0,0.18), rgba(240,131,0,0.10))',
                        }}
                        aria-hidden
                    />
                    {/* 下の方のセクション用 blob: 左 */}
                    <div
                        className="absolute pointer-events-none z-0 about-us-blob-2"
                        style={{
                            top: '200px', left: '-100px',
                            width: '280px', height: '280px',
                            borderRadius: '52% 48% 50% 50% / 50% 50% 48% 52%',
                            background: 'linear-gradient(135deg, rgba(240,131,0,0.08), rgba(253,208,0,0.06))',
                        }}
                        aria-hidden
                    />
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
