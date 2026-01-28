import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service | OurDesk株式会社',
  description: 'OurDesk株式会社が提供するサービスをご紹介します。',
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Service
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            OurDeskが提供するサービス
          </p>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-balance">
              BackDesk
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
              OurDeskが提供するバックオフィスサポートサービスです。
            </p>
            <div className="mt-8">
              <a
                href="https://back-desk.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors w-full md:w-auto text-center"
              >
                BackDeskのサイトへ →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-gray-600 mb-6 text-pretty">
              サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
