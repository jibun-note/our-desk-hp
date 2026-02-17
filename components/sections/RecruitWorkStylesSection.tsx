import { cn } from '@/lib/utils'

export type WorkStyleItem = {
    id: string
    title: string
    label: string
    description: string
    salaryAmount: string
    salaryUnit: string
    note: string | null
}

type Props = {
    workStyles: readonly WorkStyleItem[]
}

export default function RecruitWorkStylesSection({ workStyles }: Props) {
    return (
        <section className="wave-divider relative z-[5] bg-white py-20 md:py-32" aria-label="3つの働き方">
            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        3つの働き方
                    </h2>
                    <div className="divider-line mx-auto mb-4" />
                    <p className="text-base md:text-lg text-gray-600 text-pretty">あなたのライフスタイルに合わせて選べます</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {workStyles.map((item) => (
                        <div
                            key={item.id}
                            className="card-organic p-6 md:p-10"
                        >
                            <div
                                className={cn(
                                    'text-3xl md:text-7xl serif font-bold mb-4 md:mb-6 text-transparent bg-clip-text',
                                    item.id === '02'
                                        ? 'bg-gradient-to-br from-orange-500 to-yellow-400'
                                        : 'bg-gradient-to-br from-yellow-400 to-orange-500'
                                )}
                            >
                                {item.id}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 text-balance">
                                {item.title}
                            </h3>
                            <p className="text-sm text-orange-600 mb-4 md:mb-6 font-medium tracking-wider uppercase">
                                {item.label}
                            </p>
                            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-pretty">{item.description}</p>
                            <div className="text-2xl md:text-4xl font-bold text-gray-900">
                                {item.salaryAmount}
                                <span className="text-base md:text-xl text-gray-500">{item.salaryUnit}</span>
                            </div>
                            {item.note && (
                                <p className="text-sm text-gray-500 mt-2">{item.note}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
