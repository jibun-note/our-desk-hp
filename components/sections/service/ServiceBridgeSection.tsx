'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

type Props = {
  headline: string
  body: string
  ctaLabel?: string
  ctaHref?: string
}

/** 対角スレッド背景（右上→左下）を描画する canvas */
function DiagonalThreads() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const threadCount = 32
    const threads = Array.from({ length: threadCount }, (_, i) => {
      const t_norm = i / (threadCount - 1)
      return {
        t_norm,
        amp: 18 + Math.random() * 40,
        freq: 0.003 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.005,
        alpha: 0.06 + Math.random() * 0.07,
        color:
          Math.random() > 0.55
            ? '#F08300'
            : Math.random() > 0.5
              ? '#FDD000'
              : '#d0c8c0',
        lineWidth: 0.9 + Math.random() * 0.9,
        offset: Math.random() * 1000,
      }
    })

    let time = 0
    let raf: number

    const tick = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      time += 0.6

      const diagLen = Math.sqrt(w * w + h * h)

      threads.forEach((th) => {
        const normalOffset = (th.t_norm - 0.5) * diagLen * 1.3

        ctx.beginPath()
        ctx.strokeStyle = th.color
        ctx.lineWidth = th.lineWidth
        ctx.globalAlpha = th.alpha

        const steps = Math.ceil(diagLen / 3)
        for (let si = 0; si <= steps; si++) {
          const s = (si / steps) * diagLen * 1.4 - diagLen * 0.2
          const lx = s * (-1 / Math.SQRT2)
          const ly = s * (1 / Math.SQRT2)
          const nx = normalOffset * (1 / Math.SQRT2)
          const ny = normalOffset * (1 / Math.SQRT2)
          const wave =
            Math.sin(
              si * th.freq * 10 + time * th.speed + th.phase + th.offset
            ) * th.amp
          const wx = wave * (1 / Math.SQRT2)
          const wy = wave * (1 / Math.SQRT2)
          const x = w / 2 + lx + nx + wx
          const y = h / 2 + ly + ny + wy
          si === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default function ServiceBridgeSection({
  headline,
  body,
  ctaLabel,
  ctaHref = '#contact',
}: Props) {
  return (
    <section
      className="relative bg-white py-36 md:py-48 overflow-hidden"
      aria-label={headline}
    >
      <DiagonalThreads />

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 text-center">
        <p
          className="text-[10px] tracking-[0.28em] text-gray-300 uppercase mb-6"
          aria-hidden
        >
          BackDesk — OurDesk
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold leading-[1.15] text-gray-900 whitespace-pre-line mb-5"
          style={{
            fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', serif",
          }}
        >
          {headline}
        </h2>
        <p className="text-sm text-gray-400 leading-loose whitespace-pre-line mb-8">
          {body}
        </p>
        {ctaLabel && (
          <div className="flex justify-center">
            <Link
              href={ctaHref}
              className="inline-block text-sm md:text-base font-medium text-gray-900 bg-gradient-to-r from-[#FDD000] to-[#F08300] py-3 md:py-3.5 px-8 md:px-10 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
