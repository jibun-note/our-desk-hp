import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | OurDesk株式会社',
    description:
        'OurDesk株式会社の代表メッセージ、ミッション・ビジョン・バリューをご紹介します。',
}

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
