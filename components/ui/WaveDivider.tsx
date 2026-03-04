import { cn } from '@/lib/utils'

/** 次のセクションが下に続く（波が上縁）。参考: ourdesk-service-v3.html */
const WAVE_PATH_DOWN =
  'M0,28 C200,56 400,0 720,32 C1040,56 1240,0 1440,28 L1440,56 L0,56 Z'
/** 次のセクションが下に続く・別パターン（cream→white 用） */
const WAVE_PATH_UP =
  'M0,18 C360,56 720,0 1080,34 C1260,56 1380,16 1440,26 L1440,56 L0,56 Z'

type Props = {
    bgColor: string
    fillColor: string
    flip?: boolean
    className?: string
}

export default function WaveDivider({ bgColor, fillColor, flip = false, className }: Props) {
    return (
        <div
            className={cn('relative h-14', flip && 'overflow-hidden', className)}
            style={{ backgroundColor: bgColor }}
            aria-hidden="true"
        >
            <svg
                className={cn(
                    'w-full h-full block',
                    flip ? 'relative z-10' : 'absolute bottom-0',
                )}
                viewBox="0 0 1440 56"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={flip ? WAVE_PATH_UP : WAVE_PATH_DOWN} fill={fillColor} />
            </svg>
        </div>
    )
}
