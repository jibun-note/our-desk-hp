'use client'

import { useState } from 'react'
import Link from 'next/link'
import WaveDecoration from '@/components/ui/WaveDecoration'
import { ContactBlobDecoration } from '@/components/ui/BlobDecoration'

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

export default function ContactForm() {
    const [form, setForm] = useState<FormData>(initialForm)
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors = validate(form)
        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true)
        }
    }

    /* Contact フォーム用スタイル（Soft pink × sky blue / アンバー背景） */
    const sectionCls =
        'relative z-10 overflow-hidden bg-[#FDF6ED]'
    const cardCls =
        'mx-auto max-w-[48rem] rounded-3xl p-10 md:p-14 bg-[#F0E8DE] shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
    const successCardCls =
        `${cardCls} min-h-[320px] flex flex-col justify-center text-center`
    const labelCls =
        'block mb-1.5 text-[0.9375rem] font-medium text-[#B8860D]'
    const badgeRequiredCls =
        'ml-1.5 inline-block rounded px-2 py-0.5 text-[0.6875rem] font-semibold text-white bg-[#E64D4D]'
    const badgeOptionalCls =
        'ml-1.5 inline-block rounded px-2 py-0.5 text-[0.6875rem] font-medium text-white bg-[hsl(20_15%_50%)]'
    const inputCls =
        'w-full rounded-t-lg border-0 border-b-2 border-[#D4B876] bg-[#FDF9F5] px-4 py-3.5 pb-3 text-base text-[#403a36] shadow-[0_1px_0_0_rgba(212,184,118,0.2)] outline-none transition-colors placeholder:text-[#bdaca2] focus:border-[#E5A00D] focus:bg-white'
    const textareaCls = `${inputCls} min-h-[140px] resize-y`
    const submitBtnCls =
        'inline-flex min-w-[10rem] max-w-[14rem] items-center justify-center rounded-full bg-[#E5A00D] px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(229,160,13,0.35)] transition hover:bg-[#d4910c] hover:shadow-[0_6px_20px_rgba(229,160,13,0.45)] hover:-translate-y-0.5 focus:outline-none focus:ring-[3px] focus:ring-[rgba(229,160,13,0.4)] motion-reduce:hover:translate-y-0'

    const blobs = <ContactBlobDecoration />
    const waves = <WaveDecoration />

    if (submitted) {
        return (
            <section className={`${sectionCls} min-h-[100vh]`}>
                <ContactBlobDecoration compact />
                <WaveDecoration />
                <div className="container relative z-[100] isolate mx-auto flex min-h-[100vh] max-w-4xl flex-col items-center justify-center px-4">
                    <div className={`${successCardCls} relative z-10`}>
                        <div className="text-5xl mb-4">✉️</div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#403a36]">
                            送信完了しました
                        </h2>
                        <p className="text-[#403a36] leading-relaxed mb-8">
                            お問い合わせいただきありがとうございます。
                            <br />
                            内容を確認の上、担当者よりご連絡差し上げます。
                        </p>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitted(false)
                                    setForm(initialForm)
                                    setErrors({})
                                }}
                                className={`${submitBtnCls} max-w-xs`}
                            >
                                フォームに戻る
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className={sectionCls}>
            {blobs}
            {waves}
            <div className="container relative z-30 mx-auto max-w-4xl px-4 pt-12 md:pt-16 pb-40 md:pb-48">
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-[#E5A00D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                        CONTACT
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-5 text-[#B8860D]">
                        FORM
                    </h2>
                    <p className="text-[#403a36] text-base leading-relaxed max-w-xl mx-auto text-[#E5A00D] mt-2">
                        お問い合わせ内容をご入力の上<br />
                        「送信する」ボタンからお送りください。
                    </p>
                </div>

                <div className={cardCls}>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col gap-5 md:gap-6">
                            <div>
                                <label className={labelCls}>
                                    お名前
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例)  山田 太郎"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'error-name' : undefined}
                                />
                                {errors.name && (
                                    <p id="error-name" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelCls}>
                                    会社名
                                    <span className={badgeOptionalCls}>任意</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例)  〇〇株式会社"
                                />
                            </div>

                            <div>
                                <label className={labelCls}>
                                    メールアドレス
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例)  example@example.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'error-email' : undefined}
                                />
                                {errors.email && (
                                    <p id="error-email" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelCls}>
                                    電話番号
                                    <span className={badgeOptionalCls}>任意</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例)  03-1234-5678"
                                />
                            </div>

                            <div>
                                <label className={labelCls}>
                                    ご用件について
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <select
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className={`${inputCls} cursor-pointer`}
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
                                    <p id="error-subject" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelCls}>
                                    お問い合わせ内容
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={textareaCls}
                                    placeholder="お問い合わせ内容をご記入ください"
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'error-message' : undefined}
                                />
                                {errors.message && (
                                    <p id="error-message" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <div className="rounded-xl bg-[#FFFBF7] p-4 md:p-5">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        checked={form.privacy}
                                        onChange={handleChange}
                                        className="h-4 w-4 shrink-0 rounded border-[#888] focus:ring-[#E5A00D] checkbox-contact"
                                        aria-invalid={!!errors.privacy}
                                        aria-describedby={errors.privacy ? 'error-privacy' : undefined}
                                    />
                                    <span className="text-sm text-[#666666]">
                                        <Link
                                            href="/privacy/"
                                            className="text-[#E7A02C] underline hover:no-underline"
                                        >
                                            個人情報の取り扱い
                                        </Link>
                                        に同意の上、送信してください。
                                    </span>
                                </label>
                                {errors.privacy && (
                                    <p id="error-privacy" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.privacy}
                                    </p>
                                )}
                            </div>

                            <div className="pt-2 flex justify-center">
                                <button type="submit" className={submitBtnCls}>
                                    送信する
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
