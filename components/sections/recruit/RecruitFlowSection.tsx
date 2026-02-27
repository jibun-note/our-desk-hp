import HandwrittenLine from '@/components/ui/HandwrittenLine'

export type FlowStepItem = {
    num: number
    title: string
    subtitle: string | null
}

type Props = {
    flowSteps: readonly FlowStepItem[]
}

export default function RecruitFlowSection({ flowSteps }: Props) {
    return (
        <section className="relative z-[9] bg-white py-20 md:py-32 px-4 md:px-6" aria-label="案件参画までの流れ">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 text-balance">
                        案件参画までの流れ
                    </h2>
                    <div className="mb-4">
                        <HandwrittenLine variant={4} color="rgba(178,186,230,0.8)" width={100} align="center" />
                    </div>
                </div>

                <div className="max-w-xl mx-auto space-y-3 md:space-y-4">
                    {flowSteps.map((step) => (
                        <div key={step.num} className="card-organic p-4 md:p-5 flex items-center gap-3 md:gap-4">
                            <div className="flex-shrink-0 size-8 md:size-10 rounded-full bg-gradient-to-br from-[#FDD000] to-[#F08300] flex items-center justify-center text-gray-900 font-bold text-sm md:text-base">
                                {step.num}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base md:text-lg font-bold text-gray-900 text-balance">{step.title}</h3>
                                {step.subtitle && (
                                    <p className="text-gray-500 text-xs md:text-sm mt-1 leading-relaxed text-pretty">{step.subtitle}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
