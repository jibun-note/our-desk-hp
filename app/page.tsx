import HomeHeroSection from '@/components/sections/HomeHeroSection'
import HomeIntroSection from '@/components/sections/HomeIntroSection'
import StackCardsSectionBlock from '@/components/sections/StackCardsSectionBlock'
import StrengthSection from '@/components/sections/StrengthSection'
import { stackCards, strengthCards } from '@/lib/data/home'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/',
    'OurDesk株式会社',
    'OurDesk株式会社の公式ホームページ'
)

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* 横スクロール防止 */}
            <div className="overflow-x-hidden">
                <HomeHeroSection />
                <HomeIntroSection />
                <StrengthSection cards={strengthCards} />
            </div>
            <StackCardsSectionBlock cards={stackCards} />
        </main>
    )
}
