'use client'

/**
 * スタックカード＋OurDeskマーキー。
 * マーキーはビューポート中央に固定表示。4枚目が画面上端を過ぎたらセクション下部について消える。
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import OurDeskMarquee from '@/components/OurDeskMarquee'
import StackCardsSection, { type StackCardItem } from '@/components/StackCardsSection'

const STICKY_BREAKPOINT = 768
const FIRST_CARD_TOP_REM_NARROW = 6
const FIRST_CARD_TOP_REM_WIDE = 9
const CENTER_ENTER_TOP = 0.3
const CENTER_ENTER_BOTTOM = 0.7
/** 上方向スクロール時、lastCardPastTop を false にする閾値（ビューポート高の割合）。ヒステリシスでカクつき防止 */
const LAST_CARD_PAST_TOP_HYSTERESIS = 0.12
/** 上方向スクロールでセクションに戻ったとみなす閾値。ヒステリシス(12vh)より小さくし、先に isFixed へ戻してジャンプを軽減 */
const RESET_FIXED_THRESHOLD = 0.05

type Props = { cards: StackCardItem[] }

export default function StackCardsWithFixedMarquee({ cards }: Props) {
    const blockRef = useRef<HTMLDivElement>(null)
    const centerRef = useRef<HTMLDivElement>(null)
    const lastCardRef = useRef<HTMLElement | null>(null)
    const blockInViewRef = useRef(false)
    const isFixedRef = useRef(false)
    const lastCardPastTopRef = useRef(false)
    const hasLeftFixedDueToScroll = useRef(false)
    const hasBeenFixed = useRef(false)
    const rafId = useRef<number | null>(null)

    const [blockInView, setBlockInView] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    const [lastCardPastTop, setLastCardPastTop] = useState(false)
    const [isNarrow, setIsNarrow] = useState(false)

    useLayoutEffect(() => {
        const check = () => {
            const centerEl = centerRef.current
            const lastCardEl = lastCardRef.current
            if (!centerEl) return

            const centerRect = centerEl.getBoundingClientRect()
            const t = (centerRect.top + centerRect.height / 2) / window.innerHeight

            if (!blockInViewRef.current) return

            const inEnterBand = t >= CENTER_ENTER_TOP && t <= CENTER_ENTER_BOTTOM
            const lastCardRect = lastCardEl?.getBoundingClientRect() ?? null
            const vh = window.innerHeight
            // ヒステリシス: 下方向は top<0 で true、上方向は top>12vh で false。0〜12vh の帯で切り替えを遅延しカクつき防止
            const pastTopRaw = lastCardRect ? lastCardRect.top < 0 : false
            const pastTopHysteresis = lastCardRect
                ? lastCardPastTopRef.current
                    ? lastCardRect.top < vh * LAST_CARD_PAST_TOP_HYSTERESIS
                    : lastCardRect.top < 0
                : false

            if (pastTopHysteresis !== lastCardPastTopRef.current) {
                lastCardPastTopRef.current = pastTopHysteresis
                setLastCardPastTop(pastTopHysteresis)
            }

            // 上方向スクロールで十分戻ったら hasLeftFixedDueToScroll をリセット（isFixed を再度有効化）
            if (
                hasLeftFixedDueToScroll.current &&
                lastCardRect &&
                lastCardRect.top > vh * RESET_FIXED_THRESHOLD &&
                inEnterBand
            ) {
                hasLeftFixedDueToScroll.current = false
            }

            let next = isFixedRef.current
            if (next) {
                if (pastTopRaw) {
                    next = false
                    hasLeftFixedDueToScroll.current = true
                }
            } else {
                if (inEnterBand && !hasLeftFixedDueToScroll.current) next = true
            }
            if (next !== isFixedRef.current) {
                isFixedRef.current = next
                setIsFixed(next)
            }
        }

        const onScroll = () => {
            if (!blockInViewRef.current) return
            if (rafId.current != null) cancelAnimationFrame(rafId.current)
            rafId.current = requestAnimationFrame(() => {
                rafId.current = null
                check()
            })
        }

        const onResize = () => {
            if (typeof window === 'undefined') return
            setIsNarrow(window.innerWidth < STICKY_BREAKPOINT)
            check()
        }

        const blockEl = blockRef.current
        const io = blockEl
            ? (() => {
                const observer = new IntersectionObserver(([e]) => {
                    blockInViewRef.current = e.isIntersecting
                    setBlockInView(e.isIntersecting)
                }, { threshold: 0 })
                observer.observe(blockEl)
                return observer
            })()
            : null

        check()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        onResize()

        return () => {
            io?.disconnect()
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
            if (rafId.current != null) cancelAnimationFrame(rafId.current)
        }
    }, [])

    const phase = !blockInView ? 'hidden' : isFixed ? 'fixed' : 'scrolling'
    if (phase === 'fixed') hasBeenFixed.current = true

    const firstCardTopRem = isNarrow ? FIRST_CARD_TOP_REM_NARROW : FIRST_CARD_TOP_REM_WIDE
    const scrollingWithBottom = phase === 'scrolling' && hasBeenFixed.current && lastCardPastTop
    // sticky: セクション内に収まるビューポート中央 / alignBottom: セクション下部
    const marqueeSticky = !scrollingWithBottom

    const background =
        phase === 'hidden' || isNarrow
            ? null
            : (
                <OurDeskMarquee
                    sticky={marqueeSticky}
                    visible
                    alignBottom={scrollingWithBottom}
                />
            )

    return (
        <div ref={blockRef} id="stack-cards-section" className="relative">
            <div
                ref={centerRef}
                className="absolute left-0 right-0 h-px pointer-events-none invisible"
                style={{ top: `calc(${firstCardTopRem}rem + 27.5vh)` }}
                aria-hidden="true"
            />
            <StackCardsSection cards={cards} background={background} marqueeSticky={marqueeSticky} lastCardRef={lastCardRef} />
        </div>
    )
}
