import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
    title: 'Contact | OurDesk株式会社',
    description: 'OurDesk株式会社へのお問い合わせはこちらから。',
}

export default function ContactPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Contact" description="ご質問やご相談がございましたら、お気軽にご連絡ください" />
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
