'use client'

import { WAVE_CLIP_PATHS } from '@/lib/data/waveClipLayer'
import type { ReactNode } from 'react'

const WAVE_VARIANTS = [
    { key: 'mobile' as const, className: 'absolute inset-0 md:hidden' },
    { key: 'desktop' as const, className: 'absolute inset-0 hidden md:block' },
] as const

/**
 * 上端を波型にクリップしたレイヤー。
 * スマホでは波を上寄せ、PCでは従来の位置。同じ children を両方のレイヤーに表示する。
 * 複数使用する場合は idPrefix で識別子を変えること（clipPath の ID が衝突しないように）。
 */
export default function WaveClipLayer({
    idPrefix = 'wave',
    children,
}: {
    idPrefix?: string
    children: ReactNode
}) {
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
                            <path d={WAVE_CLIP_PATHS[key].d} />
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
