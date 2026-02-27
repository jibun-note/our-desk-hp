import GradientHeading from '@/components/ui/GradientHeading'
import HandwrittenLine from '@/components/ui/HandwrittenLine'

/**
 * About Us の MVV 導入セクション。
 * HeroSection 直下に置く。HandwrittenLine はファーストビュー内のため delayWhenInViewMs 必須。
 */
export default function AboutUsIntroSection() {
    return (
        <section className="relative py-20 md:py-32 px-4 md:px-6" aria-label="MVV について">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <GradientHeading
                    text="MVV"
                    className="text-2xl md:text-4xl font-bold mb-1 text-balance"
                    as="h2"
                />
                <div className="flex justify-center mb-8">
                    <HandwrittenLine
                        variant={1}
                        color="#FDD000"
                        width={100}
                        align="center"
                        delayWhenInViewMs={2000}
                    />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-pretty">
                    私たちの使命、目指す未来、大切にする価値観。<br />
                    OurDeskが何を信じ、どこへ向かっているのか。<br className="hidden md:block" />
                    <br className="md:hidden" />
                    その想いをお伝えします。
                </p>
            </div>
        </section>
    )
}
