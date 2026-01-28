import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* セクション1: キャッチコピー */}
      <section className="relative bg-primary-500 text-white py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-balance mb-6">
            OurDeskが提供するのは、
            <br />
            業務に追われる会社を、
            <br />
            「働きたい」人材が支える仕組み。
          </h1>
        </div>
      </section>

      {/* セクション2: 「働きたい」を、ちゃんと育てる */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            「働きたい」を、ちゃんと育てる。
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
            「働きたい」想いは、自然に生まれるものではありません。OurDeskは、その気持ちを育て、仕事につなげる仕組みをつくっています。
          </p>
        </div>
      </section>

      {/* セクション3: OurDeskの強み */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 text-balance">
            OurDeskの強み
          </h2>
          <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-gray-700 text-pretty max-w-3xl mx-auto">
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

      {/* セクション4: OurDeskの人材育成方針 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            OurDeskの人材育成方針
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
            私たちが大切にしているのは、
          </p>
          <ul className="space-y-3 text-base md:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">働きたい</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">人の力になりたい</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">誰かを支える仕事がしたい</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 mt-6 leading-relaxed text-pretty">
            そんな想いを持つ人たちです。
            <br />
            スキルだけでなく、「働く姿勢」や「想い」も大切に育てています。
          </p>
        </div>
      </section>

      {/* セクション5: 裏付け */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            裏付け
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
            OurDeskの仕組みの土台には、NEUGATEグループの人材育成ノウハウがあります。
          </p>
          <ul className="space-y-3 text-base md:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">グループ従業員 約100名</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">定着率は常に90%以上</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">人事支援・キャリア支援の実績多数</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 mt-6 leading-relaxed text-pretty">
            長く働ける環境づくりを続けてきたNEUGATEの仕組みを活かし、OurDeskでもスタッフの育成とキャリア支援を行っています。
          </p>
        </div>
      </section>

      {/* セクション6: OurDeskのミッション */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            OurDeskのミッション
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
            私たちは、「働きたい」という気持ちが、仕事につながる社会をつくりたいと考えています。
            <br />
            家庭やライフステージに左右されず、自分らしい働き方を選びながら、誰かの役に立てる。そんなキャリアの形を、一人ひとりと一緒につくっていく会社です。
          </p>
          <div className="mt-8">
            <Link
              href="/about-us"
              className="inline-block bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              MVVを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* セクション7: なぜ、女性のキャリア支援なのか */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            なぜ、女性のキャリア支援なのか
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
            出産や育児、家庭との両立など、女性のキャリアには多くの分岐点があります。
            <br />
            「働きたい気持ちはあるのに、選択肢が限られてしまう」そんな声を、私たちはたくさん聞いてきました。
            <br />
            だからOurDeskは、女性が自分らしく働き続けられる仕組みづくりに本気で取り組んでいます。
          </p>
        </div>
      </section>
    </main>
  )
}
