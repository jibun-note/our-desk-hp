'use client'

import { motion } from 'motion/react'

const LINE_COLOR = '#FDD000'

type UnderlinePhraseProps = {
    children: React.ReactNode
}

export default function UnderlinePhrase({ children }: UnderlinePhraseProps) {
    return (
        <span className="inline-block relative">
            <motion.span
                className="absolute left-0 right-0 top-1/2 h-6 block rounded-full pointer-events-none -z-[1]"
                style={{
                    backgroundColor: LINE_COLOR,
                    transformOrigin: 'left',
                    opacity: 0.3,
                }}
                initial={{ scaleX: 0, y: '-50%' }}
                whileInView={{ scaleX: 1, y: '-50%' }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <span className="relative z-0">{children}</span>
        </span>
    )
}
