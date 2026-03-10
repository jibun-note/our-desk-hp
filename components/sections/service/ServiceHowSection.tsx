'use client'

import { useEffect, useRef, useState } from 'react'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import { cn } from '@/lib/utils'

export type HowItem = {
  title: string
  body: string
}

const LINE_ANIM_DURATION_MS = 900

type Head = {
  eyebrow: string
  headline: string
  sub?: string
}

type Props = {
  head: Head
  items: readonly HowItem[]
}

export default function ServiceHowSection({ head, items }: Props) {
  const [accentItem, ...restItems] = items
  const howRef = useRef<HTMLDivElement>(null)
  const linesWrapRef = useRef<HTMLDivElement>(null)
  const sectionContentRef = useRef<HTMLDivElement>(null)
  const [lineVisible, setLineVisible] = useState<[boolean, boolean, boolean]>([false, false, false])

  useEffect(() => {
    const wrap = sectionContentRef.current
    if (!wrap) return
    let t2: ReturnType<typeof setTimeout> | null = null
    let t3: ReturnType<typeof setTimeout> | null = null
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return
        obs.disconnect()
        setLineVisible((prev) => [true, prev[1], prev[2]])
        t2 = setTimeout(() => setLineVisible((prev) => [prev[0], true, prev[2]]), LINE_ANIM_DURATION_MS)
        t3 = setTimeout(() => setLineVisible((prev) => [prev[0], prev[1], true]), LINE_ANIM_DURATION_MS * 2)
      },
      { threshold: 0.1 }
    )
    obs.observe(wrap)
    return () => {
      obs.disconnect()
      if (t2 != null) clearTimeout(t2)
      if (t3 != null) clearTimeout(t3)
    }
  }, [])

  useEffect(() => {
    const el = howRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const winH = window.innerHeight
      const progress = Math.min(1, Math.max(0, (winH - rect.top) / (winH * 0.75)))
      const ease = 1 - Math.pow(1 - progress, 4)
      el.style.transform = `translateY(${200 * (1 - ease)}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section aria-label={head.eyebrow}>
      <div style={{ overflow: 'hidden', background: '#ffffff', paddingBottom: 1 }}>
        <div
          ref={howRef}
          style={{
            willChange: 'transform',
            transform: 'translateY(200px)',
          }}
        >
      {/* ① ダーク帯 */}
      {accentItem && (
        <div className="bg-[#1a1209] pt-0 pb-0 relative overflow-hidden">

          {/* 上端：アーチ型（白→ダークの境界） */}
          <div className="w-full leading-[0]" style={{ background: '#ffffff', marginBottom: -3 }}>
            <svg
              viewBox="0 0 1440 72"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block w-full translate-y-px"
              aria-hidden
            >
              <path d="M0,72 C360,0 1080,0 1440,72 L1440,72 L0,72 Z" fill="#1a1209" />
            </svg>
          </div>

          {/* 背景グロー */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(240,131,0,0.08) 0%, transparent 60%)',
                'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(240,131,0,0.05) 0%, transparent 50%)',
              ].join(', '),
            }}
          />

          <div ref={sectionContentRef} className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center pb-14 md:pb-20">

            {/* ヘッド */}
            <p className="text-[11px] tracking-[0.22em] text-[#F08300] font-bold mb-4">
              {head.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-relaxed whitespace-pre-line mb-4 text-right md:text-center">
              <span className="md:hidden flex flex-col items-end gap-0 [&>div]:leading-none">
                <div className="flex flex-col items-end">
                  <span>固定費なし</span>
                  <HandwrittenLine variant={2} color="#F08300" width={72} align="right" visible={lineVisible[0]} />
                </div>
                <div className="flex flex-col items-end">
                  <span>縛りなし</span>
                  <HandwrittenLine variant={4} color="#F08300" width={72} align="right" visible={lineVisible[1]} />
                </div>
                <div className="flex flex-col items-end">
                  <span>リスクなし</span>
                  <HandwrittenLine variant={5} color="#F08300" width={72} align="right" visible={lineVisible[2]} />
                </div>
              </span>
              <span className="hidden md:inline">{head.headline}</span>
            </h2>
            <div ref={linesWrapRef} className="hidden md:flex mb-8 justify-center items-center gap-3 md:gap-10">
              <HandwrittenLine variant={2} color="#F08300" width={80} align="center" visible={lineVisible[0]} />
              <HandwrittenLine variant={4} color="#F08300" width={80} align="center" visible={lineVisible[1]} />
              <HandwrittenLine variant={5} color="#F08300" width={80} align="center" visible={lineVisible[2]} />
            </div>

            {/* 数値 */}
            <div className="flex justify-center border-t border-white/10 pt-9 mb-8">
              {(
                [
                  { num: '0', unit: '円', label: '初期費用' },
                  { num: '0', unit: 'h', label: '最低時間' },
                  { num: '分', unit: '', label: '単位から使える' },
                ] as const
              ).map((s, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex-1 text-center px-4',
                    i < 2 && 'border-r border-white/10'
                  )}
                >
                  <div className="font-serif text-4xl md:text-5xl font-black text-[#F08300] leading-none mb-2">
                    {s.num}
                    {s.unit && (
                      <span className="text-2xl font-bold">{s.unit}</span>
                    )}
                  </div>
                  <div className="text-[13px] text-white/55 tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 区切り */}
            <div className="w-full h-px bg-white/10 mb-10" />

            {/* 01 ラベル */}
            <div className="flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] text-[#F08300] font-bold mb-2">
              <span className="block w-5 h-px bg-[#F08300]/40" />
              01
              <span className="block w-5 h-px bg-[#F08300]/40" />
            </div>

            {/* タイトル */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-relaxed mb-5">
              {accentItem.title}
            </h3>

            {/* 本文 */}
            <p className="text-base md:text-lg text-white/75 leading-[2] mb-8">
              {accentItem.body}
            </p>
          </div>
        </div>
      )}

      {/* ③ テキスト列（この部分だけ白背景） */}
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto px-4 md:px-0">
        {restItems.map((item, i) => (
          <div
            key={i}
            className={cn(
              'px-8 md:px-10 py-14 md:py-16',
              i < restItems.length - 1 &&
                'border-b md:border-b-0 md:border-r border-[#ece8de]'
            )}
          >
            {/* 番号 */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[13px] font-bold tracking-[0.12em] text-[#F08300]">
                0{i + 2}
              </span>
              <span className="block w-7 h-px bg-[#ece8de]" />
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-3">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
        </div>
      </div>

      </div>
      </div>
    </section>
  )
}
