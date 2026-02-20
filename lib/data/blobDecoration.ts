/**
 * Blob 装飾の配置データ
 * top/right/bottom/left を vw や % で指定。
 * 問い合わせ・応募フォームの両方で共通利用。
 */
export type BlobPositionStyle = {
    top?: string
    right?: string
    bottom?: string
    left?: string
}

export type BlobLayoutPositions = {
    pos1: BlobPositionStyle
    pos2: BlobPositionStyle
    pos3: BlobPositionStyle
    pos4: BlobPositionStyle
}

/** 問い合わせフォーム・応募フォーム送信前で共通 */
export const BLOB_LAYOUT_BEFORE_SUBMIT: BlobLayoutPositions = {
    pos1: { top: '10vw', right: '-8vw' },
    pos2: { left: '-3vw', bottom: '8vw' },
    pos3: { top: '30vw', right: '8vw' },
    pos4: { bottom: '20vw', left: '5vw' },
}

/** 問い合わせ・応募フォーム送信後で共通（中央カード用） */
export const BLOB_LAYOUT_AFTER_SUBMIT: BlobLayoutPositions = {
    pos1: { top: '10vw', right: '-5vw' },
    pos2: { left: '-2vw', bottom: '8vw' },
    pos3: { top: '25vw', right: '10vw' },
    pos4: { bottom: '20vw', left: '10vw' },
}

/** レイアウト名から配置を取得する用 */
export const BLOB_LAYOUTS = {
    beforeSubmit: BLOB_LAYOUT_BEFORE_SUBMIT,
    afterSubmit: BLOB_LAYOUT_AFTER_SUBMIT,
} as const

/** Blob のサイズクラス（問い合わせ・応募フォームで共通）。compact は送信後用 */
export const BLOB_SIZE_CLASSES = {
    compact: {
        c1: 'z-[-1] w-[30vw] h-[28vw] md:w-[22vw] md:h-[20vw]',
        c2: 'z-[-1] w-[28vw] h-[24vw] md:w-[18vw] md:h-[16vw]',
        c3: 'z-[-1] w-[16vw] h-[18vw] md:w-[12vw] md:h-[14vw]',
        c4: 'z-[-1] w-[24vw] h-[22vw] md:w-[14vw] md:h-[12vw]',
    },
    default: {
        c1: 'z-[-1] w-[42vw] h-[40vw] md:w-[30vw] md:h-[28vw]',
        c2: 'z-[-1] w-[38vw] h-[34vw] md:w-[24vw] md:h-[22vw]',
        c3: 'z-[-1] w-[22vw] h-[26vw] md:w-[16vw] md:h-[20vw]',
        c4: 'z-[-1] w-[32vw] h-[30vw] md:w-[20vw] md:h-[18vw]',
    },
} as const
