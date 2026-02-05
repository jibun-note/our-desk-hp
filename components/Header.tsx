'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import DeskTopHeader from './DeskTopHeader'

const menuItems = [
    { href: '/service', label: 'Service' },
    { href: '/about-us', label: 'About us' },
    { href: '/company', label: 'Company' },
    { href: '/recruit', label: 'Recruit' },
    { href: '/contact', label: 'Contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        setMounted(true)
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 10)
    })

    // モバイルメニューが開いている時、背景スクロールを無効化
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <motion.header
            className={cn(
                'bg-white sticky top-0 z-50 backdrop-blur-sm',
                isScrolled ? 'shadow-sm' : 'shadow-md'
            )}
            initial={{ opacity: 1 }}
            animate={{
                opacity: isScrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* ロゴ（モバイルのみ。PCは DeskTopHeader の StaggeredMenu 内で表示） */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="block shrink-0">
                            <motion.div
                                className="relative size-20 shrink-0"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.08, opacity: 0.9 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.15, ease: 'easeOut' }}
                            >
                                <Image
                                    src="/OurDesk_logo.png"
                                    alt="OurDesk株式会社"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </Link>
                        <h3 className="block text-gray-800 text-base md:text-lg font-semibold text-balance">
                            OurDesk株式会社
                        </h3>
                    </div>

                    {/* デスクトップ用スペーサー（DeskTopHeader は Portal で body に描画） */}
                    <div className="hidden md:block md:flex-1 md:min-h-16" aria-hidden="true" />

                    {/* モバイルメニューボタン */}
                    <motion.button
                        className="md:hidden text-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="メニュー"
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <svg
                            className="size-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* モバイルメニュー（Portal で body 直下に描画し、動画の上にオーバーレイ表示） */}
                {mounted &&
                    createPortal(
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    className="md:hidden fixed inset-0 top-16 z-40 overflow-auto bg-white/95 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <nav className="container mx-auto px-4 py-6">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.08,
                                                    ease: [0.4, 0, 0.2, 1],
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center py-3 text-gray-800 hover:text-primary-500 transition-colors duration-150 min-h-[44px]"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                    )}

                {/* デスクトップメニュー（Portal で body 直下に描画。backdrop-blur の containing block 影響を回避） */}
                {mounted &&
                    createPortal(
                        <div className="hidden md:block fixed inset-0 z-[60] pointer-events-none">
                            <DeskTopHeader />
                        </div>,
                        document.body
                    )}
            </nav>
        </motion.header>
    )
}
