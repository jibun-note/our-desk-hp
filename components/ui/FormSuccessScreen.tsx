'use client'

import type { ReactNode } from 'react'
import { Shippori_Mincho_B1, Noto_Sans_JP, DM_Sans } from 'next/font/google'
import WaveDivider from '@/components/ui/WaveDivider'

const shipporiMinchoB1 = Shippori_Mincho_B1({
    weight: '400',
    subsets: ['latin'],
    preload: false,
})

const notoSansJP = Noto_Sans_JP({
    weight: '300',
    subsets: ['latin'],
    preload: false,
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    preload: false,
})

type FormSuccessScreenProps = {
    /** 装飾（ContactBlobDecoration / ApplicationBlobDecoration など）。後方互換のため受け取るが表示しない */
    decoration: ReactNode
    title: string
    message: ReactNode
    /** アイコン（絵文字）。後方互換のため受け取るが表示しない */
    icon?: string
    onBack: () => void
}

/** 左矢印アイコン（フォームに戻るボタン用） */
function LeftArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
        >
            <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default function FormSuccessScreen({
    decoration: _decoration,
    title,
    message,
    icon: _icon,
    onBack,
}: FormSuccessScreenProps) {
    return (
        <section
            className={`relative z-[3] bg-white py-20 md:py-32 px-4 md:px-8 ${notoSansJP.className}`}
            aria-labelledby="form-success-heading"
        >
            {/* 背景レイヤー: クリーム帯（ContactForm と同一） */}
            <div
                className="absolute top-0 left-0 right-0 bg-[#f5ede0]"
                style={{ height: 'min(max(33vh, 200px), 320px)' }}
                aria-hidden
            />
            {/* 波形: クリーム帯の直下 */}
            <div
                className="absolute left-0 right-0 z-[1]"
                style={{ top: 'min(max(33vh, 200px), 320px)' }}
                aria-hidden
            >
                <WaveDivider bgColor="#f5ede0" fillColor="#ffffff" />
            </div>
            <div
                className="absolute left-0 right-0 bottom-0 bg-white"
                style={{ top: 'calc(min(max(33vh, 200px), 320px) + 80px)' }}
                aria-hidden
            />

            {/* カード（ContactForm と同一構造） */}
            <div className="relative z-10 mx-auto max-w-[960px] pt-0 -mt-4 md:-mt-8">
                <div className="bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,.04),0_16px_56px_rgba(0,0,0,.09)] p-2.5 flex flex-col md:flex-row gap-2.5">
                    {/* 左パネル: 背景画像（CSS）+ 白オーバーレイ */}
                    <div
                        className="relative flex-none md:flex-[0_0_268px] h-[200px] md:h-auto md:min-h-[320px] rounded-[14px] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.30)] before:z-[1]"
                        style={{
                            backgroundImage: "url('/images/contact/contact-bg.jpeg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                        }}
                        aria-hidden
                    />

                    {/* 右パネル: タイポグラフィ + ボタン（padding: 48px 48px 40px 36px / 820px以下で 36px 24px） */}
                    <div className="flex-1 flex flex-col justify-center py-9 px-6 md:pt-12 md:pr-12 md:pb-10 md:pl-9">
                        {/* 1. 送信完了ラベル（::after は右側の短い横線） */}
                        <div
                            className="text-[10px] tracking-[0.14em] text-[#C8A070] mb-3.5 flex items-center gap-2.5 after:content-[''] after:w-8 after:h-px after:bg-[#F0E4D4]"
                            aria-hidden
                        >
                            送信完了
                        </div>

                        {/* 2. 見出し */}
                        <h2
                            id="form-success-heading"
                            className={`${shipporiMinchoB1.className} font-normal text-[#1A0F04] mb-4 leading-[1.35] text-balance`}
                            style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
                        >
                            {title}
                        </h2>

                        {/* 3. 本文 */}
                        <p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-[340px] mb-10 text-sm md:text-base">
                            {message}
                        </p>

                        {/* 4. セパレーター */}
                        <div
                            className="w-full max-w-[340px] border-t border-[#F0E4D4] mb-8"
                            aria-hidden
                        />

                        {/* 5. フォームに戻るボタン */}
                        <button
                            type="button"
                            onClick={onBack}
                            className={`inline-flex items-center gap-2 py-2.5 px-7 rounded-full border-[1.5px] border-[#E8D8C8] bg-transparent text-[#7A5A3A] text-[13px] font-medium cursor-pointer hover:border-[#F08300] hover:text-[#F08300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F08300] focus-visible:ring-offset-2 motion-reduce:transition-none transition-[border-color,color] duration-200 ${dmSans.className}`}
                        >
                            <LeftArrowIcon />
                            フォームに戻る
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
