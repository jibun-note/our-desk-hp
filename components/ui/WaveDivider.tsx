import { cn } from '@/lib/utils'

const WAVE_PATH_DOWN = 'M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z'
const WAVE_PATH_UP = 'M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z'

type Props = {
    bgColor: string
    fillColor: string
    flip?: boolean
    className?: string
}

export default function WaveDivider({ bgColor, fillColor, flip = false, className }: Props) {
    return (
        <div
            className={cn('relative h-[80px]', flip && 'overflow-hidden', className)}
            style={{ backgroundColor: bgColor }}
            aria-hidden="true"
        >
            <svg
                className={cn(
                    'w-full h-full',
                    flip ? 'relative z-10 block' : 'absolute bottom-0',
                )}
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={flip ? WAVE_PATH_UP : WAVE_PATH_DOWN} fill={fillColor} />
            </svg>
        </div>
    )
}
