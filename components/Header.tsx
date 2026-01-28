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
            <div className="relative size-8 md:size-10">
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
              href="/service"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              Service
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/company"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              Company
            </Link>
            <Link
              href="/recruit"
              className="text-gray-800 hover:text-primary-500 transition-colors"
            >
              Recruit
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="size-6"
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
              href="/service"
              className="block py-3 text-gray-800 hover:text-primary-500 transition-colors min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>
            <Link
              href="/about-us"
              className="block py-3 text-gray-800 hover:text-primary-500 transition-colors min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/company"
              className="block py-3 text-gray-800 hover:text-primary-500 transition-colors min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/recruit"
              className="block py-3 text-gray-800 hover:text-primary-500 transition-colors min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Recruit
            </Link>
            <Link
              href="/contact"
              className="block py-3 bg-primary-700 text-white px-4 rounded-lg hover:bg-primary-800 transition-colors mt-2 min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="block py-3 text-gray-800 hover:text-primary-500 transition-colors min-h-[44px] flex items-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
