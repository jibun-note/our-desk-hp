import SplitText from '@/components/ui/SplitText'
import Particles from '@/components/ui/Particles'
import SlideUpSection from '@/components/ui/SlideUpSection'
import GradientHeading from '@/components/ui/GradientHeading'
import StackCardsSection from '@/components/StackCardsSection'

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
                            <source src="/eye-catch-movie.mp4" type="video/mp4" />
                        </video>
                        {/* コンテンツ - 動画要素内に配置 */}
                        <div className="absolute inset-0 flex items-end justify-end z-10 p-4 md:p-16 pointer-events-none">
                            <div className="max-w-2xl pointer-events-auto">
                                <h1 className="text-xl md:text-4xl font-bold text-right text-balance text-gray-800">
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
            <section className="relative py-8 px-4 md:py-16 md:px-6 bg-white">
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
                <div className="container mx-auto max-w-4xl relative z-10">
                    <SplitText
                        tag="h2"
                        text="「働きたい」を、ちゃんと育てる。"
                        className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance"
                        splitType="chars"
                        delay={50}
                        duration={0.8}
                        ease="power3.out"
                        from={{ opacity: 0, y: 24 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
                        「働きたい」想いは、自然に生まれるものではありません。<br />OurDeskは、その気持ちを育て、仕事につなげる仕組みをつくっています。
                    </p>
                </div>
            </section>

            {/* セクション3: OurDeskの強み */}
            <section className="relative py-8 px-4 md:py-16 md:px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 text-balance">
                        OurDeskの強み
                    </h2>
                    <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-gray-700 text-pretty max-w-4xl mx-auto">
                        OurDeskは、伴走型キャリア支援という仕組みを通して、女性の「働きたい」を育てています。
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-primary-700 mb-3">①</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                学びの場を提供
                            </h3>
                            <p className="text-gray-600 text-pretty">
                                女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-primary-700 mb-3">②</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                キャリア面談
                            </h3>
                            <p className="text-gray-600 text-pretty">
                                国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-primary-700 mb-3">③</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-balance">
                                仕事につなげる
                            </h3>
                            <p className="text-gray-600 text-pretty">
                                その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll Stack: カードのみスクロールに合わせて暗→明に変化 */}
            <StackCardsSection />
        </main>
    )
}
