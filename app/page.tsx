import SplitText from '@/components/ui/SplitText'
import ParticlesSection from '@/components/sections/ParticlesSection'
import { type StackCardItem } from '@/components/sections/StackCardsSection'
import StackCardsSectionBlock from '@/components/sections/StackCardsSectionBlock'
import { type StrengthCardItem } from '@/components/sections/StrengthCards'
import StrengthSection from '@/components/sections/StrengthSection'
import { contentWithLineBreaks } from '@/lib/contentHighlight'

const stackCards: StackCardItem[] = [
    {
        title: 'OurDeskの人材育成方針',
        content: contentWithLineBreaks('私たちが大切にしているのは、\n働きたい！ \n人の力になりたい！ \n誰かを支える仕事がしたい！ \nそんな想いを持つ人たちです。\nスキルだけでなく、「働く姿勢」や想いも\n大切に育てています。'),
        imageOrder: 'right',
        imageSrc: '/images/stack-cards/01.png',
        imageAlt: 'イキイキと働くスタッフ',
        numberLabel: 'HUMAN RESOURCE DEVELOPMENT',
    },
    {
        title: 'OurDeskを支える基盤',
        content: contentWithLineBreaks('OurDeskの仕組みの土台には、\n NEUGATEグループの人材育成ノウハウがあります。\nグループ従業員 約100名、定着率は常に90%以上\n人事支援・キャリア支援の実績多数！ \n長く働ける環境づくりを続けてきたNEUGATEの仕組みを活かし、OurDeskでもスタッフの育成とキャリア支援を行っています。'),
        imageOrder: 'left',
        imageSrc: '/images/stack-cards/02.png',
        imageAlt: 'OurDeskを支えるNEUGATEグループ',
        numberLabel: 'THE FOUNDATION OF OurDesk',
    },
    {
        title: 'OurDeskのミッション',
        content: contentWithLineBreaks('私たちは、「働きたい」という気持ちが、\n 仕事につながる社会をつくりたいと考えています。\n家庭やライフステージに左右されず、\n自分らしい働き方を選びながら、誰かの役に立てる。\nそんなキャリアの形を、一人ひとりと一緒につくっていく会社です。'),
        imageOrder: 'right',
        imageSrc: '/images/stack-cards/03.png',
        imageAlt: 'ライフステージに合わせた働き方',
        numberLabel: 'OurDesk\'s MISSION',
    },
    {
        title: '女性のキャリア支援',
        titleClass: 'text-xl md:text-3xl',
        content: contentWithLineBreaks('出産や育児、家庭との両立など、女性のキャリアには多くの分岐点があります。\n「働きたい気持ちはあるのに、選択肢が限られてしまう」\n そんな声を、私たちはたくさん聞いてきました。\nだからOurDeskは、女性が自分らしく働き続けられる仕組みづくりに本気で取り組んでいます。'),
        imageOrder: 'left',
        imageSrc: '/images/stack-cards/04.png',
        imageAlt: '女性のキャリア支援・働く親子',
        numberLabel: 'WOMEN CAREER SUPPORT',
    },
]

const strengthCards: StrengthCardItem[] = [
    {
        step: 1,
        title: '学びの場を提供',
        description: '女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。経験がなくても、ここから始められます。',
        imagePath: '/images/strength-cards/01.jpeg',
        imagePosition: 'left',
        imageAlt: '女性向け研修で学ぶ様子',
    },
    {
        step: 2,
        title: 'キャリア面談',
        description: '国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。あなたらしいキャリアを見つけましょう。',
        imagePath: '/images/strength-cards/02.jpeg',
        imagePosition: 'right',
        imageAlt: 'キャリア面談の様子',
    },
    {
        step: 3,
        title: '仕事につなげる',
        description: 'その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。',
        imagePath: '/images/strength-cards/03.jpeg',
        imagePosition: 'left',
        imageAlt: '仕事につなげるサポートの様子',
    },
]

const SITE_URL = 'https://our-desk.co.jp'

export const metadata = {
    title: 'OurDesk株式会社',
    description: 'OurDesk株式会社の公式ホームページ',
    openGraph: {
        url: `${SITE_URL}/`,
        title: 'OurDesk株式会社',
        description: 'OurDesk株式会社の公式ホームページ',
        type: 'website',
    },
    alternates: {
        canonical: `${SITE_URL}/`,
    },
}

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* 横スクロール防止（スタックセクションは overflow の外に出して sticky を維持） */}
            <div className="overflow-x-hidden">

                {/* セクション1: アイキャッチ */}
                <section className="relative md:bg-white min-h-[50vh] md:min-h-[80vh] py-12 md:py-20 overflow-hidden">
                    {/* 動画コンテナ */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                aria-hidden="true"
                            >
                                <source src="/images/home/01.mp4" type="video/mp4" />
                            </video>
                            {/* コンテンツ - 動画要素内に配置 */}
                            <div className="absolute inset-0 flex items-end justify-end z-10 p-4 md:p-16 pointer-events-none">
                                <div className="max-w-2xl pointer-events-auto">
                                    <h1 className="text-md md:text-3xl font-bold text-right text-balance text-gray-50/90 drop-shadow-md">
                                        <div className="block">
                                            <SplitText
                                                text="OurDeskが提供するのは、"
                                                delay={70}
                                                duration={1.2}
                                                ease="power3.out"
                                                splitType="chars"
                                                from={{ opacity: 0, y: 40 }}
                                                to={{ opacity: 1, y: 0 }}
                                                threshold={0.1}
                                                rootMargin="-100px"
                                                textAlign="right"
                                            />
                                        </div>
                                        <div className="block">
                                            <SplitText
                                                text="業務に追われる会社を、"
                                                delay={70}
                                                duration={1.2}
                                                ease="power3.out"
                                                splitType="chars"
                                                from={{ opacity: 0, y: 40 }}
                                                to={{ opacity: 1, y: 0 }}
                                                threshold={0.1}
                                                rootMargin="-100px"
                                                textAlign="right"
                                            />
                                        </div>
                                        <div className="block">
                                            <SplitText
                                                text="「働きたい」人材が支える仕組み。"
                                                delay={70}
                                                duration={1.2}
                                                ease="power3.out"
                                                splitType="chars"
                                                from={{ opacity: 0, y: 40 }}
                                                to={{ opacity: 1, y: 0 }}
                                                threshold={0.1}
                                                rootMargin="-100px"
                                                textAlign="right"
                                            />
                                        </div>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* セクション2: 「働きたい」を、ちゃんと育てる */}
                <section className="relative pt-16  px-4 md:pt-40 md:pb-40 md:px-6">
                    <div className="absolute inset-0 z-25 pointer-events-none">
                        <div className="absolute inset-0 w-full h-full">
                            <ParticlesSection />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center container mx-auto max-w-4xl relative z-10">
                        <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance text-center">
                            <span className="text-gradient-hero">「働きたい」</span>を
                            <br />
                            ちゃんと育てる。
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty text-center">
                            「働きたい」想いは、自然に生まれるものではありません。<br />OurDeskはその気持ちを育て、仕事につなげる仕組みを作っています。
                        </p>
                    </div>
                </section>

                {/* セクション3: OurDeskの強み */}
                <StrengthSection cards={strengthCards} />

            </div>

            {/* セクション4: カードがスクロールするセクション（OurDesk マーキー付き） */}
            <StackCardsSectionBlock cards={stackCards} />


        </main>
    )
}
