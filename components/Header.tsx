'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

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
    const { scrollY } = useScroll()

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
                    {/* ロゴ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.08, opacity: 0.9 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                        <Link href="/" className="flex items-center">
                            <div className="relative size-20 md:size-32">
                                <Image
                                    src="/OurDesk_logo.png"
                                    alt="OurDesk株式会社"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* デスクトップメニュー */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.href}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.15, ease: 'easeOut' }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block"
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.15, ease: 'easeOut' }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

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

                {/* モバイルメニュー */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden py-4 border-t overflow-hidden"
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '-100%' }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}
