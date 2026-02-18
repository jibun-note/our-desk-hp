import { cn } from '@/lib/utils'

type Props = {
    shape: 'cloud' | 'drop' | 'angular' | 'egg' | 'splash'
    drift: 'diagonal' | 'horizontal' | 'orbit' | 'vertical' | 'rotate' | 'breathe'
    background: string
    className?: string
    style?: React.CSSProperties
}

export default function BlobDecoration({ shape, drift, background, className, style }: Props) {
    return (
        <div
            className={cn(
                'absolute pointer-events-none',
                `blob-${shape}`,
                `drift-${drift}`,
                className,
            )}
            style={{ background, ...style }}
            aria-hidden="true"
        />
    )
}
