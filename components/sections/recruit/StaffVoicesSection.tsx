'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

export type StaffCase = {
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

type Props = {
    staffCases: StaffCase[]
}

export default function StaffVoicesSection({ staffCases }: Props) {
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

    const activeStaff = staffCases[activeTab]

    return (
        <section className="py-24 md:py-32 px-4 md:px-6 bg-white" aria-label="様々な働き方の事例">
            <div className="container mx-auto max-w-7xl">
                {/* セクションヘッダー */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        様々な働き方の事例
                    </h2>
                    <div className="divider-line mx-auto" />
                    <p className="mt-6 text-gray-700 text-base md:text-lg max-w-3xl mx-auto text-pretty">
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
                        {staffCases.map((staff, index) => (
                            <button
                                key={staff.id}
                                data-avatar-index={index}
                                className={cn('avatar-item', index === activeTab ? 'large' : 'small')}
                                onClick={() => handleTabChange(index)}
                                type="button"
                                aria-label={`${staff.name}のストーリーを表示`}
                            >
                                <div
                                    className={cn(
                                        'w-full h-full rounded-full overflow-hidden border-4 bg-white',
                                        index === activeTab
                                            ? 'border-orange-400 shadow-xl'
                                            : 'border-gray-200 shadow-md',
                                    )}
                                >
                                    <img
                                        src={staff.avatar}
                                        alt={staff.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p
                                    className={cn(
                                        'text-center text-xs mt-2',
                                        index === activeTab
                                            ? 'font-bold text-gray-900'
                                            : 'font-semibold text-gray-500',
                                    )}
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
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-balance">スタッフ一覧</h3>
                                <div className="space-y-3">
                                    {staffCases.map((staff, index) => (
                                        <button
                                            key={staff.id}
                                            onClick={() => setActiveTab(index)}
                                            className={cn(
                                                'w-full text-left p-4 rounded-2xl transition-all duration-300',
                                                index === activeTab
                                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                                                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-orange-300',
                                            )}
                                            type="button"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={cn(
                                                        'size-14 rounded-full overflow-hidden border-2 shadow-md flex-shrink-0',
                                                        index === activeTab ? 'border-white' : 'border-gray-200',
                                                    )}
                                                >
                                                    <img
                                                        src={staff.avatar}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <p
                                                        className={cn(
                                                            'text-xs font-semibold mb-1',
                                                            index === activeTab ? 'opacity-90' : 'text-gray-500',
                                                        )}
                                                    >
                                                        {staff.category}
                                                    </p>
                                                    <p
                                                        className={cn(
                                                            'font-bold text-lg',
                                                            index !== activeTab && 'text-gray-900',
                                                        )}
                                                    >
                                                        {staff.name}
                                                    </p>
                                                    <p
                                                        className={cn(
                                                            'text-xs',
                                                            index === activeTab ? 'opacity-75' : 'text-gray-500',
                                                        )}
                                                    >
                                                        {staff.age}
                                                    </p>
                                                </div>
                                                <svg
                                                    className={cn(
                                                        'size-5 flex-shrink-0',
                                                        index !== activeTab && 'text-gray-400',
                                                    )}
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
                                        <div className="hidden lg:block size-24 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg flex-shrink-0">
                                            <img
                                                src={activeStaff.avatar}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-balance">
                                                {activeStaff.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 mb-1">
                                                {activeStaff.age} / {activeStaff.workStyle}
                                            </p>
                                            <p className="text-sm md:text-base text-gray-700 font-medium text-pretty">
                                                {activeStaff.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* タイムライン */}
                                <div className="relative">
                                    <div
                                        className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-orange-300 to-yellow-300"
                                        aria-hidden="true"
                                    />
                                    <div className="space-y-4 md:space-y-6">
                                        {TIMELINE_STEPS.map((step) => (
                                            <div key={step.key} className="flex gap-3 md:gap-4 items-start relative">
                                                <div className="flex-shrink-0 relative z-10">
                                                    <div
                                                        className={cn('size-6 md:size-8 rounded-full shadow-md border-4 border-white', DOT_COLOR[step.phase])}
                                                    />
                                                </div>
                                                <div className={cn('flex-grow rounded-xl p-4 md:p-5', BG_COLOR[step.phase])}>
                                                    <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-2 uppercase tracking-wide text-balance">
                                                        {step.label}
                                                    </h4>
                                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-pretty">
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
