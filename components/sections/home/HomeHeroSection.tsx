'use client'

import SplitText from '@/components/ui/SplitText'

const SPLIT_TEXT_PROPS = {
    delay: 70,
    duration: 1.2,
    ease: 'power3.out' as const,
    splitType: 'chars' as const,
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    textAlign: 'right' as const,
    useScrollTrigger: false as const,
}

export default function HomeHeroSection() {
    return (
        <section
            className="relative md:bg-white min-h-0 md:min-h-[80vh] py-0 md:py-20 overflow-hidden"
            aria-label="メインビジュアル"
        >
            <div className="relative w-full aspect-video md:absolute md:inset-0 md:aspect-auto flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                        className="w-full h-full object-cover object-[left_55%] md:object-center scale-[1.25] md:scale-100 origin-left md:origin-center"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden
                    >
                        <source src="/images/home/01.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-end justify-end z-10 p-4 md:p-16 pointer-events-none">
                        <div className="max-w-2xl pointer-events-auto">
                            <h1
                                className="text-md md:text-3xl font-bold text-right text-balance text-white/95 md:text-gray-50/90 [text-shadow:0_0_1px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.4)] md:[text-shadow:none] md:drop-shadow-md"
                            >
                                <div className="block">
                                    <SplitText text="OurDeskが提供するのは、" {...SPLIT_TEXT_PROPS} startDelay={0} />
                                </div>
                                <div className="block">
                                    <SplitText text="業務に追われる会社を、" {...SPLIT_TEXT_PROPS} startDelay={0.5} />
                                </div>
                                <div className="block">
                                    <SplitText text="「働きたい」人材が支える仕組み。" {...SPLIT_TEXT_PROPS} startDelay={1} />
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
