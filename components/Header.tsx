'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/OurDesk株式会社様_logo.png"
                alt="OurDesk株式会社"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">OurDesk</span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              会社概要
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              サービス
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link
              href="/"
              className="block py-2 text-gray-800 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-800 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-800 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="/contact"
              className="block py-2 bg-primary-700 text-white px-4 rounded-lg hover:bg-primary-800 transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
