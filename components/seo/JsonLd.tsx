const BASE_URL = 'https://our-desk.co.jp'

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OurDesk株式会社',
    url: BASE_URL,
    logo: `${BASE_URL}/images/shared/our-desk-logo.png`,
    description: 'OurDesk株式会社の公式ホームページ',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'JP',
        addressRegion: '東京都',
        addressLocality: '港区',
        streetAddress: '南青山1-15-27 YMビル1階',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        url: `${BASE_URL}/contact/`,
        contactType: 'customer service',
        areaServed: 'JP',
    },
}

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OurDesk株式会社',
    url: BASE_URL,
    description: 'OurDesk株式会社の公式ホームページ',
}

export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteJsonLd),
                }}
            />
        </>
    )
}
