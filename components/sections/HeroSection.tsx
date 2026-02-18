'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
    /** English page identifier — "Recruit", "Company", etc. */
    title: string
    /** Japanese subtitle */
    description: string
    /**
     * Text color mode.
     * - "dark" (default): dark text for light backgrounds
     * - "light": white text for dark/image backgrounds
     */
    variant?: 'dark' | 'light'
    /** Additional className on the outer <section> */
    className?: string
    /** ページインジケーターのアクティブ位置（0始まり）。指定時に5つのドットを表示 */
    activeIndex?: number
    /** CTA ボタン等を差し込むための拡張ポイント */
    children?: React.ReactNode
}

/**
 * 共通ヒーローセクション（タイポグラフィ中心・背景は持たない）
 *
 * 背景色・グラデーション・装飾は一切描画しません。
 * 「ページが表面（背景）を制御し、このコンポーネントは見出し階層だけを担当する」設計です。
 *
 * 使い方（ページに溶け込ませる）:
 * - 親要素（例: div や main）に背景色や画像を指定すると、その上に自然に溶け込みます。
 * - 明るい背景 → variant="dark"（デフォルト）
 * - 暗い背景・画像の上 → variant="light"
 * - 例: recruit ページでは bg-[#fffdf5] の div 内に配置し、Blob 装飾と一体に見せています。
 */
export default function HeroSection({
    title,
    description,
    variant = 'dark',
    className,
    activeIndex,
    children,
}: HeroSectionProps) {
    const reduceMotion = useReducedMotion()
    const duration = reduceMotion ? 0 : 0.5
    const staggerDelay = reduceMotion ? 0 : 0.15
    const [cycleKey, setCycleKey] = useState(0)

    useEffect(() => {
        setCycleKey((k) => k + 1)
    }, [activeIndex])

    const isLight = variant === 'light'

    return (
        <section className={cn('relative bg-transparent', className)}>
            <motion.div
                className="container mx-auto max-w-5xl px-5 md:px-8 py-14 md:py-20 lg:py-24"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
            >

                {/* Title: restrained scale (md:4xl / lg:5xl), left-aligned */}
                <h1
                    className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
                        isLight ? 'text-white' : 'text-gray-800'
                    )}
                >
                    {title}
                </h1>

                {/* Subtitle: comfortable reading weight */}
                <p
                    className={cn(
                        'text-base md:text-lg leading-relaxed text-pretty max-w-2xl mt-3 md:mt-4',
                        isLight ? 'text-white/85' : 'text-gray-500'
                    )}
                >
                    {description}
                </p>

                {/* ページインジケーター（② 双葉芽吹き / reduceMotion 時はドットのみ）
                    芽を position:absolute で浮かせることでドット間の間隔を均一に保つ。
                    sproutDelay = ドット登場アニメ完了後（duration + 各ドットのstagger分）に芽を出す */}
                {activeIndex != null && (
                    <div className="mt-6 flex gap-2 items-end min-h-[56px]">
                        {[0, 1, 2, 3, 4].map((i) => {
                            const isActive = i === activeIndex
                            // このドットが登場し終わるまでの時間（秒）
                            const sproutDelay = duration + i * staggerDelay

                            return (
                                <div
                                    key={i}
                                    className="relative flex items-center justify-center"
                                    // 全ドット同サイズの領域に固定 → gap が均一になる
                                    style={{ width: 9, height: 9 }}
                                >
                                    {/* 芽ブロック: absolute で浮かせてレイアウトに影響させない */}
                                    {!reduceMotion && isActive && (
                                        <div
                                            key={`sprout-${activeIndex}-${cycleKey}`}
                                            className="absolute bottom-full mb-0.5"
                                            style={{ left: '50%', transform: 'translateX(-50%)' }}
                                        >
                                            {/*
                                                葉の設計:
                                                - 茎先端(jx=28, jy=20)を付け根として
                                                - 「上向きの正規葉シルエット」を rotate で角度をつける
                                                  左葉: rotate(-135) → 左斜め方向
                                                  右葉: rotate(-45)  → 右斜め方向
                                                - アニメは外側 <g> の scale(0→1) + opacity で制御
                                            */}
                                            <svg
                                                width={31}
                                                height={29}
                                                viewBox="0 0 56 52"
                                                className="block overflow-visible"
                                                aria-hidden
                                            >
                                                <defs>
                                                    <linearGradient id="sproutStemGrad" x1="0.5" y1="1" x2="0.5" y2="0">
                                                        <stop offset="0%" stopColor="#C2410C" />
                                                        <stop offset="100%" stopColor="#FB923C" />
                                                    </linearGradient>
                                                    <linearGradient id="sproutLeafL" x1="1" y1="1" x2="0" y2="0">
                                                        <stop offset="0%" stopColor="#F97316" />
                                                        <stop offset="100%" stopColor="#FDE68A" />
                                                    </linearGradient>
                                                    <linearGradient id="sproutLeafR" x1="0" y1="1" x2="1" y2="0">
                                                        <stop offset="0%" stopColor="#EA580C" />
                                                        <stop offset="100%" stopColor="#FCD34D" />
                                                    </linearGradient>
                                                </defs>

                                                {/* 茎: 下中央(28,52)→右カーブ→付け根(28,20) */}
                                                <path
                                                    className="hero-sprout-stem"
                                                    d="M 28 52 Q 38 36, 28 20"
                                                    fill="none"
                                                    stroke="url(#sproutStemGrad)"
                                                    strokeWidth={3}
                                                    strokeLinecap="round"
                                                    style={{ animationDelay: `${sproutDelay}s` }}
                                                />

                                                {/* 左葉: 付け根(28,20)を原点に translate → rotate(-135deg) → 葉シルエット
                                                    アニメ用 <g> の transform-origin は付け根(0,0) */}
                                                <g transform="translate(28, 20) rotate(65)">
                                                    <g
                                                        className="hero-sprout-leaf-left"
                                                        style={{
                                                            transformOrigin: '0px 0px',
                                                            animationDelay: `${sproutDelay}s`,
                                                        }}
                                                    >
                                                        {/* 正規葉: 付け根(0,0)・先端(0,-18)・幅±11 */}
                                                        <path
                                                            d="M 0 0 C -11 -2.7, -8.8 -13.5, 0 -18 C 8.8 -13.5, 11 -2.7, 0 0 Z"
                                                            fill="url(#sproutLeafL)"
                                                        />
                                                        {/* 葉脈ハイライト */}
                                                        <path
                                                            d="M 0 -1 C -3 -6, -5 -11, -2 -15"
                                                            fill="none"
                                                            stroke="rgba(255,255,255,0.3)"
                                                            strokeWidth={1}
                                                            strokeLinecap="round"
                                                        />
                                                    </g>
                                                </g>

                                                {/* 右葉: rotate(-45deg) → 右斜め方向（やや大きく） */}
                                                <g transform="translate(28, 20) rotate(-100)">
                                                    <g
                                                        className="hero-sprout-leaf-right"
                                                        style={{
                                                            transformOrigin: '0px 0px',
                                                            animationDelay: `${sproutDelay}s`,
                                                        }}
                                                    >
                                                        {/* 正規葉: 付け根(0,0)・先端(0,-20)・幅±12 */}
                                                        <path
                                                            d="M 0 0 C -12 -3, -9.6 -15, 0 -20 C 9.6 -15, 12 -3, 0 0 Z"
                                                            fill="url(#sproutLeafR)"
                                                        />
                                                        {/* 葉脈ハイライト */}
                                                        <path
                                                            d="M 0 -1 C -3 -7, -5 -12, -2 -17"
                                                            fill="none"
                                                            stroke="rgba(255,255,255,0.25)"
                                                            strokeWidth={1}
                                                            strokeLinecap="round"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    )}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration,
                                            delay: i * staggerDelay,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        className={cn(
                                            'rounded-full transition-all duration-300 ease-out',
                                            isActive ? 'size-[9px] bg-primary-700' : 'size-2 bg-gray-300'
                                        )}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* 拡張スロット（CTA 等） */}
                {children && <div className="mt-6 md:mt-8">{children}</div>}
            </motion.div>
        </section>
    )
}
