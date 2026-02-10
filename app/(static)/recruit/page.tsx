import ComingSoonBlock from '@/components/sections/ComingSoonBlock'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/recruit/',
    'Recruit | OurDesk株式会社',
    'OurDesk株式会社の採用情報をご紹介します。'
)

export default function RecruitPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/recruit/" name="Recruit" />
            <HeroSection title="Recruit" description="採用情報" />
            <ComingSoonBlock />
        </>
    )
}
