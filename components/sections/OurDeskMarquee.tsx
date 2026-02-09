'use client'

/**
 * OurDeskMarquee
 * 「OurDesk」が一定速度で流れるマーキー。スクロール非依存。
 * fixed=true のときビューポート中央に固定、false のときセクション内で absolute（スクロールに連動）。
 * ビューポート外ではアニメーションを一時停止して負荷を軽減する。
 */
import React, { useRef, useState, useEffect } from 'react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['700', '800'], display: 'swap' })

const TEXT = 'OurDesk '
const REPEAT = 24
const ROW_CONTENT = TEXT.repeat(REPEAT)

type Props = {
    /** true: ビューポート中央に固定 / false: セクション内で absolute（スクロールに連動） */
    fixed?: boolean
    /** true: 親要素内で中央表示（親が sticky のときセクション内に収まる） */
    sticky?: boolean
    /** 表示するか */
    visible?: boolean
    /** true: セクション下部に合わせる（最後のカードと一緒に上へスライドするとき） */
    alignBottom?: boolean
    /** このビューポートY(px)に固定（1枚目中央などに張り付く） */
    followTop?: number | null
}

export default function OurDeskMarquee({ fixed = false, sticky = false, visible = true, alignBottom = false, followTop }: Props) {
    const rootRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(true)

    useEffect(() => {
        const el = rootRef.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    const rowClass =
        'flex shrink-0 items-center text-[clamp(2.5rem,10vw,7rem)] font-extrabold tracking-tight text-white whitespace-nowrap select-none'

    // sticky: 親要素内で中央（親が sticky のときセクション内に収まる）
    // followTop: このビューポートY(px)に固定
    // fixed かつ followTop なし: ビューポート中央
    // alignBottom: セクション下部（下方向スクロールで上に流れる）
    // それ以外（absolute）: 1枚目カード中央のフォールバック
    const useFixed = !sticky && (fixed || (followTop != null && Number.isFinite(followTop)))
    const contentPositionStyle =
        followTop != null && Number.isFinite(followTop)
            ? { top: `${followTop}px`, transform: 'translateY(-50%)' }
            : undefined
    const contentPositionClass =
        sticky
            ? 'top-1/2 -translate-y-1/2'
            : useFixed && (followTop == null || !Number.isFinite(followTop))
                ? 'top-1/2 -translate-y-1/2'
                : !useFixed && alignBottom
                    ? 'bottom-[15vh] top-auto -translate-y-0'
                    : !useFixed
                        ? 'top-[calc(6rem+27.5vh)] -translate-y-1/2'
                        : ''

    const positionClass = sticky ? 'absolute inset-0' : useFixed ? 'fixed inset-0' : 'absolute inset-0'

    const animationStyle = isInView ? undefined : { animationPlayState: 'paused' as const }

    return (
        <div
            ref={rootRef}
            className={`z-10 overflow-hidden pointer-events-none transition-opacity duration-300 ${positionClass} ${!visible ? 'opacity-0' : 'opacity-100'
                }`}
            aria-hidden="true"
        >
            <div
                className={`absolute left-0 right-0 flex flex-col items-stretch justify-center gap-0 overflow-hidden py-1 transition-[top,bottom,transform] duration-300 ease-out ${outfit.className} ${contentPositionClass}`}
                style={contentPositionStyle}
            >
                <div className="overflow-hidden leading-none">
                    <div className={`${rowClass} ourdesk-marquee-row-ltr`} style={animationStyle}>
                        <span>{ROW_CONTENT}</span>
                        <span>{ROW_CONTENT}</span>
                    </div>
                </div>
                <div className="overflow-hidden leading-none -mt-2">
                    <div className={`${rowClass} ourdesk-marquee-row-rtl`} style={animationStyle}>
                        <span>{ROW_CONTENT}</span>
                        <span>{ROW_CONTENT}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
