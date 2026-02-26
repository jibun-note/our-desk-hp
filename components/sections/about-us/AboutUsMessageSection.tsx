import HandwrittenLine from '@/components/ui/HandwrittenLine'

/**
 * About Us の代表メッセージセクション。
 * グラデーション棒は使用禁止のため HandwrittenLine（variant 4：アクセント）に差し替え。
 */
export default function AboutUsMessageSection() {
    return (
        <section
            className="relative z-[9] bg-[#fefcf7] py-20 md:py-32 px-4 md:px-6"
            aria-label="代表メッセージ"
        >
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-1 text-gray-800 text-balance">
                        代表メッセージ
                    </h2>
                    <div className="flex justify-center mb-6">
                        <HandwrittenLine
                            variant={4}
                            color="rgba(178,186,230,0.8)"
                            width={100}
                            align="center"
                        />
                    </div>
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
    )
}
