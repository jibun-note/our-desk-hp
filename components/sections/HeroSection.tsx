'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
    title: string
    description: string
}

export default function HeroSection({ title, description }: HeroSectionProps) {
    const reduceMotion = useReducedMotion()
    const duration = reduceMotion ? 0 : 0.35

    return (
        <section className="relative text-gray-800 py-5 px-4 md:py-10 md:px-6 overflow-hidden">
            {/* ベース背景 - 明るい暖色（黒・グレーなし） */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200" />

            {/* グラデーションオーバーレイ - イエロー〜オレンジ */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 via-primary-400/45 to-primary-600/45" />

            {/* 軽いトップのグラデーション（白寄りで奥行き） */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent" />

            {/* 光の効果 - オレンジとイエロー */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/35 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="container mx-auto max-w-4xl relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration, ease: 'easeOut' }}
            >
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-800 text-pretty leading-relaxed max-w-3xl">
                        {description}
                    </p>
                </div>

                <div className="mt-8 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                'w-2 h-2 rounded-full',
                                i === 1 ? 'bg-primary-700' : 'bg-gray-800'
                            )}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
