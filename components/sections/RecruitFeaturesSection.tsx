import BlobDecoration from '@/components/ui/BlobDecoration'

export type FeatureItem = {
    num: string
    title: string
    body: string
}

type Props = {
    features: readonly FeatureItem[]
}

export default function RecruitFeaturesSection({ features }: Props) {
    return (
        <section className="relative py-16 md:py-32 px-4 md:px-6" aria-label="3つの特徴">
            {/* Blob装飾: クリーム卵（右下にはみ出す → 下のセクションが上に被さり隠す） */}
            <BlobDecoration
                shape="egg"
                drift="breathe"
                background="rgba(253, 232, 166, 0.28)"
                className="bottom-[10vw] md:bottom-[-10vw] right-[-10vw] w-[55vw] h-[55vw] md:w-[33vw] md:h-[33vw]"
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                    {features.map((item) => (
                        <div key={item.num}>
                            <div className="feature-number mb-4 !text-[2rem] md:!text-[5rem]">{item.num}</div>
                            <div className="divider-line mb-6" />
                            <h3 className="text-lg md:text-2xl font-medium mb-4 text-gray-900 text-balance">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-pretty">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
