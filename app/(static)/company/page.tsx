/**
 * 会社情報ページ（/company）
 * 役員紹介・グループ体制図・会社概要・アクセス情報を表示する静的ページ。
 */
import HeroSection from '@/components/sections/HeroSection'
import WaveClipLayer from '@/components/sections/WaveClipLayer'
import { createPageMetadata } from '@/lib/seo'
import Image from 'next/image'

/** ページのSEOメタデータ（title / description 等） */
export const metadata = createPageMetadata(
    '/company/',
    'Company | OurDesk株式会社',
    'OurDesk株式会社の役員紹介、グループ体制、会社概要、アクセス情報をご紹介します。'
)

/** 役員紹介セクション用の一覧データ（名前・役職・役職英表記） */
const executives: { name: string; role: string; roleEn: string }[] = [
    { name: '小宮山 陽大', role: '代表取締役', roleEn: 'CEO' },
    { name: '横山 悠亮', role: '取締役', roleEn: 'DIRECTOR' },
    { name: '石山 拓也', role: '取締役', roleEn: 'DIRECTOR' },
    { name: '大坪 誉弘', role: '取締役', roleEn: 'DIRECTOR' },
]

/** 青山本社のGoogle Maps埋め込みURL */
const MAP_EMBED_AOYAMA =
    'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%8D%97%E9%9D%92%E5%B1%B11-15-27+YM%E3%83%93%E3%83%AB1%E9%9A%8B&output=embed'
/** ISAI AKASAKAオフィスのGoogle Maps埋め込みURL */
const MAP_EMBED_ISAI =
    'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E8%B5%A4%E5%9D%825-2-33+ISAI+AKASAKA+1612&output=embed'

export default function CompanyPage() {
    return (
        <>
            {/* ヒーロー：ページタイトル「Company」と説明「会社情報」 */}
            <HeroSection title="Company" description="会社情報" />

            {/* メインコンテンツ（白背景）：ヘッダーとの境目を明確にする上部ボーダー */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto max-w-4xl px-4 pt-12 md:pt-16 pb-20 md:pb-28 space-y-20 md:space-y-24">
                    {/* 役員紹介：2x2グリッド・番号・役職（日英）のレイアウト */}
                    <section id="executives" className="scroll-mt-24">
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-balance mb-2">役員紹介</h2>
                            <div className="w-20 h-1 mb-0.5" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        </div>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-300 border border-gray-300 rounded-xl overflow-hidden max-w-[1000px] mx-auto"
                            role="list"
                        >
                            {executives.map((exec, index) => (
                                <div
                                    key={exec.name}
                                    role="listitem"
                                    className="relative bg-white px-8 pt-12 pb-12 pl-16 md:px-12 md:pt-12 md:pb-12 md:pl-20 transition-all duration-200 ease-out group hover:bg-gray-50 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                                >
                                    <span className="absolute top-12 left-8 md:top-12 md:left-10 text-sm font-semibold text-gray-300 tabular-nums transition-colors duration-200 group-hover:text-primary-400">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-xl md:text-[1.75rem] font-bold text-gray-900 mb-3 leading-tight text-pretty transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                                        {exec.name}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="text-base text-gray-600 font-normal">
                                            {exec.role}
                                        </span>
                                        <span className="inline-block px-2.5 py-1 text-xs font-semibold text-primary-600 tracking-widest uppercase rounded-full bg-[#FFF6E5] transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:scale-105 group-hover:bg-primary-100 group-hover:shadow-sm">
                                            {exec.roleEn}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
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

                    {/* アクセス：青山本社・ISAI AKASAKA の2拠点を2カラムで表示し、Google Maps を埋め込み */}
                    <section id="access" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance mb-2">アクセス</h2>
                        <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FDD000, #F08300)' }} />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            <div>
                                <h3 className="text-lg font-bold text-blue-400 mb-2">青山（本社）</h3>
                                <p className="text-white text-pretty mb-4">
                                    東京都港区南青山1-15-27 YMビル1階
                                </p>
                                <div className="aspect-video w-full overflow-hidden rounded-lg">
                                    <iframe
                                        src={MAP_EMBED_AOYAMA}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="青山本社の地図"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-400 mb-2">ISAI AKASAKA（オフィス）</h3>
                                <p className="text-white text-pretty mb-4">
                                    東京都港区赤坂5-2-33 ISAI AKASAKA 1612
                                </p>
                                <div className="aspect-video w-full overflow-hidden rounded-lg">
                                    <iframe
                                        src={MAP_EMBED_ISAI}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="ISAI AKASAKAオフィスの地図"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
