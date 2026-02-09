import ComingSoonBlock from '@/components/sections/ComingSoonBlock'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/company/',
    'Company | OurDesk株式会社',
    'OurDesk株式会社の役員紹介、グループ体制、会社概要、アクセス情報をご紹介します。'
)

export default function CompanyPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/company/" name="Company" />
            <HeroSection title="Company" description="会社情報" />
            <ComingSoonBlock />
        </>
    )
}
