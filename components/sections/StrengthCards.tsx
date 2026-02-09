'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react'

const MOBILE_BREAKPOINT = 768
const DRAG_THRESHOLD_PX = 60
const DRAG_CLAMP_RATIO = 0.5

/** 表示中＋隣1枚だけ画像をマウントするか */
function shouldLoadImage(index: number, currentSlide: number, total: number): boolean {
    if (total <= 0) return false
    const prev = (currentSlide - 1 + total) % total
    const next = (currentSlide + 1) % total
    return index === currentSlide || index === prev || index === next
}

export type StrengthCardItem = {
    step: number
    title: string
    description: string
    imagePath: string
    imagePosition: 'left' | 'right'
    imageAlt: string
}

type SlideItemProps = {
    slide: StrengthCardItem
    isActive: boolean
    currentSlide: number
    slideIndex: number
    slidesLength: number
}

type Props = {
    cards: StrengthCardItem[]
}

export default function StrengthCards({ cards }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isNarrow, setIsNarrow] = useState(true)
    const [dragX, setDragX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const touchStartX = useRef(0)
    const touchStartY = useRef(0)
    const dragXRef = useRef(0)
    dragXRef.current = dragX

    useLayoutEffect(() => {
        const check = () => setIsNarrow(typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    useLayoutEffect(() => {
        const el = carouselRef.current
        if (!el) return
        const update = () => setContainerWidth(el.offsetWidth)
        update()
        const ro = new ResizeObserver(update)
        ro.observe(el)
        return () => ro.disconnect()
    }, [isNarrow])

    // 自動スライド制御（スマホのみ）
    useEffect(() => {
        if (isHovered) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % cards.length)
        }, 7000)

        return () => clearInterval(interval)
    }, [isHovered, cards.length])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
    }, [])

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % cards.length)
    }, [cards.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
    }, [cards.length])

    const commitNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % cards.length)
        setDragX(0)
    }, [cards.length])

    const commitPrev = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
        setDragX(0)
    }, [cards.length])

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length === 0) return
        touchStartX.current = e.touches[0].clientX
        touchStartY.current = e.touches[0].clientY
        setIsDragging(true)
    }, [])

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (e.touches.length === 0) return
            const dx = e.touches[0].clientX - touchStartX.current
            const dy = e.touches[0].clientY - touchStartY.current
            const maxDrag = containerWidth * DRAG_CLAMP_RATIO
            const clamped = Math.max(-maxDrag, Math.min(maxDrag, dx))
            setDragX(clamped)
            if (Math.abs(dx) > Math.abs(dy)) e.preventDefault()
        },
        [containerWidth]
    )

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false)
        const dx = dragXRef.current
        if (dx < -DRAG_THRESHOLD_PX) commitNext()
        else if (dx > DRAG_THRESHOLD_PX) commitPrev()
        else setDragX(0)
    }, [commitNext, commitPrev])

    if (cards.length === 0) return null

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* スマホ版（768px未満） - ビューポート幅に応じて1つだけマウント */}
            {isNarrow && (
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

                    {/* スライドコンテナ（スワイプに追従するドラッグアニメーション）。ここで始まったスワイプは画像切り替えのみで次セクションへ飛ばない */}
                    <div
                        ref={carouselRef}
                        className="relative overflow-hidden touch-pan-y"
                        style={{ minHeight: '500px' }}
                        data-swipe-carousel
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onTouchCancel={handleTouchEnd}
                    >
                        {containerWidth > 0 ? (
                            <div
                                className="flex"
                                style={{
                                    width: cards.length * containerWidth,
                                    transform: `translateX(${-currentSlide * containerWidth + dragX}px)`,
                                    transition: isDragging ? 'none' : 'transform 0.25s ease-out',
                                    willChange: isDragging ? 'transform' : 'auto',
                                }}
                            >
                                {cards.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 px-4"
                                        style={{ width: containerWidth }}
                                    >
                                        <div className="relative h-full w-full">
                                            {/* 画像エリア（表示中＋隣のみ Image、他はプレースホルダー） */}
                                            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl mb-4">
                                                {shouldLoadImage(index, currentSlide, cards.length) ? (
                                                    <>
                                                        <Image
                                                            src={slide.imagePath}
                                                            alt={slide.imageAlt}
                                                            fill
                                                            className="object-cover object-center"
                                                            sizes="100vw"
                                                        />
                                                        {/* オーバーレイ - 上部を暗く（白文字の視認性向上） */}
                                                        <div
                                                            className="absolute inset-0"
                                                            style={{
                                                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, transparent 60%, rgba(0,0,0,0.6) 100%)'
                                                            }}
                                                        />
                                                    </>
                                                ) : (
                                                    <div className="absolute inset-0 bg-gray-200" aria-hidden />
                                                )}

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
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* 幅取得前のフォールバック */
                            <div className="absolute inset-0 px-4">
                                <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl mb-4 bg-gray-200" />
                            </div>
                        )}
                    </div>

                    {/* インジケーター - 説明文のすぐ下に固定配置（スライドの外） */}
                    <div className="flex justify-center gap-2 mt-2 px-4">
                        {cards.map((_, slideIndex) => (
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
            )}

            {/* PC版（768px以上） - ビューポート幅に応じて1つだけマウント */}
            {!isNarrow && (
            <div className="hidden md:block relative">
                {/* スライドコンテナ */}
                <div className="relative min-h-[500px]">
                    {cards.map((slide, index) => (
                        <SlideItem
                            key={index}
                            slide={slide}
                            isActive={index === currentSlide}
                            currentSlide={currentSlide}
                            slideIndex={index}
                            slidesLength={cards.length}
                        />
                    ))}
                </div>

                {/* ナビゲーション：前ボタン | インジケーター | 次ボタン */}
                <div className="flex items-center justify-between gap-4 mt-12 px-4 max-w-2xl mx-auto">
                    <button
                        onClick={prevSlide}
                        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                        aria-label="前のスライド"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* インジケーター（カプセル型） */}
                    <div className="flex gap-3 py-2">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className="transition-all duration-300 px-1"
                                aria-label={`スライド${index + 1}を表示`}
                            >
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12' : 'w-8 bg-gray-300'}`}
                                    style={index === currentSlide ? { background: '#F08300' } : undefined}
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                        aria-label="次のスライド"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}

// 個別のスライドコンポーネント（画像は表示中＋隣のみマウント）
const SlideItem = ({ slide, isActive, currentSlide, slideIndex, slidesLength }: SlideItemProps) => {
    const isImageLeft = slide.imagePosition === 'left'
    const showImage = shouldLoadImage(slideIndex, currentSlide, slidesLength)

    return (
        <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
                pointerEvents: isActive ? 'auto' : 'none'
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
            <div className="grid grid-cols-2 gap-0 h-full w-full">
                {/* 画像エリア（表示中＋隣のみ Image） */}
                <div
                    className={`relative h-full min-h-0 rounded-2xl overflow-hidden ${isImageLeft ? 'order-1' : 'order-2'
                        }`}
                >
                    {showImage ? (
                        <>
                            <Image
                                src={slide.imagePath}
                                alt={slide.imageAlt}
                                fill
                                className="object-cover object-center"
                                sizes="50vw"
                            />
                            {/* PC用の軽いグラデーションオーバーレイ */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 100%)'
                                }}
                            />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gray-200" aria-hidden />
                    )}
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

