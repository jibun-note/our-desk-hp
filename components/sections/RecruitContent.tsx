'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const TABLE_OF_CONTENTS = [
    { id: 'message', label: '採用メッセージ' },
    { id: 'employment', label: '募集形態・待遇' },
    { id: 'flow', label: '採用フロー' },
    { id: 'career', label: 'キャリアパス' },
    { id: 'values', label: '大切にすること' },
    { id: 'faq', label: 'よくある質問' },
    { id: 'apply', label: '応募する' },
]

export default function RecruitContent() {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const sections = TABLE_OF_CONTENTS.map((item) => item.id)
            const scrollPosition = window.scrollY + 200

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId)
                        return
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* 目次ナビゲーション（StaggeredMenu パネル風スタイル） */}
            <nav
                className="sticky top-16 z-40 bg-white/95 shadow-sm border-b border-gray-100 py-3 md:py-4 px-4 md:px-6 transition-[background,box-shadow] duration-300"
                style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            >
                <div className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1">
                    {TABLE_OF_CONTENTS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                'px-4 py-2.5 rounded-lg transition-colors duration-[250ms]',
                                'text-sm md:text-base font-normal uppercase tracking-tighter leading-tight',
                                activeSection === item.id
                                    ? 'text-[#F08300]'
                                    : 'text-gray-900 hover:text-[#F08300]'
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className="md:hidden overflow-x-auto scrollbar-hide -mx-2">
                    <div className="flex gap-2 min-w-max px-2 py-1">
                        {TABLE_OF_CONTENTS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    'px-3 py-2 rounded-lg whitespace-nowrap transition-colors duration-[250ms]',
                                    'text-xs font-normal uppercase tracking-tighter leading-tight',
                                    activeSection === item.id
                                        ? 'text-[#F08300] bg-white shadow-sm'
                                        : 'text-gray-900 bg-gray-50 hover:text-[#F08300]'
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Message Section */}
            <section id="message" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                            <span className="text-gradient-hero">私たちは、「人と人の関係性」を大切にしています</span>
                        </h2>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#F08300' }}>
                                OurDeskの採用に込めた想い
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    OurDeskは、「働きたい」という気持ちを、仕事につなげる会社です。
                                </p>
                                <p>
                                    私たちが大切にしているのは、スキルや経歴よりも、<span className="font-semibold text-gray-900">「誰かの役に立ちたい」という想い</span>。
                                </p>
                                <p>
                                    家庭やライフステージによって働き方が変わるのは自然なことです。<br />
                                    でも、その中でも「働きたい」「自分の力を活かしたい」そう思う気持ちが消えてしまわないように。
                                </p>
                                <p className="font-medium text-gray-900 pt-4">
                                    OurDeskは、一人ひとりに寄り添いながら、無理のない形で、長く働けるキャリアを一緒につくっていく場所です。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 募集形態・待遇 Section */}
            <section id="employment" className="py-16 md:py-24 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                            募集形態・待遇
                        </h2>
                        <p className="text-center text-gray-600 mb-12 text-lg">
                            働き方は、ライフスタイルに合わせて選べます
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: '業務委託',
                                    subtitle: 'フルリモート',
                                    details: [
                                        '時間単価：1,300円（税込）～',
                                        '業務ランクにより変動'
                                    ]
                                },
                                {
                                    title: 'パート',
                                    subtitle: '',
                                    details: [
                                        '時間単価：1,250円～'
                                    ]
                                },
                                {
                                    title: '正社員',
                                    subtitle: '',
                                    details: [
                                        '月給：210,000円～',
                                        '※経験・スキル・稼働状況に応じて決定'
                                    ]
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#F08300] transition-all duration-300 hover:shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#F08300' }}>
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                                    )}
                                    <div className="space-y-2 mt-6">
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-700">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 採用フロー Section */}
            <section id="flow" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                            採用フロー
                        </h2>
                        <p className="text-center text-gray-600 mb-12 text-lg">
                            「選考」よりも「対話」を大切にしています
                        </p>
                        <div className="max-w-4xl mx-auto">
                            {[
                                {
                                    step: '01',
                                    title: '書類提出',
                                    description: '履歴書・職務経歴書など\n※かっちりした形式よりも「人柄」が伝わる内容を歓迎します'
                                },
                                {
                                    step: '02',
                                    title: '秘書長との面談',
                                    description: 'どんな案件があるのか\nどんなスキルが活かせるのか\n不安な点も含めてお話しします'
                                },
                                {
                                    step: '03',
                                    title: '契約締結',
                                    description: ''
                                },
                                {
                                    step: '04',
                                    title: '研修スタート',
                                    description: ''
                                },
                                {
                                    step: '05',
                                    title: 'キャリアコンサルタント面談',
                                    description: ''
                                },
                                {
                                    step: '06',
                                    title: '案件参画',
                                    description: ''
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative mb-8 last:mb-0"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#FDD000] to-[#F08300] flex items-center justify-center text-white font-bold text-lg">
                                            {item.step}
                                        </div>
                                        <div className="flex-grow bg-white rounded-lg p-6 shadow-md">
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                                {item.title}
                                            </h3>
                                            {item.description && (
                                                <p className="text-gray-600 whitespace-pre-line">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {index < 5 && (
                                        <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-[#FDD000] to-[#F08300]" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* キャリアの描き方 Section */}
            <section id="career" className="py-16 md:py-24 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                            キャリアの描き方
                        </h2>
                        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
                            働き方に「正解」はありません。<br />
                            あなたの人生に合ったキャリアを、一緒につくります。
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Case 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-[#FDD000]/10 to-[#F08300]/10 rounded-2xl p-8"
                            >
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#F08300' }}>
                                    ① オフィスワーク未経験の方
                                </h3>
                                <div className="bg-white/80 rounded-lg p-6 mb-6">
                                    <p className="text-sm text-gray-600 mb-2">現在</p>
                                    <p className="text-gray-800">
                                        デスクワーク以外の仕事をしている<br />
                                        将来、結婚や出産も視野に入れている
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-semibold text-gray-900 mb-4">ステップ例</p>
                                    {[
                                        'OurDeskと契約・キャリア面談',
                                        '今の仕事を続けながら、月数時間からスタート',
                                        '研修で事務スキルを習得',
                                        'OurDeskの仕事をメインに切り替え',
                                        '結婚・出産などライフイベントを経験',
                                        '柔軟な働き方を実現'
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#F08300] mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Case 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-gradient-to-br from-[#FDD000]/10 to-[#F08300]/10 rounded-2xl p-8"
                            >
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#F08300' }}>
                                    ② 子育て中で月50～100時間しか働けない方
                                </h3>
                                <div className="bg-white/80 rounded-lg p-6 mb-6">
                                    <p className="text-sm text-gray-600 mb-2">現在</p>
                                    <p className="text-gray-800">
                                        子どもは小学生<br />
                                        以前は正社員、今はパート
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-semibold text-gray-900 mb-4">ステップ例</p>
                                    {[
                                        'キャリア面談で将来像を整理',
                                        'OurDeskの仕事で実務経験を積む',
                                        '必要に応じて資格取得',
                                        '子どもの成長に合わせて働き方を拡大',
                                        '案件先で正社員登用'
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#F08300] mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* キャリアの広がり方 Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                            キャリアの広がり方
                        </h2>
                        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
                            働き方やキャリアのスタート地点は人それぞれです。<br />
                            大切にしているのは、「今できること」から始めて、「できることを少しずつ増やしていく」こと。
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Pattern 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#F08300' }}>
                                    例① 個人事業主としてスタート
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        '個人事業主として業務委託でキャリアをスタート',
                                        '実務経験を積み、スキルアップ',
                                        'パート採用に切り替え',
                                        'OurDeskの中で正社員として活躍',
                                        'チーム運営・育成・マネジメントにも挑戦'
                                    ].map((step, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FDD000] to-[#F08300] flex items-center justify-center text-white font-bold">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-gray-700 pt-2">{step}</p>
                                            </div>
                                            {idx < 4 && (
                                                <div className="ml-5 h-6 w-0.5 bg-gradient-to-b from-[#FDD000] to-[#F08300]" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Pattern 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#F08300' }}>
                                    例② パートとしてスタート
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { text: 'パートとして業務をスタート', branch: false },
                                        { text: '実務経験を積み、スキルアップ', branch: false },
                                        { text: '2つの道が開けます', branch: true },
                                    ].map((item, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FDD000] to-[#F08300] flex items-center justify-center text-white font-bold">
                                                    {idx + 1}
                                                </div>
                                                <p className={`pt-2 ${item.branch ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                                                    {item.text}
                                                </p>
                                            </div>
                                            {idx < 2 && (
                                                <div className="ml-5 h-6 w-0.5 bg-gradient-to-b from-[#FDD000] to-[#F08300]" />
                                            )}
                                        </div>
                                    ))}
                                    <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t-2 border-gray-100">
                                        <div className="bg-gradient-to-br from-[#FDD000]/10 to-[#F08300]/10 rounded-lg p-4">
                                            <p className="font-semibold text-gray-900 mb-3">道A</p>
                                            <div className="space-y-2 text-sm text-gray-700">
                                                <p>OurDeskの中で正社員として活躍</p>
                                                <p className="text-[#F08300]">↓</p>
                                                <p>より責任のあるポジションへ</p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-[#FDD000]/10 to-[#F08300]/10 rounded-lg p-4">
                                            <p className="font-semibold text-gray-900 mb-3">道B</p>
                                            <div className="space-y-2 text-sm text-gray-700">
                                                <p>気に入った案件先企業と出会う</p>
                                                <p className="text-[#F08300]">↓</p>
                                                <p>案件先企業の正社員として転職</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* OurDeskが大切にしていること Section */}
            <section id="values" className="py-16 md:py-24 bg-gradient-to-br from-[#FDD000]/5 via-white to-[#F08300]/5 scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
                            OurDeskが大切にしていること
                        </h2>
                        <div className="bg-white rounded-2xl p-12 shadow-xl">
                            <p className="text-xl md:text-2xl mb-8 text-gray-800 leading-relaxed">
                                私たちは、<br className="md:hidden" />
                                <span className="font-bold text-gradient-hero">「効率」だけで人を評価しません。</span>
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    '誰かの役に立ちたい',
                                    '支える仕事がしたい',
                                    '前向きに働きたい'
                                ].map((text, idx) => (
                                    <motion.p
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="text-lg md:text-xl font-medium"
                                        style={{ color: '#F08300' }}
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                そんな想いを、何より大切にしています。
                            </p>
                            <div className="border-t-2 border-gray-100 pt-8 mt-8">
                                <p className="text-gray-700 mb-4">
                                    スキルは後から身につけられます。<br />
                                    でも、想いは簡単には育ちません。
                                </p>
                                <p className="text-xl font-bold text-gray-900">
                                    だからこそ、<br className="md:hidden" />
                                    あなたの気持ちに、私たちは本気で向き合います。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                            よくある質問
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                {
                                    q: '未経験でも大丈夫ですか?',
                                    a: '研修制度があるため、問題ありません。「今できること」から始めて、少しずつスキルアップしていける環境を整えています。'
                                },
                                {
                                    q: '稼働時間はどれくらい必要ですか?',
                                    a: '月数時間からでも可能です。あなたのライフスタイルに合わせて、無理のない範囲で働けます。'
                                },
                                {
                                    q: '子どもの体調不良で休めますか?',
                                    a: 'チーム体制でフォローしますので、安心してください。急な休みにも対応できる体制を整えています。'
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-start gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FDD000] to-[#F08300] flex items-center justify-center text-white font-bold text-sm">
                                            Q
                                        </span>
                                        <span className="text-gray-900">{faq.q}</span>
                                    </h3>
                                    <div className="ml-11">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-[#FDD000] to-[#F08300] scroll-mt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            最後に
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl mb-12">
                            <p className="leading-relaxed">
                                OurDeskは、<br />
                                <span className="font-bold text-2xl md:text-3xl">"ただの仕事先"ではありません。</span>
                            </p>
                            <p className="leading-relaxed">
                                あなたの人生に寄り添い、<br />
                                一緒に未来をつくっていく場所です。
                            </p>
                            <p className="text-2xl md:text-3xl font-bold mt-8">
                                「働きたい」
                            </p>
                            <p className="leading-relaxed">
                                その気持ちを、大切にできる方と<br />
                                お会いできることを楽しみにしています。
                            </p>
                        </div>
                        <motion.a
                            href="/contact/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-[#F08300] px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            応募フォームへ
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
