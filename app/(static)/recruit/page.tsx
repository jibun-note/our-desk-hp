import BlobDecoration from '@/components/ui/BlobDecoration'
import WaveDivider from '@/components/ui/WaveDivider'
import HeroSection from '@/components/sections/HeroSection'
import RecruitIntroSection from '@/components/sections/RecruitIntroSection'
import RecruitFeaturesSection from '@/components/sections/RecruitFeaturesSection'
import RecruitWorkStylesSection from '@/components/sections/RecruitWorkStylesSection'
import RecruitCareerPathsSection from '@/components/sections/RecruitCareerPathsSection'
import RecruitFlowSection from '@/components/sections/RecruitFlowSection'
import RecruitFaqSection from '@/components/sections/RecruitFaqSection'
import StaffVoices from '@/components/sections/StaffVoices'
import RecruitCtaSection from '@/components/sections/RecruitCtaSection'
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
            <main className="min-h-screen bg-white relative">
                {/* 1+2+3 統合ラッパー: ヒーローからクリーム背景で一体感を持たせる */}
                <div className="relative z-[1] bg-[#fffdf5]">
                    {/* Blob装飾: ラベンダー雲（ヒーロー〜特徴にかけて自然に流れる） */}
                    <BlobDecoration
                        shape="cloud"
                        drift="diagonal"
                        background="rgba(178, 186, 230, 0.25)"
                        className="top-[60vw] md:top-[-5vw] left-[-15vw] w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw]"
                    />
                    <HeroSection title="Recruit" description="私たちは、「人と人の関係性」を大切にしています" activeIndex={3} />
                    <RecruitIntroSection heroImage={IMG.hero} />
                    <RecruitFeaturesSection features={FEATURES} />
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

                {/* 9. スタッフの声（タイムライン形式） */}
                <div className="relative z-[13] bg-white">
                    {/* Blob装飾: ソフトピンク雲（左上にはみ出す → カードの背面に表示） */}
                    <BlobDecoration
                        shape="cloud"
                        drift="vertical"
                        background="rgba(235, 180, 178, 0.18)"
                        className="w-[62vw] h-[62vw] md:w-[37vw] md:h-[37vw]"
                        style={{ top: '-5vw', left: '-12vw' }}
                    />
                    <div className="relative z-10 [&>section]:bg-transparent">
                        <StaffVoices staffCases={STAFF_CASES} />
                    </div>
                </div>

                {/* 10. 統合メッセージ＆CTAセクション */}
                <RecruitCtaSection ctaBgImage={IMG.ctaBg} />
            </main>
        </>
    )
}
