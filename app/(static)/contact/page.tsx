import ComingSoonBlock from '@/components/sections/ComingSoonBlock'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/contact/',
    'Contact | OurDesk株式会社',
    'OurDesk株式会社へのお問い合わせはこちらから。'
)

export default function ContactPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/contact/" name="Contact" />
            <HeroSection title="Contact" description="お問い合わせはこちら" />
            <ComingSoonBlock />
        </>
    )
}
