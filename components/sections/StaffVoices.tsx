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

type Phase = 'past' | 'present' | 'future'

const PHASE_STYLE: Record<
    Phase,
    { bg: string; border: string }
> = {
    past: { bg: '#f4f8f2', border: '#c8d8c0' },
    present: { bg: '#fdf6ee', border: '#dcc4a0' },
    future: { bg: '#f6f2fa', border: '#d4c8e0' },
}

function PhaseIcon({ phase, size = 20 }: { phase: Phase; size?: number }) {
    const icons: Record<Phase, React.ReactNode> = {
        past: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M17 4C13.5 4 10 6.5 10 11C10 11 10.5 7 14 5.5" stroke="#8db580" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M10 11C10 11 9 15 7 17" stroke="#8db580" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M7 3.5C7 3.5 8.5 6 10 7.5" stroke="#a3c298" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        present: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.5" fill="#e2b866" opacity="0.3" />
                <circle cx="12" cy="12" r="3" fill="#dca94a" opacity="0.5" />
                <line x1="12" y1="3" x2="12" y2="5.5" stroke="#dca94a" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="12" y1="18.5" x2="12" y2="21" stroke="#dca94a" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="5.5" y2="12" stroke="#dca94a" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="18.5" y1="12" x2="21" y2="12" stroke="#dca94a" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="5.64" y1="5.64" x2="7.4" y2="7.4" stroke="#dca94a" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="16.6" y1="16.6" x2="18.36" y2="18.36" stroke="#dca94a" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="5.64" y1="18.36" x2="7.4" y2="16.6" stroke="#dca94a" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="16.6" y1="7.4" x2="18.36" y2="5.64" stroke="#dca94a" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        future: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M12 5L13.2 9.8L17.5 8.5L14 12L17.5 15.5L13.2 14.2L12 19L10.8 14.2L6.5 15.5L10 12L6.5 8.5L10.8 9.8L12 5Z" fill="#b8a0d0" opacity="0.25" />
                <path d="M12 6.5L12.9 10L16 9L13.5 12L16 15L12.9 14L12 17.5L11.1 14L8 15L10.5 12L8 9L11.1 10L12 6.5Z" stroke="#a48cc0" strokeWidth="1.1" strokeLinejoin="round" />
                <circle cx="18" cy="4.5" r="0.9" fill="#c4b0dc" opacity="0.6" />
                <circle cx="19.5" cy="6.5" r="0.5" fill="#c4b0dc" opacity="0.4" />
            </svg>
        ),
    }
    return icons[phase] ?? null
}

type Props = {
    staffCases: StaffCase[]
}

export default function StaffVoices({ staffCases }: Props) {
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

    useEffect(() => {
        scrollToActiveAvatar(activeTab)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const activeStaff = staffCases[activeTab]

    return (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-white" aria-label="様々な働き方の事例">
            <div className="container mx-auto max-w-4xl">
                {/* セクションヘッダー */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[22px] md:text-[32px] font-bold text-[#3a3a4a] mb-3 text-balance">
                        様々な働き方の事例
                    </h2>
                    <div className="staff-voices-header-line mx-auto mb-5" />
                    <p className="text-[#7a7a8a] text-[13px] md:text-[15px] leading-[1.8] max-w-[480px] mx-auto text-pretty">
                        子育て中、未経験、キャリアチェンジ。<br />
                        それぞれの状況から、自分らしい働き方を見つけた仲間たちのストーリー。
                    </p>
                </div>

                {/* モバイル用: スワイプ可能なアイコン（md未満で表示） */}
                <div className="md:hidden mb-6 overflow-y-hidden">
                    <p className="text-center text-[13px] text-[#999] mb-3">スタッフを選択</p>
                    <div ref={avatarContainerRef} className="avatar-scroll px-4 py-2">
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
                                        'w-full h-full rounded-full overflow-hidden bg-white',
                                        index === activeTab
                                            ? 'border-[3px] border-[#dcc4a0] shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                                            : 'border-[3px] border-[#e5e5e5] shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
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
                                        'text-center mt-1.5 text-[11px]',
                                        index === activeTab
                                            ? 'font-bold text-[#3a3a4a]'
                                            : 'font-semibold text-[#aaa]',
                                    )}
                                >
                                    {staff.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* デスクトップ用: 横並びスタッフ選択（md以上で表示） */}
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-9">
                    {staffCases.map((staff, index) => {
                        const isActive = index === activeTab
                        return (
                            <button
                                key={staff.id}
                                onClick={() => setActiveTab(index)}
                                type="button"
                                className={cn(
                                    'flex items-center gap-3 py-2.5 pl-2.5 pr-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 ease-out',
                                    isActive
                                        ? 'bg-white border-[rgba(200,180,160,0.5)] shadow-[0_4px_20px_rgba(180,160,140,0.15)] -translate-y-0.5'
                                        : 'bg-white/60 border-[rgba(200,200,210,0.3)] shadow-[0_1px_4px_rgba(0,0,0,0.03)]',
                                )}
                            >
                                <div
                                    className={cn(
                                        'size-11 rounded-full overflow-hidden flex-shrink-0 border-2',
                                        isActive ? 'border-[rgba(200,180,160,0.4)]' : 'border-[rgba(200,200,200,0.2)]',
                                    )}
                                >
                                    <img src={staff.avatar} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p
                                        className={cn(
                                            'text-[10px] font-semibold mb-0.5',
                                            isActive ? 'text-[#a08a6a]' : 'text-[#a0a0a8]',
                                        )}
                                    >
                                        {staff.category}
                                    </p>
                                    <p
                                        className={cn(
                                            'text-sm font-bold',
                                            isActive ? 'text-[#4a4a5a]' : 'text-[#8a8a94]',
                                        )}
                                    >
                                        {staff.name}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* 1枚の白カード */}
                <div
                    className="relative overflow-hidden bg-white rounded-2xl md:rounded-[28px] p-5 md:p-10"
                    style={{ boxShadow: '0 8px 40px rgba(160,150,140,0.08)' }}
                >
                    {/* 右上 blob 装飾（デスクトップのみ） */}
                    <div
                        className="blob-cloud hidden md:block absolute -top-12 -right-12 w-[220px] h-[220px] pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(ellipse, rgba(220,200,170,0.15), rgba(200,190,220,0.08))',
                        }}
                    />

                    <div key={activeStaff.id} className="tab-content relative">
                        {/* スタッフヘッダー */}
                        <div className="mb-6 md:mb-8">
                            <span
                                className="inline-block px-3.5 py-1.5 rounded-[14px] text-xs font-semibold text-[#8a7a6a] mb-3"
                                style={{
                                    background: 'linear-gradient(135deg, #f5efe5, #ede5f0)',
                                }}
                            >
                                {activeStaff.category}
                            </span>
                            <div className="flex items-center gap-4 md:gap-5">
                                {/* デスクトップのみ: 有機形アバター */}
                                <div
                                    className="hidden md:block flex-shrink-0 overflow-hidden border-[3px]"
                                    style={{
                                        width: 88,
                                        height: 88,
                                        borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
                                        borderColor: 'rgba(200,185,165,0.3)',
                                    }}
                                >
                                    <img
                                        src={activeStaff.avatar}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#3a3a4a] mb-1 text-balance">
                                        {activeStaff.name}
                                    </h3>
                                    <p className="text-xs md:text-[13px] text-[#8a8a94]">
                                        {activeStaff.age} / {activeStaff.workStyle}
                                    </p>
                                    <p className="text-xs md:text-[13px] text-[#6a6a7a] font-medium mt-0.5 text-pretty">
                                        {activeStaff.tagline}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* タイムライン */}
                        <div className="flex flex-col gap-2.5 md:gap-3.5">
                            {TIMELINE_STEPS.map((step, idx) => {
                                const ps = PHASE_STYLE[step.phase]
                                return (
                                    <div
                                        key={step.key}
                                        className="flex gap-2.5 md:gap-4 items-start"
                                    >
                                        <div className="flex flex-col items-center flex-shrink-0 pt-2.5 md:pt-3.5">
                                            <div
                                                className="rounded-full flex items-center justify-center border-2 size-8 md:size-10"
                                                style={{
                                                    background: ps.bg,
                                                    borderColor: ps.border,
                                                }}
                                            >
                                                <span className="md:hidden">
                                                    <PhaseIcon phase={step.phase} size={16} />
                                                </span>
                                                <span className="hidden md:block">
                                                    <PhaseIcon phase={step.phase} size={20} />
                                                </span>
                                            </div>
                                            {idx < TIMELINE_STEPS.length - 1 && (
                                                <div
                                                    className="w-0.5 mt-1 flex-shrink-0 h-4 md:h-6"
                                                    style={{
                                                        background:
                                                            'linear-gradient(to bottom, rgba(200,190,180,0.3), transparent)',
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div
                                            className="flex-1 rounded-xl md:rounded-[20px] px-3 py-3 md:px-5 md:py-4 border"
                                            style={{
                                                background: ps.bg,
                                                borderColor: `${ps.border}33`,
                                            }}
                                        >
                                            <h4 className="text-[11px] md:text-xs font-bold text-[#8a7a6a] mb-1.5 tracking-wide">
                                                {step.label}
                                            </h4>
                                            <p className="text-[13px] md:text-[15px] text-[#4a4a5a] leading-[1.8] text-pretty">
                                                {activeStaff.story[step.key]}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
