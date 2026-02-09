'use client'

import React, { useState, useLayoutEffect } from 'react'
import Particles from '@/components/ui/Particles'

const STICKY_BREAKPOINT = 768

/**
 * ビューポート幅に応じて1つだけ Particles をマウントする。
 * スマホ用・デスクトップ用の2つを同時に動かさないことで WebGL 負荷を軽減する。
 */
export default function ParticlesSection() {
    const [isNarrow, setIsNarrow] = useState(false)

    useLayoutEffect(() => {
        const check = () => {
            setIsNarrow(typeof window !== 'undefined' && window.innerWidth < STICKY_BREAKPOINT)
        }
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    return (
        <Particles
            particleColors={['#f69104']}
            particleCount={isNarrow ? 30 : 60}
            particleSpread={6}
            speed={0.06}
            particleBaseSize={130}
            moveParticlesOnHover={false}
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
            pauseWhenHidden
        />
    )
}
