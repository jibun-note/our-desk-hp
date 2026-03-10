'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import HandwrittenLine from '@/components/ui/HandwrittenLine'

export type ProcessStepItem = {
  num: string
  title: string
  body: string
  active?: boolean
}

const WAVE_MASK_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L92,0 C96,12 88,25 94,37 C100,50 88,62 94,75 C98,85 90,92 92,100 L0,100 Z' fill='black'/%3E%3C/svg%3E")`
const FADE_GRADIENT = `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.4) 8%, black 22%, black 78%, rgba(0,0,0,.4) 92%, transparent 100%)`

type Props = {
  head: { eyebrow: string; headline: string }
  steps: readonly ProcessStepItem[]
  imageSrc?: string
}

export default function ServiceProcessSection({
  head,
  steps,
  imageSrc = '/images/recruit/intro.jpeg',
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const sectionObs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) section.classList.add('is-section-visible')
      },
      { threshold: 0.05 }
    )
    sectionObs.observe(section)

    const animElements = section.querySelectorAll<HTMLElement>('[data-anim]')
    const observers: IntersectionObserver[] = []
    const timeouts: ReturnType<typeof setTimeout>[] = []

    animElements.forEach((el) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          const delay = parseInt(el.getAttribute('data-delay') ?? '0', 10)
          const t = setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          timeouts.push(t)
          obs.disconnect()
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      sectionObs.disconnect()
      observers.forEach((o) => o.disconnect())
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden"
      style={{ background: '#ffffff' }}
      aria-label={head.eyebrow}
    >
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[320px_1fr] min-h-[480px]">
        {/* 写真エリア */}
        <div className="hidden md:block relative w-full h-48 md:h-auto md:min-h-[480px]">
          <div
            className="absolute inset-0 origin-left scale-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] [.is-section-visible_&]:scale-x-100"
            style={{
              WebkitMaskImage: `${WAVE_MASK_SVG}, ${FADE_GRADIENT}`,
              WebkitMaskSize: '100% 100%, 100% 100%',
              WebkitMaskComposite: 'destination-in',
              maskImage: `${WAVE_MASK_SVG}, ${FADE_GRADIENT}`,
              maskSize: '100% 100%, 100% 100%',
              maskComposite: 'intersect',
            }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover object-center"
              sizes="320px"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(26,18,9,.45) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="px-6 py-12 md:px-14 md:py-16 flex flex-col justify-center">
          <p
            className="text-sm tracking-[0.2em] text-[#F08300] font-medium mb-3 opacity-0 -translate-x-3 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0"
            data-anim
            data-delay="0"
          >
            {head.eyebrow}
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
            data-anim
            data-delay="100"
          >
            {head.headline}
          </h2>
          <div className="mb-10 md:mb-12">
            <HandwrittenLine variant={2} color="rgba(240,131,0,0.65)" width={120} align="left" />
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="group grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-start py-4 border-b border-[#ddd8ce] last:border-b-0 opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
                data-anim
                data-delay={String(200 + i * 80)}
              >
                <span
                  className={`font-serif text-4xl md:text-5xl font-semibold leading-none tracking-[-0.03em] select-none transition-colors duration-200 ${
                    step.active
                      ? 'text-[rgba(240,131,0,.15)]'
                      : 'text-[rgba(26,18,9,.07)]'
                  } group-hover:text-[rgba(240,131,0,.2)]`}
                >
                  {step.num}
                </span>
                <div>
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full mb-2 mt-1 transition-transform duration-200 group-hover:scale-[1.6] ${
                      step.active ? 'bg-[#F08300]' : 'bg-[#c8c2b4]'
                    }`}
                  />
                  <h3 className="font-serif text-sm md:text-base font-medium text-[#1a1209]">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#999] leading-relaxed mt-0.5">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
