import ParticlesSection from '@/components/sections/ParticlesSection'

export default function HomeIntroSection() {
    return (
        <section
            className="relative pt-16 px-4 md:pt-40 md:pb-40 md:px-6"
            aria-label="OurDeskの想い"
        >
            <div className="absolute inset-0 z-25 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 w-full h-full">
                    <ParticlesSection />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center container mx-auto max-w-4xl relative z-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance text-center">
                    <span className="text-gradient-hero">「働きたい」</span>を
                    <br />
                    ちゃんと育てる。
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty text-center">
                    「働きたい」想いは、自然に生まれるものではありません。
                    <br />
                    OurDeskはその気持ちを育て、仕事につなげる仕組みを作っています。
                </p>
            </div>
        </section>
    )
}
