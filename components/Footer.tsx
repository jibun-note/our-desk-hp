import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              OurDesk株式会社
            </h3>
            <p className="text-sm text-gray-600">
              あなたのビジネスを次のレベルへ導くパートナーとして、最適なソリューションを提供します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-500 transition-colors text-sm text-gray-600"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-500 transition-colors text-sm text-gray-600"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-500 transition-colors text-sm text-gray-600"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition-colors text-sm text-gray-600"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-500 transition-colors text-gray-600"
                >
                  サービス一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">お問い合わせ</h4>
            <p className="text-sm mb-4 text-gray-600">
              ご質問やご相談がございましたら、お気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors text-sm"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} OurDesk株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
