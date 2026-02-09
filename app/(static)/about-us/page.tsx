import HeroSection from '@/components/sections/HeroSection'
import GradientHeading from '@/components/ui/GradientHeading'
import { createPageMetadata } from '@/lib/seo'
import Image from 'next/image'

export const metadata = createPageMetadata(
    '/about-us/',
    'About Us | OurDesk株式会社',
    'OurDesk株式会社の代表メッセージとMVV（Mission、Vision、Value）をご紹介します。'
)

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. ヒーローセクション（Companyページと同じスタイル） */}
            <HeroSection title="About Us" description="OurDeskについて" />

            {/* 2. MVV導入セクション */}
            <section className="relative py-16 md:py-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-background opacity-30 pointer-events-none" aria-hidden>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-yellow-50 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto max-w-4xl text-center relative z-content">
                    <GradientHeading
                        text="MVV"
                        className="text-2xl md:text-4xl font-bold mb-8 text-balance"
                        as="h2"
                    />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-pretty">
                        私たちの使命、目指す未来、大切にする価値観。<br />
                        OurDeskが何を信じ、どこへ向かっているのか。<br className="hidden md:block" />
                        その想いをお伝えします。
                    </p>
                </div>
            </section>

            {/* 3. Missionセクション */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-yellow-100 order-2 md:order-1">
                            <Image
                                src="/images/about-us/01.jpeg"
                                alt="私たちの使命"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <div>
                                <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                                    MISSION
                                </p>
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-balance">
                                    OurDeskの使命
                                </h3>
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

            {/* 4. Visionセクション */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-orange-50/30 to-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                                    VISION
                                </p>
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-balance">
                                    OurDeskが目指す未来
                                </h3>
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

            {/* 5. Valueセクション */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 md:mb-20">
                        <p className="text-sm md:text-base text-orange-500 font-semibold mb-2">
                            VALUE
                        </p>
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-balance">
                            OurDeskが大切にする価値観
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {[
                            {
                                num: '01',
                                title: '人から始める',
                                body: '私たちは、スキルや経験だけで人を判断しません。その人がどんな想いで働きたいのか。誰のために力を使いたいのか。想いや姿勢こそが、仕事の原動力だと信じています。',
                            },
                            {
                                num: '02',
                                title: '伴走する',
                                body: '人のキャリアは、一直線ではありません。迷うことも、立ち止まることもあります。だからこそ私たちは、管理するのではなく、寄り添う支援を大切にしています。一人ひとりの人生に、長く、真剣に向き合います。',
                            },
                            {
                                num: '03',
                                title: 'つなげる',
                                body: '「働きたい」人と、「支えてほしい」仕事。その間にある壁を、やさしく、確実につなぐ。人と仕事が出会うことで、新しい価値が生まれると、私たちは信じています。',
                            },
                            {
                                num: '04',
                                title: '支え合う',
                                body: '誰かの力になることで、自分も強くなれる。支え合うことで、仕事はもっと前向きなものになる。',
                            },
                        ].map((item) => (
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
                                        <span className="text-4xl md:text-5xl font-bold text-gradient-hero">
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

            {/* 代表メッセージセクション */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-orange-50/30">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                            代表メッセージ
                        </h2>
                        <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-[#FDD000] to-[#F08300]" />
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-pretty">
                        <p>
                            私はこれまで、IT人材の育成、キャリア支援、教育事業、そしてシステム開発や人材紹介など、「人と仕事」に関わる事業に携わってきました。
                        </p>
                        <p>
                            AIの進化によって、多くの業務が自動化される時代が、すぐそこまで来ています。
                        </p>
                        <p>
                            それでも私は、人が人のために動く仕事は、これからもなくならないと考えています。むしろ、IT化が進めば進むほど、人が関わる&quot;アナログな仕事&quot;こそが、本当の差別化になっていくのではないでしょうか。
                        </p>
                        <p>
                            世の中では、業務効率やコスト削減を目的としたアウトソーシングやBPOが広がっています。もちろん、それ自体はとても有意義な取り組みです。
                        </p>
                        <p>
                            けれど、「仕事の効率は大切だけど、その先にある働く楽しさ」、「人と人が関わることで生まれる満足感」そうした価値も、同じくらい大切だと私は思っています。
                        </p>
                        <p>
                            私たちOurDeskが大切にしているのは、
                            <span className="text-gradient-hero font-semibold">&quot;業務ができる人&quot;よりも、&quot;誰かのために働きたいと思える人&quot;</span>
                            です。
                        </p>
                        <p>
                            前向きな気持ちを持ち、人の役に立ちたいという想いを持つ人たちが、安心して力を発揮できる場所をつくること。それが、OurDeskの目指す姿です。
                        </p>
                        <p>
                            人と人が支え合うことで、仕事が、そして人生が、少しでも前向きなものになる。そんな場を、これからも創っていきたいと思っています。
                        </p>
                        <div className="mt-12 pt-8 border-t border-gray-200 text-right">
                            <p className="text-sm text-gray-500 mb-1">代表取締役</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 text-balance">小宮山 陽大</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 締めくくりセクション */}
            <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center">
                {/* 背景画像 */}
                <div className="absolute inset-0 z-background" aria-hidden>
                    <Image
                        src="/images/about-us/03.jpeg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw"
                        role="presentation"
                    />
                    {/* 暗いオーバーレイ（文字を読みやすく） */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/85" />
                </div>
                <div className="container mx-auto max-w-4xl relative z-content text-center text-white">
                    <p className="text-xl md:text-3xl font-bold leading-relaxed mb-8 text-balance">
                        OurDeskは、<br className="md:hidden" />
                        <span className="text-gradient-hero">「働きたい」</span>という想いを<br />
                        大切に育て、仕事につなげていく会社です。
                    </p>
                    <p className="text-base md:text-lg leading-relaxed opacity-90 text-pretty">
                        一人ひとりの人生に寄り添いながら、<br className="hidden md:block" />
                        自分らしい働き方を一緒につくっていきます。
                    </p>
                </div>
            </section>
        </main>
    )
}
