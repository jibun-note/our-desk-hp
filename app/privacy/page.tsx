import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | OurDesk株式会社',
  description: 'OurDesk株式会社のプライバシーポリシー',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            プライバシーポリシー
          </p>
        </div>
      </section>

      {/* プライバシーポリシー内容 */}
      <section className="py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
              <p>
                （プライバシーポリシーの内容は後で追加予定）
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
