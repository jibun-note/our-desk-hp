import ApplicationForm from '@/components/sections/ApplicationForm'
import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/recruit/apply/',
    '採用フォーム | OurDesk株式会社',
    'OurDesk株式会社へのご応募はこちらから。希望雇用形態・経歴などをご記入の上、お送りください。'
)

export default function RecruitApplyPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/recruit/apply/" name="採用フォーム" />
            <HeroSection
                title="RecruitForm"
                description="ご応募はこちらから"
                activeIndex={4}
                className="bg-[#f9ead4]"
            />
            <ApplicationForm />
        </>
    )
}
