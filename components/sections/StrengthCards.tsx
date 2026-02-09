'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
    useCarousel,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

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

/** モバイルは上下表示、デスクトップは左右2カラム */
function StrengthSlide({
    slide,
    showImage,
}: {
    slide: StrengthCardItem
    showImage: boolean
}) {
    const isImageLeft = slide.imagePosition === 'left'
    return (
        <div className="relative h-full w-full px-4">
            <div
                className={cn(
                    'flex flex-col md:grid md:grid-cols-2 gap-0 h-full w-full min-h-0 rounded-2xl overflow-hidden',
                    'md:min-h-[500px]'
                )}
            >
                {/* 画像エリア：モバイルでは上、デスクトップでは imagePosition で左右 */}
                <div
                    className={cn(
                        'relative rounded-2xl overflow-hidden shadow-lg md:shadow-none flex-shrink-0',
                        'min-h-[220px] md:min-h-0 md:h-full',
                        'order-1',
                        isImageLeft ? 'md:order-1' : 'md:order-2'
                    )}
                >
                    {showImage ? (
                        <>
                            <Image
                                src={slide.imagePath}
                                alt={slide.imageAlt}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
                {/* テキストエリア：モバイルでは下、デスクトップでは imagePosition で左右 */}
                <div
                    className={cn(
                        'flex items-center justify-center bg-white p-5 md:p-16 flex-1 min-h-0',
                        'order-2',
                        isImageLeft ? 'md:order-2' : 'md:order-1'
                    )}
                >
                    <div className="w-full max-w-xl">
                        <div className="mb-2 md:mb-4">
                            <span className="text-xs md:text-sm font-semibold tracking-wider" style={{ color: '#F08300' }}>
                                POINT 0{slide.step}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-800 leading-tight">
                            {slide.title}
                        </h3>
                        <div
                            className="w-12 md:w-16 h-1 mb-3 md:mb-6"
                            style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                        />
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">{slide.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Carousel 内で useCarousel を使うナビ（前・ドット・次） */
function StrengthCardsNav({ selectedIndex, cardsLength }: { selectedIndex: number; cardsLength: number }) {
    const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()
    return (
        <div className="flex items-center justify-between gap-2 md:gap-4 px-4 mt-2 md:mt-8 max-w-2xl mx-auto">
            <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg hover:border-orange-200 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all"
                aria-label="前のスライド"
            >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div className="flex justify-center gap-2 md:gap-3 py-2 flex-1 min-w-0">
                {Array.from({ length: cardsLength }).map((_, index) => (
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
                                'w-2.5 h-2.5 md:h-2',
                                index === selectedIndex ? 'scale-110 md:scale-100 md:w-12 bg-[#F08300]' : 'md:w-8 bg-gray-300'
                            )}
                        />
                    </button>
                ))}
            </div>
            <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg hover:border-orange-200 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all"
                aria-label="次のスライド"
            >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default function StrengthCards({ cards }: Props) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!api) return
        const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
        onSelect()
        api.on('select', onSelect)
        return () => {
            api.off('select', onSelect)
        }
    }, [api])

    if (cards.length === 0) return null

    return (
        <div className="relative">
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
                                <StrengthSlide
                                    slide={slide}
                                    showImage={true}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <StrengthCardsNav selectedIndex={selectedIndex} cardsLength={cards.length} />
                </Carousel>
            </div>
        </div>
    )
}
