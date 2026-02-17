import BlobDecoration from '@/components/ui/BlobDecoration'
import { cn } from '@/lib/utils'

export type CareerPathItem = {
    id: string
    title: string
    current: readonly string[]
    steps: readonly string[]
}

type Props = {
    careerPaths: readonly CareerPathItem[]
}

export default function RecruitCareerPathsSection({ careerPaths }: Props) {
    return (
        <section className="relative z-[7] bg-[#fffdf5] py-20 md:py-32 px-4 md:px-6" aria-label="キャリアの描き方">
            {/* Blob装飾: ピンク滴（右上にはみ出す → 下のセクションが上に被さり隠す） */}
            <BlobDecoration
                shape="drop"
                drift="rotate"
                background="rgba(235, 180, 178, 0.2)"
                className="w-[62vw] h-[72vw] md:w-[37vw] md:h-[43vw]"
                style={{ top: '-8vw', right: '-12vw' }}
            />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        キャリアの描き方
                    </h2>
                    <div className="divider-line mx-auto mb-4" />
                    <p className="text-base md:text-lg text-gray-600 text-pretty">
                        働き方に「正解」はありません。あなたの人生に合ったキャリアを、一緒につくります。
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                    {careerPaths.map((path) => (
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
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 text-balance">{path.title}</h3>

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
                                        <div className="size-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                        <p className="text-sm md:text-base text-gray-600">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
