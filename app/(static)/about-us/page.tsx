import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
    title: 'About Us | OurDesk株式会社',
    description: 'OurDesk株式会社の代表メッセージとMVV（Mission、Vision、Value）をご紹介します。',
}

export default function AboutUsPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="About Us" description="OurDeskについて" />
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
