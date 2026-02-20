import { cn } from '@/lib/utils'

type Props = {
    shape: 'cloud' | 'drop' | 'angular' | 'egg' | 'splash'
    drift: 'diagonal' | 'horizontal' | 'orbit' | 'vertical' | 'rotate' | 'breathe'
    background: string
    className?: string
    style?: React.CSSProperties
}

export default function BlobDecoration({ shape, drift, background, className, style }: Props) {
    return (
        <div
            className={cn(
                'absolute pointer-events-none',
                `blob-${shape}`,
                `drift-${drift}`,
                className,
            )}
            style={{ background, ...style }}
            aria-hidden="true"
        />
    )
}

/**
 * Blob の配置（ここをいじると問い合わせ・応募の両方に反映）
 * top/right/bottom/left を vw や % で指定
 */
const BLOB_LAYOUTS = {
    /** 問い合わせフォーム・応募フォーム送信前で共通 */
    beforeSubmit: {
        pos1: { top: '10vw', right: '-8vw' } as React.CSSProperties,
        pos2: { left: '-3vw', bottom: '8vw' } as React.CSSProperties,
        pos3: { top: '30vw', right: '8vw' } as React.CSSProperties,
        pos4: { bottom: '20vw', left: '5vw' } as React.CSSProperties,
    },
    /** 問い合わせ・応募フォーム送信後で共通（中央カード用） */
    afterSubmit: {
        pos1: { top: '10vw', right: '-5vw' } as React.CSSProperties,
        pos2: { left: '-2vw', bottom: '8vw' } as React.CSSProperties,
        pos3: { top: '25vw', right: '10vw' } as React.CSSProperties,
        pos4: { bottom: '20vw', left: '10vw' } as React.CSSProperties,
    },
}

/** お問い合わせフォーム用の Blob 装飾（青・水色系）。compact で送信後用（配置・サイズとも送信後共通） */
export function ContactBlobDecoration({ compact = false }: { compact?: boolean }) {
    const layout = compact ? BLOB_LAYOUTS.afterSubmit : BLOB_LAYOUTS.beforeSubmit
    const s = compact
        ? {
            c1: 'z-[-1] w-[30vw] h-[28vw] md:w-[22vw] md:h-[20vw]',
            c2: 'z-[-1] w-[28vw] h-[24vw] md:w-[18vw] md:h-[16vw]',
            c3: 'z-[-1] w-[16vw] h-[18vw] md:w-[12vw] md:h-[14vw]',
            c4: 'z-[-1] w-[24vw] h-[22vw] md:w-[14vw] md:h-[12vw]',
        }
        : {
            c1: 'z-[-1] w-[42vw] h-[40vw] md:w-[30vw] md:h-[28vw]',
            c2: 'z-[-1] w-[38vw] h-[34vw] md:w-[24vw] md:h-[22vw]',
            c3: 'z-[-1] w-[22vw] h-[26vw] md:w-[16vw] md:h-[20vw]',
            c4: 'z-[-1] w-[32vw] h-[30vw] md:w-[20vw] md:h-[18vw]',
        }
    return (
        <div className="absolute inset-0 pointer-events-none max-md:hidden" aria-hidden="true">
            <BlobDecoration
                shape="cloud"
                drift="diagonal"
                background="rgba(135, 206, 235, 0.38)"
                className={s.c1}
                style={layout.pos1}
            />
            <BlobDecoration
                shape="cloud"
                drift="vertical"
                background="rgba(135, 206, 235, 0.38)"
                className={s.c2}
                style={layout.pos2}
            />
            <BlobDecoration
                shape="cloud"
                drift="rotate"
                background="rgba(173, 216, 230, 0.34)"
                className={s.c3}
                style={layout.pos3}
            />
            <BlobDecoration
                shape="cloud"
                drift="breathe"
                background="rgba(173, 216, 230, 0.34)"
                className={s.c4}
                style={layout.pos4}
            />
        </div>
    )
}

/** 応募フォーム用の Blob 装飾（ピンク・コーラル系）。compact で送信後用（小さめサイズ＋送信後用配置） */
export function ApplicationBlobDecoration({ compact = false }: { compact?: boolean }) {
    const s = compact
        ? {
            c1: 'z-[-1] w-[30vw] h-[28vw] md:w-[22vw] md:h-[20vw]',
            c2: 'z-[-1] w-[28vw] h-[24vw] md:w-[18vw] md:h-[16vw]',
            c3: 'z-[-1] w-[16vw] h-[18vw] md:w-[12vw] md:h-[14vw]',
            c4: 'z-[-1] w-[24vw] h-[22vw] md:w-[14vw] md:h-[12vw]',
        }
        : {
            c1: 'z-[-1] w-[42vw] h-[40vw] md:w-[30vw] md:h-[28vw]',
            c2: 'z-[-1] w-[38vw] h-[34vw] md:w-[24vw] md:h-[22vw]',
            c3: 'z-[-1] w-[22vw] h-[26vw] md:w-[16vw] md:h-[20vw]',
            c4: 'z-[-1] w-[32vw] h-[30vw] md:w-[20vw] md:h-[18vw]',
        }
    const layout = compact ? BLOB_LAYOUTS.afterSubmit : BLOB_LAYOUTS.beforeSubmit
    return (
        <div className="absolute inset-0 pointer-events-none max-md:hidden" aria-hidden="true">
            <BlobDecoration
                shape="cloud"
                drift="diagonal"
                background="rgba(240, 128, 128, 0.36)"
                className={s.c1}
                style={layout.pos1}
            />
            <BlobDecoration
                shape="cloud"
                drift="vertical"
                background="rgba(240, 128, 128, 0.36)"
                className={s.c2}
                style={layout.pos2}
            />
            <BlobDecoration
                shape="cloud"
                drift="rotate"
                background="rgba(255, 182, 193, 0.34)"
                className={s.c3}
                style={layout.pos3}
            />
            <BlobDecoration
                shape="cloud"
                drift="breathe"
                background="rgba(255, 182, 193, 0.34)"
                className={s.c4}
                style={layout.pos4}
            />
        </div>
    )
}
