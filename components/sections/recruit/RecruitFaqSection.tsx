import BlobDecoration from '@/components/ui/BlobDecoration'

export type FaqItem = {
    q: string
    a: string
}

type Props = {
    faqItems: readonly FaqItem[]
}

export default function RecruitFaqSection({ faqItems }: Props) {
    return (
        <section className="relative z-[11] bg-[#fefcf7] py-20 md:py-32 px-4 md:px-6" aria-label="よくある質問">
            {/* Blob装飾: クリームスプラッシュ（右にはみ出す → 下のセクションが上に被さり隠す） */}
            <BlobDecoration
                shape="splash"
                drift="horizontal"
                background="rgba(253, 232, 166, 0.22)"
                className="w-[80vw] h-[34vw] md:w-[47vw] md:h-[20vw]"
                style={{ top: '15vw', right: '-18vw' }}
            />
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        よくある質問
                    </h2>
                    <div className="divider-line mx-auto" />
                </div>
                <ul className="space-y-6">
                    {faqItems.map((item, i) => (
                        <li key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-3 text-balance">Q. {item.q}</h3>
                            <p className="text-gray-700 text-pretty pl-0 md:pl-4 border-l-0 md:border-l-2 border-primary-300">
                                A. {item.a}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
