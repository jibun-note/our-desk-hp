'use client'

const APPLICATION_FORM_ID = 'application-form'

function scrollToApplicationForm() {
    const el = document.getElementById(APPLICATION_FORM_ID)
    if (!el) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
}

type Props = {
    children: React.ReactNode
    className?: string
}

/**
 * 採用ページ内の応募フォームセクションへスムーズにスクロールするリンク。
 * 同じページの下に移動したことが分かるよう scrollIntoView(smooth) を使用。
 */
export default function ScrollToApplicationForm({ children, className }: Props) {
    return (
        <a
            href={`#${APPLICATION_FORM_ID}`}
            onClick={(e) => {
                e.preventDefault()
                scrollToApplicationForm()
            }}
            className={className}
        >
            {children}
        </a>
    )
}
