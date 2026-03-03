'use client'

import Image from 'next/image'
import Link from 'next/link'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import BlobDecoration from '@/components/ui/BlobDecoration'
import type { PainItem } from '@/lib/data/service'
import { cn } from '@/lib/utils'

function PainIconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function PainIconDoc() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  )
}

function PainIconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  )
}

function PainIconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  )
}

const PainIcons = [PainIconMail, PainIconDoc, PainIconClock, PainIconUser] as const

type Props = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  headline: string
  items: readonly PainItem[]
  ctaLabel: string
}

export default function ServicePainSection({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  items,
  ctaLabel,
}: Props) {
  return (
    <section className="bg-[#fffdf5] py-20 md:py-28 relative overflow-visible" aria-label="こんな悩みありませんか">
      <BlobDecoration
        shape="H"
        drift="float-b"
        fill="rgba(235,180,178,0.18)"
        className="bottom-[-50px] left-[-70px] w-[320px] h-[320px] hidden md:block pointer-events-none"
      />
      <div className="container mx-auto max-w-5xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative">
            <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-none rounded-br-[4rem] md:rounded-br-[6rem]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={520}
                className="w-full h-full object-cover object-[60%_15%]"
              />
            </div>
          </div>

          <div className="pt-4">
            <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center gap-3 mb-2">
              <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
              {eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
              {headline}
            </h2>
            <div className="mb-8">
              <HandwrittenLine variant={3} color="rgba(240,131,0,0.65)" width={140} align="left" />
            </div>

            <div className="space-y-0 border-t border-[#ece8de]">
              {items.map((item, i) => {
                const Icon = PainIcons[i] ?? PainIconMail
                return (
                  <div
                    key={i}
                    className="flex gap-4 md:gap-5 items-start py-5 border-b border-[#ece8de]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#ece8de] flex items-center justify-center flex-shrink-0 text-[#F08300] mt-0.5">
                      <Icon />
                    </div>
                    <div>
                      <div className="text-sm md:text-[0.88rem] font-medium text-gray-900 mb-0.5">
                        {item.title}
                      </div>
                      <p className="text-[0.79rem] leading-relaxed text-[#666] text-pretty">
                        {item.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href="#contact"
              className="inline-block mt-8 text-sm font-medium text-gray-900 bg-gradient-to-r from-[#FDD000] to-[#F08300] py-3.5 px-8 rounded-full hover:opacity-90 transition-opacity"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
