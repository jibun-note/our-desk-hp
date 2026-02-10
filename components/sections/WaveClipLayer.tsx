'use client'

import type { ReactNode } from 'react'

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
    const idMobile = `${idPrefix}-wave-clip-mobile`
    const idDesktop = `${idPrefix}-wave-clip-desktop`

    return (
        <>
            <svg width={0} height={0} aria-hidden>
                <defs>
                    {/* スマホ用：波の位置を上に */}
                    <clipPath id={idMobile} clipPathUnits="objectBoundingBox">
                        <path d="M0 0.005 Q 0.5 0.02 1 0.005 L 1 1 L 0 1 Z" />
                    </clipPath>
                    {/* PC用：従来の波の位置 */}
                    <clipPath id={idDesktop} clipPathUnits="objectBoundingBox">
                        <path d="M0 0.02 Q 0.5 0.06 1 0.02 L 1 1 L 0 1 Z" />
                    </clipPath>
                </defs>
            </svg>
            <div
                className="absolute inset-0 md:hidden"
                style={{ clipPath: `url(#${idMobile})` }}
                aria-hidden
            >
                {children}
            </div>
            <div
                className="absolute inset-0 hidden md:block"
                style={{ clipPath: `url(#${idDesktop})` }}
                aria-hidden
            >
                {children}
            </div>
        </>
    )
}
