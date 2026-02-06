'use client'

import { motion } from 'motion/react'
import React, { useCallback, useEffect, useState } from 'react'

// スライドの型定義
type Slide = {
    step: number
    title: string
    description: string
    imagePath: string
    imagePosition: 'left' | 'right'
}

// 個別のスライドコンポーネントの型定義
type SlideItemProps = {
    slide: Slide
    isActive: boolean
}

export default function StrengthCards() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const slides: Slide[] = [
        {
            step: 1,
            title: '学びの場を提供',
            description: '女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。経験がなくても、ここから始められます。',
            imagePath: '/images/AdobeStock_537141193.jpeg',
            imagePosition: 'left'
        },
        {
            step: 2,
            title: 'キャリア面談',
            description: '国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。あなたらしいキャリアを見つけましょう。',
            imagePath: '/images/AdobeStock_1408184906.jpeg',
            imagePosition: 'right'
        },
        {
            step: 3,
            title: '仕事につなげる',
            description: 'その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。',
            imagePath: '/images/AdobeStock_399162949.jpeg',
            imagePosition: 'left'
        }
    ]

    // 自動スライド制御（スマホのみ）
    useEffect(() => {
        if (isHovered) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isHovered])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
    }, [])

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* スマホ版（768px未満） */}
            <div className="block md:hidden">
                <div className="relative">
                    {/* 大胆な見出し - 画像の右上に薄いグレー（透明度80%）で配置 */}
                    <div className="absolute top-0 right-0 z-30 pr-4 pt-4">
                        <h2
                            className="text-5xl font-bold text-gray-100/80 text-right drop-shadow-lg"
                            style={{ lineHeight: '0.9', letterSpacing: '-0.02em' }}
                        >
                            OurDesk<br />の強み
                        </h2>
                    </div>

                    {/* スライドコンテナ */}
                    <div className="relative" style={{ minHeight: '500px' }}>
                        {slides.map((slide, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0 px-4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: index === currentSlide ? 1 : 0,
                                    x: index === currentSlide ? 0 : 20,
                                    pointerEvents: index === currentSlide ? 'auto' : 'none'
                                }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                            >
                                <div className="relative h-full">
                                    {/* 画像エリア */}
                                    <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl mb-4">
                                        {/* 背景画像 */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `url(${slide.imagePath})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />

                                        {/* オーバーレイ - 上部を暗く（白文字の視認性向上） */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, transparent 60%, rgba(0,0,0,0.6) 100%)'
                                            }}
                                        />

                                        {/* カード内タイトル - 下部 */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="mb-2">
                                                <span className="text-xs font-semibold tracking-wider text-yellow-400">
                                                    POINT {String(slide.step).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                                                {slide.title}
                                            </h3>
                                            <div
                                                className="w-12 h-1"
                                                style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                                            />
                                        </div>
                                    </div>

                                    {/* 説明文エリア - 画像の下 */}
                                    <div className="px-2 mb-4">
                                        <p className="text-base text-gray-700 leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* インジケーター - 説明文のすぐ下に固定配置（スライドの外） */}
                    <div className="flex justify-center gap-2 mt-2 px-4">
                        {slides.map((_, slideIndex) => (
                            <button
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="transition-all duration-300 p-1"
                                aria-label={`スライド${slideIndex + 1}を表示`}
                            >
                                <div
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${slideIndex === currentSlide ? 'scale-110' : 'bg-gray-300'}`}
                                    style={slideIndex === currentSlide ? { background: '#F08300' } : undefined}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* PC版（768px以上） - 既存の全幅左右交互レイアウト */}
            <div className="hidden md:block relative">
                {/* スライドコンテナ */}
                <div className="relative min-h-[500px]">
                    {slides.map((slide, index) => (
                        <SlideItem
                            key={index}
                            slide={slide}
                            isActive={index === currentSlide}
                        />
                    ))}
                </div>

                {/* インジケーター（カプセル型） */}
                <div className="flex justify-center gap-3 mt-12 px-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="transition-all duration-300 py-2 px-1"
                            aria-label={`スライド${index + 1}を表示`}
                        >
                            <div
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12' : 'w-8 bg-gray-300'}`}
                                style={index === currentSlide ? { background: '#F08300' } : undefined}
                            />
                        </button>
                    ))}
                </div>

                {/* ナビゲーションボタン */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
                    aria-label="前のスライド"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
                    aria-label="次のスライド"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// 個別のスライドコンポーネント
const SlideItem = ({ slide, isActive }: SlideItemProps) => {
    const isImageLeft = slide.imagePosition === 'left'

    return (
        <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
                pointerEvents: isActive ? 'auto' : 'none'
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="grid grid-cols-2 gap-0 h-full w-full">
                {/* 画像エリア */}
                <div
                    className={`relative h-auto ${isImageLeft ? 'order-1' : 'order-2'
                        }`}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${slide.imagePath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    {/* PC用の軽いグラデーションオーバーレイ */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 100%)'
                        }}
                    />
                </div>

                {/* PC時の説明エリア */}
                <div
                    className={`bg-white flex items-center justify-center p-16 ${isImageLeft ? 'order-2' : 'order-1'
                        }`}
                >
                    <div className="max-w-xl">
                        <div className="mb-4">
                            <span
                                className="text-sm font-semibold tracking-wider"
                                style={{ color: '#F08300' }}
                            >
                                POINT 0{slide.step}
                            </span>
                        </div>
                        <h3 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
                            {slide.title}
                        </h3>
                        <div
                            className="w-16 h-1 mb-6"
                            style={{
                                background: 'linear-gradient(to right, #FDD000, #F08300)'
                            }}
                        />
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {slide.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

