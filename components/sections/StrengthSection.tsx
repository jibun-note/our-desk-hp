'use client'

import { useState, useEffect } from 'react'
import SplitText from '@/components/ui/SplitText'
import LazySection from '@/components/sections/LazySection'
import StrengthCards, { type StrengthCardItem } from '@/components/sections/StrengthCards'
import MobileSwipeToNextSection from '@/components/sections/MobileSwipeToNextSection'
import SectionWave from '@/components/sections/SectionWave'

const MOBILE_BREAKPOINT_PX = 768

/**
 * セクション3の見出し。デスクトップ（768px以上）のときだけ表示。モバイルでは SplitText/GSAP を走らせない。
 */
function Section3HeadingDesktop() {
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT_PX}px)`)
        const handler = () => setIsDesktop(mq.matches)
        handler()
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])
    if (!isDesktop) return null
    return (
        <div className="container mx-auto max-w-6xl relative z-10 mb-12 md:mb-16 text-center px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">OurDeskの強み</h2>
            <div
                className="w-20 h-1 mx-auto mb-4"
                style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
            />
            <div className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                <SplitText
                    text="OurDeskは、伴走型キャリア支援という仕組みを通して、女性の「働きたい」を育てています。"
                    html='OurDeskは、伴走型キャリア支援という仕組みを通して、<br />女性の<span class="text-gradient-hero">「働きたい」</span>を育てています。'
                    tag="p"
                    className="leading-relaxed"
                    splitType="chars"
                    delay={30}
                    duration={0.8}
                    ease="power3.out"
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                />
            </div>
        </div>
    )
}

type Props = {
    cards: StrengthCardItem[]
}

export default function StrengthSection({ cards }: Props) {
    return (
        <>
            {/* セクション3: OurDeskの強み（スマホで左スワイプで次セクションへ） */}
            <section className="relative pt-20 pb-6 md:py-20 md:mb-20" aria-label="OurDeskの強み">
                <LazySection placeholderHeight="650px" rootMargin="400px">
                    <MobileSwipeToNextSection targetSectionId="stack-cards-section">
                        <Section3HeadingDesktop />
                        <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[2000px] mx-auto px-0 md:px-6">
                            <StrengthCards cards={cards} />
                        </div>
                    </MobileSwipeToNextSection>
                </LazySection>
            </section>
            <div className="hidden md:block">
                <SectionWave position="top" />
            </div>
        </>
    )
}
