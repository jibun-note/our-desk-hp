'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import HandwrittenLine from '@/components/ui/HandwrittenLine'

type Props = {
    eyebrow: string
    headline?: string
    sub?: string
    items?: readonly string[]
}

const ITEMS = [
    {
        title: '稼働はすべてシステムに記録',
        body: '実施内容・時間・履歴が残り、口頭ベースになりません。',
        num: '01',
    },
    {
        title: '稼働と請求が連動',
        body: '「何に対する請求か」が分かる状態で管理できます。',
        num: '02',
    },
    {
        title: 'いつでも状況を確認できる',
        body: '実施内容・稼働時間・履歴をいつでも確認できます。',
        num: '03',
    },
    {
        title: '権限分離で情報管理',
        body: '閲覧範囲を分け、必要な情報だけにアクセスを制御します。',
        num: '04',
    },
] as const

const LEDGER_STYLES = {
    wrap: {
        background: '#faf7f0',
        border: '1px solid #e0d8c8',
        borderRadius: 8,
        overflow: 'hidden',
        fontFamily: "'Courier New', monospace",
    } as React.CSSProperties,
    header: {
        background: '#f0ead8',
        padding: '8px 12px',
        fontSize: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as React.CSSProperties,
    rowBorder: '1px dashed #ede5d0',
}

function useSectionReveal(count: number) {
    const ref = useRef<HTMLDivElement>(null)
    const [revealed, setRevealed] = useState<boolean[]>(Array(count).fill(false))

    useEffect(() => {
        const el = ref.current
        let timers: ReturnType<typeof setTimeout>[] = []
        const obs = new IntersectionObserver(
            ([e]) => {
                if (!e?.isIntersecting) return
                timers = Array.from({ length: count }, (_, i) =>
                    setTimeout(() => {
                        setRevealed((prev) => {
                            const n = [...prev]
                            n[i] = true
                            return n
                        })
                    }, i * 120)
                )
                obs.disconnect()
            },
            { threshold: 0.1 }
        )
        if (el) obs.observe(el)
        return () => {
            obs.disconnect()
            timers.forEach(clearTimeout)
        }
    }, [count])

    return [ref, revealed] as const
}

/** カード01: 業務実績 — テーブル（日付 / 業務内容 / 作業時間 / ステータス） */
function LedgerBusinessLog() {
    const rows = [
        { date: '06/02', task: 'メール対応', time: '0.5h', status: 'approved' as const },
        { date: '06/05', task: '資料整理', time: '1.0h', status: 'approved' as const },
        { date: '06/10', task: '請求処理', time: '0.8h', status: 'remand' as const },
        { date: '06/12', task: '日程調整', time: '0.3h', status: 'approved' as const },
    ]
    return (
        <div style={LEDGER_STYLES.wrap}>
            <div style={LEDGER_STYLES.header}>
                <span>業務実績 — 2025.06</span>
                <span style={{ color: '#666' }}>山田</span>
            </div>
            <div style={{ padding: '0 12px', fontSize: 9 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '52px 1fr 44px 72px',
                        gap: 8,
                        padding: '6px 0',
                        borderBottom: LEDGER_STYLES.rowBorder,
                        color: '#888',
                    }}
                >
                    <span>日付</span>
                    <span>業務内容</span>
                    <span>作業時間</span>
                    <span>ステータス</span>
                </div>
                {rows.map((r, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '52px 1fr 44px 72px',
                            gap: 8,
                            padding: '6px 0',
                            borderBottom: i < rows.length - 1 ? LEDGER_STYLES.rowBorder : 'none',
                            color: '#333',
                        }}
                    >
                        <span>{r.date}</span>
                        <span>{r.task}</span>
                        <span>{r.time}</span>
                        <span
                            style={{
                                color: r.status === 'approved' ? '#16a34a' : '#dc2626',
                            }}
                        >
                            {r.status === 'approved' ? '✓ 承認済' : '✕ 差戻し'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/** カード02: 顧客請求 — 請求書断片（業務＋金額、合計オレンジ） */
function LedgerInvoice() {
    const lines = [
        { label: 'メール対応・資料整理', amount: '¥8,000' },
        { label: '請求処理', amount: '¥6,400' },
        { label: '日程調整', amount: '¥2,400' },
    ]
    return (
        <div style={LEDGER_STYLES.wrap}>
            <div style={LEDGER_STYLES.header}>
                <span>顧客請求 — 2025.06</span>
                <span style={{ background: '#16a34a', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 9 }}>
                    入金済
                </span>
            </div>
            <div style={{ padding: '8px 12px', fontSize: 9 }}>
                {lines.map((l, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '4px 0',
                            borderBottom: i < lines.length - 1 ? LEDGER_STYLES.rowBorder : 'none',
                            color: '#333',
                        }}
                    >
                        <span>{l.label}</span>
                        <span>{l.amount}</span>
                    </div>
                ))}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '6px 0 0',
                        marginTop: 4,
                        fontWeight: 700,
                        color: '#F08300',
                    }}
                >
                    <span>合計</span>
                    <span>¥16,800</span>
                </div>
            </div>
        </div>
    )
}

/** カード03: 稼働状況 / アサイン確認 */
function LedgerStatus() {
    const items = [
        { label: '今月の稼働時間', value: '12.4h' },
        { label: '実施件数', value: '28件' },
        { label: '請求ステータス', value: '請求済' },
        { label: '入金ステータス', value: '入金済' },
    ]
    return (
        <div style={LEDGER_STYLES.wrap}>
            <div style={LEDGER_STYLES.header}>
                <span>稼働状況 / アサイン確認</span>
            </div>
            <div style={{ padding: '8px 12px', fontSize: 9 }}>
                {items.map((item, i) => (
                    <div
                        key={item.label}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '5px 0',
                            borderBottom: i < items.length - 1 ? LEDGER_STYLES.rowBorder : 'none',
                            color: '#333',
                        }}
                    >
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/** カード04: ACCESS MATRIX（ロール × 権限） */
function LedgerAccessMatrix() {
    const roles: { name: string; color: string; 稼働: string; 承認: string; 請求: string; アカウント: string }[] = [
        { name: '全権ユーザ', color: '#2563eb', 稼働: '◯', 承認: '◯', 請求: '◯', アカウント: '◯' },
        { name: '秘書', color: '#F08300', 稼働: '申請', 承認: '閲覧', 請求: '閲覧', アカウント: '—' },
        { name: '顧客', color: '#16a34a', 稼働: '閲覧', 承認: '—', 請求: '閲覧', アカウント: '—' },
    ]
    const cols = ['稼働', '承認', '請求', 'アカウント'] as const
    return (
        <div style={LEDGER_STYLES.wrap}>
            <div style={LEDGER_STYLES.header}>
                <span>ACCESS MATRIX</span>
            </div>
            <div style={{ padding: '8px 12px', fontSize: 9 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '72px repeat(4, 1fr)',
                        gap: 6,
                        padding: '4px 0',
                        borderBottom: LEDGER_STYLES.rowBorder,
                        color: '#888',
                    }}
                >
                    <span></span>
                    {cols.map((c) => (
                        <span key={c}>{c}</span>
                    ))}
                </div>
                {roles.map((r, i) => (
                    <div
                        key={r.name}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '72px repeat(4, 1fr)',
                            gap: 6,
                            padding: '5px 0',
                            borderBottom: i < roles.length - 1 ? LEDGER_STYLES.rowBorder : 'none',
                            color: '#333',
                        }}
                    >
                        <span style={{ fontWeight: 600, color: r.color }}>{r.name}</span>
                        {cols.map((col) => {
                            const val = r[col]
                            const isO = val === '◯'
                            const isGray = val === '閲覧' || val === '申請'
                            const isDash = val === '—'
                            return (
                                <span
                                    key={col}
                                    style={{
                                        color: isO ? '#16a34a' : isGray ? '#666' : isDash ? '#bbb' : '#333',
                                    }}
                                >
                                    {val}
                                </span>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

const LEDGER_VISUALS = [LedgerBusinessLog, LedgerInvoice, LedgerStatus, LedgerAccessMatrix] as const

const EASE = 'cubic-bezier(.16,1,.3,1)'
const BLUR_DELAY_AFTER_HEADING_ANIM = 1

export default function ServiceBackDeskReasonsSection({
    eyebrow,
}: Props) {
    const [ref, revealed] = useSectionReveal(4)

    const cardBase = (i: number) => ({
        background: '#fff',
        borderRadius: 16,
        boxShadow: revealed[i]
            ? '0 2px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)'
            : 'none',
        filter: revealed[i] ? 'blur(0)' : 'blur(14px)',
        opacity: revealed[i] ? 1 : 0.2,
        transform: revealed[i] ? 'translateY(0)' : 'translateY(12px)',
        transition: `
      filter     2.2s ${EASE} ${BLUR_DELAY_AFTER_HEADING_ANIM + i * 0.18}s,
      opacity    1.2s ${EASE} ${i * 0.18}s,
      transform  1.0s ${EASE} ${i * 0.18}s,
      box-shadow 0.8s ${i * 0.18 + 0.4}s
    `.trim(),
    })

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700;900&family=Noto+Sans+JP:wght@400;700;900&display=swap');

.bd-section { padding: 96px 40px; }
.bd-heading { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; gap: 0 40px; row-gap: 16px; margin-bottom: 56px; }
.bd-heading-eyebrow { grid-column: 1; grid-row: 1; }
.bd-heading-main { grid-column: 1; grid-row: 2; }
.bd-heading-sub-wrap { grid-column: 2; grid-row: 2; align-self: start; }
.bd-heading-sub { line-height: 1.9; }
.bd-card-hero-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 40px; align-items: center; padding: 36px 32px; }
.bd-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.bd-card-small { padding: 28px 24px; }

@media (max-width: 768px) {
  .bd-section { padding: 72px 24px; }
  .bd-heading { grid-template-columns: 1fr; gap: 16px; margin-bottom: 40px; }
  .bd-heading-eyebrow { grid-row: 1; }
  .bd-heading-main { grid-row: 2; }
  .bd-heading-sub-wrap { grid-column: 1; grid-row: 3; display: none; }
  .bd-heading-sub { display: none; }
  .bd-card-hero-inner { grid-template-columns: 1fr; gap: 24px; padding: 24px 20px; }
  .bd-grid-3 { grid-template-columns: 1fr 1fr; gap: 12px; }
  .bd-card-small { padding: 22px 18px; }
}

@media (max-width: 480px) {
  .bd-section { padding: 56px 16px; }
  .bd-card-hero-inner { padding: 20px 16px; }
  .bd-grid-3 { grid-template-columns: 1fr; }
  .bd-card-small { padding: 20px 16px; }
          `.trim(),
                }}
            />
            <section
                className="bd-section"
                style={{ background: '#f7f5ef' }}
                aria-label="OurDeskが選ばれる理由"
            >
                <div style={{ maxWidth: 1080, margin: '0 auto' }} ref={ref}>
                    <div className="bd-heading">
                        <p className="bd-heading-eyebrow text-[0.68rem] tracking-[0.2em] text-[#F08300] font-medium flex items-center gap-3 mb-2">
                            <span className="w-5 h-px bg-[#F08300] flex-shrink-0" />
                            {eyebrow}
                        </p>
                        <div className="bd-heading-main">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
                                すべて見える
                                <br />
                                だから任せられる
                            </h2>
                            <div className="mb-4">
                                <HandwrittenLine variant={3} color="rgba(240,131,0,0.65)" width={140} align="left" visible={revealed[0]} />
                            </div>
                        </div>
                        <div className="bd-heading-sub-wrap">
                            <p className="bd-heading-sub text-sm md:text-base text-gray-600 leading-relaxed text-pretty">
                                稼働・報告・請求を&quot;見える化&quot;して運用。
                                <br />
                                任せっぱなしにしない、管理できる外部サポートです。
                            </p>
                        </div>
                    </div>

                    <div>
                        {/* カード01: 横2カラム（左テキスト・右ビジュアル） */}
                        <div
                            style={{
                                ...cardBase(0),
                                marginBottom: 16,
                            }}
                        >
                            <div className="bd-card-hero-inner">
                                <div>
                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: '#F08300',
                                            letterSpacing: '0.15em',
                                            display: 'block',
                                            marginBottom: 16,
                                        }}
                                    >
                                        {ITEMS[0].num}
                                    </span>
                                    <h3
                                        style={{
                                            fontSize: 'clamp(18px, 2.5vw, 22px)',
                                            fontWeight: 900,
                                            color: '#1a1a1a',
                                            marginBottom: 12,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {ITEMS[0].title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: '#888',
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {ITEMS[0].body}
                                    </p>
                                </div>
                                <div>
                                    <LedgerBusinessLog />
                                </div>
                            </div>
                        </div>

                        {/* カード02〜04: 3カラムグリッド */}
                        <div className="bd-grid-3">
                            {ITEMS.slice(1).map((item, i) => {
                                const idx = i + 1
                                const LedgerVisual = LEDGER_VISUALS[idx]
                                return (
                                    <div
                                        key={item.num}
                                        className="bd-card-small"
                                        style={cardBase(idx)}
                                    >
                                        <div style={{ marginBottom: 20 }}>
                                            <LedgerVisual />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: '#F08300',
                                                display: 'block',
                                                marginBottom: 10,
                                            }}
                                        >
                                            {item.num}
                                        </span>
                                        <h3
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 900,
                                                marginBottom: 8,
                                                lineHeight: 1.35,
                                                color: '#1a1a1a',
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: 12,
                                                color: '#888',
                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {item.body}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginTop: 60, textAlign: 'center' }}>
                        <Link
                            href="/contact/"
                            style={{
                                display: 'inline-block',
                                background: '#F08300',
                                color: '#fff',
                                borderRadius: 50,
                                padding: '14px 36px',
                                fontSize: 14,
                                fontWeight: 700,
                                boxShadow: '0 8px 28px rgba(240,131,0,0.3)',
                                textDecoration: 'none',
                            }}
                        >
                            まずは相談してみる →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
