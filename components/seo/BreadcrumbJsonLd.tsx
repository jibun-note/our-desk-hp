'use client'

import { usePathname } from 'next/navigation'
import { BASE_URL } from '@/lib/seo'

const PATH_TO_NAME: Record<string, string> = {
    '/about-us/': 'About Us',
    '/company/': 'Company',
    '/contact/': 'Contact',
    '/privacy/': 'Privacy Policy',
    '/recruit/': 'Recruit',
    '/service/': 'Service',
}

export default function BreadcrumbJsonLd() {
    const pathname = usePathname()
    const path = pathname?.endsWith('/') ? pathname : `${pathname}/`
    if (!path || path === '/') return null

    const name = PATH_TO_NAME[path]
    if (!name) return null

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: BASE_URL + '/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name,
                item: BASE_URL + path,
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
