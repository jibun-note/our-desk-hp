'use client'

import { motion } from 'motion/react'
import { sproutStages, SVG_FADE_DURATION } from '@/lib/data/sproutIcon'

// ── コンポーネント ──────────────────────────────────────────────────────────

type Props = {
    /** 成長ステージ（0〜4 で ①〜⑤） */
    stageIndex: number
    /** フェードイン開始遅延（秒）。ドットと同じ左から順に揃えるために使用 */
    fadeInDelay: number
    /** アニメーション無効化（prefers-reduced-motion 相当） */
    reduceMotion: boolean
}

/**
 * 5段階成長記号の SVG アイコン（茎・葉・蕾・種）。
 * fadeInDelay でラッパーをフェードインし、その完了を 0 として茎・葉を順にアニメーションする。
 * ④⑤ は茎を区間分割し、区間が伸びたら対応する葉が開く連鎖になっている。
 */
export default function SproutIcon({ stageIndex, fadeInDelay, reduceMotion }: Props) {
    const stage = sproutStages[stageIndex]
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
