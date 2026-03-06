/**
 * WaveClipLayer 用のクリップパスデータ。
 * objectBoundingBox 単位（0〜1）。いじると波の形・位置が変わる。
 */
export const WAVE_CLIP_PATHS = {
    /** スマホ用：波を上寄せ・大胆なカーブ */
    mobile: {
        d: 'M0 0.01 Q 0.5 0.08 1 0.01 L 1 1 L 0 1 Z',
    },
    /** PC用：大胆な波のカーブ */
    desktop: {
        d: 'M0 0.03 Q 0.5 0.14 1 0.03 L 1 1 L 0 1 Z',
    },
} as const
