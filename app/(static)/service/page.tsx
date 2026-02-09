import HeroSection from '@/components/sections/HeroSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/service/',
    'Service | OurDesk株式会社',
    'OurDesk株式会社が提供するサービスをご紹介します。'
)

export default function ServicePage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Service" description="OurDeskが提供するサービス" />
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
