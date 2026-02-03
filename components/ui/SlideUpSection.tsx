'use client'

import { motion } from 'motion/react'

type SlideUpSectionProps = {
    className?: string
    children: React.ReactNode
}

export default function SlideUpSection({ className, children }: SlideUpSectionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
