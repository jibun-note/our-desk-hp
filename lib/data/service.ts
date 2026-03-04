/**
 * Service (BackDesk) ページ用データ
 * 企業担当者が読みやすく、BackDeskの管理体制・機能を強調した構成
 */

// ── Hero ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'BackDesk by OurDesk',
  headline: '本業に集中\nできていますか？',
  sub:
    'メール対応、日程調整、請求処理。\n「やらなきゃいけないけど、あなたがやる必要はない業務」を、OurDeskが引き受けます。',
  backDeskIntro:
    'OurDeskは、独自の業務管理システム 「BackDesk」 を活用し、依頼・稼働・報告・請求を"見える化"して運用しています。任せっぱなしにしない、管理できる外部サポートです。',
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
    label: '自分で抱え続けると…',
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
    label: 'それでも、',
    value: '正社員を雇うほどではない',
    valueSuffix: undefined,
    description:
      '採用・教育・固定費をかけるほどではない。でも、確実に業務は積み上がっていく。BackDeskは、必要な分だけ柔軟に依頼できます。数分の単発タスクから、定常運用・プロジェクト単位まで対応可能です。',
  },
]

// ── BackDeskが選ばれる理由 ─────────────────────────────────────────────
export const BACKDESK_REASONS = {
  eyebrow: 'BackDeskが選ばれる理由',
  headline: 'すべて見える\nだから任せられる',
  items: [
    '稼働はすべてシステムに記録：実施内容・時間・履歴が残り、口頭ベースになりません。',
    '確認フローで品質を整える：依頼・報告・作業の粒度を揃え、抜け漏れを防ぎます。',
    '稼働と請求が連動：「何に対する請求か」が分かる状態で管理できます。',
    'いつでも状況を確認できる：業務の進捗・実施内容・稼働時間を把握できます。',
    '権限分離で情報管理：閲覧範囲を分け、必要な情報だけにアクセスを制御します。',
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
    title: '連絡・調整が意外と時間を奪う',
    body: 'メールやチャットの返信、案内連絡、リマインド。気づくと夕方。',
  },
  {
    title: '請求や契約書など、毎月の管理がじわじわ負担',
    body: '請求書作成・送付、格納、未払い対応、契約更新。',
  },
  {
    title: '社内の"やる人"が固定されて属人化している',
    body: '引き継げない／止まる／品質がブレる。外注しても管理が不安。',
  },
]

// ── Services（8カテゴリ） ─────────────────────────────────────────────────
export type ServiceCategoryItem = {
  title: string
  lines: string[]
}

export const SERVICES_HEAD = {
  eyebrow: '対応できる業務',
  headline: '「秘書業務」だけではありません',
  body: 'BackDeskは、バックオフィスの実務から、調査・資料作成・採用運用・広報支援・IT運用まで幅広くサポートします。',
  footer:
    '上記は一例です。「この業務は頼める？」という段階から、一緒に整理できます。',
} as const

export type ServiceGroup = {
  label: string
  cards: ServiceCategoryItem[]
}

export const SERVICES_GROUPS: ServiceGroup[] = [
  {
    label: 'よく依頼される業務（まずはここから）',
    cards: [
      {
        title: 'コミュニケーション・調整',
        lines: [
          'メール／チャット対応、返信案作成',
          'リマインド送信、一斉配信',
          'オンラインコミュニティ運営補助（投稿・案内）',
        ],
      },
      {
        title: 'スケジュール・会議運用',
        lines: [
          '日程調整、出欠確認',
          '会議設定（Zoom等）、議事録',
          '月次スケジュール配信、グループチャット管理',
        ],
      },
      {
        title: '請求・契約・書類管理',
        lines: [
          '請求書・見積書・領収書の作成／送付／格納',
          '契約書管理、契約更新のスケジュール管理',
          '経費精算の整理、支払いスケジュール管理',
        ],
      },
    ],
  },
  {
    label: 'さらに任せられる業務（業務が回り始めたら）',
    cards: [
      {
        title: '調査・資料作成／企画支援',
        lines: [
          '業界トレンド・競合調査、リサーチ取りまとめ',
          '提案書・企画書・社内外向け資料作成',
          'KPI／データ集計、レポート作成、グラフ作成',
        ],
      },
      {
        title: '採用・人事・オンボーディング支援',
        lines: [
          '面接日程調整、面接対応の補助、結果連絡文の整備',
          '応募者データ管理、採用プロセス運用',
          '新人研修／オンボーディング資料整備、進捗管理',
        ],
      },
      {
        title: '広報・マーケ・顧客対応支援',
        lines: [
          'SNS運用、ニュースレター作成、配信管理',
          'プレスリリースの作成・校正、PR施策の補助',
          'カスタマーサポート一次対応、予約・問い合わせ対応',
        ],
      },
      {
        title: 'IT・運用サポート／プロジェクト運用',
        lines: [
          '社内IT問い合わせ一次対応、IT資産管理',
          '運用レポート作成、マニュアル化',
          '障害一次対応（状況整理・連絡・記録）、タスク進行管理',
        ],
      },
    ],
  },
]

// ── Staff（スタッフ紹介・バッジ・稼働・説明） ─────────────────────────
export type StaffItem = {
  badge: string
  hours: string
  description: string
}

export const STAFF_HEAD = {
  eyebrow: 'BackDeskのスタッフ',
  headline: '経験豊富な\nスタッフがサポート',
  body: 'バックオフィス業務に精通したスタッフが、依頼内容に合わせて対応します。',
} as const

export const STAFF_ITEMS: StaffItem[] = [
  {
    badge: '事務・調整',
    hours: '月〜金 9:00〜18:00',
    description: 'メール対応、日程調整、請求処理など日常のバックオフィス業務を担当。',
  },
  {
    badge: '調査・資料',
    hours: '依頼に応じて',
    description: 'リサーチ、提案書・資料作成、データ集計など、プロジェクト単位で対応。',
  },
  {
    badge: '広報・採用',
    hours: '依頼に応じて',
    description: 'SNS運用、採用プロセス支援、オンボーディング資料整備など。',
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
      '請求処理とリマインド・案内を自分で担当し、事務だけで週3〜4時間消えていた。',
    tasks: [
      '請求書の作成・送付・格納',
      '前日リマインド／案内連絡',
      '月次スケジュール配信',
    ],
    result:
      '本業に充てる時間が増え、実施内容はBackDeskで確認できるため安心して継続。',
    image: '/images/company/office-bg.jpeg',
    imageAlt: 'IT系・一人法人',
  },
  {
    chip: 'Web系・講座／コミュニティ運営',
    situation:
      'メール・LINE・チャット対応が追いつかず、問い合わせ対応に時間を取られていた。',
    tasks: [
      '返信対応、案内文作成、投稿代行',
      '出欠確認、日程調整、スケジュール配信',
    ],
    result:
      '対応品質が安定し、運営が回るように。必要な範囲から依頼して調整中。',
    image: '/images/contact/contact-bg.jpeg',
    imageAlt: 'Web系・講座／コミュニティ運営',
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
  { num: 'タスク単位で依頼可能', label: '' },
  { num: '迅速に対応', label: '' },
]

export const STATS_HEAD = {
  eyebrow: '',
  headline: '参考指標（任せやすさの目安）',
} as const

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
    a: '連絡・調整・請求などのバックオフィス実務に加え、調査・資料作成、採用運用、広報支援、IT運用まで幅広く対応します。まずは「今いちばん手放したい業務」からご相談ください。',
  },
  {
    q: '最低利用時間はありますか？',
    a: 'ありません。数分の単発タスクから、定常運用まで柔軟に対応します。',
  },
  {
    q: '依頼してからどれくらいで対応してもらえますか？',
    a: 'ご相談後、体制が整い次第すぐに開始できます。急ぎのタスクがある場合も含めてご相談ください。',
  },
  {
    q: '業務の進捗や請求は確認できますか？',
    a: 'はい。BackDesk上で実施内容・稼働時間・請求の状況を確認できます。稼働と請求を紐づけて管理できるため、内容が曖昧になりません。',
  },
]

// ── CTA（統一：「まずは相談してみる」） ─────────────────────────────────
export const CTA = {
  headline: '「何を任せればいいか」から一緒に考えます',
  headlineGrad: '一緒に考えます',
  sub: 'まだ具体的でなくても大丈夫です。まずは状況を聞かせてください。',
  button: 'まずは相談してみる',
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
