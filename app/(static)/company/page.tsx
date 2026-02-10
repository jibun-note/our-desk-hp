/**
 * 会社情報ページ（/company）
 * 役員紹介・グループ体制図・会社概要・アクセス情報を表示する静的ページ。
 */
import HeroSection from '@/components/sections/HeroSection'
import WaveClipLayer from '@/components/sections/WaveClipLayer'
import { createPageMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'

/** ページのSEOメタデータ（title / description 等） */
export const metadata = createPageMetadata(
    '/company/',
    'Company | OurDesk株式会社',
    'OurDesk株式会社の役員紹介、グループ体制、会社概要、アクセス情報をご紹介します。'
)

/** 役員紹介セクション用の一覧データ（名前・役職） */
const executives = [
    { name: '小宮山 陽大', role: '代表取締役' },
    { name: '横山 悠亮', role: '取締役' },
    { name: '石山 拓也', role: '取締役' },
    { name: '大坪 誉弘', role: '取締役' },
] as const

/** 青山本社のGoogle Maps検索URL */
const MAP_LINK_AOYAMA =
    'https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%8D%97%E9%9D%92%E5%B1%B11-15-27+YM%E3%83%93%E3%83%AB'
/** ISAI AKASAKAオフィスのGoogle Maps検索URL */
const MAP_LINK_ISAI =
    'https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E8%B5%A4%E5%9D%825-2-33+ISAI+AKASAKA'

export default function CompanyPage() {
    return (
        <>
            {/* ヒーロー：ページタイトル「Company」と説明「会社情報」 */}
            <HeroSection title="Company" description="会社情報" />

            {/* メインコンテンツ（白背景）：ヘッダーとの境目を明確にする上部ボーダー */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto max-w-4xl px-4 pt-12 md:pt-16 pb-20 md:pb-28 space-y-20 md:space-y-24">
                    {/* 役員紹介：executives をカード形式で一覧表示（イニシャルアイコン + 役職 + 名前） */}
                    <section id="executives" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-balance mb-2">役員紹介</h2>
                        <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {executives.map((exec) => (
                                <li
                                    key={exec.name}
                                    className="rounded-lg border border-gray-200 bg-white shadow-sm p-6 text-pretty"
                                >
                                    <div className="aspect-square max-w-[120px] mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl font-bold">
                                        {exec.name.charAt(0)}
                                    </div>
                                    <p className="text-sm font-medium text-primary-700 tabular-nums">
                                        {exec.role}
                                    </p>
                                    <p className="text-lg font-bold text-gray-800 mt-1">
                                        {exec.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* グループ体制：体制図画像を中央配置で表示 */}
                    <section id="group" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-balance mb-2">グループ体制</h2>
                        <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        <div className="flex justify-center">
                            <Image
                                src="/images/company/グループ体制図.png"
                                alt="OurDeskグループ体制図"
                                width={800}
                                height={600}
                                className="w-full max-w-3xl rounded-lg"
                            />
                        </div>
                    </section>
                </div>
            </div>

            {/* 会社概要エリア：上端が波型に切れたオフィス写真 → その下に会社概要・アクセス */}
            <div className="relative min-h-[40rem] bg-white">
                <WaveClipLayer idPrefix="company">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/images/company/office-bg.png)' }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </WaveClipLayer>
                {/* 写真の上に重なるコンテンツ（z-10）：会社概要テーブルとアクセス */}
                <div className="container relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-16 md:pb-20 space-y-20 md:space-y-24">
                    {/* 会社概要：社名・オフィス・役員・業務内容を表形式で表示（横スクロール対応） */}
                    <section id="overview" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance mb-2">会社概要</h2>
                        <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-pretty">
                                <tbody className="[&>tr]:border-b [&>tr]:border-white">
                                    <tr>
                                        <th className="py-4 pr-6 font-semibold align-top w-28 md:w-36">
                                            <span className="text-primary-400">社名</span>
                                        </th>
                                        <td className="py-4 text-white">OurDesk株式会社</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 font-semibold align-top">
                                            <span className="text-primary-400">オフィス</span>
                                        </th>
                                        <td className="py-4 text-white space-y-2">
                                            <p>
                                                <span className="font-medium text-primary-400">（本社）</span>
                                                <br />
                                                <span className="text-white">東京都港区南青山1-15-27 YMビル1階</span>
                                            </p>
                                            <p>
                                                <span className="font-medium text-primary-400">（オフィス）</span>
                                                <br />
                                                <span className="text-white">東京都港区赤坂5-2-33 ISAI AKASAKA 1612</span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 font-semibold align-top">
                                            <span className="text-primary-400">役員</span>
                                        </th>
                                        <td className="py-4 text-white">
                                            代表取締役 小宮山陽大 / 取締役 横山悠亮 /
                                            取締役 石山拓也 / 取締役 大坪誉弘
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 font-semibold align-top">
                                            <span className="text-primary-400">業務内容</span>
                                        </th>
                                        <td className="py-4 text-white">
                                            バックオフィスサポート / BPO
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* アクセス：青山本社・ISAI AKASAKA の2拠点を2カラムで表示し、各「地図を表示」で Google Maps を開く */}
                    <section id="access" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance mb-2">アクセス</h2>
                        <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            <div>
                                <h3 className="text-lg font-bold text-blue-400 mb-2">青山（本社）</h3>
                                <p className="text-white text-pretty mb-4">
                                    東京都港区南青山1-15-27 YMビル1階
                                </p>
                                <Link
                                    href={MAP_LINK_AOYAMA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white font-medium px-6 py-3 hover:bg-primary-700 transition-colors duration-200 group"
                                >
                                    地図を表示
                                    <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-400 mb-2">ISAI AKASAKA（オフィス）</h3>
                                <p className="text-white text-pretty mb-4">
                                    東京都港区赤坂5-2-33 ISAI AKASAKA 1612
                                </p>
                                <Link
                                    href={MAP_LINK_ISAI}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white font-medium px-6 py-3 hover:bg-primary-700 transition-colors duration-200 group"
                                >
                                    地図を表示
                                    <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
