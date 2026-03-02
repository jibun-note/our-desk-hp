'use client'

import { useState } from 'react'
import BlobDecoration from '@/components/ui/BlobDecoration'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import { cn } from '@/lib/utils'

export type FaqItem = {
    q: string
    a: string
}

type Props = {
    faqItems: readonly FaqItem[]
}

export default function RecruitFaqSection({ faqItems }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="relative z-[11] bg-[#fefcf7] py-20 md:py-32 px-4 md:px-6" aria-label="よくある質問">
            <BlobDecoration
                shape="P"
                drift="float-b"
                fill="rgba(253, 232, 166, 0.22)"
                className="w-[90vw] h-[42vw] md:w-[47vw] md:h-[20vw] max-md:!top-[2vw] max-md:!left-[-35vw]"
                style={{ top: '8vw', left: '-18vw' }}
            />
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        よくある質問
                    </h2>
                    <div className="mb-4">
                        <HandwrittenLine variant={2} color="#F08300" width={100} align="center" />
                    </div>
                </div>
                <ul className="space-y-4">
                    {faqItems.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <li
                                key={i}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left hover:bg-gray-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F08300] focus-visible:ring-inset"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${i}`}
                                    id={`faq-question-${i}`}
                                >
                                    <h3 className="font-bold text-gray-800 text-balance pr-4">
                                        Q. {item.q}
                                    </h3>
                                    <span
                                        className={cn(
                                            'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200',
                                            isOpen ? 'bg-[#F08300]/10 rotate-180' : 'bg-gray-100'
                                        )}
                                        aria-hidden
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${i}`}
                                    className={cn(
                                        'grid transition-[grid-template-rows] duration-200 ease-out',
                                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    )}
                                >
                                    <div className="overflow-hidden border-t border-gray-200 bg-gray-50/70">
                                        <p className="text-gray-700 text-pretty leading-relaxed px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6 md:border-l-2 md:border-orange-300">
                                            A. {item.a}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
