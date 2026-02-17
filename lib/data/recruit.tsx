import { type WorkStyleItem } from '@/components/sections/RecruitWorkStylesSection'
import { type CareerPathItem } from '@/components/sections/RecruitCareerPathsSection'
import { type FaqItem } from '@/components/sections/RecruitFaqSection'
import { type FeatureItem } from '@/components/sections/RecruitFeaturesSection'
import { type FlowStepItem } from '@/components/sections/RecruitFlowSection'
import { type StaffCase } from '@/components/sections/StaffVoices'

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

export const IMG = {
    hero: '/images/recruit/intro.png',
    ctaBg: '/images/recruit/cta-bg.png',
} as const

export const STAFF_CASES: StaffCase[] = [
    {
        id: '01',
        category: '子育て中ママ',
        name: 'M.Iさん',
        age: '30代',
        workStyle: '業務委託・月40時間',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
        tagline: '2児の母。完全リモートで子育てとキャリアを両立',
        story: {
            before: '第一子出産後に退職。社会から離れる不安と、外で働けない現実の間で悩んでいました。',
            trigger: '「月数時間からOK」という言葉に希望を感じました。面談で子育て優先を認めてもらえたことが決め手です。',
            now: '子どもの送り迎えや昼寝の間、夜の時間を使って月40時間働いています。急な体調不良にもチームでフォローしてもらえます。',
            changed: '「働く母親」としての自信を取り戻せました。収入も得られ、スキルも身について、将来への不安が減りました。',
            future: '子どもの成長に合わせて、パートや正社員も視野に。ライフステージが変わっても働き続けられる道が見えています。',
        },
    },
    {
        id: '02',
        category: '未経験スタート',
        name: 'K.Tさん',
        age: '20代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        tagline: '販売職から未経験でオフィスワークへ転身',
        story: {
            before: '販売職でしたが、将来のキャリアに不安を感じていました。オフィスワークの経験はゼロ。PCスキルもほぼありませんでした。',
            trigger: '「スキルより想いを大切にします」という言葉に救われました。研修制度があり、未経験でも挑戦できる環境だと感じました。',
            now: '今では企業の秘書業務を複数担当。スケジュール調整、資料作成、メール対応など、以前は想像もできなかった仕事をしています。',
            changed: 'Excel、Word、ビジネスツールが使えるようになり、ビジネスマナーも身につきました。「プロとして働いている」という実感が自信に。',
            future: 'チームリーダーとして、新しく入る未経験の方をサポートしたいです。私自身の経験を活かして、道しるべになりたいです。',
        },
    },
    {
        id: '03',
        category: '業務委託→正社員',
        name: 'A.Yさん',
        age: '30代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
        tagline: '月20時間の業務委託から、4年で正社員へステップアップ',
        story: {
            before: '育休明けに前職に戻れず、正社員で働きたいけれど条件に合う仕事が見つからない状況でした。',
            trigger: '「まずは業務委託で試してみて、合うか確かめてください」という柔軟な提案。無理なく始められる安心感がありました。',
            now: '業務委託→パート→正社員とステップアップ。完全リモートの正社員として、子育てしながらキャリアも諦めない働き方を実現しています。',
            changed: '「母親だから」とキャリアを諦めなくてよかったです。スキルも収入も向上し、自分らしく働けています。',
            future: 'マネジメント経験を積んで、同じように悩むママたちの道しるべに。ライフステージが変わっても働き続けられる環境を作りたいです。',
        },
    },
    {
        id: '04',
        category: 'パート→正社員',
        name: 'R.Sさん',
        age: '40代',
        workStyle: '正社員・フルタイム',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
        tagline: 'パートから3年で正社員登用。安定したキャリアを実現',
        story: {
            before: '子育てが一段落し、パートで働いていましたが、将来の安定性に不安がありました。正社員を目指したいけれど、年齢や経験がネックでした。',
            trigger: '面談で「年齢は関係ない、成長する意欲を大切にします」と言われたこと。キャリアパスが明確で、正社員登用の実績もあると知りました。',
            now: '正社員として、チームのマネジメントや新人育成も担当しています。安定した収入と、やりがいのある仕事を両立できています。',
            changed: '「40代からでも遅くない」と実感しました。スキルアップと収入アップを同時に実現でき、人生の選択肢が広がりました。',
            future: '今後は組織全体の効率化や、働きやすい環境づくりに貢献したいです。年齢を重ねても成長し続けられることを証明したいです。',
        },
    },
]
