/**
 * SproutIcon 用の型・流し込みデータ。
 * 5段階成長記号の SVG 座標とアニメーション遅延を定義する。
 */

/** 茎の1区間。scaleY(0→1) で下端（oy）を固定したまま上に伸びる。relDelay = cssBaseDelay からの相対遅延（秒） */
export type StemSegment = {
    x: number
    y1: number
    y2: number
    oy: number
    sw: number
    relDelay: number
}

/** 葉・蕾の1パーツ。scale(0→1) + opacity で付け根（ox, oy）から開く */
export type SproutPart = {
    d: string
    sw: number
    ox: number
    oy: number
    relDelay: number
}

/** 1ステージ分のデータ。segments と parts は「区間→対応葉」の連鎖 */
export type SproutStageData = {
    w: number
    h: number
    vw: number
    vh: number
    seedCy: number
    segments: StemSegment[]
    parts: SproutPart[]
}

// ── 5段階の成長データ ────────────────────────────────────────────────────────
//
// ①  短い茎 + 1枚葉（発芽直後）
// ②  双葉（基本形）
// ③  茎がやや長く + 葉を大きく
// ④  茎が長い + 大きい双葉 + 上に小さい双葉 → 茎下区間 → 下双葉L・R → 茎上区間 → 上双葉L・R
// ⑤  茎が最長 + 大きい双葉 + 中双葉 + 蕾 → 茎下区間 → 下双葉 → 茎中区間 → 中双葉 → 茎上区間 → 蕾
//
// relDelay はすべて cssBaseDelay（SVGフェード完了時刻）を 0 とした相対秒数。

export const sproutStages: SproutStageData[] = [
    // ①
    {
        w: 28, h: 42, vw: 44, vh: 68,
        seedCy: 63,
        segments: [
            { x: 22, y1: 50, y2: 63, oy: 63, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 22 50 C 19 48, 10 45, 10 37 C 10 30, 18 30, 22 50 Z', sw: 2.5, ox: 22, oy: 50, relDelay: 0.50 },
        ],
    },
    // ②
    {
        w: 36, h: 52, vw: 44, vh: 68,
        seedCy: 63,
        segments: [
            { x: 22, y1: 44, y2: 63, oy: 63, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 22 44 C 18 42, 5 37, 4 26 C 3 15, 14 15, 22 44 Z',   sw: 2.5, ox: 22, oy: 44, relDelay: 0.50 },
            { d: 'M 22 44 C 26 42, 39 37, 40 26 C 41 15, 30 15, 22 44 Z', sw: 2.5, ox: 22, oy: 44, relDelay: 0.65 },
        ],
    },
    // ③
    {
        w: 40, h: 58, vw: 48, vh: 76,
        seedCy: 71,
        segments: [
            { x: 24, y1: 48, y2: 71, oy: 71, sw: 2.8, relDelay: 0.05 },
        ],
        parts: [
            { d: 'M 24 48 C 19 45, 3 40, 2 26 C 1 13, 14 13, 24 48 Z',   sw: 2.5, ox: 24, oy: 48, relDelay: 0.55 },
            { d: 'M 24 48 C 29 45, 45 40, 46 26 C 47 13, 34 13, 24 48 Z', sw: 2.5, ox: 24, oy: 48, relDelay: 0.70 },
        ],
    },
    // ④  茎を2区間に分割 → 区間ごとに対応する葉が出る
    {
        w: 44, h: 68, vw: 52, vh: 88,
        seedCy: 83,
        segments: [
            { x: 26, y1: 56, y2: 83, oy: 83, sw: 2.8, relDelay: 0.05 },
            { x: 26, y1: 30, y2: 56, oy: 56, sw: 2.8, relDelay: 0.65 },
        ],
        parts: [
            { d: 'M 26 56 C 21 53, 5 48, 4 35 C 3 22, 15 22, 26 56 Z',   sw: 2.5, ox: 26, oy: 56, relDelay: 0.38 },
            { d: 'M 26 56 C 31 53, 47 48, 48 35 C 49 22, 37 22, 26 56 Z', sw: 2.5, ox: 26, oy: 56, relDelay: 0.53 },
            { d: 'M 26 30 C 23 28, 15 25, 15 18 C 15 12, 22 12, 26 30 Z', sw: 2.2, ox: 26, oy: 30, relDelay: 0.98 },
            { d: 'M 26 30 C 29 28, 37 25, 37 18 C 37 12, 30 12, 26 30 Z', sw: 2.2, ox: 26, oy: 30, relDelay: 1.13 },
        ],
    },
    // ⑤  茎を3区間に分割 → 区間ごとに対応する葉・蕾が出る
    {
        w: 48, h: 78, vw: 56, vh: 96,
        seedCy: 91,
        segments: [
            { x: 28, y1: 65, y2: 91, oy: 91, sw: 2.8, relDelay: 0.05 },
            { x: 28, y1: 42, y2: 65, oy: 65, sw: 2.8, relDelay: 0.68 },
            { x: 28, y1: 20, y2: 42, oy: 42, sw: 2.8, relDelay: 1.28 },
        ],
        parts: [
            { d: 'M 28 65 C 23 62, 6 56, 5 43 C 4 30, 17 30, 28 65 Z',   sw: 2.5, ox: 28, oy: 65, relDelay: 0.38 },
            { d: 'M 28 65 C 33 62, 50 56, 51 43 C 52 30, 39 30, 28 65 Z', sw: 2.5, ox: 28, oy: 65, relDelay: 0.53 },
            { d: 'M 28 42 C 24 40, 13 36, 13 27 C 13 19, 21 19, 28 42 Z', sw: 2.2, ox: 28, oy: 42, relDelay: 1.01 },
            { d: 'M 28 42 C 32 40, 43 36, 43 27 C 43 19, 35 19, 28 42 Z', sw: 2.2, ox: 28, oy: 42, relDelay: 1.16 },
            { d: 'M 28 20 C 24 18, 20 14, 22 8 C 24 4, 28 6, 28 20 Z',   sw: 2.0, ox: 28, oy: 20, relDelay: 1.61 },
            { d: 'M 28 20 C 32 18, 36 14, 34 8 C 32 4, 28 6, 28 20 Z',   sw: 2.0, ox: 28, oy: 20, relDelay: 1.76 },
        ],
    },
]

/** SVG ラッパーのフェードイン時間（秒）。茎・葉の CSS アニメは「フェードイン完了」を 0 として relDelay で開始 */
export const SVG_FADE_DURATION = 0.25
