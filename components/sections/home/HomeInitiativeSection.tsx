import { type StackCardItem } from '@/components/sections/StackCardsSection'
import StackCardsWithFixedMarquee from '@/components/sections/StackCardsWithFixedMarquee'

type Props = {
    cards: StackCardItem[]
}

export default function HomeInitiativeSection({ cards }: Props) {
    return (
        <section className="relative pt-8 pb-12 md:py-20 md:mb-20 md:bg-gradient-to-b md:from-[#FFF8E7] md:to-[#FFE8CC]" aria-label="OurDeskの強み">
            <StackCardsWithFixedMarquee cards={cards} />
        </section>
    )
}
