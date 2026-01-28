import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company | OurDesk株式会社',
  description: 'OurDesk株式会社の役員紹介、グループ体制、会社概要、アクセス情報をご紹介します。',
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Company
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            会社情報
          </p>
        </div>
      </section>

      {/* 役員紹介 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            役員紹介
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                代表取締役
              </h3>
              <p className="text-base text-gray-700">小宮山 陽大</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                取締役
              </h3>
              <p className="text-base text-gray-700">横山 悠亮</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                取締役
              </h3>
              <p className="text-base text-gray-700">石山 拓也</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                取締役
              </h3>
              <p className="text-base text-gray-700">大坪 誉弘</p>
            </div>
          </div>
        </div>
      </section>

      {/* グループ体制 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            グループ体制
          </h2>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <p className="text-sm md:text-base text-gray-700 text-pretty">
              （プレースホルダー：グループ体制の図は後で追加予定）
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            会社概要
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm md:text-base font-semibold text-gray-600 mb-2">
                  社名
                </dt>
                <dd className="text-sm md:text-base text-gray-800">OurDesk株式会社</dd>
              </div>
              <div>
                <dt className="text-sm md:text-base font-semibold text-gray-600 mb-2">
                  オフィス
                </dt>
                <dd className="text-sm md:text-base text-gray-800">
                  （本社）東京都港区南青山1-15-27 YMビル1階
                  <br />
                  （オフィス）東京都港区赤坂5-2-33 ISAI AKASAKA 1612
                </dd>
              </div>
              <div>
                <dt className="text-sm md:text-base font-semibold text-gray-600 mb-2">
                  役員
                </dt>
                <dd className="text-sm md:text-base text-gray-800">
                  代表取締役　小宮山陽大
                  <br />
                  取締役　横山悠亮
                  <br />
                  取締役　石山拓也
                  <br />
                  取締役　大坪誉弘
                </dd>
              </div>
              <div>
                <dt className="text-sm md:text-base font-semibold text-gray-600 mb-2">
                  業務内容
                </dt>
                <dd className="text-sm md:text-base text-gray-800">
                  バックオフィスサポート
                  <br />
                  BPO
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            アクセス
          </h2>
          <div className="space-y-8">
            {/* 青山オフィス */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 text-balance">
                本社（青山）
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 text-pretty">
                東京都港区南青山1-15-27 YMビル1階
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 text-pretty">
                  （地図画像は後で追加予定）
                </p>
              </div>
            </div>

            {/* ISAI AKASAKAオフィス */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 text-balance">
                オフィス（ISAI AKASAKA）
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 text-pretty">
                東京都港区赤坂5-2-33 ISAI AKASAKA 1612
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 text-pretty">
                  （地図画像は後で追加予定）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
