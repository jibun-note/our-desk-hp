'use client'

/**
 * セクション区切り用の波型デバイダー。
 * position="top": 次のセクションの上端が波型（次のセクション色で塗る）。
 * position="bottom": このセクションの下端が波型（グレーセクションのボトム用）。
 */
type NextBackground = 'top' | 'bottom'
type Position = 'top' | 'bottom'

const BG_COLORS: Record<NextBackground, string> = {
    'top': '#fcf7f8',
    'bottom': '#FFE8CC',
}

export default function SectionWave({
    nextBackground,
    position = 'top',
}: {
    nextBackground: NextBackground
    position?: Position
}) {
    const fill = BG_COLORS[nextBackground]

    if (position === 'bottom') {
        return (
            <div className="relative w-full flex-shrink-0 h-12 md:h-16" aria-hidden>
                <svg
                    className="absolute top-0 left-0 w-full h-full block"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* 波が下端：山1つ（top の逆） */}
                    <path
                        d="M0 0 L 1440 0 L 1440 80 Q 720 30 0 80 Z"
                        fill={fill}
                    />
                </svg>
            </div>
        )
    }

    return (
        <div className="relative w-full flex-shrink-0 h-12 md:h-16" aria-hidden>
            <svg
                className="absolute bottom-0 left-0 w-full h-full block"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 80 L0 50 Q 720 100 1440 50 L 1440 80 Z"
                    fill={fill}
                />
            </svg>
        </div>
    )
}
