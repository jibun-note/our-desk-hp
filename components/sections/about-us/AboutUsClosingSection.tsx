import ArchClip from '@/components/sections/ArchClip'
import Image from 'next/image'

/**
 * About Us の締めくくりセクション。
 * ArchClip で逆アーチ（下端アーチ）にクリップ。section の bg は前セクション（#fefcf7）に合わせる。
 * 直前に WaveDivider を置かない。
 */
export default function AboutUsClosingSection() {
    return (
        <section
            className="relative z-[14] min-h-[320px] md:min-h-[380px] flex items-center bg-[#fefcf7]"
            aria-label="OurDeskの想い"
        >
            {/* ArchClip 逆アーチでクリップされる暗い背景レイヤー */}
            <ArchClip idPrefix="about-closing" variant="bottom">
                <div className="absolute inset-0" aria-hidden>
                    <Image
                        src="/images/about-us/03.jpeg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw"
                        role="presentation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/85" />
                </div>
            </ArchClip>

            {/* コンテンツ（クリップレイヤーの上に表示） */}
            <div className="w-full container mx-auto max-w-4xl relative z-10 px-4 md:px-6 text-center text-white">
                <p className="text-xl md:text-3xl font-bold leading-relaxed mb-8 text-balance">
                    OurDeskは、<br className="md:hidden" />
                    <span className="text-gradient-hero">「働きたい」</span>という想いを<br />
                    大切に育て、仕事につなげていく会社です。
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90 text-pretty">
                    一人ひとりの人生に寄り添いながら、<br className="hidden md:block" />
                    自分らしい働き方を一緒につくっていきます。
                </p>
            </div>
        </section>
    )
}
