import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
    title: 'Recruit | OurDesk株式会社',
    description: 'OurDesk株式会社の採用情報をご紹介します。',
}

export default function RecruitPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Recruit" description="採用情報" />
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
