import {
    BLOB_LAYOUTS,
    BLOB_SIZE_CLASSES,
} from '@/lib/data/blobDecoration'
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

const FORM_BLOB_DRIFTS = ['diagonal', 'vertical', 'rotate', 'breathe'] as const

/** フォーム用 4 個 Blob の共通レンダー（色だけ差し替え） */
function FormBlobs({
    compact,
    primary,
    secondary,
}: {
    compact: boolean
    primary: string
    secondary: string
}) {
    const layout = compact ? BLOB_LAYOUTS.afterSubmit : BLOB_LAYOUTS.beforeSubmit
    const size = compact ? BLOB_SIZE_CLASSES.compact : BLOB_SIZE_CLASSES.default
    const backgrounds = [primary, primary, secondary, secondary]

    return (
        <div className="absolute inset-0 pointer-events-none max-md:hidden" aria-hidden="true">
            {FORM_BLOB_DRIFTS.map((drift, i) => (
                <BlobDecoration
                    key={drift}
                    shape="cloud"
                    drift={drift}
                    background={backgrounds[i]}
                    className={size[`c${(i + 1) as 1 | 2 | 3 | 4}`]}
                    style={layout[`pos${(i + 1) as 1 | 2 | 3 | 4}`]}
                />
            ))}
        </div>
    )
}

/** お問い合わせフォーム用の Blob 装飾（青・水色系）。compact で送信後用（配置・サイズとも送信後共通） */
export function ContactBlobDecoration({ compact = false }: { compact?: boolean }) {
    return (
        <FormBlobs
            compact={compact}
            primary="rgba(135, 206, 235, 0.38)"
            secondary="rgba(173, 216, 230, 0.34)"
        />
    )
}

/** 応募フォーム用の Blob 装飾（ピンク・コーラル系）。compact で送信後用（小さめサイズ＋送信後用配置） */
export function ApplicationBlobDecoration({ compact = false }: { compact?: boolean }) {
    return (
        <FormBlobs
            compact={compact}
            primary="rgba(240, 128, 128, 0.36)"
            secondary="rgba(255, 182, 193, 0.34)"
        />
    )
}
