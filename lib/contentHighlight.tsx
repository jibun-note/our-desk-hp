import React from 'react'

/**
 * 行全体に文字色（アクセント）を付ける行の本文。
 * normalizeLine で正規化した文字列と完全一致した行は、行全体に HIGHLIGHT_CLASS を付与する。
 */
const HIGHLIGHT_LINES = [
    '働きたい',
    '人の力になりたい',
    '誰かを支える仕事がしたい',
    'グループ従業員 約100名、定着率は常に90%以上',
    '人事支援・キャリア支援の実績多数',
    '家庭やライフステージに左右されず、',
    '自分らしい働き方を選びながら、誰かの役に立てる',
    '働きたい気持ちはあるのに、選択肢が限られてしまう',
    '女性が自分らしく働き続けられる',
]

/**
 * 行内の一部フレーズに文字色を付ける用。
 * 長いフレーズから先に一致させるため、ソート済みの配列をモジュールで1回だけ用意する。
 */
const INLINE_PHRASES = [
    '働きたい気持ちはあるのに、選択肢が限られてしまう',
    '女性が自分らしく働き続けられる',
    '人材育成ノウハウ',
    '仕組みづくり',
    '働く姿勢',
]
const INLINE_PHRASES_SORTED = [...INLINE_PHRASES].sort((a, b) => b.length - a.length)

/**
 * 行末の ！/! 。や「」を除いて正規化する。
 * HIGHLIGHT_LINES との完全一致判定で、表記ゆれ（句読点の有無など）を吸収するため。
 */
function normalizeLine(s: string): string {
    return s
        .trim()
        .replace(/[！!\s]+$/, '')
        .replace(/。$/, '')
        .replace(/^「/, '')
        .replace(/」$/, '')
}

/** 行全体が HIGHLIGHT_LINES のいずれかと一致するか（正規化後に）判定する。 */
function isHighlightLine(trimmed: string): boolean {
    const normalized = normalizeLine(trimmed)
    return HIGHLIGHT_LINES.some((m) => m === normalized)
}

/** ハイライト用の共通クラス（アクセント色・太字） */
const HIGHLIGHT_CLASS = 'text-primary-700 font-semibold'

/**
 * 行内の INLINE_PHRASES に一致する部分を span でラップして文字色を付与する。
 * 処理: (1) 長い順ソート済みフレーズで行内の出現位置を検出
 *       (2) 重複する範囲をマージ (3) 区間ごとに通常テキスト / span を組み立てて返す
 */
function highlightInlinePhrases(line: string): React.ReactNode {
    const phrases = INLINE_PHRASES_SORTED
    const matches: { start: number; end: number; phrase: string }[] = []
    for (const phrase of phrases) {
        let pos = 0
        while (pos < line.length) {
            const i = line.indexOf(phrase, pos)
            if (i === -1) break
            const overlaps = matches.some((m) => i < m.end && i + phrase.length > m.start)
            if (!overlaps) matches.push({ start: i, end: i + phrase.length, phrase })
            pos = i + 1
        }
    }
    matches.sort((a, b) => a.start - b.start)
    const merged: { start: number; end: number; phrase: string }[] = []
    let lastEnd = 0
    for (const m of matches) {
        if (m.start < lastEnd) continue
        merged.push(m)
        lastEnd = m.end
    }
    const segments: React.ReactNode[] = []
    let pos = 0
    for (const m of merged) {
        if (m.start > pos) segments.push(line.slice(pos, m.start))
        segments.push(
            <span key={`${m.start}-${m.phrase}`} className={HIGHLIGHT_CLASS}>
                {m.phrase}
            </span>
        )
        pos = m.end
    }
    if (pos < line.length) segments.push(line.slice(pos))
    return <>{segments}</>
}

/**
 * 本文を改行で分割し、1行ずつブロック表示（行間余白）にする。
 * 各行について: HIGHLIGHT_LINES に一致すれば行全体をハイライト、
 * INLINE_PHRASES を含むなら highlightInlinePhrases で部分ハイライト、それ以外はそのまま表示。
 */
export function contentWithLineBreaks(content: string): React.ReactNode {
    const lines = content.split('\n')
    return lines.map((line, i) => {
        const trimmed = line.trim()
        const fullLineHighlight = isHighlightLine(trimmed)
        const hasInline = INLINE_PHRASES.some((p) => line.includes(p))
        let body: React.ReactNode
        if (fullLineHighlight) {
            // 「」で囲まれた部分だけハイライト、なければ行全体
            const startQuote = line.indexOf('「')
            const endQuote = line.lastIndexOf('」')
            if (startQuote !== -1 && endQuote > startQuote) {
                body = (
                    <>
                        {line.slice(0, startQuote + 1)}
                        <span className={HIGHLIGHT_CLASS}>{line.slice(startQuote + 1, endQuote)}</span>
                        {line.slice(endQuote)}
                    </>
                )
            } else {
                body = <span className={HIGHLIGHT_CLASS}>{line}</span>
            }
        } else if (hasInline) {
            body = highlightInlinePhrases(line)
        } else {
            body = line
        }
        return (
            <span key={i} className="block">
                {body}
            </span>
        )
    })
}
