'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

// ── 型定義 ──────────────────────────────────────────────────────────────────

type HeroSectionProps = {
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
 * 茎の1区間。
 * scaleY(0→1) で下端（oy）を固定したまま上に伸びる。
 * relDelay = cssBaseDelay からの相対遅延（秒）
 */
type StemSegment = {
    x: number
    y1: number   // 上端（伸びる先）
    y2: number   // 下端（transform-origin）
    oy: number   // transform-origin y = y2 と同値（明示）
    sw: number
    relDelay: number
}

/**
 * 葉・蕾の1パーツ。
 * scale(0→1) + opacity で付け根（ox, oy）から開く。
 */
type SproutPart = {
    d: string
    sw: number
    ox: number
    oy: number
    relDelay: number
}

/**
 * 1ステージ分のデータ。
 * segments と parts は「区間→対応葉」の連鎖: 各区間が伸びたら対応する葉が開く。
 * ①②③ は segments が1本。④は2区間、⑤は3区間。
 */
type SproutStageData = {
    w: number
    h: number
    vw: number
    vh: number
    seedCy: number
    segments: StemSegment[]
    parts: SproutPart[]
}

// ── 5段階の成長データ ────────────────────────────────────────────────────────
//
// ①  短い茎 + 1枚葉（発芽直後）
// ②  双葉（基本形）
// ③  茎がやや長く + 葉を大きく
// ④  茎が長い + 大きい双葉 + 上に小さい双葉 → 茎下区間 → 下双葉L・R → 茎上区間 → 上双葉L・R
// ⑤  茎が最長 + 大きい双葉 + 中双葉 + 蕾 → 茎下区間 → 下双葉 → 茎中区間 → 中双葉 → 茎上区間 → 蕾
//
// relDelay はすべて cssBaseDelay（SVGフェード完了時刻）を 0 とした相対秒数。

const SPROUT_STAGES: SproutStageData[] = [
    // ①
    {
        w: 28, h: 42, vw: 44, vh: 68,
        seedCy: 63,
        segments: [
            { x: 22, y1: 50, y2: 63, oy: 63, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 22 50 C 19 48, 10 45, 10 37 C 10 30, 18 30, 22 50 Z', sw: 2.5, ox: 22, oy: 50, relDelay: 0.50 },
        ],
    },
    // ②
    {
        w: 36, h: 52, vw: 44, vh: 68,
        seedCy: 63,
        segments: [
            { x: 22, y1: 44, y2: 63, oy: 63, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 22 44 C 18 42, 5 37, 4 26 C 3 15, 14 15, 22 44 Z',   sw: 2.5, ox: 22, oy: 44, relDelay: 0.50 },
            { d: 'M 22 44 C 26 42, 39 37, 40 26 C 41 15, 30 15, 22 44 Z', sw: 2.5, ox: 22, oy: 44, relDelay: 0.65 },
        ],
    },
    // ③
    {
        w: 40, h: 58, vw: 48, vh: 76,
        seedCy: 71,
        segments: [
            { x: 24, y1: 48, y2: 71, oy: 71, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 24 48 C 19 45, 3 40, 2 26 C 1 13, 14 13, 24 48 Z',   sw: 2.5, ox: 24, oy: 48, relDelay: 0.55 },
            { d: 'M 24 48 C 29 45, 45 40, 46 26 C 47 13, 34 13, 24 48 Z', sw: 2.5, ox: 24, oy: 48, relDelay: 0.70 },
        ],
    },
    // ④  茎を2区間に分割 → 区間ごとに対応する葉が出る
    {
        w: 44, h: 68, vw: 52, vh: 88,
        seedCy: 83,
        segments: [
            { x: 26, y1: 56, y2: 83, oy: 83, sw: 2.8, relDelay: 0.05 },
            { x: 26, y1: 30, y2: 56, oy: 56, sw: 2.8, relDelay: 0.65 },
        ],
        parts: [
            { d: 'M 26 56 C 21 53, 5 48, 4 35 C 3 22, 15 22, 26 56 Z',   sw: 2.5, ox: 26, oy: 56, relDelay: 0.38 },
            { d: 'M 26 56 C 31 53, 47 48, 48 35 C 49 22, 37 22, 26 56 Z', sw: 2.5, ox: 26, oy: 56, relDelay: 0.53 },
            { d: 'M 26 30 C 23 28, 15 25, 15 18 C 15 12, 22 12, 26 30 Z', sw: 2.2, ox: 26, oy: 30, relDelay: 0.98 },
            { d: 'M 26 30 C 29 28, 37 25, 37 18 C 37 12, 30 12, 26 30 Z', sw: 2.2, ox: 26, oy: 30, relDelay: 1.13 },
        ],
    },
    // ⑤  茎を3区間に分割 → 区間ごとに対応する葉・蕾が出る
    {
        w: 48, h: 78, vw: 56, vh: 96,
        seedCy: 91,
        segments: [
            { x: 28, y1: 65, y2: 91, oy: 91, sw: 2.8, relDelay: 0.05 },
            { x: 28, y1: 42, y2: 65, oy: 65, sw: 2.8, relDelay: 0.68 },
            { x: 28, y1: 20, y2: 42, oy: 42, sw: 2.8, relDelay: 1.28 },
        ],
        parts: [
            { d: 'M 28 65 C 23 62, 6 56, 5 43 C 4 30, 17 30, 28 65 Z',   sw: 2.5, ox: 28, oy: 65, relDelay: 0.38 },
            { d: 'M 28 65 C 33 62, 50 56, 51 43 C 52 30, 39 30, 28 65 Z', sw: 2.5, ox: 28, oy: 65, relDelay: 0.53 },
            { d: 'M 28 42 C 24 40, 13 36, 13 27 C 13 19, 21 19, 28 42 Z', sw: 2.2, ox: 28, oy: 42, relDelay: 1.01 },
            { d: 'M 28 42 C 32 40, 43 36, 43 27 C 43 19, 35 19, 28 42 Z', sw: 2.2, ox: 28, oy: 42, relDelay: 1.16 },
            { d: 'M 28 20 C 24 18, 20 14, 22 8 C 24 4, 28 6, 28 20 Z',   sw: 2.0, ox: 28, oy: 20, relDelay: 1.61 },
            { d: 'M 28 20 C 32 18, 36 14, 34 8 C 32 4, 28 6, 28 20 Z',   sw: 2.0, ox: 28, oy: 20, relDelay: 1.76 },
        ],
    },
]

/** SVG ラッパーのフェードイン時間。茎・葉の CSS アニメは「フェードイン完了」を 0 として relDelay で開始 */
const SVG_FADE_DURATION = 0.25

// ── 内部コンポーネント ────────────────────────────────────────────────────────

/**
 * 内部専用: 指定ステージの成長記号 SVG を描画する。
 * - fadeInDelay = i * staggerDelay → ドットと同じ左から順にフェードイン。
 * - cssBaseDelay = fadeInDelay + SVG_FADE_DURATION → 茎・葉の animation-delay の起点。
 * - ④⑤ は茎を segments で区間分割し、区間が伸びたら対応する葉が開く連鎖。
 */
function SproutIcon({
    stageIndex,
    fadeInDelay,
    reduceMotion,
}: {
    stageIndex: number
    fadeInDelay: number
    reduceMotion: boolean
}) {
    const stage = SPROUT_STAGES[stageIndex]
    const cssBaseDelay = fadeInDelay + SVG_FADE_DURATION

    return (
        <motion.div
            className="block leading-[0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: SVG_FADE_DURATION, delay: fadeInDelay, ease: 'easeOut' }}
            aria-hidden
        >
            <svg
                width={stage.w}
                height={stage.h}
                viewBox={`0 0 ${stage.vw} ${stage.vh}`}
                fill="none"
                className="block flex-shrink-0 overflow-visible"
            >
                {/* 茎セグメント: 各区間を下端固定で上方向に伸ばす */}
                {stage.segments.map((seg, idx) => (
                    <g
                        key={`seg-${idx}`}
                        className={reduceMotion ? undefined : 'hero-sprout-stem'}
                        style={{
                            transformOrigin: `${seg.x}px ${seg.oy}px`,
                            animationDelay: reduceMotion ? undefined : `${cssBaseDelay + seg.relDelay}s`,
                        }}
                    >
                        <line
                            x1={seg.x}
                            y1={seg.y1}
                            x2={seg.x}
                            y2={seg.y2}
                            stroke="#F08300"
                            strokeWidth={seg.sw}
                            strokeLinecap="round"
                        />
                    </g>
                ))}

                {/* 葉・蕾: 各パーツの付け根を起点に開く */}
                {stage.parts.map((part, idx) => (
                    <g
                        key={`part-${idx}`}
                        className={reduceMotion ? undefined : 'hero-sprout-part'}
                        style={{
                            transformOrigin: `${part.ox}px ${part.oy}px`,
                            animationDelay: reduceMotion ? undefined : `${cssBaseDelay + part.relDelay}s`,
                        }}
                    >
                        <path
                            d={part.d}
                            stroke="#F08300"
                            strokeWidth={part.sw}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                ))}

                {/* 種（circle）: アニメーション対象外・最前面で茎との接合部を隠す */}
                <circle
                    cx={stage.vw / 2}
                    cy={stage.seedCy}
                    r={4}
                    fill="none"
                    stroke="#F08300"
                    strokeWidth={2.8}
                />
            </svg>
        </motion.div>
    )
}

// ── メインコンポーネント ──────────────────────────────────────────────────────

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
 *
 * インジケーター設計（5段階成長記号）:
 * - activeIndex=0〜4 に対応して ①〜⑤ の成長ステージを表示
 * - ①②③: 茎1本 → 葉が開く
 * - ④: 茎下区間 → 下双葉 → 茎上区間 → 上双葉（連鎖）
 * - ⑤: 茎下区間 → 下双葉 → 茎中区間 → 中双葉 → 茎上区間 → 蕾（3段連鎖）
 * - activeIndex が変わると cycleKey が更新され SproutIcon が再マウントされアニメーションをリセット
 */
export default function HeroSection({
    title,
    description,
    variant = 'dark',
    className,
    activeIndex,
    children,
}: HeroSectionProps) {
    const reduceMotion = useReducedMotion() ?? false
    const duration     = reduceMotion ? 0 : 0.4
    const staggerDelay = reduceMotion ? 0 : 0.12
    const [cycleKey, setCycleKey] = useState(0)

    // activeIndex が変わるたびに cycleKey を更新 → SproutIcon の key が変わり再マウント
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
                {/* 見出し */}
                <h1
                    className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
                        isLight ? 'text-white' : 'text-gray-800'
                    )}
                >
                    {title}
                </h1>

                {/* サブテキスト */}
                <p
                    className={cn(
                        'text-base md:text-lg leading-relaxed text-pretty max-w-2xl mt-3 md:mt-4',
                        isLight ? 'text-white/85' : 'text-gray-500'
                    )}
                >
                    {description}
                </p>

                {/* ページインジケーター
                    - items-end で全要素の下端（= 種の底辺）を揃える
                    - min-h はステージ⑤（h=78px）に合わせて 84px を確保
                    - スロット幅を非アクティブドット（8px）と同じに固定し、SVG は absolute で左右中央・下端揃え。
                      gap-[11px] が種の中心間で均一になる。 */}
                {activeIndex != null && (
                    <div className="mt-6 flex items-end gap-[11px] min-h-[84px]">
                        {[0, 1, 2, 3, 4].map((i) => {
                            const isActive = i === activeIndex
                            const fadeInDelay = i * staggerDelay

                            if (isActive) {
                                return (
                                    <div
                                        key={`sprout-${i}-${cycleKey}`}
                                        className="relative flex-shrink-0"
                                        style={{ width: 8, height: 8 }}
                                    >
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                                            <SproutIcon
                                                stageIndex={i}
                                                fadeInDelay={fadeInDelay}
                                                reduceMotion={reduceMotion}
                                            />
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: fadeInDelay,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    className="size-2 rounded-full bg-gray-300 flex-shrink-0"
                                />
                            )
                        })}
                    </div>
                )}

                {/* 拡張スロット（CTA 等） */}
                {children != null && <div className="mt-6 md:mt-8">{children}</div>}
            </motion.div>
        </section>
    )
}
