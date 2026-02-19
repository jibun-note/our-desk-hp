import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Shippori_Mincho_B1 } from 'next/font/google'

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
        <section className="relative flex items-center pt-8 pb-16 md:py-28" aria-label="OurDeskの想い">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 w-full">
                <div className="order-2 md:order-1 relative">
                    <h2 className={cn("relative text-3xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-8 text-gray-900 leading-tight text-balance", shipporiMinchoB1.className)}>
                        「働きたい」
                        <br />
                        <span className="inline-block pl-[0.5em]">という</span>
                        <br />
                        <span className="inline-block pl-[0.5em]">気持ちを育てる</span>
                    </h2>
                    <div className="pl-[0.5em]">
                        <p className="text-base md:text-2xl text-gray-600 mb-6 md:mb-12 leading-relaxed text-pretty">
                            スキルや経歴よりも、
                            <br />
                            「誰かの役に立ちたい」という想い。
                            <br />
                            その気持ちを、私たちは大切に育てます。
                        </p>
                        <Link
                            href="/contact/"
                            className="inline-block px-8 py-4 md:px-10 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-[transform,box-shadow] duration-300 min-h-[48px]"
                        >
                            あなたらしい働き方を見つける
                        </Link>
                    </div>
                </div>
                <div className="order-1 md:order-2 -mr-4 md:mr-0 ml-auto md:ml-0 w-[90%] md:w-full">
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
