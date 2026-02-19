import { cn } from '@/lib/utils'

type GradientHeadingProps = {
    text: string
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function GradientHeading({ text, className, as: Tag = 'h2' }: GradientHeadingProps) {
    return (
        <Tag
            className={cn(
                'bg-gradient-to-r from-[#FDD000] via-[#F08300] to-[#FDD000] bg-clip-text text-transparent',
                className
            )}
        >
            {text}
        </Tag>
    )
}
