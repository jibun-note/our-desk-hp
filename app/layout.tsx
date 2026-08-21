import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
    themeColor: '#F08300',
}

export const metadata: Metadata = {
    metadataBase: new URL('https://our-desk.co.jp'),
    title: {
        default: 'Our Desk株式会社',
        template: '%s | Our Desk株式会社',
    },
    description: 'Our Desk株式会社の公式ホームページ',
    openGraph: {
        title: 'Our Desk株式会社',
        description: 'Our Desk株式会社の公式ホームページ',
        type: 'website',
        locale: 'ja_JP',
        siteName: 'Our Desk株式会社',
        images: [
            {
                url: '/images/shared/our-desk-logo.png',
                width: 1200,
                height: 630,
                alt: 'Our Desk株式会社',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Desk株式会社',
        description: 'Our Desk株式会社の公式ホームページ',
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
        <html lang="ja" suppressHydrationWarning>
            <head>
                <JsonLd />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
