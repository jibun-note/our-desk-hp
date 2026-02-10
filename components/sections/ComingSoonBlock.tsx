type Props = {
    /** 見出し（デフォルト: Coming Soon...） */
    title?: string
    /** 説明文（デフォルト: このページは準備中です。） */
    description?: string
}

export default function ComingSoonBlock({
    title = 'Coming Soon...',
    description = 'このページは準備中です。',
}: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-lg text-gray-600">{description}</p>
            </div>
        </div>
    )
}
