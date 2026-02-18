'use client'

import HeadingLine from '@/components/ui/HeadingLine'
import StrengthCards, { type StrengthCardItem } from '@/components/sections/StrengthCards'

type Props = {
    cards: StrengthCardItem[]
}

export default function StrengthSection({ cards }: Props) {
    return (
        <section className="relative pb-6 md:pb-20 md:mb-20" aria-label="OurDeskの強み">
            {/* デスクトップ用見出し（768px以上で表示・CSSのみ） */}
            <div className="hidden md:block container mx-auto max-w-6xl relative z-10 mb-12 md:mb-16 text-center px-4 md:px-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-1 text-gray-800">OurDeskの強み</h2>
                <HeadingLine variant={6} className="mx-auto mb-4" />
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    OurDeskは、伴走型キャリア支援という仕組みを通して、
                    <br />
                    女性の<span className="text-gradient-hero">「働きたい」</span>を育てています。
                </p>
            </div>
            {/* モバイル用見出し（768px未満のみ）。カルーセルと重ならないよう上段にスペースを確保 */}
            <div className="md:hidden pt-4 px-4 pb-3 min-h-[7rem] flex flex-col justify-end items-end" aria-hidden>
                <div className="w-full max-w-[85%] flex flex-col items-end gap-2 pr-1">
                    <span
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400"
                        style={{ letterSpacing: '0.25em' }}
                    >
                        Strength
                    </span>
                    <h2
                        className="text-2xl font-bold text-right bg-clip-text text-transparent"
                        style={{
                            lineHeight: '0.9',
                            letterSpacing: '-0.02em',
                            backgroundImage: 'linear-gradient(135deg, #4b5563 0%, #6b7280 50%, #9ca3af 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            textShadow: 'none',
                        }}
                    >
                        OurDesk
                        <br />
                        の強み
                    </h2>
                    <div className="flex justify-end -mt-1">
                        <HeadingLine variant={6} className="mb-0" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[2000px] mx-auto px-0 md:px-6">
                <StrengthCards cards={cards} />
            </div>
        </section>
    )
}
