import { cn } from '@/lib/utils'
import { Shippori_Mincho_B1 } from 'next/font/google'
import BlobButtonScrollToForm from '@/components/ui/BlobButtonScrollToForm'
import HandwrittenLine from '@/components/ui/HandwrittenLine'
import BlobDecoration from '@/components/ui/BlobDecoration'

const shipporiMinchoB1 = Shippori_Mincho_B1({
    weight: '700',
    subsets: ['latin'],
    preload: false,
})

type Props = {
    heroImage: string
}

export default function RecruitIntroSection({ heroImage }: Props) {
    return (
        <section className="relative flex items-center pt-12 pb-20 md:py-32" aria-label="OurDeskの想い">
            {/* Blob装飾: 右側 */}
            <BlobDecoration
                shape="M"
                drift="float-c"
                fill="rgba(253, 232, 166, 0.25)"
                className="top-1/2 -translate-y-1/2 right-[-15vw] md:right-[-8vw] w-[60vw] h-[60vw] md:w-[32vw] md:h-[32vw]"
            />
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 w-full">
                <div className="order-2 md:order-1 relative">
                    <h2 className={cn("relative text-3xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-8 text-gray-900 text-balance", shipporiMinchoB1.className)}>
                        <span className="relative block leading-none">
                            「働きたい」
                            <span className="absolute left-0 -bottom-3 md:-bottom-5">
                                <span className="md:hidden">
                                    <HandwrittenLine variant={1} color="#FDD000" width={140} align="left" delayWhenInViewMs={2000} />
                                </span>
                                <span className="hidden md:inline">
                                    <HandwrittenLine variant={1} color="#FDD000" width={380} align="left" delayWhenInViewMs={2000} />
                                </span>
                            </span>
                        </span>
                        <span className="block pl-[0.5em] leading-tight mt-0.5">という</span>
                        <span className="block pl-[0.5em] leading-tight mt-0.5">気持ちを育てる</span>
                    </h2>
                    <div className="pl-[0.5em]">
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-12 leading-relaxed text-pretty">
                            スキルや経歴よりも、
                            <br />
                            「誰かの役に立ちたい」という想い。
                            <br />
                            その気持ちを、私たちは大切に育てます。
                        </p>
                        <BlobButtonScrollToForm>
                            あなたらしい働き方を見つける
                        </BlobButtonScrollToForm>
                    </div>
                </div>
                <div className="order-1 md:order-2 -mr-4 md:mr-0 ml-auto md:ml-0 w-[90%] md:w-full -mt-6 md:mt-0">
                    <div className="hero-photo relative w-full aspect-[5/4] md:aspect-[4/5] max-h-[400px] md:max-h-[520px] overflow-hidden bg-gray-200">
                        <img
                            src={heroImage}
                            alt="笑顔で働く女性"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
