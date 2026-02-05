import SplitText from '@/components/ui/SplitText'
import Particles from '@/components/ui/Particles'
import { type StackCardItem } from '@/components/StackCardsSection'
import StackCardsWithFixedMarquee from '@/components/StackCardsWithFixedMarquee'
import SectionWave from '@/components/SectionWave'
import StrengthCards from '@/components/StrengthCards'
import SwipeToNextSection from '@/components/SwipeToNextSection'
const stackCards: StackCardItem[] = [
    {
        title: 'OurDeskの人材育成方針',
        content: '私たちが大切にしているのは、\n働きたい \n人の力になりたい\n誰かを支える仕事がしたい\nそんな想いを持つ人たちです。\nスキルだけでなく、「働く姿勢」や想いも\n大切に育てています。',
        imageOrder: 'right',
        imageSrc: '/images/イキイキした写真.png',
    },
    {
        title: 'OurDeskを支える基盤',
        content: 'OurDeskの仕組みの土台には、\n NEUGATEグループの人材育成ノウハウがあります。\nグループ従業員 約100名 定着率は常に90%以上、人事支援・キャリア支援の実績多数。\n長く働ける環境づくりを続けてきたNEUGATEの仕組みを活かし、OurDeskでもスタッフの育成とキャリア支援を行っています。',
        imageOrder: 'left',
        imageSrc: '/images/ノイゲート写真.png',
    },
    {
        title: 'OurDeskのミッション',
        content: '私たちは、「働きたい」という気持ちが、仕事につながる社会をつくりたいと考えています。\n家庭やライフステージに左右されず、\n自分らしい働き方を選びながら、誰かの役に立てる。\nそんなキャリアの形を、一人ひとりと一緒につくっていく会社です。',
        imageOrder: 'right',
        imageSrc: '/images/ライフステージ写真.png',
    },
    {
        title: '女性のキャリア支援',
        titleClass: 'text-xl md:text-3xl',
        content: '出産や育児、家庭との両立など、女性のキャリアには多くの分岐点があります。\n「働きたい気持ちはあるのに、選択肢が限られてしまう」\n そんな声を、私たちはたくさん聞いてきました。\nだからOurDeskは、女性が自分らしく働き続けられる仕組みづくりに本気で取り組んでいます。',
        imageOrder: 'left',
        imageSrc: '/images/親子写真.png',
    },
]

export default function Home() {


    return (
        <main className="min-h-screen">
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
                            <source src="/Adobe Express - AdobeStock_487035634.mp4" type="video/mp4" />
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
            <section className="relative pt-16 pb-16 px-4 md:pt-40 md:pb-40 md:px-6">
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* スマホ用：パーティクル数のみ減らす */}
                    <div className="block md:hidden">
                        <Particles
                            particleColors={["#f69104"]}
                            particleCount={50}
                            particleSpread={6}
                            speed={0.06}
                            particleBaseSize={130}
                            moveParticlesOnHover={false}
                            alphaParticles
                            disableRotation={false}
                            pixelRatio={1}
                        />
                    </div>
                    {/* デスクトップ用：パーティクル数を減らす */}
                    <Particles
                        particleColors={["#f69104"]}
                        particleCount={100}
                        particleSpread={6}
                        speed={0.06}
                        particleBaseSize={130}
                        moveParticlesOnHover={false}
                        alphaParticles
                        disableRotation={false}
                        pixelRatio={1}
                        className="hidden md:block"
                    />
                </div>
                <div className="flex flex-col items-center justify-center container mx-auto max-w-4xl relative z-10">
                    <SplitText
                        tag="h2"
                        text="「働きたい」をちゃんと育てる。"
                        html={'<span class="text-gradient-hero">「働きたい」</span>を<br />ちゃんと育てる。'}
                        className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance"
                        splitType="chars"
                        delay={50}
                        duration={0.8}
                        ease="power3.out"
                        from={{ opacity: 0, y: 24 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty text-center">
                        「働きたい」想いは、自然に生まれるものではありません。<br />OurDeskはその気持ちを育て、仕事につなげる仕組みを作っています。
                    </p>
                </div>
            </section>

            {/* セクション3: OurDeskの強み（スマホで左スワイプで次セクションへ） */}
            <SwipeToNextSection targetSectionId="stack-cards-section">
                <section className="relative pt-20 pb-12 md:py-20">
                    {/* 見出しと説明文 - PCのみ表示 */}
                    <div className="hidden md:block container mx-auto max-w-6xl relative z-10 mb-12 md:mb-16 text-center px-4 md:px-6">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">OurDeskの強み</h2>
                        <div
                            className="w-20 h-1 mx-auto mb-4"
                            style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }}
                        />
                        <div className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                            <SplitText
                                text="OurDeskは、伴走型キャリア支援という仕組みを通して、女性の「働きたい」を育てています。"
                                html='OurDeskは、伴走型キャリア支援という仕組みを通して、<br />女性の<span class="text-gradient-hero">「働きたい」</span>を育てています。'
                                tag="p"
                                className="leading-relaxed"
                                splitType="chars"
                                delay={30}
                                duration={0.8}
                                ease="power3.out"
                                from={{ opacity: 0, y: 20 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-50px"
                            />
                        </div>
                    </div>
                    {/* 画像を横いっぱいに表示 */}
                    <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[2000px] mx-auto px-0 md:px-6">
                        <StrengthCards />
                    </div>
                </section>
            </SwipeToNextSection>


            <SectionWave nextBackground='top' position='top' />
            {/* Scroll Stack: OurDesk マーキー付き（1枚目と一緒に下から→中央で止まる→最後のカードと一緒に上に消える） */}
            <StackCardsWithFixedMarquee cards={stackCards} />
            <SectionWave nextBackground='bottom' position='bottom' />

        </main>
    )
}
