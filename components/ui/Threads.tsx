'use client'

import React, { useRef, useEffect } from 'react'

export interface ThreadsProps {
  /** RGB 0〜1 の配列 */
  color?: [number, number, number]
  amplitude?: number
  distance?: number
  enableMouseInteraction?: boolean
  className?: string
}

export default function Threads({
  color = [1, 0.55, 0.1],
  amplitude = 0.4,
  distance = 0.3,
  enableMouseInteraction = false,
  className,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const [r, g, b] = color
    const alpha = amplitude
    const spacing = Math.max(20, 80 * distance)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      draw(ctx, w, h, r, g, b, alpha, spacing)
    }

    const draw = (
      context: CanvasRenderingContext2D,
      w: number,
      h: number,
      cr: number,
      cg: number,
      cb: number,
      a: number,
      step: number
    ) => {
      context.clearRect(0, 0, w, h)
      context.strokeStyle = `rgba(${cr * 255},${cg * 255},${cb * 255},${a})`
      context.lineWidth = 1

      // 右上→左下の対角線（-45deg 方向）
      const diag = Math.sqrt(w * w + h * h)
      const lineCount = Math.ceil(diag / step) + 4

      for (let i = -2; i < lineCount; i++) {
        const offset = i * step
        context.beginPath()
        // 右上から左下へ: 上辺/右辺の交点から下辺/左辺へ
        context.moveTo(w + offset, -offset)
        context.lineTo(-offset, h + offset)
        context.stroke()
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => ro.disconnect()
  }, [color, amplitude, distance])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
