import ComingSoonBlock from '@/components/sections/ComingSoonBlock'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/service/',
    'Service | OurDesk株式会社',
    'OurDesk株式会社が提供するサービスをご紹介します。'
)

export default function ServicePage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/service/" name="Service" />
            <HeroSection title="Service" description="OurDeskが提供するサービス" activeIndex={0} />
            <ComingSoonBlock />
        </>
    )
}
