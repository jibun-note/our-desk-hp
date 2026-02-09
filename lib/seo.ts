import type { Metadata } from "next";

export const BASE_URL = "https://our-desk.co.jp";

const DEFAULT_OG_IMAGE = {
    url: "/images/shared/our-desk-logo.png",
    width: 1200,
    height: 630,
    alt: "OurDesk株式会社",
} as const;

/**
 * 静的ページ用のメタデータを生成する。
 * openGraph（locale / siteName / images 含む）と alternates.canonical を統一して返す。
 * @param path - 先頭・末尾スラッシュ付きパス（例: /about-us/）
 */
export function createPageMetadata(
    path: string,
    title: string,
    description: string,
): Metadata {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const pathWithSlash = normalizedPath.endsWith("/")
        ? normalizedPath
        : `${normalizedPath}/`;
    const canonicalUrl = `${BASE_URL}${pathWithSlash}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: "website",
            locale: "ja_JP",
            siteName: "OurDesk株式会社",
            images: [DEFAULT_OG_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}
