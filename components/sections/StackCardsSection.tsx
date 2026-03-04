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
 * モバイル: 6 + index×0.9 rem / デスクトップ: 6 + index×1.25 rem（上側余白多め）
 */
const STICKY_TOP_CLASSES = [
    'top-[6rem]',
    'top-[6.9rem] md:top-[7.25rem]',
    'top-[7.8rem] md:top-[8.5rem]',
    'top-[8.7rem] md:top-[9.75rem]',
] as const

function getStickyTopClass(index: number): string {
    return index < STICKY_TOP_CLASSES.length ? STICKY_TOP_CLASSES[index] : STICKY_TOP_CLASSES[STICKY_TOP_CLASSES.length - 1]
}

/** カード内画像の共通指定（alt は card から渡す） */
const CARD_IMAGE_CLASS = 'object-contain object-center'
const CARD_IMAGE_SIZES = '(max-width: 768px) 100vw, 78vw'

/** カード下の波クリップ用パス（このセクション内だけの設定。objectBoundingBox 0〜1。Q の第2引数が大きいほどカーブがきつい） */
const STACK_CARD_WAVE_PATHS = {
    mobile: { d: 'M0 0 Q 0.5 0.6 1 0 L 1 1 L 0 1 Z' },
    desktop: { d: 'M0 0 Q 0.5 0.65 1 0 L 1 1 L 0 1 Z' },
} as const

/** 2枚目以降のカード: 重なる前に「空振り」させるスクロール量（vh）。この分だけ margin-top を入れてスタックの間を稼ぐ */
const STACK_DELAY_MARGIN_VH = 40
/** 最後のカードが前のカードに重なって止まるまで必要な下方向の余白（vh）。この分の minHeight をスペーサーで確保 */
const STACK_END_SPACER_VH = 80

/** カード・グリッド・画像・ウェーブのレイアウト調整（lg=1024px で2カラム開始・ノートPC対応、2xl=1536px） */
const LAYOUT = {
    /** カード高さ: lg で短め、2xl で標準 */
    cardHeight: 'lg:h-[calc(66vh+4rem)] lg:min-h-[66vh] 2xl:h-[calc(72vh+4rem)] 2xl:min-h-[72vh]',
    cardPadding: 'lg:py-4 lg:pb-0',
    /** 画像左のときの article 横パディング */
    cardPaddingLeft: 'lg:px-0 lg:pl-6 lg:pr-6 2xl:pr-8',
    /** 画像右のときの article 横パディング */
    cardPaddingRight: 'lg:px-0 lg:pl-10 2xl:pl-14 lg:pr-6',
    /** グリッド: 縦積み時の gap / 2カラム時の gap */
    gridGap: 'gap-6 lg:gap-8',
    /** ウェーブ上の余白: 画像右は多め */
    gridPbRight: 'lg:pb-24 2xl:pb-28',
    gridPbLeft: 'lg:pb-16 2xl:pb-20',
    gridMinH: 'min-h-0 lg:min-h-[66vh] 2xl:min-h-[72vh]',
    /** 2カラム（lg で開始してノートPC・Edge でも横並びに） */
    gridCols: 'lg:grid-cols-2',
    /** 画像エリア: 縦積み時の下余白 / 2カラム時は 0 */
    imageMb: 'mb-6 lg:mb-0',
    /** 画像エリア: 2カラム時の上余白（画像を少し下に） */
    imageMt: 'lg:mt-6',
    imagePadding: 'p-4 lg:p-6',
    /** 画像高さ（全カード共通: モバイル px / lg / 2xl vh） */
    imageHeight: 'h-[280px] lg:h-[60vh] 2xl:h-[66vh]',
    imagePlaceholderMinH: 'min-h-[140px] lg:min-h-[180px]',
    /** テキスト列の最小幅（2カラム時） */
    textMinW: 'lg:min-w-[280px]',
    textColPadding: 'pl-0 order-1 lg:pl-6 lg:order-2 2xl:pl-8',
    /** タイトル文字サイズ（全カード統一） */
    titleSize: 'text-xl lg:text-3xl',
    /** 本文・ラベル文字サイズ（全カード統一） */
    bodySize: 'text-sm lg:text-base',
    /** numberLabel 下余白 */
    numberLabelMb: 'mb-4 lg:mb-10',
    /** ウェーブ高さ: ベース / lg / 2xl */
    waveH: 'h-10 lg:h-14 2xl:h-24',
    waveOffsetLeft: 'lg:-left-6 lg:-right-6 lg:w-[calc(100%+3rem)]',
    waveOffsetRight: 'lg:-left-10 lg:-right-6 lg:w-[calc(100%+4rem)]',
} as const

/** 画像コンテナの className（左右で共通。左のときだけ order を付与） */
function getImageContainerClass(isLeft: boolean): string {
    const order = isLeft ? ' order-2 lg:order-1' : ''
    return `relative overflow-hidden ${LAYOUT.imagePadding} mt-0 ${LAYOUT.imageMt} ${LAYOUT.imageMb} w-full min-w-0${order}`
}

/** 画像あり時の画像エリアのクラス（高さ・aspect） */
function getImageAreaClass(hasImage: boolean): string {
    return hasImage ? `${LAYOUT.imageHeight} aspect-[4/3] lg:aspect-auto` : `${LAYOUT.imagePlaceholderMinH} flex items-center justify-center`
}

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
        <section className="relative z-20 py-12 md:py-20 md:bg-gradient-to-b from-[#FFF8E7] to-[#FFE8CC]" aria-label={sectionLabel}>
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
            </div>StackCardsSection
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
                            className={`sticky z-10 min-h-0 ${LAYOUT.cardHeight} flex flex-col justify-start lg:justify-center rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200/60 px-7 py-0 ${LAYOUT.cardPadding} ${getStickyTopClass(i)} ${card.imageOrder === 'left' ? LAYOUT.cardPaddingLeft : LAYOUT.cardPaddingRight}`}
                            style={{
                                background: 'rgb(255,255,255)',
                                ...(i >= 1 && { marginTop: `${STACK_DELAY_MARGIN_VH}vh` }),
                            }}
                        >
                            {/* imageOrder に応じてテキストと画像エリアの並びを左右反転。画像あり時は画像列を広めに */}
                            <div className={`grid grid-cols-1 ${LAYOUT.gridGap} w-full max-w-full items-start lg:items-center pb-0 ${card.imageOrder === 'right' ? LAYOUT.gridPbRight : LAYOUT.gridPbLeft} ${card.imageSrc ? LAYOUT.gridMinH : ''} ${LAYOUT.gridCols}`}>
                                {card.imageOrder === 'left' && (
                                    <div className={`${getImageContainerClass(true)} ${getImageAreaClass(!!card.imageSrc)}`} aria-hidden="true">
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt={card.imageAlt ?? card.title} fill className={CARD_IMAGE_CLASS} sizes={CARD_IMAGE_SIZES} />
                                        ) : null}
                                    </div>
                                )}
                                <div className={`min-w-0 ${LAYOUT.textMinW} flex flex-col justify-center text-left overflow-hidden ${card.imageOrder === 'left' ? LAYOUT.textColPadding : ''}`}>
                                    <div className="w-full">
                                        <h2 className={`${card.titleClass ?? LAYOUT.titleSize} font-extrabold mb-0.5 lg:mb-1 block drop-shadow-sm whitespace-pre-line text-[#4A4A4A] mt-5 lg:mt-0`}>{card.title}</h2>
                                        {card.numberLabel != null && card.numberLabel !== '' && (
                                            <p className={`${LAYOUT.bodySize} font-medium ${LAYOUT.numberLabelMb} -mt-0.5`} style={{ color: '#FFB38E' }} aria-hidden="true">
                                                {card.numberLabel}
                                            </p>
                                        )}
                                        <div className="border-l-4 border-amber-400/70 pl-3 lg:pl-5 py-1">
                                            <div className={`${LAYOUT.bodySize} leading-relaxed text-pretty text-gray-700 flex flex-col gap-y-1 lg:gap-y-3`}>
                                                {card.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {card.imageOrder === 'right' && (
                                    <div className={`${getImageContainerClass(false)} ${getImageAreaClass(!!card.imageSrc)}`} aria-hidden="true">
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt={card.imageAlt ?? card.title} fill className={CARD_IMAGE_CLASS} sizes={CARD_IMAGE_SIZES} />
                                        ) : null}
                                    </div>
                                )}
                            </div>
                            <div className={`absolute bottom-0 left-0 right-0 ${LAYOUT.waveH} overflow-hidden rounded-b-2xl -left-7 -right-7 w-[calc(100%+3.5rem)] hidden lg:block ${card.imageOrder === 'left' ? LAYOUT.waveOffsetLeft : LAYOUT.waveOffsetRight}`}>
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
