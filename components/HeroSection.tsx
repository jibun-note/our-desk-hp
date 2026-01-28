'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
    title: string
    description: string
}

export default function HeroSection({ title, description }: HeroSectionProps) {
    return (
        <section className="relative text-white py-12 px-4 md:py-20 md:px-6 overflow-hidden">
            {/* ベース背景 - ダークグレーから始まる */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

            {/* グラデーションオーバーレイ - プライマリカラーを重ねる */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700/40 via-primary-500/30 to-primary-600/40" />

            {/* 追加のグラデーションレイヤー - 深みを出す */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

            {/* 光の効果 */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="space-y-6"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-white/95 text-pretty leading-relaxed max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* 装飾的な要素 */}
                <motion.div
                    className="mt-12 flex gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.5 + i * 0.1,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
