import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | OurDesk株式会社',
  description: 'OurDesk株式会社の代表メッセージとMVV（Mission、Vision、Value）をご紹介します。',
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            OurDeskについて
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            代表メッセージ
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-pretty mb-6">
              私はこれまで、IT人材の育成、キャリア支援、教育事業、そしてシステム開発や人材紹介など、「人と仕事」に関わる事業に携わってきました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-pretty mb-6">
              AIの進化によって、多くの業務が自動化される時代が、すぐそこまで来ています。
              それでも私は、人が人のために動く仕事は、これからもなくならないと考えています。むしろ、IT化が進めば進むほど、人が関わる"アナログな仕事"こそが、本当の差別化になっていくのではないでしょうか。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-pretty mb-6">
              世の中では、業務効率やコスト削減を目的としたアウトソーシングやBPOが広がっています。もちろん、それ自体はとても有意義な取り組みです。
              けれど、「仕事の効率は大切だけど、その先にある働く楽しさ」、「人と人が関わることで生まれる満足感」そうした価値も、同じくらい大切だと私は思っています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-pretty mb-6">
              私たちOurDeskが大切にしているのは、"業務ができる人"よりも、"誰かのために働きたいと思える人"です。
              前向きな気持ちを持ち、人の役に立ちたいという想いを持つ人たちが、安心して力を発揮できる場所をつくること。それが、OurDeskの目指す姿です。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-pretty">
              人と人が支え合うことで、仕事が、そして人生が、少しでも前向きなものになる。そんな場を、これからも創っていきたいと思っています。
            </p>
            <div className="mt-8 text-right">
              <p className="text-base md:text-lg font-semibold text-gray-800">
                代表取締役　小宮山 陽大
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVVセクション */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800 text-balance">
            OurDesk MVV
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-700 text-balance">
                Mission
              </h3>
              <p className="text-base md:text-lg font-semibold mb-4 text-gray-800 text-balance">
                私たちの使命
              </p>
              <p className="text-base md:text-lg font-bold mb-4 text-gray-800 text-balance">
                「働きたい」という想いを、<br />
                仕事につなげる。
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                私たちは、「誰かの役に立ちたい」「自分の力を活かしたい」そんな想いを持つ人たちが、安心して働き続けられる社会をつくりたいと考えています。
                家庭やライフステージ、環境の変化によって、働き方の選択肢が狭まってしまう人がいます。それでもなお、「働きたい」と思い続けている人がいます。
                その想いを、埋もれさせたくない。諦めさせたくない。
                OurDeskは、一人ひとりの人生に寄り添いながら、自分らしい働き方を一緒につくっていく会社です。
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-700 text-balance">
                Vision
              </h3>
              <p className="text-base md:text-lg font-semibold mb-4 text-gray-800 text-balance">
                私たちが目指す未来
              </p>
              <p className="text-base md:text-lg font-bold mb-4 text-gray-800 text-balance">
                人が人を支えることが、<br />
                当たり前に価値になる社会へ。
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                AIやテクノロジーの進化によって、仕事の形は大きく変わろうとしています。
                それでも、人が人のために動く仕事、誰かを想って行動する仕事は、決してなくならないと私たちは信じています。
                むしろ、効率化が進むほど、「人の温度」を持った仕事こそが、本当の価値を生み出す時代になる。
                支えることで、支えられる。誰かの役に立つことで、自分も前に進める。
                仕事が、ただの「作業」ではなく、「誇れる時間」になる社会へ。
                その未来を、私たちは本気で目指しています。
              </p>
            </div>

            {/* Value */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-700 text-balance">
                Value
              </h3>
              <p className="text-base md:text-lg font-semibold mb-4 text-gray-800 text-balance">
                私たちの大切にする価値観
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-base md:text-lg font-semibold mb-2 text-gray-800 text-balance">
                    1. 人から始める
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                    私たちは、スキルや経験だけで人を判断しません。その人がどんな想いで働きたいのか。誰のために力を使いたいのか。想いや姿勢こそが、仕事の原動力だと信じています。
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold mb-2 text-gray-800 text-balance">
                    2. 伴走する
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                    人のキャリアは、一直線ではありません。迷うことも、立ち止まることもあります。だからこそ私たちは、管理するのではなく、寄り添う支援を大切にしています。一人ひとりの人生に、長く、真剣に向き合います。
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold mb-2 text-gray-800 text-balance">
                    3. つなげる
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                    「働きたい」人と、「支えてほしい」仕事。その間にある壁を、やさしく、確実につなぐ。人と仕事が出会うことで、新しい価値が生まれると、私たちは信じています。
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold mb-2 text-gray-800 text-balance">
                    4. 支え合う
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
                    誰かの力になることで、自分も強くなれる。支え合うことで、仕事はもっと前向きなものになる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
