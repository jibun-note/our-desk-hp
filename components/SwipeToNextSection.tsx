'use client'

import React, { useRef, useCallback } from 'react'

const SWIPE_THRESHOLD_PX = 50
const MOBILE_BREAKPOINT = 768
/** この属性を持つ要素内で始まったスワイプは「次セクションへ」に使わない（カルーセル用） */
const CAROUSEL_SELECTOR = '[data-swipe-carousel]'

type Props = {
    children: React.ReactNode
    targetSectionId: string
}

export default function SwipeToNextSection({ children, targetSectionId }: Props) {
    const touchStartX = useRef<number | null>(null)
    const touchStartedOnCarousel = useRef(false)

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.changedTouches.length > 0) {
            touchStartX.current = e.changedTouches[0].clientX
            const target = e.target
            touchStartedOnCarousel.current =
                target instanceof Element && target.closest(CAROUSEL_SELECTOR) !== null
        }
    }, [])

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            if (touchStartX.current === null || e.changedTouches.length === 0) return
            if (typeof window === 'undefined' || window.innerWidth >= MOBILE_BREAKPOINT) return
            if (touchStartedOnCarousel.current) {
                touchStartX.current = null
                touchStartedOnCarousel.current = false
                return
            }

            const endX = e.changedTouches[0].clientX
            const deltaX = endX - touchStartX.current

            touchStartX.current = null

            if (deltaX < -SWIPE_THRESHOLD_PX) {
                document.getElementById(targetSectionId)?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        [targetSectionId]
    )

    return (
        <div
            className="w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    )
}
