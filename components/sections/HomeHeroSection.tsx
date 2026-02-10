'use client'

import SplitText from '@/components/ui/SplitText'

const SPLIT_TEXT_PROPS = {
    delay: 70,
    duration: 1.2,
    ease: 'power3.out' as const,
    splitType: 'chars' as const,
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    rootMargin: '-100px',
    textAlign: 'right' as const,
}

export default function HomeHeroSection() {
    return (
        <section
            className="relative md:bg-white min-h-[50vh] md:min-h-[80vh] py-12 md:py-20 overflow-hidden"
            aria-label="メインビジュアル"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <video
                        className="w-full h-full object-cover"
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
                            <h1 className="text-md md:text-3xl font-bold text-right text-balance text-gray-50/90 drop-shadow-md">
                                <div className="block">
                                    <SplitText text="OurDeskが提供するのは、" {...SPLIT_TEXT_PROPS} />
                                </div>
                                <div className="block">
                                    <SplitText text="業務に追われる会社を、" {...SPLIT_TEXT_PROPS} />
                                </div>
                                <div className="block">
                                    <SplitText text="「働きたい」人材が支える仕組み。" {...SPLIT_TEXT_PROPS} />
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
