import BlobDecoration from '@/components/ui/BlobDecoration'
import WaveClipLayer from '@/components/sections/WaveClipLayer'
import Link from 'next/link'

type Props = {
    ctaBgImage: string
}

export default function RecruitCtaSection({ ctaBgImage }: Props) {
    return (
        <section className="relative z-[14] min-h-[40rem] lg:min-h-[45rem] bg-white" aria-label="応募・お問い合わせ">
            {/* Wave クリップされた背景レイヤー */}
            <WaveClipLayer idPrefix="recruit-cta">
                <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                    {/* 左側背景: 写真 + オーバーレイ */}
                    <div className="relative">
                        <img
                            src={ctaBgImage}
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                            効率じゃない。<br />
                            <span className="text-gradient-hero">想いだ。</span>
                        </h2>
                        <div className="divider-line mx-auto lg:mx-0" />

                        <div className="text-white text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-5">
                            <p className="font-medium text-pretty">スキルは後から</p>
                            <p className="text-white/90 text-pretty">でも想いは簡単には育ちません</p>
                            <p className="text-white/95 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-pretty">
                                誰かの役に立ちたい。支える仕事がしたい。前向きに働きたい。<br />
                                そんな気持ちを、私たちは大切にします。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 右側: CTA */}
                <div className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-20 overflow-hidden">
                    {/* 装飾 Blob */}
                    <BlobDecoration
                        shape="egg"
                        drift="breathe"
                        background="rgba(249, 115, 22, 0.25)"
                        className="w-[35vw] h-[35vw] md:w-[20vw] md:h-[20vw]"
                        style={{ top: '4.5vw', right: '2.8vw' }}
                    />

                    <div className="relative z-10 max-w-lg text-center space-y-6 md:space-y-10">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                            一緒に、<br />育てよう
                        </h3>
                        <div className="divider-line mx-auto" />
                        <p className="text-xl md:text-2xl text-white/95 font-light text-pretty">
                            「働きたい」という気持ちを。
                        </p>
                        <Link
                            href="/recruit/apply/"
                            className="inline-block bg-white text-orange-600 px-10 py-4 md:px-12 text-base md:text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-transform min-h-[48px] flex items-center justify-center mx-auto"
                        >
                            応募フォームへ進む
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
