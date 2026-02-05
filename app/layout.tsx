import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'OurDesk株式会社',
    description: 'OurDesk株式会社の公式ホームページ',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={inter.className} suppressHydrationWarning>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
