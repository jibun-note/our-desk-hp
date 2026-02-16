import WaveClipLayer from '@/components/sections/WaveClipLayer'
import HeroSection from '@/components/sections/HeroSection'
import StaffVoices from '@/components/sections/StaffVoices'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Zen_Antique_Soft, Shippori_Mincho_B1, Zen_Old_Mincho, Klee_One, Hina_Mincho } from 'next/font/google'

// ① Zen Antique Soft — レトロで柔らかい印象
const zenAntiqueSoft = Zen_Antique_Soft({
    weight: '400',
    subsets: ['latin'],
    preload: false,
})

// ② Shippori Mincho B1 — 上品で落ち着いた明朝体
const shipporiMinchoB1 = Shippori_Mincho_B1({
    weight: '700',
    subsets: ['latin'],
    preload: false,
})

// ③ Zen Old Mincho — クラシカルで温かみのある明朝体
const zenOldMincho = Zen_Old_Mincho({
    weight: '700',
    subsets: ['latin'],
    preload: false,
})

// ④ Klee One — 教科書体風、手書きっぽい温かさ
const kleeOne = Klee_One({
    weight: '600',
    subsets: ['latin'],
    preload: false,
})

// ⑤ Hina Mincho — 繊細で女性的な明朝体
const hinaMincho = Hina_Mincho({
    weight: '400',
    subsets: ['latin'],
    preload: false,
})

// ===== ここを切り替えて比較してください =====
const selectedFont = shipporiMinchoB1  // ← ①〜⑤を入れ替えて試す
// const selectedFont = zenAntiqueSoft     // ①
// const selectedFont = shipporiMinchoB1   // ②
// const selectedFont = zenOldMincho       // ③
// const selectedFont = kleeOne            // ④
// const selectedFont = hinaMincho         // ⑤

export const metadata = createPageMetadata(
    '/recruit/',
    '採用情報 | OurDesk株式会社',
    'OurDeskの採用情報。「働きたい」という気持ちを育てる。スキルや経歴よりも、「誰かの役に立ちたい」という想いを大切にします。'
)

const WORK_STYLES = [
    {
        id: '01',
        title: '業務委託',
        label: '100% Remote',
        description: '自分のペースで、好きな場所から。月数時間からでも大丈夫です。',
        salaryAmount: '¥1,300',
        salaryUnit: '～/時',
        note: '業務ランクにより変動',
    },
    {
        id: '02',
        title: 'パート',
        label: 'Flexible',
        description: 'ライフスタイルに合わせて、無理のない範囲で。',
        salaryAmount: '¥1,250',
        salaryUnit: '～/時',
        note: null,
    },
    {
        id: '03',
        title: '正社員',
        label: 'Career',
        description: '長く、キャリアとして一緒に歩んでいきたい方へ。',
        salaryAmount: '¥210,000',
        salaryUnit: '～/月',
        note: '※経験・スキル・稼働状況に応じて決定',
    },
] as const

const CAREER_PATHS = [
    {
        id: '01',
        title: 'オフィスワーク未経験の方',
        current: ['デスクワーク以外の仕事をしている', '将来、結婚や出産も視野に入れている'],
        steps: [
            'OurDeskと契約',
            '月数時間からスタート',
            '研修',
            'メインに切り替え',
            'ライフイベント後も柔軟な働き方実現',
        ],
    },
    {
        id: '02',
        title: '子育て中で月50～100時間しか働けない方',
        current: ['子どもは小学生', '以前は正社員、今はパート'],
        steps: [
            'キャリア面談',
            '実務経験',
            '資格取得',
            '働き方拡大',
            '正社員登用',
        ],
    },
] as const

const FAQ_ITEMS = [
    {
        q: '未経験でも大丈夫ですか？',
        a: '研修制度があるため、問題ありません。「今できること」から始めて、少しずつスキルアップしていける環境を整えています。',
    },
    {
        q: '稼働時間はどれくらい必要ですか？',
        a: '月数時間からでも可能です。あなたのライフスタイルに合わせて、無理のない範囲で働けます。',
    },
    {
        q: '子どもの体調不良で休めますか？',
        a: 'チーム体制でフォローしますので、安心してください。急な休みにも対応できる体制を整えています。',
    },
] as const

const FEATURES = [
    {
        num: 'リモート',
        title: '100%',
        body: '全国どこからでも。通勤時間ゼロで、あなたの好きな場所から働けます。',
    },
    {
        num: '月数時間',
        title: '柔軟な働き方',
        body: 'ライフスタイルに合わせて。家事や育児との両立もしやすい環境です。',
    },
    {
        num: '未経験',
        title: 'OK',
        body: '研修制度完備。スキルは後から。まずは「働きたい」という気持ちを。',
    },
] as const

const FLOW_STEPS = [
    { num: 1, title: '希望する案件内容を秘書長と相談', subtitle: null },
    { num: 2, title: 'お客様から案件が入ったタイミングでアサイン', subtitle: null },
    { num: 3, title: '必要に応じてお客様との面談', subtitle: null },
    { num: 4, title: '業務ランク・時給決定', subtitle: null },
    { num: 5, title: '半年ごとに時給UP交渉が可能', subtitle: '成長に応じて、定期的に待遇を見直します' },
] as const

/** 画像がローカルにない場合のプレースホルダー（Unsplash） */
const IMG = {
    hero: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    avatar1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    avatar2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
} as const


export default function RecruitPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/recruit/" name="採用情報" />
            <main className="min-h-screen bg-white">
                {/* 1. Hero Section */}
                <HeroSection title="Recruit" description="私たちは、「人と人の関係性」を大切にしています" />

                {/* 2. イントロダクション */}
                <section className="flex items-center pt-8 pb-16 md:py-28 relative overflow-hidden bg-cream">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 w-full">
                        <div className="order-2 md:order-1 relative">
                            {/* 装飾 Blob（見出しの左後ろに固定配置・形状アニメーションあり） */}
                            <div
                                className="absolute -top-6 -left-6 w-[12rem] h-[12rem] md:-top-10 md:-left-16 md:w-[26rem] md:h-[26rem] blob blob-float pointer-events-none"
                                style={{ background: 'linear-gradient(135deg, rgba(253, 208, 0, 0.18), rgba(240, 131, 0, 0.12))' }}
                                aria-hidden
                            />
                            <h2 className={cn("relative text-3xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-8 text-gray-900 leading-tight", selectedFont.className)}>
                                「働きたい」
                                <br />
                                <span className="inline-block pl-[0.5em]">という</span>
                                <br />
                                <span className="inline-block pl-[0.5em]">気持ちを育てる</span>
                            </h2>
                            <div className="pl-[0.5em]">
                                <p className="text-base md:text-2xl text-gray-600 mb-6 md:mb-12 leading-relaxed">
                                    スキルや経歴よりも、
                                    <br />
                                    「誰かの役に立ちたい」という想い。
                                    <br />
                                    その気持ちを、私たちは大切に育てます。
                                </p>
                                <Link
                                    href="/contact/"
                                    className="inline-block px-8 py-4 md:px-10 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[48px]"
                                >
                                    あなたらしい働き方を見つける
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 -mr-4 md:mr-0 ml-auto md:ml-0 w-[90%] md:w-full">
                            <div className="hero-photo relative w-full aspect-[5/4] md:aspect-[4/5] max-h-[400px] md:max-h-[520px] overflow-hidden bg-gray-200">
                                <img
                                    src={IMG.hero}
                                    alt="笑顔で働く女性"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 3つの特徴 */}
                <section className="py-16 md:py-32 px-4 md:px-6 relative bg-cream">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                            {FEATURES.map((item) => (
                                <div key={item.num}>
                                    <div className="feature-number mb-4 !text-[2rem] md:!text-[5rem]">{item.num}</div>
                                    <div className="divider-line mb-6" />
                                    <h3 className="text-lg md:text-2xl font-medium mb-4 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. 募集形態・待遇（3つの働き方） */}
                <section className="wave-divider py-20 md:py-32">
                    <div className="max-w-6xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                                3つの働き方
                            </h2>
                            <div className="divider-line mx-auto mb-4" />
                            <p className="text-base md:text-lg text-gray-600">あなたのライフスタイルに合わせて選べます</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {WORK_STYLES.map((item) => (
                                <div
                                    key={item.id}
                                    className="card-organic p-6 md:p-10"
                                >
                                    <div
                                        className={cn(
                                            'text-3xl md:text-7xl serif font-bold mb-4 md:mb-6 text-transparent bg-clip-text',
                                            item.id === '02'
                                                ? 'bg-gradient-to-br from-orange-500 to-yellow-400'
                                                : 'bg-gradient-to-br from-yellow-400 to-orange-500'
                                        )}
                                    >
                                        {item.id}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-orange-600 mb-4 md:mb-6 font-medium tracking-wider uppercase">
                                        {item.label}
                                    </p>
                                    <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">{item.description}</p>
                                    <div className="text-2xl md:text-4xl font-bold text-gray-900">
                                        {item.salaryAmount}
                                        <span className="text-base md:text-xl text-gray-500">{item.salaryUnit}</span>
                                    </div>
                                    {item.note && (
                                        <p className="text-sm text-gray-500 mt-2">{item.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. キャリアの描き方 */}
                <section
                    className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, rgba(253, 208, 0, 0.05) 0%, rgba(240, 131, 0, 0.05) 100%)' }}
                >
                    {/* 装飾 Blob */}
                    <div
                        className="absolute -top-10 -right-10 w-[16rem] h-[16rem] md:-top-20 md:-right-20 md:w-[30rem] md:h-[30rem] blob pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, rgba(253, 208, 0, 0.08), rgba(240, 131, 0, 0.06))' }}
                        aria-hidden="true"
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                                キャリアの描き方
                            </h2>
                            <div className="divider-line mx-auto mb-4" />
                            <p className="text-base md:text-lg text-gray-600">
                                働き方に「正解」はありません。あなたの人生に合ったキャリアを、一緒につくります。
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                            {CAREER_PATHS.map((path) => (
                                <div
                                    key={path.id}
                                    className="career-path-card"
                                >
                                    <div
                                        className={cn(
                                            'text-3xl md:text-5xl serif font-bold mb-4 md:mb-6 text-transparent bg-clip-text',
                                            path.id === '02'
                                                ? 'bg-gradient-to-br from-orange-500 to-yellow-400'
                                                : 'bg-gradient-to-br from-yellow-400 to-orange-500'
                                        )}
                                    >
                                        {path.id}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">{path.title}</h3>

                                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                                        <p className="text-sm text-gray-500 mb-2">現在</p>
                                        {path.current.map((c, i) => (
                                            <p
                                                key={c}
                                                className={cn('text-sm md:text-base text-gray-700', i < path.current.length - 1 && 'mb-1')}
                                            >
                                                {c}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="space-y-3 md:space-y-4">
                                        <p className="font-medium text-gray-900 mb-3 md:mb-4">ステップ例</p>
                                        {path.steps.map((step, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                                <p className="text-sm md:text-base text-gray-600">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Wave: Section 5 → 6 */}
                <div
                    className="relative h-[80px]"
                    style={{ background: 'linear-gradient(135deg, rgba(253, 208, 0, 0.05) 0%, rgba(240, 131, 0, 0.05) 100%)' }}
                    aria-hidden="true"
                >
                    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
                    </svg>
                </div>

                {/* 6. 案件参画までの流れ */}
                <section className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                                案件参画までの流れ
                            </h2>
                            <div className="divider-line mx-auto" />
                        </div>

                        <div className="max-w-xl mx-auto space-y-3 md:space-y-4">
                            {FLOW_STEPS.map((step) => (
                                <div key={step.num} className="card-organic p-4 md:p-5 flex items-center gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
                                        {step.num}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-base md:text-lg font-bold text-gray-900">{step.title}</h3>
                                        {step.subtitle && (
                                            <p className="text-gray-500 text-xs md:text-sm mt-1">{step.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Wave: Section 6 → 8 */}
                <div className="relative h-[80px] overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-orange-50/50" />
                    <svg className="relative z-10 block w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z" fill="#ffffff" />
                    </svg>
                </div>

                {/* 8. よくある質問 */}
                <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-x-clip">
                    <div className="absolute inset-0 z-background bg-gradient-to-br from-primary-50/50 to-orange-50/50" aria-hidden />
                    {/* 装飾 Blob */}
                    <div
                        className="absolute bottom-4 left-4 w-[14rem] h-[14rem] md:bottom-6 md:left-6 md:w-[22rem] md:h-[22rem] blob pointer-events-none z-[1]"
                        style={{ background: 'linear-gradient(135deg, rgba(253, 208, 0, 0.08), rgba(240, 131, 0, 0.05))' }}
                        aria-hidden="true"
                    />
                    <div className="container mx-auto max-w-4xl relative z-content">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                                よくある質問
                            </h2>
                            <div className="divider-line mx-auto" />
                        </div>
                        <ul className="space-y-6">
                            {FAQ_ITEMS.map((item, i) => (
                                <li key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-3 text-balance">Q. {item.q}</h3>
                                    <p className="text-gray-700 text-pretty pl-0 md:pl-4 border-l-0 md:border-l-2 border-primary-300">
                                        A. {item.a}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Wave: Section 8 → 9 */}
                <div className="relative h-[80px] overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-orange-50/50" />
                    <svg className="relative z-10 block w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
                    </svg>
                </div>

                {/* 9. スタッフの声（タイムライン形式） */}
                <StaffVoices />


                {/* 10. 統合メッセージ＆CTAセクション（左右分割 + Wave） */}
                <div className="relative min-h-[40rem] lg:min-h-[45rem] bg-white">
                    {/* Wave クリップされた背景レイヤー */}
                    <WaveClipLayer idPrefix="recruit-cta">
                        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                            {/* 左側背景: 写真 + オーバーレイ */}
                            <div className="relative">
                                <img
                                    src={IMG.team}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-orange-900/60" />
                            </div>
                            {/* 右側背景: ダークグラデーション */}
                            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950" />
                        </div>
                    </WaveClipLayer>

                    {/* コンテンツレイヤー（z-10 で波の上に） */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[40rem] lg:min-h-[45rem]">
                        {/* 左側: メッセージ */}
                        <div className="flex items-center justify-center px-6 py-16 pt-24 md:px-8 md:py-20 md:pt-20">
                            <div className="max-w-lg space-y-6 md:space-y-8 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    効率じゃない。<br />
                                    <span className="text-gradient-hero">想いだ。</span>
                                </h2>
                                <div className="divider-line mx-auto lg:mx-0" />

                                <div className="text-white text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-5">
                                    <p className="font-medium">スキルは後から</p>
                                    <p className="text-white/90">でも想いは簡単には育ちません</p>
                                    <p className="text-white/95 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                                        誰かの役に立ちたい。支える仕事がしたい。前向きに働きたい。<br />
                                        そんな気持ちを、私たちは大切にします。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 右側: CTA */}
                        <div className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-20 overflow-hidden">
                            {/* 装飾 Blob */}
                            <div
                                className="absolute top-16 right-10 w-72 h-72 blob"
                                style={{ background: 'rgba(249, 115, 22, 0.25)' }}
                                aria-hidden="true"
                            />

                            <div className="relative z-10 max-w-lg text-center space-y-6 md:space-y-10">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    一緒に、<br />育てよう
                                </h3>
                                <div className="divider-line mx-auto" />
                                <p className="text-xl md:text-2xl text-white/95 font-light">
                                    「働きたい」という気持ちを。
                                </p>
                                <Link
                                    href="/contact/"
                                    className="inline-block bg-white text-orange-600 px-10 py-4 md:px-12 text-base md:text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-transform min-h-[48px] flex items-center justify-center mx-auto"
                                >
                                    応募フォームへ進む
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

