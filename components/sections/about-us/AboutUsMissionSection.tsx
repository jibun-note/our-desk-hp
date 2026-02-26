import HandwrittenLine from '@/components/ui/HandwrittenLine'
import Image from 'next/image'

/**
 * About Us の Mission セクション。
 * HandwrittenLine variant 2（Intro で 1 を使用済み）。
 */
export default function AboutUsMissionSection() {
    return (
        <section
            className="relative z-[3] bg-white py-20 md:py-32 px-4 md:px-6"
            aria-label="OurDeskの使命"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-yellow-100 order-2 md:order-1">
                        <Image
                            src="/images/about-us/01.jpeg"
                            alt="私たちの使命"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div>
                            <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                                Mission
                            </p>
                            <div className="inline-block w-fit">
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-0 leading-tight text-balance inline-block">
                                    OurDeskの使命
                                </h3>
                                <div className="-mt-0.5 mb-6 flex justify-end">
                                    <span className="inline-block scale-[0.65] origin-right md:scale-100">
                                        <HandwrittenLine
                                            variant={2}
                                            color="#F08300"
                                            width={72}
                                            align="right"
                                        />
                                    </span>
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl font-bold mb-6">
                                <span className="text-gradient-hero">「働きたい」</span>という想いを、<br />
                                仕事につなげる。
                            </p>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-pretty">
                            <p>
                                私たちは、「誰かの役に立ちたい」「自分の力を活かしたい」そんな想いを持つ人たちが、安心して働き続けられる社会をつくりたいと考えています。
                            </p>
                            <p>
                                家庭やライフステージ、環境の変化によって、働き方の選択肢が狭まってしまう人がいます。それでもなお、「働きたい」と思い続けている人がいます。
                            </p>
                            <p>その想いを、埋もれさせたくない。諦めさせたくない。</p>
                            <p className="font-semibold">
                                OurDeskは、一人ひとりの人生に寄り添いながら、自分らしい働き方を一緒につくっていく会社です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
