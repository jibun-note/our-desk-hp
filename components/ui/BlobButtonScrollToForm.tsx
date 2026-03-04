'use client'

import BlobButton from '@/components/ui/BlobButton'
import { scrollToApplicationForm } from '@/components/ui/ScrollToApplicationForm'

type Props = {
    children: React.ReactNode
}

/**
 * BlobButton に「応募フォームへスクロール」の動作を付けたラッパー。
 * サーバーコンポーネントから利用する際はこちらを使う。
 */
export default function BlobButtonScrollToForm({ children }: Props) {
    return <BlobButton onClick={scrollToApplicationForm}>{children}</BlobButton>
}
