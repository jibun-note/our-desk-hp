'use client'

import { cn } from '@/lib/utils'

type Props = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export default function BlobButton({ children, className, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className={cn('blob-btn', className)}
        >
            <span>{children}</span>
        </button>
    )
}
