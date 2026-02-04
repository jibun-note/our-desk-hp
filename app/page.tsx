import SplitText from '@/components/ui/SplitText'
import Particles from '@/components/ui/Particles'
import StackCardsSection, { type StackCardItem } from '@/components/StackCardsSection'
import SectionWave from '@/components/SectionWave'

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
                            <source src="/AdobeStock_487035634_Video_HD_Preview.mp4" type="video/mp4" />
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
            <section className="relative py-8 px-4 md:py-16 md:px-6">
                <div className="absolute inset-0 z-0">
                    <Particles
                        particleColors={["#f69104"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles
                        disableRotation={false}
                        pixelRatio={1}
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


            {/* セクション3: OurDeskの強み */}
            <section className="relative py-8 px-4 md:py-16 md:px-6">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800 text-balance">
                        OurDeskの強み
                    </h2>
                    <p className="text-sm md:text-lg text-center mb-8 md:mb-12 text-gray-700 text-pretty max-w-4xl mx-auto">
                        OurDeskは、伴走型キャリア支援という仕組みを通して、女性の「働きたい」を育てています。
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <div className="p-6 rounded-lg shadow-md"
                            style={{
                                backgroundImage: "linear-gradient(rgb(224, 214, 210, 0.45), rgb(224, 214, 210, 0.65)),url(/images/AdobeStock_1408184906_Preview.jpeg)",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                学びの場を提供
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 text-pretty">
                                女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-md"
                            style={{
                                backgroundImage: "linear-gradient(rgb(224, 214, 210, 0.45), rgb(224, 214, 210, 0.65)),url(/images/AdobeStock_537141193_Preview.jpeg)",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                キャリア面談
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 text-pretty">
                                国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-md"
                            style={{
                                backgroundImage: "linear-gradient(rgb(224, 214, 210, 0.45), rgb(224, 214, 210, 0.65)),url(/images/AdobeStock_399162949_Preview.jpeg)",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                仕事につなげる
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 text-pretty">
                                その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Scroll Stack: カードのみスクロールに合わせて暗→明に変化 */}
            <StackCardsSection cards={stackCards} />

        </main>
    )
}
