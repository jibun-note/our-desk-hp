import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-800 flex flex-col min-h-[200px]">
            <div className="container mx-auto px-4 py-12 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* 会社情報 */}
                    <div>
                        <div className="relative w-32 md:w-40 h-16 md:h-20">
                            <Image
                                src="/OurDesk_logo.png"
                                alt="OurDesk株式会社"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-gray-800 text-base md:text-lg font-semibold mb-2 text-balance">
                            OurDesk株式会社
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4">
                            東京都港区南青山1-15-27  YMビル1階
                        </p>
                    </div>

                    {/* ナビゲーション */}
                    <div>
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <Link
                                    href="/service"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600 font-medium"
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-us"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600 font-medium"
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/company"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600 font-medium"
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/recruit"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600 font-medium"
                                >
                                    Recruit
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600 font-medium"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* プライバシーポリシー */}
                    <div>
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-primary-500 transition-colors text-sm md:text-base text-gray-600"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* コピーライト */}
            <div className="border-t border-gray-200 py-6">
                <div className="container mx-auto px-4 text-center text-sm md:text-base text-gray-600">
                    <p>&copy; {new Date().getFullYear()} OurDesk株式会社. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
