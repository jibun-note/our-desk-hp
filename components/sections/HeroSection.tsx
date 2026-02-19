'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import SproutIcon from '@/components/ui/SproutIcon'

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
 * - activeIndex 指定時、5つのドットを表示。アクティブなドットのみ SproutIcon（@/components/ui/SproutIcon）で成長アニメーションを描画。
 * - activeIndex=0〜4 が ①〜⑤ の成長ステージに対応（①〜③: 茎1本→葉、④: 2区間→下双葉→上双葉、⑤: 3区間→下双葉→中双葉→蕾）。
 * - activeIndex が変わると cycleKey を更新し SproutIcon を再マウントしてアニメーションをリセットする。
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
