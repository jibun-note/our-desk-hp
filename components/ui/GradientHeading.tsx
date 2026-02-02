'use client'

import { motion } from 'motion/react'

const FROM_COLOR = '#FDD000'
const TO_COLOR = '#F08300'

type GradientHeadingProps = {
    text: string
    className?: string
    as?: 'h1' | 'h2' | 'h3'
}

export default function GradientHeading({ text, className = '', as = 'h2' }: GradientHeadingProps) {
    const chars = Array.from(text)
    const n = chars.length

    const content = (
        <>
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    style={{
                        background: `linear-gradient(to right, ${FROM_COLOR}, ${TO_COLOR})`,
                        backgroundSize: `${n * 100}% 100%`,
                        backgroundPosition: `${-i * 100}% 0`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        WebkitTextFillColor: 'transparent',
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
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
