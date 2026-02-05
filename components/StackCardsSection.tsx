'use client'

/**
 * StackCardsSection
 * スクロールに連動してカードが重なって見える「スタック」効果を持つセクション。
 * sticky 配置で上に積み重なる見た目を実現する。
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import SlideUpSection from '@/components/ui/SlideUpSection'
import GradientHeading from '@/components/ui/GradientHeading'

/** 1枚のスタックカードの表示内容・レイアウト指定 */
export type StackCardItem = {
    title: string
    content: string
    imageOrder: 'left' | 'right'
    titleClass?: string
    /** 画像を表示する場合のパス（例: /images/xxx.png） */
    imageSrc?: string
}

/** 行全体に文字色（アクセント）を付ける行の本文（正規化後に一致） */
const HIGHLIGHT_LINES = [
    '働きたい',
    '人の力になりたい',
    '誰かを支える仕事がしたい',
    'グループ従業員 約100名 定着率は常に90%以上、人事支援・キャリア支援の実績多数',
    '家庭やライフステージに左右されず、',
    '自分らしい働き方を選びながら、誰かの役に立てる',
    '働きたい気持ちはあるのに、選択肢が限られてしまう',
    '女性が自分らしく働き続けられる',
]

/** 行内の一部フレーズに文字色（アクセント）を付ける（長い順で一致させる） */
const INLINE_PHRASES = [
    '働きたい気持ちはあるのに、選択肢が限られてしまう',
    '女性が自分らしく働き続けられる',
    '人材育成ノウハウ',
    '仕組みづくり',
    '働く姿勢',
]

/** 行末の ！/! 。や「」を除いて正規化 */
function normalizeLine(s: string): string {
    return s
        .trim()
        .replace(/[！!\s]+$/, '')
        .replace(/。$/, '')
        .replace(/^「/, '')
        .replace(/」$/, '')
}

/** 行全体がハイライト対象か判定 */
function isHighlightLine(trimmed: string): boolean {
    const normalized = normalizeLine(trimmed)
    return HIGHLIGHT_LINES.some((m) => m === normalized)
}

const HIGHLIGHT_CLASS = 'text-primary-700 font-semibold'

/** 行内の INLINE_PHRASES を span でラップして文字色を付与 */
function highlightInlinePhrases(line: string): React.ReactNode {
    const phrases = [...INLINE_PHRASES].sort((a, b) => b.length - a.length)
    const matches: { start: number; end: number; phrase: string }[] = []
    for (const phrase of phrases) {
        let pos = 0
        while (pos < line.length) {
            const i = line.indexOf(phrase, pos)
            if (i === -1) break
            const overlaps = matches.some((m) => i < m.end && i + phrase.length > m.start)
            if (!overlaps) matches.push({ start: i, end: i + phrase.length, phrase })
            pos = i + 1
        }
    }
    matches.sort((a, b) => a.start - b.start)
    const merged: { start: number; end: number; phrase: string }[] = []
    let lastEnd = 0
    for (const m of matches) {
        if (m.start < lastEnd) continue
        merged.push(m)
        lastEnd = m.end
    }
    const segments: React.ReactNode[] = []
    let pos = 0
    for (const m of merged) {
        if (m.start > pos) segments.push(line.slice(pos, m.start))
        segments.push(
            <span key={`${m.start}-${m.phrase}`} className={HIGHLIGHT_CLASS}>
                {m.phrase}
            </span>
        )
        pos = m.end
    }
    if (pos < line.length) segments.push(line.slice(pos))
    return <>{segments}</>
}

/** 改行 \n をブロック表示し、行間に余白を付ける。該当行／該当フレーズは文字色を付与 */
function contentWithLineBreaks(content: string): React.ReactNode {
    const lines = content.split('\n')
    return lines.map((line, i) => {
        const trimmed = line.trim()
        const fullLineHighlight = isHighlightLine(trimmed)
        const hasInline = INLINE_PHRASES.some((p) => line.includes(p))
        let body: React.ReactNode
        if (fullLineHighlight) {
            const startQuote = line.indexOf('「')
            const endQuote = line.lastIndexOf('」')
            if (startQuote !== -1 && endQuote > startQuote) {
                body = (
                    <>
                        {line.slice(0, startQuote + 1)}
                        <span className={HIGHLIGHT_CLASS}>{line.slice(startQuote + 1, endQuote)}</span>
                        {line.slice(endQuote)}
                    </>
                )
            } else {
                body = <span className={HIGHLIGHT_CLASS}>{line}</span>
            }
        } else if (hasInline) {
            body = highlightInlinePhrases(line)
        } else {
            body = line
        }
        return (
            <span key={i} className="block">
                {body}
            </span>
        )
    })
}

const STICKY_BREAKPOINT = 768 // この幅未満で sticky top を小さく（セクション5飛び出し防止）
// スマホ時のヘッダー高さ（ロゴ size-20 等で約5rem）。これより下に sticky を置いてヘッダーに埋まらないようにする
const MOBILE_HEADER_TOP_REM = 5
// カード数に応じた sticky top（小画面: ヘッダー下 + i*0.9 rem、大画面: 5 + i*1.25 rem）
function getStickyTopRem(index: number, isNarrow: boolean): number {
    return isNarrow ? MOBILE_HEADER_TOP_REM + index * 0.9 : 5 + index * 1.25
}

// 2枚目以降：重なる前に空振りさせるスクロール量（約2スクロール分＝2×40vh）
const STACK_DELAY_MARGIN_VH = 40
// 最後のカードが前のカードに重なって止まるようにするための下スペーサー（4枚目も sticky で重なる余白）
const STACK_END_SPACER_VH = 80

type Props = {
    cards: StackCardItem[]
    sectionLabel?: string
    /** カードの背面に表示する背景ノード（マーキー等） */
    background?: React.ReactNode
    /** 最後のカード（4枚目）の要素に付与する ref（マーキー固定解除の判定用） */
    lastCardRef?: React.RefObject<HTMLElement | null>
}

export default function StackCardsSection({ cards, sectionLabel = 'OurDeskの取り組み', background, lastCardRef }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const shouldReduceMotion = useReducedMotion()
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
        <section className="relative z-20 bg-gradient-to-b from-[#FFF8E7] via-[#FFEFD6] to-[#FFE8CC] py-16 md:py-24 rounded-3xl" aria-label={sectionLabel}
            style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255, 0.45), rgb(255, 255, 255, 0.65)),url(/images/AdobeStock_321344810_Preview.jpeg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {background != null && (
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-3xl" aria-hidden="true">
                    {background}
                </div>
            )}
            {/* minHeight を 220vh にし、スクロール量を稼いでスタックアニメーションの区間を確保 */}
            <div
                ref={containerRef}
                className="relative z-20 container mx-auto max-w-6xl px-8 md:px-16 flex flex-col gap-8 md:gap-12"
                style={{ minHeight: '220vh' }}
                data-stack-scroll-progress={Math.round(progress * 100) / 100}
            >
                {cards.map((card, i) => {
                    // カードごとに top をずらして sticky 時に重なって見せる（ずらしを保ち最後まで複数枚のスタックに見える）
                    const stickyTopRem = getStickyTopRem(i, isNarrow)
                    const cardNumber = String(i + 1).padStart(2, '0')
                    return (
                        <article
                            key={i}
                            ref={lastCardRef != null && i === cards.length - 1 ? lastCardRef : undefined}
                            className={`sticky min-h-0 md:min-h-[55vh] flex flex-col justify-center rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200/60 backdrop-blur-sm transition-[background-color] duration-700 ease-in-out px-7 py-4 md:py-7 ${card.imageOrder === 'left' ? 'md:px-0 md:pl-0 md:pr-6 lg:pr-8' : 'md:px-0 md:pl-6 lg:pl-8 md:pr-0'}`}
                            style={{
                                top: `${stickyTopRem}rem`,
                                background: 'rgb(255,255,255)',
                                ...(i >= 1 && { marginTop: `${STACK_DELAY_MARGIN_VH}vh` }),
                            }}
                        >
                            {/* imageOrder に応じてテキストと画像エリアの並びを左右反転。画像あり時は画像列を広めに */}
                            <div className={`grid grid-cols-1 gap-1 md:gap-6 lg:gap-8 w-full max-w-full items-center ${card.imageSrc ? 'min-h-0 md:min-h-[55vh]' : ''} ${card.imageOrder === 'left' ? 'md:grid-cols-[1.1fr_1.3fr]' : 'md:grid-cols-[1.3fr_1.1fr]'}`}>
                                {card.imageOrder === 'left' && (
                                    <motion.div
                                        initial={{ opacity: 0.85, rotate: shouldReduceMotion ? 0 : -2.5 }}
                                        whileInView={{ opacity: 1, rotate: shouldReduceMotion ? 0 : [-2.5, 1.2, -0.4, 0.8, -0.2, 0] }}
                                        viewport={{ once: false, margin: '-60px', amount: 0.25 }}
                                        transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
                                        className={`relative order-2 md:order-1 overflow-hidden ${card.imageSrc ? 'h-[240px] md:h-[55vh] w-full min-w-0 aspect-[4/3] md:aspect-auto' : 'min-h-[140px] md:min-h-[220px] flex items-center justify-center'}`}
                                        aria-hidden="true"
                                    >
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt="" fill className="object-contain" sizes="(max-width: 768px) 100vw, 58vw" />
                                        ) : (
                                            <span className="text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </motion.div>
                                )}
                                <div className={`min-w-0 flex flex-col justify-center text-left overflow-hidden ${card.imageOrder === 'left' ? 'pl-0 md:pl-0 order-1 md:order-2' : ''}`}>
                                    <SlideUpSection className="w-full">
                                        <span className="font-display inline-block text-2xl md:text-4xl font-extrabold text-primary-500/60 tabular-nums mb-2 md:mb-4" aria-hidden="true">
                                            {cardNumber}
                                        </span>
                                        <GradientHeading text={card.title} className={`${card.titleClass ?? 'text-lg md:text-3xl'} font-extrabold mb-3 md:mb-5 block drop-shadow-sm whitespace-normal md:whitespace-nowrap`} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 24 }}
                                            {...(isNarrow
                                                ? { animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: 'easeOut', delay: 0.1 } }
                                                : { whileInView: { opacity: 1, y: 0 }, viewport: { once: false, margin: '-100px', amount: 0.25 }, transition: { duration: 0.45, ease: 'easeOut', delay: 0 } }
                                            )}
                                            className="border-l-4 border-amber-400/70 pl-3 md:pl-5 py-1"
                                        >
                                            <div className="text-sm md:text-lg leading-relaxed text-pretty text-gray-700 space-y-2">
                                                {contentWithLineBreaks(card.content)}
                                            </div>
                                        </motion.div>
                                    </SlideUpSection>
                                </div>
                                {card.imageOrder === 'right' && (
                                    <motion.div
                                        initial={{ opacity: 0.85, rotate: shouldReduceMotion ? 0 : -2.5 }}
                                        whileInView={{ opacity: 1, rotate: shouldReduceMotion ? 0 : [-2.5, 1.2, -0.4, 0.8, -0.2, 0] }}
                                        viewport={{ once: false, margin: '-60px', amount: 0.25 }}
                                        transition={{ duration: 1.1, delay: 0.60, ease: 'easeOut' }}
                                        className={`relative overflow-hidden ${card.imageSrc ? 'h-[240px] md:h-[55vh] w-full min-w-0 aspect-[4/3] md:aspect-auto' : 'min-h-[140px] md:min-h-[220px] flex items-center justify-center'}`}
                                        aria-hidden="true"
                                    >
                                        {card.imageSrc ? (
                                            <Image src={card.imageSrc} alt="" fill className="object-contain" sizes="(max-width: 768px) 100vw, 58vw" />
                                        ) : (
                                            <span className="text-sm text-gray-400">写真・画像用</span>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </article>
                    )
                })}
                {/* 最後のカード（4枚目）も前のカードに top をずらして重なって止まるためのスペーサー */}
                <div aria-hidden="true" style={{ minHeight: `${STACK_END_SPACER_VH}vh` }} />
            </div>
        </section>
    )
}
