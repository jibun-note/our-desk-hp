import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-balance">
                    ページが見つかりません
                </h2>
                <p className="text-gray-600 mb-8 text-pretty">
                    お探しのページは存在しないか、<br />移動または削除された可能性があります。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors min-h-[44px] flex items-center justify-center"
                    >
                        ホームに戻る
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors min-h-[44px] flex items-center justify-center"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </div>
    )
}
