'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { createPortal } from 'react-dom'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from '@/lib/utils'

const StaggerdMenuHeader = dynamic(() => import('./StaggerdMenuHeader'), { ssr: false })

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        setMounted(true)
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const next = latest > 10
        setIsScrolled((prev) => (prev === next ? prev : next))
    })

    return (
        <motion.header
            className={cn(
                'bg-white sticky top-0 z-50',
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
                    {/* スペーサー（DeskTopHeader は Portal で body に描画し、全画面で同じメニューバーを表示） */}
                    <div className="flex-1 min-h-16" aria-hidden="true" />
                </div>

                {/* メニューバー（モバイル・デスクトップ共通。Portal で body 直下に描画） */}
                {mounted &&
                    createPortal(
                        <div className="fixed inset-0 z-[60] pointer-events-none">
                            <StaggerdMenuHeader />
                        </div>,
                        document.body
                    )}
            </nav>
        </motion.header>
    )
}
