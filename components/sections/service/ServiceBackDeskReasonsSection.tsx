'use client'

import HandwrittenLine from '@/components/ui/HandwrittenLine'

type Props = {
  eyebrow: string
  headline: string
  items: readonly string[]
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-[#F08300] flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/**
 * BackDeskが選ばれる理由：業務管理システムの強みを箇条書きで紹介するセクション
 */
export default function ServiceBackDeskReasonsSection({
  eyebrow,
  headline,
  items,
}: Props) {
  return (
    <section
      className="bg-white py-20 md:py-28 relative"
      aria-label="BackDeskが選ばれる理由"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-16">
          <p className="text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center justify-center gap-3 mb-2">
            <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
            {eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line">
            {headline}
          </h2>
          <div className="mt-3 flex justify-center">
            <HandwrittenLine
              variant={5}
              color="rgba(240,131,0,0.6)"
              width={120}
              align="center"
            />
          </div>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 items-start text-left bg-[#fffdf5] border border-[#ece8de] rounded-lg px-5 py-4"
            >
              <CheckIcon />
              <span className="text-sm md:text-[0.9rem] leading-relaxed text-gray-700 text-pretty">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
