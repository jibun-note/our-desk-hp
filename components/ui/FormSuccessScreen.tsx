'use client'

import type { ReactNode } from 'react'
import WaveDecoration from '@/components/ui/WaveDecoration'

type FormSuccessScreenProps = {
    /** 装飾（ContactBlobDecoration / ApplicationBlobDecoration など） */
    decoration: ReactNode
    title: string
    message: ReactNode
    /** アイコン（絵文字）。未指定時は ✉️ */
    icon?: string
    onBack: () => void
}

const sectionCls = 'relative z-10 overflow-hidden bg-[#FDF6ED]'
const cardCls =
    'mx-auto max-w-[48rem] rounded-3xl p-10 md:p-14 bg-[#F0E8DE] shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
const successCardCls =
    `${cardCls} min-h-[320px] flex flex-col justify-center text-center`
const submitBtnCls =
    'inline-flex min-w-[10rem] max-w-[14rem] items-center justify-center rounded-full bg-[#E5A00D] px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(229,160,13,0.35)] transition hover:bg-[#d4910c] hover:shadow-[0_6px_20px_rgba(229,160,13,0.45)] hover:-translate-y-0.5 focus:outline-none focus:ring-[3px] focus:ring-[rgba(229,160,13,0.4)] motion-reduce:hover:translate-y-0'

export default function FormSuccessScreen({
    decoration,
    title,
    message,
    icon = '✉️',
    onBack,
}: FormSuccessScreenProps) {
    return (
        <section className={`${sectionCls} min-h-[100vh]`}>
            {decoration}
            <WaveDecoration />
            <div className="container relative z-[100] isolate mx-auto flex min-h-[100vh] max-w-4xl flex-col items-center justify-center px-4">
                <div className={`${successCardCls} relative z-10`}>
                    <div className="text-5xl mb-4">{icon}</div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#403a36]">
                        {title}
                    </h2>
                    <p className="text-[#403a36] leading-relaxed mb-8">
                        {message}
                    </p>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={onBack}
                            className={`${submitBtnCls} max-w-xs`}
                        >
                            フォームに戻る
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
