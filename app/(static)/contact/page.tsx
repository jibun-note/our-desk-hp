import ContactForm from '@/components/sections/ContactForm'
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
            <div className="relative z-[1] bg-[#f5ede0]">
                <HeroSection
                    title="Contact"
                    description="事業に関するご質問・採用・その他のご用件、どうぞお気軽にお声がけください。"
                    activeIndex={4}
                    className="bg-transparent"
                />
            </div>
            <ContactForm />
        </>
    )
}
