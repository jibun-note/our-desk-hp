'use client'

/**
 * スタックカード＋OurDeskマーキー。
 * マーキーはビューポート中央に固定表示。4枚目が画面上端を過ぎたらセクション下部について消える。
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import OurDeskMarquee from '@/components/sections/OurDeskMarquee'
import StackCardsSection, { type StackCardItem } from '@/components/sections/StackCardsSection'

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
    const [scrollState, setScrollState] = useState({ isFixed: false, lastCardPastTop: false })
    const scrollStateRef = useRef(scrollState)

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
            const pastTopRaw = lastCardRect ? lastCardRect.top < 0 : false
            const pastTopHysteresis = lastCardRect
                ? lastCardPastTopRef.current
                    ? lastCardRect.top < vh * LAST_CARD_PAST_TOP_HYSTERESIS
                    : lastCardRect.top < 0
                : false

            if (pastTopHysteresis !== lastCardPastTopRef.current) {
                lastCardPastTopRef.current = pastTopHysteresis
            }

            if (
                hasLeftFixedDueToScroll.current &&
                lastCardRect &&
                lastCardRect.top > vh * RESET_FIXED_THRESHOLD &&
                inEnterBand
            ) {
                hasLeftFixedDueToScroll.current = false
            }

            let nextFixed = isFixedRef.current
            if (nextFixed) {
                if (pastTopRaw) {
                    nextFixed = false
                    hasLeftFixedDueToScroll.current = true
                }
            } else {
                if (inEnterBand && !hasLeftFixedDueToScroll.current) nextFixed = true
            }
            if (nextFixed !== isFixedRef.current) {
                isFixedRef.current = nextFixed
            }

            const nextState = { lastCardPastTop: pastTopHysteresis, isFixed: nextFixed }
            if (
                nextState.lastCardPastTop !== scrollStateRef.current.lastCardPastTop ||
                nextState.isFixed !== scrollStateRef.current.isFixed
            ) {
                scrollStateRef.current = nextState
                setScrollState(nextState)
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

        return () => {
            io?.disconnect()
            window.removeEventListener('scroll', onScroll)
            if (rafId.current != null) cancelAnimationFrame(rafId.current)
        }
    }, [])

    const phase = !blockInView ? 'hidden' : scrollState.isFixed ? 'fixed' : 'scrolling'
    if (phase === 'fixed') hasBeenFixed.current = true

    const scrollingWithBottom = phase === 'scrolling' && hasBeenFixed.current && scrollState.lastCardPastTop
    const marqueeSticky = !scrollingWithBottom

    const background =
        phase === 'hidden' ? null : (
            <div className="hidden md:block" aria-hidden="true">
                <OurDeskMarquee
                    sticky={marqueeSticky}
                    visible
                    alignBottom={scrollingWithBottom}
                />
            </div>
        )

    return (
        <div ref={blockRef} id="stack-cards-section" className="relative">
            <div
                ref={centerRef}
                className="absolute left-0 right-0 h-px pointer-events-none invisible top-[calc(6rem+27.5vh)] md:top-[calc(9rem+27.5vh)]"
                aria-hidden="true"
            />
            <StackCardsSection cards={cards} background={background} marqueeSticky={marqueeSticky} lastCardRef={lastCardRef} />
        </div>
    )
}
