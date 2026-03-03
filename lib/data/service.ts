/**
 * Service (BackDesk) ページ用データ
 * 企業担当者が読みやすく、BackDeskの管理体制・機能を強調した構成
 */

// ── Hero ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'BackDesk by OurDesk',
  headline: '本業に集中\nできていますか？',
  sub:
    'メール対応、日程調整、請求書処理——その業務を、管理可能な外部基盤へ。\nOurDeskが引き受けます。',
  backDeskIntro:
    'OurDeskでは、独自の業務管理システム 「BackDesk」 で稼働・報告・請求を一元化し、品質と透明性を担保しています。',
  ctaPrimary: 'まずは相談してみる',
} as const

// ── Anchor (3 columns) ───────────────────────────────────────────────────
export type AnchorItem = {
  label: string
  value: string
  valueSuffix?: string
  description: string
}

export const ANCHOR_ITEMS: AnchorItem[] = [
  {
    label: '自分でやり続けると…',
    value: '週3〜4',
    valueSuffix: '時間',
    description: 'メール・書類・調整などの事務作業で消える時間の目安です。',
  },
  {
    label: '年間に換算すると',
    value: '約150〜200',
    valueSuffix: '時間',
    description: '本業・企画・顧客対応に充てられる可能性がある時間です。',
  },
  {
    label: 'それでも',
    value: '正社員を雇うほどではない。',
    valueSuffix: undefined,
    description:
      '採用・教育・固定費をかけるほどではないけれど、確実に時間は奪われている。必要な分だけ柔軟に対応できるのが BackDesk です。数分の単発タスクからお任せいただけます。',
  },
]

// ── BackDeskが選ばれる理由 ─────────────────────────────────────────────
export const BACKDESK_REASONS = {
  eyebrow: 'BackDeskが選ばれる理由',
  headline: 'すべて見える\nだから任せられる',
  items: [
    '業務はすべてシステムで登録・可視化され、内容が明確に残ります。',
    'PMによる確認・承認フローで品質を担保しています。',
    '登録された稼働内容に基づき請求を自動算出。請求内容が明確です。',
    '顧客側でも業務状況・請求状況をいつでも確認できます。',
    '顧客・秘書・管理者の権限を分離し、情報管理を徹底しています。',
  ],
} as const

// ── Pain (よくある課題・3つに絞る) ─────────────────────────────────────
export type PainItem = {
  title: string
  body: string
}

export const PAIN = {
  eyebrow: 'よくある課題',
  headline: 'こんなお悩みは\nありませんか？',
  cta: 'まずは相談してみる',
} as const

export const PAIN_ITEMS: PainItem[] = [
  {
    title: '返信・連絡対応に意外と時間がかかる',
    body: 'メールやLINEの返信、案内連絡——気づくと意外と時間を取られてしまう。',
  },
  {
    title: '請求や契約書の管理がじわじわ負担に',
    body: '請求書の送付・格納、契約書の確認。毎月あるのにずっと自分でやっている。',
  },
  {
    title: 'スケジュール調整の往復に手間がかかる',
    body: '日程調整だけで何通もやりとり。リマインドも自分で送っている。',
  },
]

// ── Services（8カテゴリ） ─────────────────────────────────────────────────
export type ServiceCategoryItem = {
  title: string
  lines: string[]
}

export const SERVICES_HEAD = {
  eyebrow: '対応できる業務',
  headline: 'OurDeskがサポートできること',
  body: '掲載以外もお気軽にご相談ください。',
  footer:
    '上記の業務は、難易度や専門性に応じて最適なスタッフをアサインし、必要な時間だけ柔軟に対応します。数分単位の単発タスクから承ります。',
} as const

export const SERVICE_CARDS: ServiceCategoryItem[] = [
  {
    title: 'コミュニケーション・調整',
    lines: [
      'メール・LINE返信、リマインド送信、一斉配信',
      '会議の日程調整、出欠確認、グループチャット管理',
    ],
  },
  {
    title: '書類・請求管理',
    lines: [
      '請求書・契約書の作成・管理、領収書整理',
      '見積書や各種報告書、レポート作成',
    ],
  },
  {
    title: '調査・企画支援',
    lines: [
      '業界・競合リサーチ、広告効果レポート、営業提案書作成',
      '新人研修プログラムや社内研修資料の作成',
    ],
  },
  {
    title: '採用・人事サポート',
    lines: [
      '面接対応や面接結果フィードバック、採用スケジュール調整',
      '応募者データ管理、給与計算、新人オンボーディング',
    ],
  },
  {
    title: 'マーケティング・広報支援',
    lines: [
      'プレスリリースやPRイベント企画・校正',
      'SNSアカウント運用、ニュースレター作成、顧客満足度調査',
    ],
  },
  {
    title: '顧客対応・セールス支援',
    lines: [
      'インサイドセールス、テレマーケティング、既存顧客フォロー',
      'カスタマーサポート窓口、予約・問い合わせ対応',
    ],
  },
  {
    title: 'IT・システム運用',
    lines: [
      'システム監視と障害対応、セキュリティポリシー策定',
      '運用システム設計、IT資産管理、オンライン会議設定',
    ],
  },
  {
    title: 'プロジェクトマネジメント',
    lines: [
      'プロジェクトの進捗管理、レポート作成、タスク調整',
    ],
  },
]

// ── Process (4〜5ステップ・1行でまとめる) ─────────────────────────────
export type ProcessStepItem = {
  num: string
  title: string
  body: string
  active?: boolean
}

export const PROCESS_HEAD = {
  eyebrow: 'ご利用の流れ',
  headline: 'カンタン3ステップで開始',
} as const

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    num: '01',
    title: '無料相談・ヒアリング',
    body: '何を任せられるかわからない方も大歓迎。お気軽にご相談ください。',
    active: true,
  },
  {
    num: '02',
    title: 'スタッフのご提案',
    body: '業務に合ったスタッフをご提案。必要に応じて面談も実施します。',
    active: false,
  },
  {
    num: '03',
    title: '契約・業務開始',
    body: '連絡ツールや報告ルールを確認し、稼働スタート。',
    active: false,
  },
  {
    num: '04',
    title: '稼働の確認・請求',
    body: '実施内容・稼働時間・請求はBackDesk上でいつでも確認できます。',
    active: false,
  },
  {
    num: '05',
    title: '継続・スケールアップ',
    body: '業務量に合わせて稼働時間を柔軟に調整できます。',
    active: false,
  },
]

// ── Case studies ────────────────────────────────────────────────────────
export type CaseStudyItem = {
  chip: string
  situation: string
  tasks: string[]
  result: string
  image: string
  imageAlt: string
}

export const CASE_STUDIES_HEAD = {
  eyebrow: '実際の活用シーン',
  headline: '任せてよかった、の声',
} as const

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    chip: 'IT系・一人法人',
    situation:
      '毎月の請求書処理やお客様へのリマインドを自分で担当し、事務だけで週3〜4時間消えていた。',
    tasks: ['請求書の送付・格納・リスト記入', '前日リマインド・合否連絡', '月次スケジュール配信'],
    result:
      '本業に充てる時間が週3〜4時間増え、BackDeskで実施内容を随時確認できるため安心して継続。',
    image: '/images/company/office-bg.jpeg',
    imageAlt: 'IT系・一人法人',
  },
  {
    chip: 'Web系・講座・コミュニティ運営',
    situation:
      'メールやLINE、グループチャットの対応が追いつかなくなり、受講生からの問い合わせ対応に時間を取られていた。',
    tasks: ['LINE返信・ブラックリスト管理', 'オープンチャット投稿', '出欠確認・スケジュール配信'],
    result:
      '受講生対応のレスポンスが安定し、クレームが減少。必要な時間だけ依頼し、業務量に合わせて調整しています。',
    image: '/images/contact/contact-bg.jpeg',
    imageAlt: 'Web系・講座・コミュニティ運営',
  },
]

// ── Stats band ───────────────────────────────────────────────────────────
export type StatItem = {
  num: string
  label: string
  note?: string
}

export const STATS: StatItem[] = [
  { num: '95%', label: 'スタッフ定着率', note: '（NEUGATEグループ実績）' },
  { num: '1件〜', label: 'タスクから依頼可能' },
  { num: '迅速な対応', label: '' },
]

// ── Staff ───────────────────────────────────────────────────────────────
export type StaffItem = {
  badge: string
  hours: string
  description: string
}

export const STAFF_HEAD = {
  eyebrow: 'スタッフ紹介',
  headline: '業務を担う\nスタッフたち',
  body: '長期的に伴走できる人材を揃えています。',
} as const

export const STAFF_ITEMS: StaffItem[] = [
  {
    badge: 'リモート・長期対応可',
    hours: '月40時間・業務委託',
    description:
      'メール対応とスケジュール管理を中心に長期で活躍。定期的な報告と丁寧なコミュニケーションが強み。',
  },
  {
    badge: '子育てしながら活躍中',
    hours: '月20時間・業務委託',
    description:
      '請求書処理と書類管理が得意。細かい作業も確実にこなし、ミスゼロの対応で信頼を積み上げています。',
  },
  {
    badge: '複数案件対応可',
    hours: '月60時間・業務委託',
    description:
      '連絡対応から複雑な調整業務まで幅広く対応。複数のクライアントを同時に担当。',
  },
]

// ── FAQ（必要な数だけ・簡潔に） ───────────────────────────────────────
export type FaqItem = {
  q: string
  a: string
}

export const FAQ_HEAD = {
  eyebrow: 'よくある質問',
  headline: '気になることは\nなんでも聞いてください',
  body: '相談だけでもOKです。',
} as const

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'どんな業務を依頼できますか？',
    a: 'メール・LINE対応、スケジュール調整、請求書処理、書類管理に加え、調査・企画支援、人事・採用サポート、マーケティング・広報支援、システム運用まで幅広く対応します。単発のタスクでもご相談ください。',
  },
  {
    q: '最低利用時間はありますか？',
    a: 'ありません。5分のタスクからでも承ります。小さく始めて、業務量に合わせて調整できます。',
  },
  {
    q: '依頼してからどれくらいで対応してもらえますか？',
    a: 'ご相談後、できるだけ早く対応いたします。お気軽にご連絡ください。',
  },
  {
    q: '業務の進捗や請求は確認できますか？',
    a: 'はい。BackDesk上で稼働内容・請求内容をいつでも確認できます。請求は登録された稼働に基づき自動算出され、内容が明確です。',
  },
]

// ── CTA（統一：「まずは相談してみる」） ─────────────────────────────────
export const CTA = {
  headline: '「何を任せればいいか」\n一緒に考えます',
  headlineGrad: '一緒に考えます',
  sub: 'まだ具体的でなくても大丈夫です。',
  button: 'まずは相談してみる →',
} as const

// ── Images ─────────────────────────────────────────────────────────────
export const IMG = {
  hero: '/images/about-us/02.jpeg',
  pain: '/images/recruit/intro.jpeg',
  faq: '/images/about-us/03.jpeg',
  case1: '/images/company/office-bg.jpeg',
  case2: '/images/contact/contact-bg.jpeg',
  /** CTA セクション背景（Recruit と同様の WaveClipLayer 用） */
  ctaBg: '/images/contact/contact-bg.jpeg',
} as const
