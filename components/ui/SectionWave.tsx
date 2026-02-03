'use client'

/**
 * セクション区切り用の波型デバイダー。
 * position="top": 次のセクションの上端が波型（次のセクション色で塗る）。
 * position="bottom": このセクションの下端が波型（グレーセクションのボトム用）。
 */
type NextBackground = 'white' | 'gray-50'
type Position = 'top' | 'bottom'

const BG_COLORS: Record<NextBackground, string> = {
    white: '#ffffff',
    'gray-50': '#f9f9f9',
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
                    {/* 波が下端：上側を塗り、下端が波型 */}
                    <path
                        d="M0 0 L 1440 0 L 1440 50 Q 1200 80 960 50 Q 720 20 480 50 Q 240 80 0 50 Z"
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
                    d="M0 80 L0 50 Q 240 80 480 50 Q 720 20 960 50 Q 1200 80 1440 50 L 1440 80 Z"
                    fill={fill}
                />
            </svg>
        </div>
    )
}
