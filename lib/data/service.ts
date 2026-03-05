/**
 * Service (BackDesk) ページ用データ
 *
 * コンセプト：
 * 「タスクを処理してくれる外注先」ではなく
 * 「自分のビジネスを本当に支えてくれる人と出会える場所」として見せる。
 *
 * サイト全体のトーン（「働きたい人材が、あなたのビジネスを支える仕組み」）と
 * 一貫した軸で構成する。
 *
 * セクション順:
 * 1. Hero        ── 人との出会いとして提示
 * 2. Bridge      ── 「外注」ではなく「出会い」である理由
 * 3. Pain        ── 課題（業務負担 × 採用リスクの両面）
 * 4. How         ── 仕組みの説明（分単位・柔軟・BackDesk）
 * 5. Pricing     ── 料金
 * 6. Process     ── ご利用の流れ
 * 7. Services    ── 対応業務一覧
 * 8. CaseStudies ── 活用シーン
 * 9. FAQ
 * 10. CTA
 */

// ── Hero ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'BackDesk by OurDesk',
  headline: 'あなたのビジネスを\n支えてくれる人と、出会う。',
  sub:
    '「働きたい」という想いを持つ人材が、あなたの業務を引き受けます。\n小さな依頼から始めて、やがてなくてはならない存在へ。',
  ctaPrimary: 'まずは相談してみる',
} as const

// ── Bridge（Heroの直下・コンセプトを一言で補足） ─────────────────────
export const BRIDGE = {
  headline: 'これは「外注」ではありません。',
  body:
    'OurDeskが提供するのは、タスクをこなす仕組みだけではありません。\n一緒に仕事をしながら信頼関係を育て、将来の正式採用にもつながる。\n新しい人材確保の形です。',
} as const

// ── Pain（課題） ─────────────────────────────────────────────────────────
export type PainItem = {
  title: string
  body: string
}

export const PAIN = {
  eyebrow: 'こんな状況、ありませんか？',
  headline: '業務は積み上がる。けど、\n採用には踏み切れない',
  cta: 'まずは相談してみる',
} as const

export const PAIN_ITEMS: PainItem[] = [
  {
    title: 'メール、調整、請求……地味な業務が本業を圧迫している',
    body: '気づくと夕方。やらなきゃいけないのはわかってるけど、自分がやる必要はないはずの仕事。',
  },
  {
    title: '正社員を雇うほどではないけれど、誰かに任せたい',
    body: '採用コスト、教育コスト、ミスマッチのリスク。そこまでかけるほどの量ではない。でも業務は確実に積み上がっていく。',
  },
  {
    title: '採用しても、すぐ辞められる・合わないが怖い',
    body: '雇ってみないとわからない。でも雇ってから気づくのでは遅い。そのリスクを取り続けている。',
  },
]

// ── How（仕組みの説明） ───────────────────────────────────────────────────
export type HowItem = {
  title: string
  body: string
  accent?: boolean
}

export const HOW = {
  eyebrow: 'OurDeskの仕組み',
  headline: '小さく始めて、\nじっくり育てる',
  sub: '固定費なし、最低時間なし、ミスマッチのリスクなし。',
} as const

export const HOW_ITEMS: HowItem[] = [
  {
    title: '分単位で依頼できる。縛りは一切なし',
    body: '「請求書を1通送ってほしい」そんな小さな依頼から始められます。月に何時間以上という縛りはなく、サービスは分単位でご利用可能。必要な分だけ、必要なときに。',
    accent: true,
  },
  {
    title: '仕事を通じて、信頼関係を育てる',
    body: '新人育成の現場のように、一緒に業務を重ねながら関係を築いていきます。業務を理解し、提案ができる存在へと成長していきます。',
  },
  {
    title: '稼働・請求はシステムで見える',
    body: '何をやってもらったか、いくらかかったか。BackDesk上で確認できるので、任せっぱなしになりません。',
  },
  {
    title: 'ノーリスクで人材を見極められる',
    body: '雇用前に一緒に仕事ができます。「この人と長く働きたい」と思ったら、双方の希望に応じて正式な雇用に切り替えることも可能です。',
  },
]

// ── Pricing ───────────────────────────────────────────────────────────────
export type PricingItem = {
  rank: string
  price: string
  description: string
  examples: string[]
}

export const PRICING_HEAD = {
  eyebrow: '料金',
  headline: '業務の種類に合わせた\nシンプルな時間単価',
  sub: 'サービスは分単位でご利用可能。最低時間の縛りはありません。',
  note: '※ 秘書の指名・時間指定のオプションには追加料金が必要です。\n※ 価格は税別表示です。',
} as const

export const PRICING_ITEMS: PricingItem[] = [
  {
    rank: 'ランクA',
    price: '2,500',
    description: '高度な判断・専門性が求められる業務',
    examples: ['調査・資料作成', '企画書・提案書の作成', 'プロジェクト管理'],
  },
  {
    rank: 'ランクB',
    price: '2,300',
    description: '進行管理・社内調整などの業務',
    examples: ['採用・オンボーディング支援', '広報・SNS運用', 'IT一次対応'],
  },
  {
    rank: 'ランクC',
    price: '2,200',
    description: '手順に沿って進める定型業務',
    examples: ['メール・チャット対応', '請求書・書類管理', '日程調整・議事録'],
  },
]

// ── Process ───────────────────────────────────────────────────────────────
export type ProcessStepItem = {
  num: string
  title: string
  body: string
  active?: boolean
}

export const PROCESS_HEAD = {
  eyebrow: 'ご利用の流れ',
  headline: 'まずは相談から\n小さく始められます',
} as const

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    num: '01',
    title: '無料相談・ヒアリング',
    body: '何を任せられるかわからない方も大歓迎。現状の業務や課題をお聞きします。',
    active: true,
  },
  {
    num: '02',
    title: 'スタッフのご提案',
    body: '業務内容に合ったスタッフをご提案。必要に応じて事前面談も実施します。',
  },
  {
    num: '03',
    title: '契約・業務開始',
    body: '連絡ツールや報告ルールを確認し、稼働スタート。小さく始められます。',
  },
  {
    num: '04',
    title: '稼働・確認',
    body: '実施内容・稼働時間・請求はBackDesk上でいつでも確認できます。',
  },
  {
    num: '05',
    title: '継続・スケールアップ',
    body: '信頼関係が育ったら、依頼の幅を広げたり、正式採用の検討も。',
  },
]

// ── Services ──────────────────────────────────────────────────────────────
export type ServiceCategoryItem = {
  title: string
  lines: string[]
}

export const SERVICES_HEAD = {
  eyebrow: '対応できる業務',
  headline: 'まずは「手放したい業務」から',
  body: 'バックオフィスの日常業務から、調査・資料作成・採用支援・広報・IT運用まで。「これは頼める？」という段階からご相談ください。',
  footer: '上記は一例です。まずはご相談ください。',
} as const

export type ServiceGroup = {
  label: string
  cards: ServiceCategoryItem[]
}

export const SERVICES_GROUPS: ServiceGroup[] = [
  {
    label: 'まずはここから',
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
    label: '慣れてきたら、さらに任せられる',
    cards: [
      {
        title: '調査・資料作成／企画支援',
        lines: [
          '業界トレンド・競合調査、リサーチ取りまとめ',
          '提案書・企画書・社内外向け資料作成',
          'KPI／データ集計、レポート作成',
        ],
      },
      {
        title: '採用・人事・オンボーディング支援',
        lines: [
          '面接日程調整、結果連絡文の整備',
          '応募者データ管理、採用プロセス運用',
          'オンボーディング資料整備、進捗管理',
        ],
      },
      {
        title: '広報・マーケ・顧客対応支援',
        lines: [
          'SNS運用、ニュースレター作成・配信',
          'プレスリリースの作成・校正',
          'カスタマーサポート一次対応',
        ],
      },
      {
        title: 'IT・運用サポート',
        lines: [
          '社内IT問い合わせ一次対応、IT資産管理',
          '運用レポート作成、マニュアル化',
          'タスク進行管理、障害一次対応',
        ],
      },
    ],
  },
]

// ── Case studies ──────────────────────────────────────────────────────────
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
  headline: '小さく始めて、\nなくてはならない存在へ',
} as const

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    chip: 'IT系・一人法人',
    situation:
      '請求処理とリマインド送信を自分で担当し、事務だけで週3〜4時間消えていた。正社員を雇うほどではないと感じていた。',
    tasks: [
      '請求書の作成・送付・格納',
      '前日リマインド／案内連絡',
      '月次スケジュール配信',
    ],
    result:
      '本業に充てる時間が増えた。稼働内容はBackDeskで確認でき、安心して継続中。依頼の幅も少しずつ広がっている。',
    image: '/images/company/office-bg.jpeg',
    imageAlt: 'IT系・一人法人',
  },
  {
    chip: 'Web系・講座／コミュニティ運営',
    situation:
      'メール・LINE対応が追いつかなくなってきた。採用はリスクが高く、でも誰かに任せないと回らない状況だった。',
    tasks: [
      '返信対応、案内文作成、投稿代行',
      '出欠確認、日程調整、スケジュール配信',
    ],
    result:
      '対応品質が安定し、運営が回るように。「ゆくゆくは正式に入ってもらうことも考えている」と話している。',
    image: '/images/contact/contact-bg.jpeg',
    imageAlt: 'Web系・講座／コミュニティ運営',
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────
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
    q: '最低利用時間はありますか？',
    a: 'ありません。サービスは分単位でご利用可能です。「請求書を1通送ってほしい」という依頼から始めていただいても大丈夫です。',
  },
  {
    q: '料金はどのように決まりますか？',
    a: '業務の種類によってランクA（2,500円/h）・ランクB（2,300円/h）・ランクC（2,200円/h）の3段階です。詳しくはご相談時にご説明します。',
  },
  {
    q: 'どんな業務を依頼できますか？',
    a: 'メール・調整・請求などのバックオフィス実務から、調査・資料作成、採用支援、広報、IT運用まで幅広く対応します。「これは頼める？」という段階からご相談ください。',
  },
  {
    q: '途中で依頼量を増やしたり減らしたりできますか？',
    a: 'できます。最低時間の縛りがないため、業務量に合わせて柔軟に調整できます。小さく始めて、慣れてきたら範囲を広げる方が多いです。',
  },
  {
    q: '将来的に正式採用することはできますか？',
    a: 'はい。一緒に仕事をする中で双方の希望が合えば、正式な雇用に切り替えることも可能です。実際に採用につながったケースもあります。',
  },
  {
    q: '業務の進捗や請求は確認できますか？',
    a: 'はい。BackDesk上で実施内容・稼働時間・請求の状況をいつでも確認できます。任せっぱなしになりません。',
  },
]

// ── CTA ───────────────────────────────────────────────────────────────────
export const CTA = {
  headline: '「何を任せればいいか」\n一緒に考えます',
  headlineGrad: '一緒に考えます',
  sub: 'まだ具体的でなくても大丈夫です。まずは状況を聞かせてください。',
  button: 'まずは相談してみる',
} as const

// ── Images ────────────────────────────────────────────────────────────────
export const IMG = {
  hero: '/images/about-us/02.jpeg',
  pain: '/images/recruit/intro.jpeg',
  faq: '/images/about-us/03.jpeg',
  case1: '/images/company/office-bg.jpeg',
  case2: '/images/contact/contact-bg.jpeg',
  ctaBg: '/images/contact/contact-bg.jpeg',
} as const
