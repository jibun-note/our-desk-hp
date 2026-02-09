import HeroSection from '@/components/sections/HeroSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/privacy/',
    'Privacy Policy | OurDesk株式会社',
    'OurDesk株式会社のプライバシーポリシー'
)

export default function PrivacyPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Privacy Policy" description="プライバシーポリシー" />
            {/* コンテンツエリア */}
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon...</h2>
                    <p className="text-lg text-gray-600">このページは準備中です。</p>
                </div>
            </div>
        </>
    )
}
