import { NextResponse } from 'next/server'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgepnwl'
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

type ApplyBody = {
    name: string
    nameKana: string
    email: string
    phone: string
    workStyle: string
    desiredRole: string
    careerPr: string
    privacy: boolean
    recaptchaToken: string
}

export async function POST(request: Request) {
    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!secret) {
        console.error('RECAPTCHA_SECRET_KEY is not set')
        return NextResponse.json(
            { error: 'サーバー設定エラーです。' },
            { status: 500 }
        )
    }

    let body: ApplyBody
    try {
        body = (await request.json()) as ApplyBody
    } catch {
        return NextResponse.json(
            { error: 'リクエスト形式が不正です。' },
            { status: 400 }
        )
    }

    const { recaptchaToken, ...formData } = body
    if (!recaptchaToken || typeof recaptchaToken !== 'string') {
        return NextResponse.json(
            { error: 'reCAPTCHAの認証に失敗しました。再度お試しください。' },
            { status: 400 }
        )
    }

    const verifyRes = await fetch(RECAPTCHA_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret,
            response: recaptchaToken,
        }),
    })

    const verifyData = (await verifyRes.json()) as {
        success: boolean
        'error-codes'?: string[]
    }

    if (!verifyData.success) {
        console.warn('reCAPTCHA verify failed:', verifyData['error-codes'])
        return NextResponse.json(
            { error: 'reCAPTCHAの認証に失敗しました。再度お試しください。' },
            { status: 400 }
        )
    }

    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _subject: '採用応募',
            ...formData,
        }),
    })

    if (!formspreeRes.ok) {
        const data = await formspreeRes.json().catch(() => ({}))
        console.error('Formspree error:', formspreeRes.status, data)
        return NextResponse.json(
            { error: (data as { error?: string }).error || '送信に失敗しました。' },
            { status: 502 }
        )
    }

    return NextResponse.json({ ok: true })
}
