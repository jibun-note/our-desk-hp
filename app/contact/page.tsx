import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | OurDesk株式会社',
  description: 'OurDesk株式会社へのお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            ご質問やご相談がございましたら、お気軽にご連絡ください
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-600 mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-600 mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm md:text-base font-medium text-gray-600 mb-2"
                >
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm md:text-base font-medium text-gray-600 mb-2"
                >
                  件名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="お問い合わせ件名"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-600 mb-2"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors min-h-[44px]"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          {/* 注意事項 */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm md:text-base text-blue-800 text-pretty">
              <strong>ご注意:</strong>
              このフォームは現在表示のみの状態です。実際の送信機能を実装するには、バックエンドAPIまたはフォームサービス（例：Formspree、SendGrid等）の連携が必要です。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
