'use client'

import { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { Shippori_Mincho_B1, Noto_Sans_JP, DM_Sans } from 'next/font/google'
import WaveDivider from '@/components/ui/WaveDivider'

const shipporiMinchoB1 = Shippori_Mincho_B1({
    weight: '700',
    subsets: ['latin'],
    preload: false,
})

const shipporiMinchoB1Regular = Shippori_Mincho_B1({
    weight: '400',
    subsets: ['latin'],
    preload: false,
})

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    preload: false,
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    preload: false,
})

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

type FormData = {
    name: string
    company: string
    email: string
    phone: string
    subject: string
    message: string
    privacy: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

const CONTACT_API = '/api/contact'

const subjectOptions = [
    { value: '', label: '選択してください' },
    { value: 'inquiry', label: 'お問い合わせ' },
    { value: 'recruit', label: '採用について' },
    { value: 'other', label: 'その他' },
]

const initialForm: FormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
}

function validate(form: FormData): FormErrors {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'お名前を入力してください'
    if (!form.email.trim()) {
        newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = '正しいメールアドレス形式で入力してください'
    }
    if (!form.subject.trim()) newErrors.subject = 'ご用件を選択してください'
    if (!form.message.trim()) newErrors.message = 'お問い合わせ内容を入力してください'
    if (!form.privacy) newErrors.privacy = 'プライバシーポリシーに同意してください'
    return newErrors
}

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void
            execute: (siteKey: string, options: { action: string }) => Promise<string>
        }
    }
}

const inputBaseCls =
    'w-full bg-transparent border-0 border-b-[1.5px] border-gray-300 py-1.5 text-[14.5px] text-gray-900 outline-none transition-[border-color] duration-200 placeholder:text-gray-400 placeholder:text-[13px] focus:border-[#F08300]'

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [form, setForm] = useState<FormData>(initialForm)
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [recaptchaError, setRecaptchaError] = useState<string | null>(null)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target
        const checked =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : undefined
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setRecaptchaError(null)
        const newErrors = validate(form)
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        if (!RECAPTCHA_SITE_KEY) {
            setStatus('error')
            setRecaptchaError('reCAPTCHAが設定されていません。')
            return
        }
        let token: string
        try {
            await new Promise<void>((resolve) => {
                window.grecaptcha?.ready(resolve) ?? resolve()
            })
            token = (await window.grecaptcha?.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })) ?? ''
        } catch (err) {
            setStatus('error')
            setRecaptchaError('reCAPTCHAの認証に失敗しました。再度お試しください。')
            console.error('reCAPTCHA execute error:', err)
            return
        }
        if (!token?.trim()) {
            setRecaptchaError('reCAPTCHAの認証に失敗しました。再度お試しください。')
            return
        }

        setStatus('sending')
        try {
            const res = await fetch(CONTACT_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    company: form.company,
                    email: form.email,
                    phone: form.phone,
                    subject: form.subject,
                    message: form.message,
                    privacy: form.privacy,
                    recaptchaToken: token,
                }),
            })
            const data = (await res.json().catch(() => ({}))) as { error?: string }
            if (!res.ok) {
                throw new Error(data.error || `送信に失敗しました (${res.status})`)
            }
            setStatus('success')
            setIsSubmitted(true)
        } catch (err) {
            setStatus('error')
            setRecaptchaError(err instanceof Error ? err.message : '送信に失敗しました。')
            console.error('Contact form error:', err)
        }
    }

    const handleBackToForm = () => {
        setIsSubmitted(false)
        setForm(initialForm)
        setErrors({})
    }

    return (
        <section
            className={`relative z-[3] bg-white py-20 md:py-32 px-4 md:px-8 ${notoSansJP.className}`}
            aria-labelledby="contact-form-heading"
        >
            {/* 背景レイヤー: HeroSection と同じ色がフォーム上部 1/3 程度まで続く（絶対配置でフォームは上に重なる） */}
            <div
                className="absolute top-0 left-0 right-0 bg-[#f5ede0]"
                style={{ height: 'min(max(33vh, 200px), 320px)' }}
                aria-hidden
            />
            {/* 波形: クリーム帯の直下（絶対配置） */}
            <div
                className="absolute left-0 right-0 z-[1]"
                style={{ top: 'min(max(33vh, 200px), 320px)' }}
                aria-hidden
            >
                <WaveDivider bgColor="#f5ede0" fillColor="#ffffff" />
            </div>
            {/* 背景レイヤー: 波形の下から白 */}
            <div
                className="absolute left-0 right-0 bottom-0 bg-white"
                style={{ top: 'calc(min(max(33vh, 200px), 320px) + 80px)' }}
                aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-[1000px] pt-0 -mt-4 md:-mt-8">
                <div className="bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,.04),0_16px_56px_rgba(0,0,0,.09)] p-2.5 flex flex-col md:flex-row gap-2.5">
                    {/* 左パネル: ダーク背景 + グロー + コピー・連絡先（画像なし） */}
                    <div
                        className="relative flex flex-none flex-col rounded-[14px] overflow-hidden bg-[#1E1A16] p-[48px_40px] md:min-h-0 md:flex-[0_0_300px] min-h-[280px]"
                        aria-hidden="true"
                    >
                        {/* 薄いグロー装飾 ::after 相当 */}
                        <div
                            className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-[240px] w-[240px] rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(253,208,0,.10) 0%, transparent 70%)' }}
                            aria-hidden
                        />
                        <div className="relative z-0 flex flex-col flex-1 min-h-0">
                            <span className="text-[9.5px] tracking-[.18em] text-white/35 uppercase mb-8 block">
                                Contact
                            </span>
                            <p
                                className={`flex-1 text-white/90 ${shipporiMinchoB1Regular.className} leading-[1.55] mb-0`}
                                style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                            >
                                まだ検討中でも、
                                <br />
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(120deg, #FDD000, #F08300)',
                                    }}
                                >
                                    大丈夫です。
                                </span>
                            </p>
                            <p className={`text-[12.5px] text-white/45 leading-[1.85] mb-0 font-light ${notoSansJP.className} text-pretty`}>
                                「相談していいのかな」と思う段階が、
                                一番お話しやすいタイミングです。
                                返信は2営業日以内にお送りします。
                            </p>
                        </div>
                    </div>

                    {/* 右パネル: overflow-hidden + 横並びスライド（左=フォーム、右=成功メッセージ） */}
                    <div className="flex-1 overflow-hidden min-h-[520px] md:min-h-[560px]">
                        <div
                            className="flex w-[200%] transition-[transform_0.5s_cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
                            style={{
                                transform: isSubmitted ? 'translateX(-50%)' : 'translateX(0)',
                            }}
                        >
                            {/* 左半分: フォーム */}
                            <div className="w-1/2 flex-shrink-0 py-6 px-4 md:py-6 md:px-8 md:pl-5 flex flex-col justify-center">
                                <h2
                                    id="contact-form-heading"
                                    className={`text-sm tracking-[0.14em] text-gray-700 mb-6 flex items-center gap-3 ${shipporiMinchoB1.className} text-balance`}
                                >
                                    フォームに入力して送信
                                    <span className="flex-1 h-px bg-gray-200" aria-hidden />
                                </h2>

                                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                        お名前
                                        <span className="inline-flex items-center gap-0.5 text-[8.5px] text-[#F08300]">
                                            <span className="w-1 h-1 rounded-full bg-[#F08300]" aria-hidden />
                                            必須
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={inputBaseCls}
                                        placeholder="山田 太郎"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? 'error-name' : undefined}
                                    />
                                    {errors.name && (
                                        <p id="error-name" className="mt-1 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                        会社名
                                        <span className="text-[8.5px] text-gray-500">任意</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        className={inputBaseCls}
                                        placeholder="〇〇株式会社"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                        メールアドレス
                                        <span className="inline-flex items-center gap-0.5 text-[8.5px] text-[#F08300]">
                                            <span className="w-1 h-1 rounded-full bg-[#F08300]" aria-hidden />
                                            必須
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={inputBaseCls}
                                        placeholder="example@example.com"
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? 'error-email' : undefined}
                                    />
                                    {errors.email && (
                                        <p id="error-email" className="mt-1 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                        電話番号
                                        <span className="text-[8.5px] text-gray-500">任意</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={inputBaseCls}
                                        placeholder="03-1234-5678"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                    ご用件
                                    <span className="inline-flex items-center gap-0.5 text-[8.5px] text-[#F08300]">
                                        <span className="w-1 h-1 rounded-full bg-[#F08300]" aria-hidden />
                                        必須
                                    </span>
                                </label>
                                <select
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className={`${inputBaseCls} cursor-pointer`}
                                    aria-invalid={!!errors.subject}
                                    aria-describedby={errors.subject ? 'error-subject' : undefined}
                                >
                                    {subjectOptions.map((opt) => (
                                        <option key={opt.value || 'empty'} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.subject && (
                                    <p id="error-subject" className="mt-1 text-sm text-red-600">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
                                    お問い合わせ内容
                                    <span className="inline-flex items-center gap-0.5 text-[8.5px] text-[#F08300]">
                                        <span className="w-1 h-1 rounded-full bg-[#F08300]" aria-hidden />
                                        必須
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`${inputBaseCls} min-h-[120px] resize-y`}
                                    placeholder="お問い合わせ内容をご記入ください"
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'error-message' : undefined}
                                />
                                {errors.message && (
                                    <p id="error-message" className="mt-1 text-sm text-red-600">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <span className="text-[10px] text-gray-400">
                                reCAPTCHA で保護されています
                            </span>
                            <div className="flex items-start gap-2 py-2.5 px-3.5 rounded-lg bg-gray-50 border border-gray-200">
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    id="contact-privacy"
                                    checked={form.privacy}
                                    onChange={handleChange}
                                    className="mt-0.5 w-[15px] h-[15px] shrink-0 accent-[#F08300] cursor-pointer"
                                    aria-invalid={!!errors.privacy}
                                    aria-describedby={errors.privacy ? 'error-privacy' : undefined}
                                />
                                <label htmlFor="contact-privacy" className="text-sm text-gray-600 leading-[1.7] cursor-pointer text-pretty">
                                    <Link
                                        href="/privacy/"
                                        className="text-gray-800 font-medium border-b border-gray-800 hover:no-underline"
                                    >
                                        個人情報の取り扱い
                                    </Link>
                                    に同意の上、送信してください。
                                </label>
                            </div>
                            {errors.privacy && (
                                <p id="error-privacy" className="mt-1 text-sm text-red-600 -mt-2">
                                    {errors.privacy}
                                </p>
                            )}

                            {RECAPTCHA_SITE_KEY && (
                                <Script
                                    src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
                                    strategy="lazyOnload"
                                />
                            )}

                            {(recaptchaError || status === 'error') && (
                                <p className="text-sm text-red-600">
                                    {recaptchaError ?? '送信に失敗しました。しばらく経ってから再度お試しください。'}
                                </p>
                            )}

                            <div className="mt-1 w-full">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#F08300] py-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(240,131,0,.26)] transition-[opacity,transform,box-shadow] duration-200 hover:bg-[#d97400] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(240,131,0,.34)] focus:outline-none focus:ring-2 focus:ring-[#F08300] focus:ring-offset-2 disabled:opacity-70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                                >
                                    {status === 'sending' ? '送信中...' : '送信する'}
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                            </div>

                            {/* 右半分: 成功メッセージ（contact-success.html 右パネル準拠） */}
                            <div className="w-1/2 flex-shrink-0 flex flex-col justify-center py-9 px-6 md:pt-12 md:pr-12 md:pb-10 md:pl-9">
                                <div
                                    className="text-[10px] tracking-[0.14em] text-[#C8A070] mb-3.5 flex items-center gap-2.5 after:content-[''] after:w-8 after:h-px after:bg-[#F0E4D4]"
                                    aria-hidden
                                >
                                    送信完了
                                </div>
                                <h2
                                    id="form-success-heading"
                                    className={`${shipporiMinchoB1Regular.className} font-normal text-[#1A0F04] mb-4 leading-[1.35] text-balance`}
                                    style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
                                >
                                    お問い合わせを受け付けました
                                </h2>
                                <p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-[340px] mb-10 text-sm md:text-base">
                                    ご連絡いただきありがとうございます。内容を確認の上、担当者より2営業日以内にご連絡いたします。
                                </p>
                                <div
                                    className="w-full max-w-[340px] border-t border-[#F0E4D4] mb-8"
                                    aria-hidden
                                />
                                <button
                                    type="button"
                                    onClick={handleBackToForm}
                                    className={`inline-flex items-center gap-2 py-2.5 px-7 rounded-full border-[1.5px] border-[#E8D8C8] bg-transparent text-[#7A5A3A] text-[13px] font-medium cursor-pointer hover:border-[#F08300] hover:text-[#F08300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F08300] focus-visible:ring-offset-2 motion-reduce:transition-none transition-[border-color,color] duration-200 ${dmSans.className}`}
                                >
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        aria-hidden
                                    >
                                        <path
                                            d="M13 8H3M7 4L3 8l4 4"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    フォームに戻る
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
