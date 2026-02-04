'use client'

import { motion } from 'motion/react'

/* タイトル単色（他と揃えた黒） */
const TEXT_COLOR = '#555555'

type GradientHeadingProps = {
    text: string
    className?: string
    as?: 'h1' | 'h2' | 'h3'
}

export default function GradientHeading({ text, className = '', as = 'h2' }: GradientHeadingProps) {
    const chars = Array.from(text)

    const content = (
        <>
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    style={{ color: TEXT_COLOR }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.05,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </>
    )

    const Tag = as
    return (
        <Tag className={className}>
            {content}
        </Tag>
    )
}
