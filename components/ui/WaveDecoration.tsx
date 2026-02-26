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
                    d="M0,80 C240,160 480,0 720,80 C960,160 1200,20 1440,80 L1440,0 L0,0 Z"
                    fill="hsl(38 95% 65% / 0.12)"
                />
                <path
                    d="M0,100 C360,40 720,140 1080,80 C1260,50 1380,110 1440,100 L1440,0 L0,0 Z"
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
                    d="M0,100 C240,20 480,180 720,100 C960,20 1200,160 1440,100 L1440,180 L0,180 Z"
                    fill="hsl(38 95% 65% / 0.12)"
                />
                <path
                    d="M0,80 C360,140 720,40 1080,100 C1260,130 1380,70 1440,80 L1440,180 L0,180 Z"
                    fill="hsl(28 60% 75% / 0.10)"
                />
            </svg>
        </>
    )
}
