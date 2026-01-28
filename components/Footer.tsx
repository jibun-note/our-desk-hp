import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-gray-800 text-base md:text-lg font-semibold mb-4 text-balance">
              OurDesk株式会社
            </h3>
            <p className="text-sm md:text-base text-gray-600 text-pretty">
              あなたのビジネスを次のレベルへ導くパートナーとして、最適なソリューションを提供します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-balance">ナビゲーション</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/service"
                  className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/recruit"
                  className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                >
                  Recruit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-balance">サービス</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  href="/service"
                  className="hover:text-primary-500 transition-colors text-gray-600"
                >
                  サービス一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ・その他 */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-balance">お問い合わせ</h4>
            <p className="text-sm md:text-base mb-4 text-gray-600 text-pretty">
              ご質問やご相談がございましたら、お気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors text-sm md:text-base mb-4"
            >
              お問い合わせフォーム
            </Link>
            <div className="mt-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm md:text-base text-gray-600">
          <p>&copy; {new Date().getFullYear()} OurDesk株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
