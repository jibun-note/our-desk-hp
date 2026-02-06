import HeroSection from '@/components/HeroSection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/contact/',
    'Contact | OurDesk株式会社',
    'OurDesk株式会社へのお問い合わせはこちらから。'
)

export default function ContactPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <HeroSection title="Contact" description="お問い合わせはこちら" />
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
