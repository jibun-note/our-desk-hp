'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Footer() {
    return (
        <footer className=" text-gray-800 flex flex-col min-h-[200px]">
            <div className="container mx-auto px-4 py-12 flex-1">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* 会社情報 */}
                    <div className="md:mr-24">
                        <motion.div
                            className="relative w-32 md:w-40 h-16 md:h-20"
                            whileHover={{ scale: 1.08, opacity: 0.9 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                        >
                            <Image
                                src="/OurDesk_logo.png"
                                alt="OurDesk株式会社"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                        <h3 className="text-gray-800 text-base md:text-lg font-semibold mb-2 text-balance">
                            OurDesk株式会社
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4">
                            東京都港区南青山1-15-27  YMビル1階
                        </p>
                    </div>

                    {/* ナビゲーション */}
                    <div className="md:mx-32">
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/service"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base font-medium"
                                    >
                                        Service
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/about-us"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base font-medium"
                                    >
                                        About us
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/company"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base font-medium"
                                    >
                                        Company
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/recruit"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base font-medium"
                                    >
                                        Recruit
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/contact"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base font-medium"
                                    >
                                        Contact
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
                            </li>
                        </ul>
                    </div>

                    {/* プライバシーポリシー */}
                    <div>
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.15, ease: 'easeOut' }}
                                >
                                    <Link
                                        href="/privacy"
                                        className="relative text-gray-800 hover:text-primary-500 transition-colors duration-150 group block text-sm md:text-base"
                                    >
                                        Privacy Policy
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                        />
                                    </Link>
                                </motion.div>
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
