import HandwrittenLine from '@/components/ui/HandwrittenLine'
import type { AboutUsValueItem } from '@/lib/data/aboutUs'
import { cn } from '@/lib/utils'

type Props = {
    items: AboutUsValueItem[]
}

/**
 * About Us の Value セクション。
 * 装飾数字 01〜04 は Crimson Pro（.serif）。HandwrittenLine variant 5。
 */
export default function AboutUsValueSection({ items }: Props) {
    return (
        <section
            className="relative z-[7] bg-white py-20 md:py-32 px-4 md:px-6"
            aria-label="OurDeskが大切にする価値観"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-20">
                    <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                        Value
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 text-balance">
                        OurDeskが大切にする価値観
                    </h3>
                    <div className="flex justify-center mb-6">
                        <HandwrittenLine
                            variant={5}
                            color="#FDD000"
                            width={100}
                            align="center"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {items.map((item) => (
                        <div
                            key={item.num}
                            className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                        >
                            <div
                                className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-br-full opacity-20"
                                aria-hidden
                            />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={cn('text-4xl md:text-5xl font-bold text-gradient-hero', 'serif')}>
                                        {item.num}
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 text-balance">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg text-pretty">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
