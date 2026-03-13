'use client'

import type { ReactNode } from 'react'

/** デフォルトの波クリップパス（objectBoundingBox 0〜1）。ハイドレーション一致のためコンポーネント内で定義。 */
const DEFAULT_WAVE_PATHS: { mobile: { d: string }; desktop: { d: string } } = {
    mobile: { d: 'M0 0.01 Q 0.5 0.08 1 0.01 L 1 1 L 0 1 Z' },
    desktop: { d: 'M0 0.03 Q 0.5 0.14 1 0.03 L 1 1 L 0 1 Z' },
}

const WAVE_VARIANTS = [
    { key: 'mobile' as const, className: 'absolute inset-0 md:hidden' },
    { key: 'desktop' as const, className: 'absolute inset-0 hidden md:block' },
] as const

export type WaveClipPathSet = { mobile: { d: string }; desktop: { d: string } }

/**
 * 上端を波型にクリップしたレイヤー。
 * スマホでは波を上寄せ、PCでは従来の位置。同じ children を両方のレイヤーに表示する。
 * 複数使用する場合は idPrefix で識別子を変えること（clipPath の ID が衝突しないように）。
 * clipPaths を渡すとそのパスを使用（カード内だけ別の波形にしたい場合など）。
 */
export default function WaveClipLayer({
    idPrefix = 'wave',
    clipPaths,
    children,
}: {
    idPrefix?: string
    /** 未指定時は共通の DEFAULT_WAVE_PATHS を使用 */
    clipPaths?: WaveClipPathSet
    children: ReactNode
}) {
    const paths = clipPaths ?? DEFAULT_WAVE_PATHS
    return (
        <>
            <svg width={0} height={0} aria-hidden>
                <defs>
                    {WAVE_VARIANTS.map(({ key }) => (
                        <clipPath
                            key={key}
                            id={`${idPrefix}-wave-clip-${key}`}
                            clipPathUnits="objectBoundingBox"
                        >
                            <path d={paths[key].d} />
                        </clipPath>
                    ))}
                </defs>
            </svg>
            {WAVE_VARIANTS.map(({ key, className }) => (
                <div
                    key={key}
                    className={className}
                    style={{ clipPath: `url(#${idPrefix}-wave-clip-${key})` }}
                    aria-hidden
                >
                    {children}
                </div>
            ))}
        </>
    )
}
