import { type WorkStyleItem } from '@/components/sections/recruit/RecruitWorkStylesSection'
import { type CareerPathItem } from '@/components/sections/recruit/RecruitCareerPathsSection'
import { type FaqItem } from '@/components/sections/recruit/RecruitFaqSection'
import { type FeatureItem } from '@/components/sections/recruit/RecruitFeaturesSection'
import { type FlowStepItem } from '@/components/sections/recruit/RecruitFlowSection'
import { type StaffCase } from '@/components/sections/recruit/StaffVoicesSection'

export const WORK_STYLES: WorkStyleItem[] = [
    {
        id: '01',
        title: '業務委託',
        label: '100% Remote',
        description: '自分のペースで、好きな場所から。月数時間からでも大丈夫です。',
        salaryAmount: '¥1,300',
        salaryUnit: '～/時',
        note: '業務ランクにより変動',
    },
    {
        id: '02',
        title: 'パート',
        label: 'Flexible',
        description: 'ライフスタイルに合わせて、無理のない範囲で。',
        salaryAmount: '¥1,250',
        salaryUnit: '～/時',
        note: null,
    },
    {
        id: '03',
        title: '正社員',
        label: 'Career',
        description: '長く、キャリアとして一緒に歩んでいきたい方へ。',
        salaryAmount: '¥210,000',
        salaryUnit: '～/月',
        note: '※経験・スキル・稼働状況に応じて決定',
    },
]

export const CAREER_PATHS: CareerPathItem[] = [
    {
        id: '01',
        title: 'オフィスワーク未経験の方',
        current: ['デスクワーク以外の仕事をしている', '将来、結婚や出産も視野に入れている'],
        steps: [
            'OurDeskと契約',
            '月数時間からスタート',
            '研修',
            'メインに切り替え',
            'ライフイベント後も柔軟な働き方実現',
        ],
    },
    {
        id: '02',
        title: '子育て中で月50～100時間しか働けない方',
        current: ['子どもは小学生', '以前は正社員、今はパート'],
        steps: [
            'キャリア面談',
            '実務経験',
            '資格取得',
            '働き方拡大',
            '正社員登用',
        ],
    },
]

export const FAQ_ITEMS: FaqItem[] = [
    {
        q: '未経験でも大丈夫ですか？',
        a: '研修制度があるため、問題ありません。「今できること」から始めて、少しずつスキルアップしていける環境を整えています。',
    },
    {
        q: '稼働時間はどれくらい必要ですか？',
        a: '月数時間からでも可能です。あなたのライフスタイルに合わせて、無理のない範囲で働けます。',
    },
    {
        q: '子どもの体調不良で休めますか？',
        a: 'チーム体制でフォローしますので、安心してください。急な休みにも対応できる体制を整えています。',
    },
]

export const FEATURES: FeatureItem[] = [
    {
        num: 'リモート',
        title: '100%',
        body: '全国どこからでも。通勤時間ゼロで、あなたの好きな場所から働けます。',
    },
    {
        num: '月数時間',
        title: '柔軟な働き方',
        body: 'ライフスタイルに合わせて。家事や育児との両立もしやすい環境です。',
    },
    {
        num: '未経験',
        title: 'OK',
        body: '研修制度完備。スキルは後から。まずは「働きたい」という気持ちを。',
    },
]

export const FLOW_STEPS: FlowStepItem[] = [
    { num: 1, title: '希望する案件内容を秘書長と相談', subtitle: null },
    { num: 2, title: 'お客様から案件が入ったタイミングでアサイン', subtitle: null },
    { num: 3, title: '必要に応じてお客様との面談', subtitle: null },
    { num: 4, title: '業務ランク・時給決定', subtitle: null },
    { num: 5, title: '半年ごとに時給UP交渉が可能', subtitle: '成長に応じて、定期的に待遇を見直します' },
]

// CTA背景の候補（切り替え時は ctaBg のパスだけ変更）:
// - cta-option1-gerbera.png   … ガーベラ（温かみ・歓迎）
// - cta-option2-portrait.png … 女性ポートレート逆光（爽やか・親しみ）
export const IMG = {
    hero: '/images/recruit/intro.jpeg',
    ctaBg: '/images/recruit/cta-option1-gerbera.png',
} as const

export const STAFF_CASES: StaffCase[] = [
    {
        id: '01',
        category: '業務委託→正社員',
        name: 'M.Iさん',
        age: '20代',
        workStyle: '正社員・9:00〜18:00',
        avatar: '/images/recruit/mi-avatar.png',
        tagline: '介護職からエンジニアへ。在宅で秘書・バックオフィス業務に携わる正社員',
        story: {
            before: '新卒で介護職として勤務し、その後エンジニアへ転職。IT業界で経験を積んできました。\n結婚を機に、「将来子どもができたとき、この働き方を続けられるだろうか？」と考えるようになりました。\n当時はフル出社が当たり前の環境で、子育てと両立できるイメージを持つことができず、在宅でもキャリアを築ける働き方を探し始めました。',
            trigger: '在宅で働ける環境でありながら、単なる作業ではなく、会社の土台づくりに関われる点に魅力を感じました。\nその環境で経験を積むことができれば、将来子どもができたときにも働き方の選択肢を持てるのではないかと考えました。\n長く続けられる働き方を実現できる場所だと感じ、入社を決めました。',
            now: '現在は社員として、9:00〜18:00で勤務しています。\nクライアントの秘書業務を担当しながら、請求業務をはじめとするバックオフィス業務にも携わっています。日々の業務の中で「もっとこうしたらやりやすいのでは」と感じたことは、チームで相談しながら少しずつ形にしています。\nまだまだ学ぶことは多いですが、現場と裏側の両方に関われていることが、自身の成長につながっていると実感しています。',
            changed: '今後ライフステージが変わっても働き続けられる環境があると実感できたことが、大きな変化です。\nそれぞれが自立して働いているメンバーと一緒に仕事ができるのも、これまでにない経験でした。働き方や価値観が違う中でも、お互いを尊重しながら協力して進めていく環境はとても新鮮で、日々刺激を受けています。\nクライアントには経営者の方も多く、直接やり取りをさせていただく中で、これまで触れることのなかった視点やスピード感を学べていることも、自身の成長につながっていると感じています。',
            future: 'これからも、自分のライフステージが変わっても安心して働き続けられる状態をつくっていきたいと考えています。\nそして、これから入ってくる方が安心してスタートできるよう、日々の業務の中で少しでも支えになれたら嬉しいです。\n自分自身もまだ成長の途中ですが、目の前の仕事に向き合いながら、会社全体がより働きやすくなるよう貢献していきます。',
        },
    },
]
