'use client'

import { useEffect } from 'react'

/**
 * 採用ページ（/recruit/）で、モバイル時に開いた瞬間に応募フォームへ
 * 飛んでしまう問題を防ぐ。スクロール復元を無効化し、表示時に先頭へスクロールする。
 */
export default function RecruitPageScrollToTop() {
    useEffect(() => {
        const isMobile = () =>
            typeof window !== 'undefined' &&
            window.matchMedia('(max-width: 767px)').matches

        if (!isMobile()) return

        // ブラウザのスクロール復元を無効化（戻る/進むで前の位置に飛ばない）
        if (typeof window.history !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        // ハッシュによる自動スクロールや復元を上書きするため、先頭へスクロール
        // requestAnimationFrame でブラウザのデフォルトスクロール後に実行
        const rafId = requestAnimationFrame(() => {
            window.scrollTo(0, 0)
        })

        // ハッシュが付いた状態で開かれた場合、URLから #application-form を外す
        if (window.location.hash) {
            window.history.replaceState(
                window.history.state,
                '',
                window.location.pathname + window.location.search
            )
        }

        return () => cancelAnimationFrame(rafId)
    }, [])

    return null
}
