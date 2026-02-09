import { BASE_URL } from '@/lib/seo'

type Props = {
    /** 末尾スラッシュ付きパス（例: /about-us/） */
    path: string
    /** パンくずの2番目の表示名（例: About Us） */
    name: string
}

/**
 * サーバーコンポーネント。静的エクスポート時に HTML にパンくず JSON-LD を確実に含める。
 * 各静的ページの page.tsx で path と name を渡して使用する。
 */
export default function BreadcrumbJsonLdServer({ path, name }: Props) {
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: `${BASE_URL}/`,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name,
                item: `${BASE_URL}${pathWithSlash}`,
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
    )
}
