import Image from 'next/image'
import { cn } from '@/lib/utils'

const LINE_SOURCES: Record<number, string> = {
    1: '/images/shared/line1.svg',
    2: '/images/shared/line2.svg',
    3: '/images/shared/line3.svg',
    4: '/images/shared/line4.svg',
    5: '/images/shared/line5.svg',
    6: '/images/shared/line6.svg',
} as const

export type HeadingLineVariant = keyof typeof LINE_SOURCES

type Props = {
    /** 使うラインの種類（1〜6）。public/images/shared/lineN.svg に対応 */
    variant?: HeadingLineVariant
    className?: string
}

/**
 * 見出し下の装飾ライン。variant で line1.svg 〜 line6.svg を切り替え可能。
 */
export default function HeadingLine({ variant = 1, className }: Props) {
    const src = LINE_SOURCES[variant] ?? LINE_SOURCES[1]
    return (
        <span
            className={cn('-mt-1 -ml-1 block w-24 sm:w-24 md:w-32 overflow-visible', className)}
            aria-hidden
        >
            <Image
                src={src}
                alt=""
                width={128}
                height={32}
                className="w-full h-auto"
            />
        </span>
    )
}
