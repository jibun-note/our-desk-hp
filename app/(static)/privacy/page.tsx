import ComingSoonBlock from '@/components/sections/ComingSoonBlock'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/privacy/',
    'Privacy Policy | OurDesk株式会社',
    'OurDesk株式会社のプライバシーポリシー'
)

export default function PrivacyPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/privacy/" name="Privacy Policy" />
            <HeroSection title="Privacy Policy" description="プライバシーポリシー" />
            <ComingSoonBlock />
        </>
    )
}
