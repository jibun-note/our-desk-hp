import BlobDecoration from '@/components/ui/BlobDecoration'
import WaveDivider from '@/components/ui/WaveDivider'
import HeroSection from '@/components/sections/HeroSection'
import RecruitIntroSection from '@/components/sections/recruit/RecruitIntroSection'
import RecruitFeaturesSection from '@/components/sections/recruit/RecruitFeaturesSection'
import RecruitWorkStylesSection from '@/components/sections/recruit/RecruitWorkStylesSection'
import RecruitCareerPathsSection from '@/components/sections/recruit/RecruitCareerPathsSection'
import RecruitFlowSection from '@/components/sections/recruit/RecruitFlowSection'
import RecruitFaqSection from '@/components/sections/recruit/RecruitFaqSection'
import StaffVoicesSection from '@/components/sections/recruit/StaffVoicesSection'
import RecruitCtaSection from '@/components/sections/recruit/RecruitCtaSection'
import ApplicationForm from '@/components/sections/ApplicationForm'
import RecruitPageScrollToTop from '@/components/ui/RecruitPageScrollToTop'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'
import {
    WORK_STYLES,
    CAREER_PATHS,
    FAQ_ITEMS,
    FEATURES,
    FLOW_STEPS,
    STAFF_CASES,
    IMG,
    SOCIAL_PROOF_MESSAGE,
} from '@/lib/data/recruit'

export const metadata = createPageMetadata(
    '/recruit/',
    '採用情報 | OurDesk株式会社',
    'OurDeskの採用情報。「働きたい」という気持ちを育てる。スキルや経歴よりも、「誰かの役に立ちたい」という想いを大切にします。'
)

export default function RecruitPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/recruit/" name="採用情報" />
            <RecruitPageScrollToTop />
            <main className="min-h-screen bg-white relative">
                {/* 1+2+3 統合ラッパー: ヒーローからクリーム背景で一体感を持たせる */}
                <div className="relative z-[1] bg-[#fffdf5]">
                    {/* Blob装飾: ラベンダー雲（ヒーロー〜特徴にかけて自然に流れる） */}
                    <BlobDecoration
                        shape="H"
                        drift="float-a"
                        fill="rgba(178, 186, 230, 0.2)"
                        className="top-[-12vw] md:top-[-5vw] left-[-28vw] md:left-[-15vw] w-[75vw] h-[75vw] md:w-[40vw] md:h-[40vw]"
                    />
                    <HeroSection title="Recruit" description="私たちは、「人と人の関係性」を大切にしています" activeIndex={3} />
                    <RecruitIntroSection heroImage={IMG.hero} />
                    <RecruitFeaturesSection features={FEATURES} socialProofMessage={SOCIAL_PROOF_MESSAGE} />
                </div>

                {/* 4. 募集形態・待遇（3つの働き方） */}
                <RecruitWorkStylesSection workStyles={WORK_STYLES} />

                {/* Wave: Section 4 → 5 */}
                <WaveDivider bgColor="#ffffff" fillColor="#fffdf5" className="z-[6]" />

                {/* 5. キャリアの描き方 */}
                <RecruitCareerPathsSection careerPaths={CAREER_PATHS} />

                {/* Wave: Section 5 → 6 */}
                <WaveDivider bgColor="#fffdf5" fillColor="#ffffff" className="z-[8]" />

                {/* 6. 案件参画までの流れ */}
                <RecruitFlowSection flowSteps={FLOW_STEPS} />

                {/* Wave: Section 6 → 8 */}
                <WaveDivider bgColor="#fefcf7" fillColor="#ffffff" flip className="z-[10]" />

                {/* 8. よくある質問 */}
                <RecruitFaqSection faqItems={FAQ_ITEMS} />

                {/* Wave: Section 8 → 9 */}
                <WaveDivider bgColor="#fefcf7" fillColor="#ffffff" className="z-[12]" />

                {/* 9. スタッフの声（タイムライン形式）— 白セクション・Blobなし */}
                <div className="relative z-[13] bg-white">
                    <div className="relative z-10 [&>section]:bg-transparent">
                        <StaffVoicesSection staffCases={STAFF_CASES} />
                    </div>
                </div>

                {/* 10. 統合メッセージ＆CTAセクション */}
                <RecruitCtaSection ctaBgImage={IMG.ctaBg} />
                <ApplicationForm />
            </main>
        </>
    )
}
