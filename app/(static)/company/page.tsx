import HeroSection from '@/components/HeroSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/company/',
    'Company | OurDesk株式会社',
    'OurDesk株式会社の役員紹介、グループ体制、会社概要、アクセス情報をご紹介します。'
)

export default function CompanyPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Company" description="会社情報" />
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
