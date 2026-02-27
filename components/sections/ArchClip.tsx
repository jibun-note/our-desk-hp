'use client'

import type { ReactNode } from 'react'

/** 上端アーチ（通常）か下端アーチ（逆アーチ）か */
export type ArchClipVariant = 'top' | 'bottom'

/**
 * 上端または下端をゆるやかなアーチ型にクリップしたレイヤー。
 * variant: 'top' = 上端アーチ（従来）、'bottom' = 逆アーチ（下端アーチ）。
 * スマホではアーチを上寄せ、PCではやや下に。同じ children を両方のレイヤーに表示する。
 * 複数使用する場合は idPrefix で識別子を変えること（clipPath の ID が衝突しないように）。
 */
export default function ArchClip({
    idPrefix = 'arch',
    variant = 'top',
    children,
}: {
    idPrefix?: string
    /** 'top' = 上端アーチ, 'bottom' = 逆アーチ（下端アーチ） */
    variant?: ArchClipVariant
    children: ReactNode
}) {
    const idMobile = `${idPrefix}-arch-clip-mobile`
    const idDesktop = `${idPrefix}-arch-clip-desktop`

    const isBottom = variant === 'bottom'

    return (
        <>
            <svg width={0} height={0} aria-hidden>
                <defs>
                    {isBottom ? (
                        <>
                            {/* 逆アーチ：下端がアーチ。スマホ用 */}
                            <clipPath id={idMobile} clipPathUnits="objectBoundingBox">
                                <path d="M0 0 L 1 0 L 1 1 Q 0.5 0.98 0 1 Z" />
                            </clipPath>
                            {/* 逆アーチ：PC用 */}
                            <clipPath id={idDesktop} clipPathUnits="objectBoundingBox">
                                <path d="M0 0 L 1 0 L 1 1 Q 0.5 0.94 0 1 Z" />
                            </clipPath>
                        </>
                    ) : (
                        <>
                            {/* 上端アーチ：スマホ用 */}
                            <clipPath id={idMobile} clipPathUnits="objectBoundingBox">
                                <path d="M0 0.005 Q 0.5 0.02 1 0.005 L 1 1 L 0 1 Z" />
                            </clipPath>
                            {/* 上端アーチ：PC用 */}
                            <clipPath id={idDesktop} clipPathUnits="objectBoundingBox">
                                <path d="M0 0.02 Q 0.5 0.06 1 0.02 L 1 1 L 0 1 Z" />
                            </clipPath>
                        </>
                    )}
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
