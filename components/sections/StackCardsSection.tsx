'use client'

/**
 * StackCardsSection
 * スクロールに連動してカードが重なって見える「スタック」効果を持つセクション。
 * sticky 配置で上に積み重なる見た目を実現する。
 */
import React from 'react'
import Image from 'next/image'
import WaveClipLayer from '@/components/sections/WaveClipLayer'
/** 1枚のスタックカードの表示内容・レイアウト指定 */
export type StackCardItem = {
    title: string
    /** 本文（改行・ハイライト済みの ReactNode。page で contentWithLineBreaks を適用して渡す） */
    content: React.ReactNode
    imageOrder: 'left' | 'right'
    titleClass?: string
    /** 画像を表示する場合のパス（例: /images/xxx.png） */
    imageSrc?: string
    /** 画像の代替テキスト（SEO・アクセシビリティ）。未指定時は title を使用 */
    imageAlt?: string
    /** タイトル直下に表示するラベル（例: / HUMAN RESOURCE DEVELOPMENT） */
    numberLabel?: string
}

/**
 * カードの sticky top をレスポンシブクラスで指定。
 * モバイル: 5 + index×0.9 rem / デスクトップ: 5 + index×1.25 rem
 */
const STICKY_TOP_CLASSES = [
    'top-[5rem]',
    'top-[5.9rem] md:top-[6.25rem]',
    'top-[6.8rem] md:top-[7.5rem]',
    'top-[7.7rem] md:top-[8.75rem]',
] as const

function getStickyTopClass(index: number): string {
    return index < STICKY_TOP_CLASSES.length ? STICKY_TOP_CLASSES[index] : STICKY_TOP_CLASSES[STICKY_TOP_CLASSES.length - 1]
}

/** カード下の波クリップ用パス（このセクション内だけの設定。objectBoundingBox 0〜1。Q の第2引数が大きいほどカーブがきつい） */
const STACK_CARD_WAVE_PATHS = {
    mobile: { d: 'M0 0 Q 0.5 0.6 1 0 L 1 1 L 0 1 Z' },
    desktop: { d: 'M0 0 Q 0.5 0.65 1 0 L 1 1 L 0 1 Z' },
} as const

/** 2枚目以降のカード: 重なる前に「空振り」させるスクロール量（vh）。この分だけ margin-top を入れてスタックの間を稼ぐ */
const STACK_DELAY_MARGIN_VH = 40
/** 最後のカードが前のカードに重なって止まるまで必要な下方向の余白（vh）。この分の minHeight をスペーサーで確保 */
const STACK_END_SPACER_VH = 80

type Props = {
    cards: StackCardItem[]
    sectionLabel?: string
    /** カードの背面に表示する背景ノード（マーキー等） */
    background?: React.ReactNode
    /** true: マーキーを sticky でセクション内に収める / false: absolute で背面レイヤーに表示 */
    marqueeSticky?: boolean
    /** 1枚目のカード要素に付与する ref（マーキーが1枚目中央に張り付く位置の取得用・sticky 追従） */
    firstCardRef?: React.RefObject<HTMLElement | null>
    /** 最後のカード（4枚目）の要素に付与する ref（マーキー固定解除の判定用） */
    lastCardRef?: React.RefObject<HTMLElement | null>
}

export default function StackCardsSection({ cards, sectionLabel = 'OurDeskの取り組み', background, marqueeSticky = false, firstCardRef, lastCardRef }: Props) {
    return (
        <section className="relative z-20 py-16 md:py-24 md:bg-gradient-to-b from-[#FFF8E7] to-[#FFE8CC] " aria-label={sectionLabel}>
            {/* 背景画像（Next.js Image で最適化・プリロード） */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden bg-[#FFF8E7] md:hidden">
                <Image
                    src="/images/stack-cards/00.jpeg"
                    alt="OurDeskの取り組みセクションの背景"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                />
            </div>
            {/* 白のグラデーションオーバーレイ（元の見た目を維持） */}
            <div
                className="absolute inset-0 z-[1] rounded-3xl pointer-events-none md:hidden"
                style={{
                    background: 'linear-gradient(rgb(255, 255, 255, 0.45), rgb(255, 255, 255, 0.65))',
                }}
                aria-hidden="true"
            />
            {/* マーキー等の背景: sticky のときはセクション内に収める、それ以外は背面レイヤーで表示 */}
            {background != null && !marqueeSticky && (
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-3xl" aria-hidden="true">
                    {background}
                </div>
            )}
            {/* minHeight 220vh でスクロール量を稼ぎ、カードが sticky で重なって見える区間を確保 */}
            <div className="relative" style={{ minHeight: '220vh' }}>
                {/* sticky マーキー: セクション全幅で表示、カードの両脇に見える。コンテナ外で配置 */}
                {background != null && marqueeSticky && (
                    <div
                        className="sticky top-[50vh] -translate-y-1/2 w-full h-0 pointer-events-none z-0 overflow-visible"
                        aria-hidden="true"
                    >
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 min-h-[40vh] overflow-visible inset-x-0">
                            {background}
                        </div>
                    </div>
                )}
                <div
                    className="relative z-20 container mx-auto max-w-7xl px-6 md:px-12 flex flex-col gap-8 md:gap-12"
                >
                    {cards.map((card, i) => (
                        <article
                            key={i}
                            ref={(el) => {
                                if (firstCardRef != null && i === 0) firstCardRef.current = el
                                if (lastCardRef != null && i === cards.length - 1) lastCardRef.current = el
                            }}
                            className={`sticky z-10 min-h-0 md:min-h-[72vh] lg:min-h-[68vh] flex flex-col justify-start md:justify-center rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200/60 px-7 py-0 md:py-7 md:pb-0 ${getStickyTopClass(i)} ${card.imageOrder === 'left' ? 'md:px-0 md:pl-6 md:pr-6 lg:pr-8' : 'md:px-0 md:pl-10 lg:pl-14 md:pr-6'}`}
                            style={{
                                background: 'rgb(255,255,255)',
                                ...(i >= 1 && { marginTop: `${STACK_DELAY_MARGIN_VH}vh` }),
                            }}
                        >
                            {/* imageOrder に応じてテキストと画像エリアの並びを左右反転。画像あり時は画像列を広めに */}
                            <div className={`grid grid-cols-1 gap-0 md:gap-3 lg:gap-4 w-full max-w-full items-start md:items-center pb-0 ${card.imageOrder === 'right' ? 'md:pb-24 lg:pb-28' : 'md:pb-16 lg:pb-20'} ${card.imageSrc ? 'min-h-0 md:min-h-[72vh] lg:min-h-[68vh]' : ''} ${card.imageOrder === 'left' ? 'md:grid-cols-[1.5fr_1.5fr]' : 'md:grid-cols-[1.4fr_1.6fr]'}`}>
                                {card.imageOrder === 'left' && (
                                    <div
                                        className={`relative order-2 md:order-1 overflow-hidden p-4 md:p-6 -mt-6 md:mt-0 w-full min-w-0 ${card.imageSrc ? (i === 0 ? 'h-[360px] md:h-[72vh] lg:h-[68vh]' : i === 2 ? 'h-[300px] md:h-[65vh] lg:h-[62vh]' : 'h-[320px] md:h-[72vh] lg:h-[68vh]') + ' aspect-[4/3] md:aspect-auto' : 'min-h-[140px] md:min-h-[220px] flex items-center justify-center'}`}
                                        aria-hidden="true"
                                    >
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt={card.imageAlt ?? card.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 78vw" />
                                        ) : (
                                            <span className="text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </div>
                                )}
                                <div className={`min-w-0 flex flex-col justify-center text-left overflow-hidden ${card.imageOrder === 'left' ? 'pl-0 md:pl-6 lg:pl-8 order-1 md:order-2' : ''}`}>
                                    <div className="w-full">
                                        <h2 className={`${card.titleClass ?? 'text-xl md:text-4xl'} font-extrabold mb-0.5 md:mb-1 block drop-shadow-sm whitespace-pre-line text-[#4A4A4A] mt-5 md:mt-0`}>{card.title}</h2>
                                        {card.numberLabel != null && card.numberLabel !== '' && (
                                            <p className="text-sm md:text-lg font-medium mb-8 md:mb-16 -mt-0.5" style={{ color: '#FFB38E' }} aria-hidden="true">
                                                {card.numberLabel}
                                            </p>
                                        )}
                                        <div className="border-l-4 border-amber-400/70 pl-3 md:pl-5 py-1">
                                            <div className="text-sm md:text-lg leading-relaxed text-pretty text-gray-700 flex flex-col gap-y-1 md:gap-y-3">
                                                {card.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {card.imageOrder === 'right' && (
                                    <div
                                        className={`relative overflow-hidden p-4 md:p-6 -mt-10 md:mt-0 md:mb-0 w-full min-w-0 ${card.imageSrc ? (i === 0 ? 'h-[360px] md:h-[72vh] lg:h-[68vh]' : i === 2 ? 'h-[300px] md:h-[65vh] lg:h-[62vh]' : 'h-[320px] md:h-[72vh] lg:h-[68vh]') + ' aspect-[4/3] md:aspect-auto' : 'min-h-[140px] md:min-h-[220px] flex items-center justify-center'}`}
                                        aria-hidden="true"
                                    >
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt={card.imageAlt ?? card.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 78vw" />
                                        ) : (
                                            <span className="text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className={`absolute bottom-0 left-0 right-0 h-16 lg:h-20 overflow-hidden rounded-b-2xl -left-7 -right-7 w-[calc(100%+3.5rem)] hidden md:block ${card.imageOrder === 'left' ? 'md:-left-6 md:-right-6 md:w-[calc(100%+3rem)]' : 'md:-left-10 md:-right-6 md:w-[calc(100%+4rem)]'}`}>
                                <WaveClipLayer idPrefix={`stack-card-${i}`} clipPaths={STACK_CARD_WAVE_PATHS}>
                                    <div className="absolute inset-0 bg-[#FFE566]" />
                                </WaveClipLayer>
                            </div>
                        </article>
                    ))}
                    {/* 最後のカードが sticky で重なって止まるまで必要な下方向の余白（STACK_END_SPACER_VH） */}
                    <div aria-hidden="true" style={{ minHeight: `${STACK_END_SPACER_VH}vh` }} />
                </div>
            </div>
        </section>
    )
}
