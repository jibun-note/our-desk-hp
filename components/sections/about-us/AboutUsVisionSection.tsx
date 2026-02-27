import BlobDecoration from '@/components/ui/BlobDecoration'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import Image from 'next/image'

/**
 * About Us の Vision セクション。
 * HandwrittenLine variant 3（Mission で 2 を使用済み）。クリーム背景。Blob はクリーム帯域に 1 個。
 */
export default function AboutUsVisionSection() {
    return (
        <section
            className="relative z-[5] bg-[#fffdf5] py-20 md:py-32 px-4 md:px-6"
            aria-label="OurDeskが目指す未来"
        >
            <BlobDecoration
                shape="T"
                drift="float-b"
                fill="rgba(253, 232, 166, 0.28)"
                className="top-[-10vw] right-[-15vw] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw]"
            />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                                Vision
                            </p>
                            <div className="inline-block w-fit">
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-0 leading-tight text-balance inline-block">
                                    OurDeskが目指す未来
                                </h3>
                                <div className="-mt-0.5 mb-6 flex justify-end">
                                    <span className="inline-block scale-[0.65] origin-right md:scale-100">
                                        <HandwrittenLine
                                            variant={3}
                                            color="rgba(240,131,0,0.6)"
                                            width={72}
                                            align="right"
                                        />
                                    </span>
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                                人が人を支えることが、<br />
                                当たり前に価値になる社会へ。
                            </p>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-pretty">
                            <p>
                                AIやテクノロジーの進化によって、仕事の形は大きく変わろうとしています。
                            </p>
                            <p>
                                それでも、人が人のために動く仕事、誰かを想って行動する仕事は、決してなくならないと私たちは信じています。
                            </p>
                            <p>
                                むしろ、効率化が進むほど、<span className="text-gradient-hero">「人の温度」を持った仕事こそが、本当の価値を生み出す時代</span>になる。
                            </p>
                            <p>
                                支えることで、支えられる。誰かの役に立つことで、自分も前に進める。
                            </p>
                            <p className="font-semibold">
                                仕事が、ただの「作業」ではなく、「誇れる時間」になる社会へ。<br />
                                その未来を、私たちは本気で目指しています。
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-yellow-100">
                        <Image
                            src="/images/about-us/02.jpeg"
                            alt="OurDeskが目指す未来"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
