import BlobDecoration from '@/components/ui/BlobDecoration'

export type FeatureItem = {
    num: string
    title: string
    body: string
}

type Props = {
    features: readonly FeatureItem[]
}

type FeaturesProps = Props & {
    /** 社会的証明用の定性メッセージ（例: 「多くの仲間が〜」）。省略可 */
    socialProofMessage?: string
}

export default function RecruitFeaturesSection({ features, socialProofMessage }: FeaturesProps) {
    return (
        <section className="relative py-20 md:py-32 px-4 md:px-6" aria-label="3つの特徴">
            <BlobDecoration
                shape="S"
                drift="float-d"
                fill="rgba(253, 232, 166, 0.28)"
                className="bottom-[10vw] md:bottom-[-10vw] left-[-10vw] w-[72vw] h-[72vw] md:w-[33vw] md:h-[33vw] max-md:top-[-8vw] max-md:bottom-auto max-md:left-[-28vw]"
            />
            <div className="max-w-6xl mx-auto relative z-10">
                {socialProofMessage && (
                    <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 text-pretty">
                        {socialProofMessage}
                    </p>
                )}
                <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                    {features.map((item) => (
                        <div key={item.num}>
                            <div className="feature-number mb-6 md:mb-8 !text-[2rem] md:!text-[5rem]">{item.num}</div>
                            <h3 className="text-xl md:text-2xl font-medium mb-5 md:mb-6 text-gray-900 text-balance">{item.title}</h3>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-pretty">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
