import { cn } from '@/lib/utils'

// H T P K S M N — 7種類の不定形SVGパス (viewBox 0 0 200 200)
const BLOB_PATHS = {
    H: 'M 55 55 C 35 38, 45 15, 72 18 C 88 20, 98 10, 118 18 C 138 26, 148 15, 165 28 C 182 41, 182 68, 168 85 C 155 102, 168 122, 158 142 C 148 162, 122 170, 100 162 C 78 154, 58 168, 40 155 C 22 142, 18 115, 28 95 C 38 75, 75 72, 55 55 Z',
    T: 'M 98 12 C 122 5, 150 22, 158 52 C 164 72, 155 92, 148 112 C 162 132, 168 158, 155 178 C 142 195, 112 200, 85 192 C 58 184, 38 162, 35 138 C 32 115, 45 95, 42 75 C 39 55, 35 32, 52 18 C 65 8, 74 19, 98 12 Z',
    P: 'M 18 88 C 15 62, 38 38, 68 32 C 92 26, 108 38, 132 30 C 156 22, 175 40, 182 68 C 189 96, 175 130, 148 148 C 121 166, 82 165, 55 150 C 28 135, 21 114, 18 88 Z',
    K: 'M 100 18 C 118 8, 138 15, 148 35 C 158 55, 178 62, 180 88 C 182 114, 165 145, 140 160 C 115 175, 80 175, 55 158 C 30 141, 18 112, 20 85 C 22 58, 42 38, 62 28 C 78 20, 82 28, 100 18 Z',
    S: 'M 95 15 C 118 8, 145 25, 155 55 C 162 78, 158 105, 165 130 C 172 158, 162 182, 135 190 C 108 198, 75 192, 52 175 C 29 158, 22 128, 28 100 C 34 72, 48 52, 58 35 C 68 18, 72 22, 95 15 Z',
    M: 'M 22 85 C 18 62, 35 40, 62 35 C 82 30, 105 20, 132 30 C 159 40, 178 58, 180 82 C 182 106, 168 130, 145 142 C 122 154, 88 158, 60 148 C 32 138, 18 115, 22 85 Z',
    N: 'M 15 95 C 12 68, 32 45, 62 38 C 85 32, 115 22, 145 35 C 172 48, 185 72, 182 98 C 179 124, 162 148, 135 158 C 108 168, 72 165, 48 150 C 24 135, 18 122, 15 95 Z',
} as const

type Props = {
    shape: keyof typeof BLOB_PATHS
    drift: 'float-a' | 'float-b' | 'float-c' | 'float-d' | 'float-e' | 'float-f'
    fill: string        // SVG fill 色 例: "rgba(253,208,0,0.45)"
    className?: string  // width・height・top・left などを Tailwind で渡す
    style?: React.CSSProperties
}

export default function BlobDecoration({ shape, drift, fill, className, style }: Props) {
    return (
        <div
            className={cn('absolute pointer-events-none', `blob-drift-${drift}`, className)}
            style={style}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 200 200"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', overflow: 'visible' }}
            >
                <path d={BLOB_PATHS[shape]} fill={fill} />
            </svg>
        </div>
    )
}
