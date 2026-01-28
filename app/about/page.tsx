import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社概要 | OurDesk株式会社',
  description: 'OurDesk株式会社の会社概要、理念、沿革をご紹介します。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">会社概要</h1>
          <p className="text-xl text-white">
            OurDesk株式会社について
          </p>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">会社概要</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <dl className="grid md:grid-cols-2 gap-6">
                <div>
                  <dt className="font-semibold text-gray-600 mb-2">会社名</dt>
                  <dd className="text-gray-800">OurDesk株式会社</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600 mb-2">設立</dt>
                  <dd className="text-gray-800">2024年</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600 mb-2">所在地</dt>
                  <dd className="text-gray-800">東京都</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-600 mb-2">事業内容</dt>
                  <dd className="text-gray-800">ビジネスソリューションの提供</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">私たちの理念</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                OurDesk株式会社は、お客様のビジネスを次のレベルへ導くことを使命としています。
                私たちは、最新のテクノロジーと豊富な経験を活かし、お客様に最適なソリューションを提供します。
              </p>
              <p className="text-lg leading-relaxed">
                お客様との信頼関係を大切にし、長期的なパートナーシップを築くことを重視しています。
                私たちの成功は、お客様の成功と密接に関連していると考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">沿革</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-700 pl-6">
                <div className="font-semibold text-gray-800 mb-2">2024年</div>
                <div className="text-gray-600">OurDesk株式会社設立</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
