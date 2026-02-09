'use client'

import Image from 'next/image'
import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const MOBILE_BREAKPOINT = 768

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

type Props = {
    cards: StrengthCardItem[]
}

/** モバイル用カード（1スライド分）。showImage が true のときだけ Image をマウントして初回スワイプの重さを軽減 */
function MobileCard({
    slide,
    isActive,
    showImage,
}: {
    slide: StrengthCardItem
    isActive: boolean
    showImage: boolean
}) {
    return (
        <div className="relative h-full w-full px-4">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl mb-4">
                {showImage ? (
                    <>
                        <Image
                            src={slide.imagePath}
                            alt={slide.imageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, transparent 60%, rgba(0,0,0,0.6) 100%)',
                            }}
                        />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gray-200" aria-hidden />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                        <span className="text-xs font-semibold tracking-wider text-yellow-400">
                            POINT {String(slide.step).padStart(2, '0')}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-3">{slide.title}</h3>
                    <div
                        className="w-12 h-1"
                        style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                    />
                </div>
            </div>
            <div className="px-2 mb-4">
                <p className="text-base text-gray-700 leading-relaxed">{slide.description}</p>
            </div>
        </div>
    )
}

/** デスクトップ用スライド（2カラム・画像＋テキスト） */
function DesktopSlide({
    slide,
    showImage,
}: {
    slide: StrengthCardItem
    showImage: boolean
}) {
    const isImageLeft = slide.imagePosition === 'left'
    return (
        <div className="grid grid-cols-2 gap-0 h-full w-full min-h-[500px]">
            <div
                className={cn(
                    'relative h-full min-h-0 rounded-2xl overflow-hidden',
                    isImageLeft ? 'order-1' : 'order-2'
                )}
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
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 100%)',
                            }}
                        />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gray-200" aria-hidden />
                )}
            </div>
            <div
                className={cn(
                    'bg-white flex items-center justify-center p-16',
                    isImageLeft ? 'order-2' : 'order-1'
                )}
            >
                <div className="max-w-xl">
                    <div className="mb-4">
                        <span className="text-sm font-semibold tracking-wider" style={{ color: '#F08300' }}>
                            POINT 0{slide.step}
                        </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">{slide.title}</h3>
                    <div
                        className="w-16 h-1 mb-6"
                        style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                    />
                    <p className="text-lg text-gray-700 leading-relaxed">{slide.description}</p>
                </div>
            </div>
        </div>
    )
}

type CarouselState = {
    selectedIndex: number
    canScrollPrev: boolean
    canScrollNext: boolean
}

const initialCarouselState: CarouselState = {
    selectedIndex: 0,
    canScrollPrev: false,
    canScrollNext: false,
}

export default function StrengthCards({ cards }: Props) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [carouselState, setCarouselState] = useState<CarouselState>(initialCarouselState)
    const [isNarrow, setIsNarrow] = useState(true)

    useLayoutEffect(() => {
        const check = () => setIsNarrow(typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const onSelect = useCallback(() => {
        if (!api) return
        setCarouselState({
            selectedIndex: api.selectedScrollSnap(),
            canScrollPrev: api.canScrollPrev(),
            canScrollNext: api.canScrollNext(),
        })
    }, [api])

    useEffect(() => {
        if (!api) return
        onSelect()
        api.on('select', onSelect)
        return () => {
            api.off('select', onSelect)
        }
    }, [api, onSelect])

    const { selectedIndex, canScrollPrev, canScrollNext } = carouselState

    if (cards.length === 0) return null

    return (
        <div className="relative">
            {/* モバイル用の見出しオーバーレイ */}
            <div className="absolute top-0 right-0 z-30 pr-4 pt-4 md:hidden">
                <h2
                    className="text-5xl font-bold text-gray-100/80 text-right drop-shadow-lg"
                    style={{ lineHeight: '0.9', letterSpacing: '-0.02em' }}
                >
                    OurDesk
                    <br />
                    の強み
                </h2>
            </div>

            <div data-swipe-carousel className="relative" style={{ minHeight: '500px' }}>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                        {cards.map((slide, index) => (
                            <CarouselItem key={index} className="pl-4 md:pl-4">
                                {isNarrow ? (
                                    <MobileCard
                                        slide={slide}
                                        isActive={index === selectedIndex}
                                        showImage={shouldLoadImage(index, selectedIndex, cards.length)}
                                    />
                                ) : (
                                    <DesktopSlide
                                        slide={slide}
                                        showImage={shouldLoadImage(index, selectedIndex, cards.length)}
                                    />
                                )}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* ナビゲーション: 「前 | ドット | 次」の1行（モバイル・デスクトップ共通） */}
            <div className="flex items-center justify-between gap-2 md:gap-4 px-4 mt-2 md:mt-8 max-w-2xl mx-auto">
                {/* 前ボタン（左端） */}
                <button
                    type="button"
                    onClick={() => api?.scrollPrev()}
                    disabled={!canScrollPrev}
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg hover:border-orange-200 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all"
                    aria-label="前のスライド"
                >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* インジケーター（中央） */}
                <div className="flex justify-center gap-2 md:gap-3 py-2 flex-1 min-w-0">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => api?.scrollTo(index)}
                            className="transition-all duration-300 p-1"
                            aria-label={`スライド${index + 1}を表示`}
                        >
                            <div
                                className={cn(
                                    'rounded-full transition-all duration-300',
                                    isNarrow ? 'w-2.5 h-2.5' : 'h-2',
                                    index === selectedIndex ? (isNarrow ? 'scale-110' : 'w-12') : isNarrow ? 'bg-gray-300' : 'w-8 bg-gray-300'
                                )}
                                style={index === selectedIndex ? { background: '#F08300' } : undefined}
                            />
                        </button>
                    ))}
                </div>

                {/* 次ボタン（右端） */}
                <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    disabled={!canScrollNext}
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg hover:border-orange-200 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all"
                    aria-label="次のスライド"
                >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
