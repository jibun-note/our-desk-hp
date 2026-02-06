'use client'

/**
 * スタックカード＋OurDeskマーキー。
 * マーキーは1枚目中央に張り付き、4枚目が画面上端を過ぎたらセクション下部について消える。
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import OurDeskMarquee from '@/components/OurDeskMarquee'
import StackCardsSection, { type StackCardItem } from '@/components/StackCardsSection'

const STICKY_BREAKPOINT = 768
const FIRST_CARD_TOP_REM_NARROW = 6
const FIRST_CARD_TOP_REM_WIDE = 9
const CENTER_ENTER_TOP = 0.3
const CENTER_ENTER_BOTTOM = 0.7

type Props = { cards: StackCardItem[] }

export default function StackCardsWithFixedMarquee({ cards }: Props) {
  const blockRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const firstCardRef = useRef<HTMLElement | null>(null)
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
  const [firstCardCenterViewportY, setFirstCardCenterViewportY] = useState<number | null>(null)
  const [isNarrow, setIsNarrow] = useState(false)

  useLayoutEffect(() => {
    const updateFirstCardY = () => {
      const el = firstCardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const y = Math.round(rect.top + rect.height / 2)
      setFirstCardCenterViewportY((prev) => (prev !== y ? y : prev))
    }

    const check = () => {
      const centerEl = centerRef.current
      const lastCardEl = lastCardRef.current
      if (!centerEl) return

      const centerRect = centerEl.getBoundingClientRect()
      const t = (centerRect.top + centerRect.height / 2) / window.innerHeight
      updateFirstCardY()

      if (!blockInViewRef.current) return

      const inEnterBand = t >= CENTER_ENTER_TOP && t <= CENTER_ENTER_BOTTOM
      const lastCardRect = lastCardEl?.getBoundingClientRect() ?? null
      const pastTop = lastCardRect ? lastCardRect.top < 0 : false

      if (pastTop !== lastCardPastTopRef.current) {
        lastCardPastTopRef.current = pastTop
        setLastCardPastTop(pastTop)
      }

      let next = isFixedRef.current
      if (next) {
        if (pastTop) {
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
      updateFirstCardY()
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
  const followTopValue =
    !scrollingWithBottom && firstCardCenterViewportY != null ? firstCardCenterViewportY : null

  const background =
    phase === 'hidden' || isNarrow
      ? null
      : (
          <OurDeskMarquee
            fixed={phase === 'fixed'}
            visible
            alignBottom={scrollingWithBottom}
            followTop={followTopValue}
          />
        )

  return (
    <div ref={blockRef} className="relative">
      <div
        ref={centerRef}
        className="absolute left-0 right-0 h-px pointer-events-none invisible"
        style={{ top: `calc(${firstCardTopRem}rem + 27.5vh)` }}
        aria-hidden="true"
      />
      <StackCardsSection cards={cards} background={background} firstCardRef={firstCardRef} lastCardRef={lastCardRef} />
    </div>
  )
}
