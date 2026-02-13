'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type StaffCase = {
    id: string
    category: '子育て中ママ' | '未経験スタート' | '業務委託→正社員' | 'パート→正社員'
    name: string
    age: string
    workStyle: string
    avatar: string
    tagline: string
    story: {
        before: string
        trigger: string
        now: string
        changed: string
        future: string
    }
}

const STAFF_CASES: StaffCase[] = [
    {
        id: '01',
        category: '子育て中ママ',
        name: 'M.Iさん',
        age: '30代',
        workStyle: '業務委託・月40時間',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
        tagline: '2児の母。完全リモートで子育てとキャリアを両立',
        story: {
            before: '第一子出産後に退職。社会から離れる不安と、外で働けない現実の間で悩んでいました。',
            trigger: '「月数時間からOK」という言葉に希望を感じました。面談で子育て優先を認めてもらえたことが決め手です。',
            now: '子どもの送り迎えや昼寝の間、夜の時間を使って月40時間働いています。急な体調不良にもチームでフォローしてもらえます。',
            changed: '「働く母親」としての自信を取り戻せました。収入も得られ、スキルも身について、将来への不安が減りました。',
            future: '子どもの成長に合わせて、パートや正社員も視野に。ライフステージが変わっても働き続けられる道が見えています。',
        },
    },
    {
        id: '02',
        category: '未経験スタート',
        name: 'K.Tさん',
        age: '20代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        tagline: '販売職から未経験でオフィスワークへ転身',
        story: {
            before: '販売職でしたが、将来のキャリアに不安を感じていました。オフィスワークの経験はゼロ。PCスキルもほぼありませんでした。',
            trigger: '「スキルより想いを大切にします」という言葉に救われました。研修制度があり、未経験でも挑戦できる環境だと感じました。',
            now: '今では企業の秘書業務を複数担当。スケジュール調整、資料作成、メール対応など、以前は想像もできなかった仕事をしています。',
            changed: 'Excel、Word、ビジネスツールが使えるようになり、ビジネスマナーも身につきました。「プロとして働いている」という実感が自信に。',
            future: 'チームリーダーとして、新しく入る未経験の方をサポートしたいです。私自身の経験を活かして、道しるべになりたいです。',
        },
    },
    {
        id: '03',
        category: '業務委託→正社員',
        name: 'A.Yさん',
        age: '30代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
        tagline: '月20時間の業務委託から、4年で正社員へステップアップ',
        story: {
            before: '育休明けに前職に戻れず、正社員で働きたいけれど条件に合う仕事が見つからない状況でした。',
            trigger: '「まずは業務委託で試してみて、合うか確かめてください」という柔軟な提案。無理なく始められる安心感がありました。',
            now: '業務委託→パート→正社員とステップアップ。完全リモートの正社員として、子育てしながらキャリアも諦めない働き方を実現しています。',
            changed: '「母親だから」とキャリアを諦めなくてよかったです。スキルも収入も向上し、自分らしく働けています。',
            future: 'マネジメント経験を積んで、同じように悩むママたちの道しるべに。ライフステージが変わっても働き続けられる環境を作りたいです。',
        },
    },
    {
        id: '04',
        category: 'パート→正社員',
        name: 'R.Sさん',
        age: '40代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
        tagline: 'パートから3年で正社員登用。安定したキャリアを実現',
        story: {
            before: '子育てが一段落し、パートで働いていましたが、将来の安定性に不安がありました。正社員を目指したいけれど、年齢や経験がネックでした。',
            trigger: '面談で「年齢は関係ない、成長する意欲を大切にします」と言われたこと。キャリアパスが明確で、正社員登用の実績もあると知りました。',
            now: '正社員として、チームのマネジメントや新人育成も担当しています。安定した収入と、やりがいのある仕事を両立できています。',
            changed: '「40代からでも遅くない」と実感しました。スキルアップと収入アップを同時に実現でき、人生の選択肢が広がりました。',
            future: '今後は組織全体の効率化や、働きやすい環境づくりに貢献したいです。年齢を重ねても成長し続けられることを証明したいです。',
        },
    },
]

const TIMELINE_STEPS = [
    { key: 'before' as const, label: '入る前', phase: 'past' as const },
    { key: 'trigger' as const, label: 'きっかけ', phase: 'past' as const },
    { key: 'now' as const, label: '今', phase: 'present' as const },
    { key: 'changed' as const, label: '変化', phase: 'present' as const },
    { key: 'future' as const, label: 'これから', phase: 'future' as const },
] as const

const DOT_COLOR = {
    past: 'bg-gray-400',
    present: 'bg-orange-400',
    future: 'bg-yellow-400',
} as const

const BG_COLOR = {
    past: 'bg-gray-50',
    present: 'bg-orange-50',
    future: 'bg-yellow-50',
} as const

export default function StaffVoices() {
    const [activeTab, setActiveTab] = useState(0)
    const avatarContainerRef = useRef<HTMLDivElement>(null)

    const scrollToActiveAvatar = useCallback((index: number) => {
        const container = avatarContainerRef.current
        if (!container) return
        const avatars = container.querySelectorAll<HTMLElement>('[data-avatar-index]')
        const target = avatars[index]
        if (!target) return
        const scrollLeft =
            target.offsetLeft -
            container.offsetLeft -
            container.clientWidth / 2 +
            target.offsetWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }, [])

    const handleTabChange = useCallback((index: number) => {
        setActiveTab(index)
        scrollToActiveAvatar(index)
    }, [scrollToActiveAvatar])

    // 初回マウント時にアクティブなアイコンを中央に
    useEffect(() => {
        scrollToActiveAvatar(activeTab)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const activeStaff = STAFF_CASES[activeTab]

    return (
        <section className="py-24 md:py-32 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* セクションヘッダー */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        様々な働き方の事例
                    </h2>
                    <div className="divider-line mx-auto" />
                    <p className="mt-6 text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
                        子育て中、未経験、キャリアチェンジ。<br />
                        それぞれの状況から、自分らしい働き方を見つけた仲間たちのストーリー。
                    </p>
                </div>

                {/* モバイル用: スワイプ可能なアイコン一覧（1024px未満で表示） */}
                <div className="lg:hidden mb-8 overflow-y-hidden">
                    <p className="text-center text-sm text-gray-600 mb-4">スタッフを選択</p>
                    <div
                        ref={avatarContainerRef}
                        className="avatar-scroll px-4 py-2"
                    >
                        {STAFF_CASES.map((staff, index) => (
                            <button
                                key={staff.id}
                                data-avatar-index={index}
                                className={`avatar-item ${index === activeTab ? 'large' : 'small'}`}
                                onClick={() => handleTabChange(index)}
                                type="button"
                                aria-label={`${staff.name}のストーリーを表示`}
                            >
                                <div
                                    className={`w-full h-full rounded-full overflow-hidden border-4 ${index === activeTab
                                            ? 'border-orange-400 shadow-xl'
                                            : 'border-gray-200 shadow-md'
                                        } bg-white`}
                                >
                                    <img
                                        src={staff.avatar}
                                        alt={staff.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p
                                    className={`text-center text-xs mt-2 ${index === activeTab
                                            ? 'font-bold text-gray-900'
                                            : 'font-semibold text-gray-500'
                                        }`}
                                >
                                    {staff.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* タブレイアウト */}
                <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[600px]">
                        {/* デスクトップ用: 左側スタッフ一覧（1024px以上で表示） */}
                        <div className="hidden lg:block lg:col-span-4 bg-white border-r border-gray-200">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">スタッフ一覧</h3>
                                <div className="space-y-3">
                                    {STAFF_CASES.map((staff, index) => (
                                        <button
                                            key={staff.id}
                                            onClick={() => setActiveTab(index)}
                                            className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${index === activeTab
                                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                                                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-orange-300'
                                                }`}
                                            type="button"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-14 h-14 rounded-full overflow-hidden border-2 ${index === activeTab ? 'border-white' : 'border-gray-200'
                                                        } shadow-md flex-shrink-0`}
                                                >
                                                    <img
                                                        src={staff.avatar}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <p
                                                        className={`text-xs font-semibold mb-1 ${index === activeTab ? 'opacity-90' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {staff.category}
                                                    </p>
                                                    <p
                                                        className={`font-bold text-lg ${index === activeTab ? '' : 'text-gray-900'
                                                            }`}
                                                    >
                                                        {staff.name}
                                                    </p>
                                                    <p
                                                        className={`text-xs ${index === activeTab ? 'opacity-75' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {staff.age}
                                                    </p>
                                                </div>
                                                <svg
                                                    className={`w-5 h-5 flex-shrink-0 ${index === activeTab ? '' : 'text-gray-400'
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 右側: 詳細コンテンツ */}
                        <div className="lg:col-span-8 bg-white">
                            <div key={activeStaff.id} className="tab-content p-6 md:p-8">
                                {/* スタッフヘッダー */}
                                <div className="mb-8">
                                    <span className="inline-block px-4 py-2 bg-gray-900 rounded-full text-sm font-bold text-white mb-4">
                                        {activeStaff.category}
                                    </span>
                                    <div className="flex items-center gap-4 md:gap-6 mb-6">
                                        {/* デスクトップのみアバター表示 */}
                                        <div className="hidden lg:block w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg flex-shrink-0">
                                            <img
                                                src={activeStaff.avatar}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                {activeStaff.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 mb-1">
                                                {activeStaff.age} / {activeStaff.workStyle}
                                            </p>
                                            <p className="text-sm md:text-base text-gray-700 font-medium">
                                                {activeStaff.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* タイムライン */}
                                <div className="relative">
                                    <div
                                        className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-orange-300 to-yellow-300"
                                        aria-hidden
                                    />
                                    <div className="space-y-4 md:space-y-6">
                                        {TIMELINE_STEPS.map((step) => (
                                            <div key={step.key} className="flex gap-3 md:gap-4 items-start relative">
                                                <div className="flex-shrink-0 relative z-10">
                                                    <div
                                                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${DOT_COLOR[step.phase]} shadow-md border-4 border-white`}
                                                    />
                                                </div>
                                                <div className={`flex-grow ${BG_COLOR[step.phase]} rounded-xl p-4 md:p-5`}>
                                                    <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-2 uppercase tracking-wide">
                                                        {step.label}
                                                    </h4>
                                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                        {activeStaff.story[step.key]}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
