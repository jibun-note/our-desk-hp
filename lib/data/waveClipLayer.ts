/**
 * WaveClipLayer 用のクリップパスデータ。
 * objectBoundingBox 単位（0〜1）。いじると波の形・位置が変わる。
 */
export const WAVE_CLIP_PATHS = {
    /** スマホ用：波を上寄せ */
    mobile: {
        d: 'M0 0.005 Q 0.5 0.02 1 0.005 L 1 1 L 0 1 Z',
    },
    /** PC用：従来の波の位置 */
    desktop: {
        d: 'M0 0.02 Q 0.5 0.06 1 0.02 L 1 1 L 0 1 Z',
    },
} as const
