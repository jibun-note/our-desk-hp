'use client'

/**
 * スタックカード＋OurDeskマーキー。
 * 1. 1枚目カードと一緒にスクロールしてくる（absolute）
 * 2. 1枚目カード中央が画面中央付近で止まったらマーキーも止まる（fixed）→ 4枚そろうまで固定
 * 3. 4枚目（最後のカード）が画面上端を過ぎたら固定解除し、マーキーも最後のカードと一緒にスクロールして消える（absolute）
 */
import React, { useRef, useState, useLayoutEffect } from 'react'
import OurDeskMarquee from '@/components/OurDeskMarquee'
import StackCardsSection, { type StackCardItem } from '@/components/StackCardsSection'

const STICKY_BREAKPOINT = 768
const FIRST_CARD_TOP_REM_NARROW = 6
const FIRST_CARD_TOP_REM_WIDE = 9
const CENTER_ENTER_BOTTOM = 0.7 // 1枚目中央がこの比率より下なら「1枚目追従」（戻し時）

type Props = { cards: StackCardItem[] }
type Phase = 'hidden' | 'fixed' | 'scrolling'

export default function StackCardsWithFixedMarquee({ cards }: Props) {
  const blockRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLElement | null>(null)
  const [blockInView, setBlockInView] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [lastCardPastTop, setLastCardPastTop] = useState(false)
  const [lastCardViewportY, setLastCardViewportY] = useState<number | null>(null)
  const [centerRatio, setCenterRatio] = useState(0) // 1枚目中央のビューポート比率 0=上端 1=下端（戻し時の固定→1枚目追従の切り替え用）
  const [viewportCenterY, setViewportCenterY] = useState(0) // ビューポート中央Y(px)（戻し時「位置固定」用）
  const [isNarrow, setIsNarrow] = useState(false)

  useLayoutEffect(() => {
    const el = blockRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setBlockInView(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useLayoutEffect(() => {
    const onResize = () => setIsNarrow(typeof window !== 'undefined' && window.innerWidth < STICKY_BREAKPOINT)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isFixedRef = useRef(false)
  const lastCardPastTopRef = useRef(false)
  const hasLeftFixedDueToScroll = useRef(false) // 一度4枚目で固定解除したら、戻し時は再び fixed に入らない
  const rafId = useRef<number | null>(null)

  useLayoutEffect(() => {
    // 入り: 1枚目カード中央が画面中央付近 [30%,70%] に入ったら fixed（ただし戻し時は入らない）
    // 出: 4枚目（最後のカード）が画面上端を過ぎたら fixed 解除
    const CENTER_ENTER_TOP = 0.3
    const CENTER_ENTER_BOTTOM = 0.7

    const check = () => {
      const centerEl = centerRef.current
      const lastCardEl = lastCardRef.current
      if (!centerEl) return

      const centerRect = centerEl.getBoundingClientRect()
      const vh = window.innerHeight
      const y = centerRect.top + centerRect.height / 2
      const t = y / vh  // 0=画面上端、1=画面下端

      const inEnterBand = t >= CENTER_ENTER_TOP && t <= CENTER_ENTER_BOTTOM
      // 4枚目が画面上端を過ぎたら固定解除（4枚そろってスタックごと上に流れた）
      const pastTop = lastCardEl ? lastCardEl.getBoundingClientRect().top < 0 : false
      if (pastTop !== lastCardPastTopRef.current) {
        lastCardPastTopRef.current = pastTop
        setLastCardPastTop(pastTop)
      }
      // 1枚目中央の比率・ビューポート中央（戻し時の固定→1枚目追従の切り替えに使用）
      const tRounded = Math.round((y / vh) * 100) / 100
      setCenterRatio((prev) => (prev !== tRounded ? tRounded : prev))
      const vcy = Math.round(vh / 2)
      setViewportCenterY((prev) => (prev !== vcy ? vcy : prev))
      // スクロール戻し時: 4枚目中央のビューポートY（整数で比較して再描画を抑える）
      if (lastCardEl && !pastTop) {
        const rect = lastCardEl.getBoundingClientRect()
        const centerY = Math.round(rect.top + rect.height / 2)
        setLastCardViewportY((prev) => (prev !== centerY ? centerY : prev))
      } else {
        setLastCardViewportY((prev) => (prev !== null ? null : prev))
      }

      const currentlyFixed = isFixedRef.current
      let next = currentlyFixed
      if (currentlyFixed) {
        if (pastTop) {
          next = false
          hasLeftFixedDueToScroll.current = true
        }
      } else {
        // 戻し時は中央固定に再入しない → 1枚目追従のまま
        if (inEnterBand && !hasLeftFixedDueToScroll.current) next = true
      }

      if (next !== currentlyFixed) {
        isFixedRef.current = next
        setIsFixed(next)
      }
    }

    const onScroll = () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null
        check()
      })
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const phase: Phase = !blockInView ? 'hidden' : isFixed ? 'fixed' : 'scrolling'
  const hasBeenFixed = useRef(false)
  if (phase === 'fixed') hasBeenFixed.current = true

  const firstCardTopRem = isNarrow ? FIRST_CARD_TOP_REM_NARROW : FIRST_CARD_TOP_REM_WIDE

  // 下方向: 4枚目が画面上端を過ぎたら alignBottom（セクション下部について上に流れる）
  // 戻し: 4枚目追従 → 位置固定（中央）→ 1枚目がきたら1枚目追従
  const scrollingWithBottom = phase === 'scrolling' && hasBeenFixed.current && lastCardPastTop
  const scrollingBack = phase === 'scrolling' && hasBeenFixed.current && !lastCardPastTop
  // 戻し時: 4枚目中央が画面上半分 → 4枚目追従 / 下半分かつ1枚目がまだ上 → 中央固定 / 1枚目が下(>70%) → 1枚目追従
  const followTopValue =
    scrollingBack && lastCardViewportY != null
      ? lastCardViewportY < viewportCenterY
        ? lastCardViewportY
        : centerRatio > CENTER_ENTER_BOTTOM
          ? null
          : viewportCenterY
      : null
  // スマホ版ではスクロール文字（マーキー）非表示
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
      {/* 1枚目カード中央の高さ。[30%,70%] で fixed に入る */}
      <div
        ref={centerRef}
        className="absolute left-0 right-0 h-px pointer-events-none invisible"
        style={{ top: `calc(${firstCardTopRem}rem + 27.5vh)` }}
        aria-hidden="true"
      />
      <StackCardsSection cards={cards} background={background} lastCardRef={lastCardRef} />
    </div>
  )
}
