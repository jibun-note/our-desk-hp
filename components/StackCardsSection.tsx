'use client'

/**
 * StackCardsSection
 * スクロールに連動してカードが重なって見える「スタック」効果を持つセクション。
 * sticky 配置で上に積み重なる見た目を実現する。
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import Image from 'next/image'
import SlideUpSection from '@/components/ui/SlideUpSection'
import GradientHeading from '@/components/ui/GradientHeading'

/** 1枚のスタックカードの表示内容・レイアウト指定 */
export type StackCardItem = {
    title: string
    content: string
    imageOrder: 'left' | 'right'
    titleClass?: string
    /** 画像のパス（例: /images/xxx.jpg）。指定時は画像エリアに表示、未指定時はプレースホルダー */
    image?: string
}

/** 改行 \n を <br /> で表示する */
function contentWithLineBreaks(content: string): React.ReactNode {
    const lines = content.split('\n')
    return lines.map((line, i) => (
        <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
        </React.Fragment>
    ))
}

const STICKY_BREAKPOINT = 768 // この幅未満で sticky top を小さく（セクション5飛び出し防止）
// カード数に応じた sticky top（小画面: 2 + i*0.9 rem、大画面: 5 + i*1.25 rem）
function getStickyTopRem(index: number, isNarrow: boolean): number {
    return isNarrow ? 2 + index * 0.9 : 5 + index * 1.25
}

type Props = {
    cards: StackCardItem[]
    sectionLabel?: string
}

export default function StackCardsSection({ cards, sectionLabel = 'OurDeskの取り組み' }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    /** セクション内のスクロール進捗 0〜1（0=上端が画面下端、1=下端が画面上端） */
    const [progress, setProgress] = useState(0)
    /** 狭い画面か（sticky の top を小さくしてセクションからはみ出しを防ぐ） */
    const [isNarrow, setIsNarrow] = useState(false)

    // ビューポート幅で sticky top を切り替え（リサイズ時も再計算）
    useLayoutEffect(() => {
        const checkNarrow = () => setIsNarrow(typeof window !== 'undefined' && window.innerWidth < STICKY_BREAKPOINT)
        checkNarrow()
        window.addEventListener('resize', checkNarrow)
        return () => window.removeEventListener('resize', checkNarrow)
    }, [])

    // スクロール位置から「セクション内の進捗」を算出して progress を更新
    useLayoutEffect(() => {
        const el = containerRef.current
        if (!el) return

        const onScroll = () => {
            const rect = el.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            // セクションが画面を通過するのに必要なスクロール量
            const total = rect.height - viewportHeight
            if (total <= 0) {
                setProgress(rect.top <= 0 ? 1 : 0)
                return
            }
            // セクション上端が画面上端より上にどれだけ行ったか（通過した量）
            const scrolled = -rect.top
            const p = scrolled / total
            setProgress(Math.max(0, Math.min(1, p)))
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className="relativ bg-gradient-to-b from-[#fde3e8] via-[#FDE8E0] to-[#FDD9C8] py-16 md:py-24" aria-label={sectionLabel}>
            {/* minHeight を 220vh にし、スクロール量を稼いでスタックアニメーションの区間を確保 */}
            <div
                ref={containerRef}
                className="relative container mx-auto max-w-6xl px-4 md:px-8 flex flex-col gap-6 md:gap-8"
                style={{ minHeight: '220vh' }}
                data-stack-scroll-progress={Math.round(progress * 100) / 100}
            >
                {cards.map((card, i) => {
                    // カードごとに top をずらして sticky 時に重なって見せる（ずらしを保ち最後まで複数枚のスタックに見える）
                    const stickyTopRem = getStickyTopRem(i, isNarrow)
                    return (
                        <article
                            key={i}
                            className="sticky min-h-[55vh] flex flex-col justify-center rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-200 backdrop-blur-sm transition-[background-color] duration-700 ease-in-out"
                            style={{
                                top: `${stickyTopRem}rem`,
                                background: 'rgb(255,255,255)',
                            }}
                        >
                            {/* imageOrder に応じてテキストと画像エリアの並びを左右反転 */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center w-full max-w-full ${card.imageOrder === 'left' ? '' : ''}`}>
                                {card.imageOrder === 'left' && (
                                    <div className="relative min-h-[180px] md:min-h-[220px] rounded-xl bg-gray-100 border border-gray-200 overflow-hidden order-2 md:order-1" aria-hidden="true">
                                        {card.image ? (
                                            <Image src={card.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </div>
                                )}
                                <div className={`min-w-0 flex flex-col justify-center ${card.imageOrder === 'left' ? 'order-1 md:order-2' : ''}`}>
                                    <SlideUpSection>
                                        <GradientHeading text={card.title} className={`${card.titleClass ?? 'text-2xl md:text-3xl'} font-bold mb-4 whitespace-nowrap block drop-shadow-sm`} />
                                        <p className="text-base md:text-lg mb-6 leading-relaxed text-pretty text-gray-800">
                                            {contentWithLineBreaks(card.content)}
                                        </p>
                                    </SlideUpSection>
                                </div>
                                {card.imageOrder === 'right' && (
                                    <div className="relative min-h-[180px] md:min-h-[220px] rounded-xl bg-gray-100 border border-gray-200 overflow-hidden" aria-hidden="true">
                                        {card.image ? (
                                            <Image src={card.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
