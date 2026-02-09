import LazySection from '@/components/sections/LazySection'
import { type StackCardItem } from '@/components/sections/StackCardsSection'
import StackCardsWithFixedMarquee from '@/components/sections/StackCardsWithFixedMarquee'
import SectionWave from '@/components/sections/SectionWave'

type Props = {
    cards: StackCardItem[]
}

export default function StackCardsSectionBlock({ cards }: Props) {
    return (
        <>
            {/* セクション4: Scroll StackCards（OurDesk マーキー付き（1枚目と一緒に下から→中央で止まる→最後のカードと一緒に上に消える）） */}
            <section className="relative pt-8 pb-12 md:py-20 md:mb-20 md:bg-gradient-to-b md:from-[#FFF8E7] md:to-[#FFE8CC]" aria-label="OurDeskの強み">
                <LazySection placeholderHeight="250vh" rootMargin="800px">
                    <StackCardsWithFixedMarquee cards={cards} />
                </LazySection>
                <div className="overflow-x-hidden">
                    <div className="hidden md:block">
                        <SectionWave position="bottom" />
                    </div>
                </div>
            </section>
        </>
    )
}
