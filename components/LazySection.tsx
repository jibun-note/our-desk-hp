'use client'

import React, { useState, useRef, useEffect } from 'react'

type Props = {
    children: React.ReactNode
    /** プレースホルダーの高さ（例: '500px', '220vh'）。レンダリング前のスペース確保用 */
    placeholderHeight?: string
    /** 表示開始の余白。ビューポートからこの距離でレンダリングを開始（例: '400px'） */
    rootMargin?: string
}

/**
 * ビューポートに近づいたときのみ子要素をレンダリングする。
 * 初期表示やスクロール時のメインスレッド負荷を分散する。
 */
export default function LazySection({
    children,
    placeholderHeight = '100vh',
    rootMargin = '400px',
}: Props) {
    const [shouldRender, setShouldRender] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShouldRender(true)
            },
            { rootMargin, threshold: 0 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [rootMargin])

    return (
        <div ref={ref} style={{ minHeight: placeholderHeight }}>
            {shouldRender ? children : null}
        </div>
    )
}
