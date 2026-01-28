import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'サービス | OurDesk株式会社',
  description: 'OurDesk株式会社が提供するサービスをご紹介します。',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'コンサルティングサービス',
      description:
        'ビジネスの課題を分析し、最適なソリューションを提案します。豊富な経験と専門知識を活かし、お客様のビジネス成長をサポートします。',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'システム開発',
      description:
        'お客様のニーズに合わせたカスタムシステムを開発します。最新の技術を活用し、高品質で使いやすいシステムを提供します。',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'サポートサービス',
      description:
        '導入後のサポートも充実しています。お客様が安心してサービスをご利用いただけるよう、専門スタッフがサポートします。',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">サービス</h1>
          <p className="text-xl text-white">
            お客様のビジネスをサポートする各種サービス
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-700 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
