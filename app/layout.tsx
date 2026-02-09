import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://our-desk.co.jp'),
    themeColor: '#F08300',
    title: {
        default: 'OurDesk株式会社',
        template: '%s | OurDesk株式会社',
    },
    description: 'OurDesk株式会社の公式ホームページ',
    openGraph: {
        title: 'OurDesk株式会社',
        description: 'OurDesk株式会社の公式ホームページ',
        type: 'website',
        locale: 'ja_JP',
        siteName: 'OurDesk株式会社',
        images: [
            {
                url: '/images/shared/our-desk-logo.png',
                width: 1200,
                height: 630,
                alt: 'OurDesk株式会社',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OurDesk株式会社',
        description: 'OurDesk株式会社の公式ホームページ',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <head>
                <JsonLd />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
