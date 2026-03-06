const waveSvgCls = 'absolute left-0 w-full h-[180px] pointer-events-none z-10'

export default function WaveDecoration() {
    return (
        <>
            <svg
                aria-hidden
                viewBox="0 0 1440 180"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={`${waveSvgCls} top-0`}
            >
                <path
                    d="M0,90 C360,0 720,180 1080,90 C1260,0 1320,180 1440,90 L1440,0 L0,0 Z"
                    fill="hsl(38 95% 65% / 0.12)"
                />
                <path
                    d="M0,90 C300,180 600,0 900,90 C1200,180 1320,0 1440,90 L1440,0 L0,0 Z"
                    fill="hsl(28 60% 75% / 0.10)"
                />
            </svg>
            <svg
                aria-hidden
                viewBox="0 0 1440 180"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={`${waveSvgCls} bottom-0`}
            >
                <path
                    d="M0,90 C360,180 720,0 1080,90 C1260,180 1320,0 1440,90 L1440,180 L0,180 Z"
                    fill="hsl(38 95% 65% / 0.12)"
                />
                <path
                    d="M0,90 C300,0 600,180 900,90 C1200,0 1320,180 1440,90 L1440,180 L0,180 Z"
                    fill="hsl(28 60% 75% / 0.10)"
                />
            </svg>
        </>
    )
}
