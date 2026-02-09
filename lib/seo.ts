import type { Metadata } from 'next'

const BASE_URL = 'https://our-desk.co.jp'

/**
 * 静的ページ用のメタデータを生成する。
 * openGraph と alternates.canonical を統一して返す。
 * @param path - 先頭・末尾スラッシュ付きパス（例: /about-us/）
 */
export function createPageMetadata(
    path: string,
    title: string,
    description: string
): Metadata {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const pathWithSlash = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`
    const canonicalUrl = `${BASE_URL}${pathWithSlash}`
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: 'website',
        },
        alternates: {
            canonical: canonicalUrl,
        },
    }
}
