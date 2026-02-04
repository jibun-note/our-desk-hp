'use client'

import { motion, useAnimationControls } from 'motion/react'
import React, { useCallback, useEffect, useState } from 'react'

type CardProps = {
    index: number
    title: string
    description: React.ReactNode
    imagePath: string
    isActive: boolean
}

const Card = ({ index, title, description, imagePath, isActive }: CardProps) => {
    return (
        <motion.div
            className={`group relative flex-shrink-0 w-full h-[500px] md:h-[600px] transition-all duration-500`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
                opacity: isActive ? 1 : 0.6,
                scale: isActive ? 1 : 0.98
            }}
            transition={{ duration: 0.6 }}
        >
            {/* カード本体 */}
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
                {/* 背景画像コンテナ */}
                <motion.div
                    className="absolute inset-0 z-10"
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* 背景画像 */}
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url(${imagePath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />

                    {/* ダークグラデーションオーバーレイ */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
                        }}
                    />
                </motion.div>

                {/* コンテンツ - 下部に配置 */}
                <div className="relative z-20 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-end">
                    {/* 数字インジケーター */}
                    <motion.div
                        className="mb-4 md:mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span
                            className="font-light text-lg md:text-xl tracking-wider"
                            style={{ color: '#FDD000' }}
                        >
                            0{index + 1}
                        </span>
                    </motion.div>

                    {/* タイトル - 白文字 */}
                    <motion.h3
                        className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight max-w-2xl text-balance"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0.8, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {title}
                    </motion.h3>

                    {/* アンダーライン */}
                    <motion.div
                        className="w-16 md:w-20 h-1 mb-4 md:mb-6"
                        style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '5rem' : '3rem' }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    />

                    {/* 説明文 */}
                    <motion.div
                        className="text-base md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {description}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default function StrengthCards() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const controls = useAnimationControls()

    const cards = [
        {
            title: '学びの場を提供',
            description: '女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。',
            imagePath: 'images/AdobeStock_1408184906_Preview.jpeg',
        },
        {
            title: 'キャリア面談',
            description: '国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。',
            imagePath: 'images/AdobeStock_537141193_Preview.jpeg',
        },
        {
            title: '仕事につなげる',
            description: 'その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。',
            imagePath: 'images/AdobeStock_399162949_Preview.jpeg',
        },
    ]

    useEffect(() => {
        if (isHovered) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isHovered, cards.length])

    useEffect(() => {
        controls.start({
            x: `-${(currentIndex * 100) / cards.length}%`,
            transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
        })
    }, [currentIndex, controls])

    const handleDotClick = useCallback((index: number) => {
        setCurrentIndex(index)
    }, [])

    return (
        <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden py-8">
                <motion.div className="flex" animate={controls} style={{ width: `${cards.length * 100}%` }}>
                    {cards.map((card, index) => (
                        <div key={index} className="w-full px-4 md:px-8" style={{ width: `${100 / cards.length}%` }}>
                            <Card
                                index={index}
                                title={card.title}
                                description={card.description}
                                imagePath={card.imagePath}
                                isActive={index === currentIndex}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* インジケーター */}
            <div className="flex justify-center gap-3 mt-8">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className="group/dot relative"
                        aria-label={`スライド${index + 1}を表示`}
                    >
                        <div
                            className={`h-0.5 rounded-full transition-all duration-500 ${index === currentIndex
                                ? 'w-12'
                                : 'w-8 bg-gray-300 group-hover/dot:bg-gray-400'
                                }`}
                            style={index === currentIndex ? { background: '#F08300' } : undefined}
                        />
                    </button>
                ))}
            </div>

            {/* ナビゲーションボタン */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm z-40"
                aria-label="前のスライド"
            >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm z-40"
                aria-label="次のスライド"
            >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
