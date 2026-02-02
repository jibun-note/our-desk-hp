'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import SlideUpSection from '@/components/ui/SlideUpSection'
import GradientHeading from '@/components/ui/GradientHeading'
const CARD_COUNT = 4

/** 0〜1 を滑らかに補間するイージング（smoothstep） */
function smoothstep(t: number): number {
    const x = Math.max(0, Math.min(1, t))
    return x * x * (3 - 2 * x)
}

/**
 * スクロール進捗から各カードの「奥行き」を連続値で計算。
 * 重なって見える幅を狭くするため、スタック進行を後半の短い範囲に圧縮。
 */
const GRADIENT_ZONE = 0.52 // 進捗 0〜52% でスタック進行（幅を狭く＝重なりが見える区間を短く）

function getDepths(progress: number): number[] {
    const p = Math.max(0, Math.min(1, progress))
    const t = p >= GRADIENT_ZONE ? 1 : p / GRADIENT_ZONE
    const tSmooth = smoothstep(t)
    const stackedRaw = tSmooth * CARD_COUNT
    return Array.from({ length: CARD_COUNT }, (_, i) => {
        const depth = Math.max(0, Math.min(CARD_COUNT - 1, stackedRaw - 1 - i))
        return depth
    })
}

const STICKY_BREAKPOINT = 768 // この幅未満で sticky top を小さく（セクション5飛び出し防止）
const STICKY_TOP_SMALL = [2, 3.25, 4.5, 5.75] as const   // 小画面: rem
const STICKY_TOP_LARGE = [5, 7, 9, 11] as const           // 大画面: rem

export default function StackCardsSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)
    const [isNarrow, setIsNarrow] = useState(false)

    useLayoutEffect(() => {
        const checkNarrow = () => setIsNarrow(typeof window !== 'undefined' && window.innerWidth < STICKY_BREAKPOINT)
        checkNarrow()
        window.addEventListener('resize', checkNarrow)
        return () => window.removeEventListener('resize', checkNarrow)
    }, [])

    useLayoutEffect(() => {
        const el = containerRef.current
        if (!el) return

        const onScroll = () => {
            const rect = el.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            const total = rect.height - viewportHeight
            if (total <= 0) {
                setProgress(rect.top <= 0 ? 1 : 0)
                return
            }
            const scrolled = -rect.top
            const p = scrolled / total
            setProgress(Math.max(0, Math.min(1, p)))
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const depths = getDepths(progress)
    const cardBgs = depths.map(() => 'rgb(255,255,255)')

    return (
        <section className="relative bg-gray-100/80 py-16 md:py-24" aria-label="OurDeskの取り組み">
            <div
                ref={containerRef}
                className="relative container mx-auto max-w-6xl px-4 md:px-8 flex flex-col gap-6 md:gap-8"
                style={{ minHeight: '220vh' }}
                data-stack-scroll-progress={Math.round(progress * 100) / 100}
            >
                {[
                    { title: 'OurDeskの人材育成方針', content: <>私たちが大切にしているのは、</>, list: ['働きたい', '人の力になりたい', '誰かを支える仕事がしたい'], after: <>そんな想いを持つ人たちです。<br />スキルだけでなく、「働く姿勢」や想いも大切に育てています。</>, imageOrder: 'right' as const },
                    { title: 'OurDeskを支える基盤', content: <>OurDeskの仕組みの土台には、NEUGATEグループの人材育成ノウハウがあります。</>, list: ['グループ従業員 約100名', '定着率は常に90%以上', '人事支援・キャリア支援の実績多数'], after: <>長く働ける環境づくりを続けてきたNEUGATEの仕組みを活かし、OurDeskでもスタッフの育成とキャリア支援を行っています。</>, imageOrder: 'left' as const },
                    { title: 'OurDeskのミッション', content: <>私たちは、「働きたい」という気持ちが、仕事につながる社会をつくりたいと考えています。<br />家庭やライフステージに左右されず、自分らしい働き方を選びながら、誰かの役に立てる。そんなキャリアの形を、一人ひとりと一緒につくっていく会社です。</>, list: null, after: null, imageOrder: 'right' as const },
                    { title: 'なぜ、女性のキャリア支援なのか', titleClass: 'text-xl md:text-3xl', content: <>出産や育児、家庭との両立など、女性のキャリアには多くの分岐点があります。<br />「働きたい気持ちはあるのに、選択肢が限られてしまう」そんな声を、私たちはたくさん聞いてきました。<br />だからOurDeskは、女性が自分らしく働き続けられる仕組みづくりに本気で取り組んでいます。</>, list: null, after: null, imageOrder: 'left' as const },
                ].map((card, i) => {
                    const depth = depths[i]
                    const stickyTopRem = isNarrow ? STICKY_TOP_SMALL[i] : STICKY_TOP_LARGE[i]
                    return (
                        <article
                            key={i}
                            className="sticky min-h-[55vh] flex flex-col justify-center rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-200/80 backdrop-blur-sm transition-[background-color] duration-700 ease-in-out"
                            style={{
                                top: `${stickyTopRem}rem`,
                                background: cardBgs[i],
                            }}
                            data-stack-depth={Math.round(depth * 100) / 100}
                        >
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center w-full max-w-full ${card.imageOrder === 'left' ? '' : ''}`}>
                                {card.imageOrder === 'left' && (
                                    <div className="min-h-[180px] md:min-h-[220px] rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center order-2 md:order-1" aria-hidden="true">
                                        <span className="text-sm text-gray-400">写真・画像用</span>
                                    </div>
                                )}
                                <div className={`min-w-0 flex flex-col justify-center ${card.imageOrder === 'left' ? 'order-1 md:order-2' : ''}`}>
                                    <SlideUpSection>
                                        <GradientHeading text={card.title} className={`${card.titleClass ?? 'text-2xl md:text-3xl'} font-bold mb-4 whitespace-nowrap block drop-shadow-sm`} />
                                        <p className="text-base md:text-lg mb-6 leading-relaxed text-pretty text-gray-800">{card.content}</p>
                                        {card.list && (
                                            <ul className="space-y-3 text-base md:text-lg text-gray-800">
                                                {card.list.map((item, j) => (
                                                    <li key={j} className="flex items-start"><span className="mr-2 text-primary-700">•</span><span className="text-pretty">{item}</span></li>
                                                ))}
                                            </ul>
                                        )}
                                        {card.after && <p className="text-base md:text-lg mt-6 leading-relaxed text-pretty text-gray-800">{card.after}</p>}
                                    </SlideUpSection>
                                </div>
                                {card.imageOrder === 'right' && (
                                    <div className="min-h-[180px] md:min-h-[220px] rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center" aria-hidden="true">
                                        <span className="text-sm text-gray-400">写真・画像用</span>
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
