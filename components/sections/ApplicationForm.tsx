'use client'

import { useState } from 'react'
import Link from 'next/link'
import WaveDecoration from '@/components/ui/WaveDecoration'
import { ApplicationBlobDecoration } from '@/components/ui/BlobDecoration'
import FormSuccessScreen from '@/components/ui/FormSuccessScreen'
import { WORK_STYLES } from '@/lib/data/recruit'

type FormData = {
    name: string
    nameKana: string
    email: string
    phone: string
    workStyle: string
    desiredRole: string
    careerPr: string
    privacy: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

/** ContactForm と同じ Formspree エンドポイント（受信は同一） */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgepnwl'

const workStyleOptions = [
    { value: '', label: '選択してください' },
    ...WORK_STYLES.map((ws) => ({ value: ws.id, label: ws.title })),
]

const initialForm: FormData = {
    name: '',
    nameKana: '',
    email: '',
    phone: '',
    workStyle: '',
    desiredRole: '',
    careerPr: '',
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
    if (!form.workStyle.trim()) newErrors.workStyle = '希望雇用形態を選択してください'
    if (!form.careerPr.trim()) newErrors.careerPr = '経歴・アピールポイントを入力してください'
    if (!form.privacy) newErrors.privacy = 'プライバシーポリシーに同意してください'
    return newErrors
}

export default function ApplicationForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors = validate(form)
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        setStatus('sending')
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    nameKana: form.nameKana,
                    email: form.email,
                    phone: form.phone,
                    workStyle: form.workStyle,
                    desiredRole: form.desiredRole,
                    careerPr: form.careerPr,
                    privacy: form.privacy,
                }),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || `送信に失敗しました (${res.status})`)
            }
            setStatus('success')
            setSubmitted(true)
        } catch (err) {
            setStatus('error')
            console.error('Formspree error:', err)
        }
    }

    const sectionCls = 'relative z-10 overflow-hidden bg-[#FDF6ED]'
    const cardCls =
        'mx-auto max-w-[48rem] rounded-3xl p-10 md:p-14 bg-[#F0E8DE] shadow-[0_2px_16px_rgba(0,0,0,0.08)]'
    const labelCls = 'block mb-1.5 text-[0.9375rem] font-medium text-[#B8860D]'
    const badgeRequiredCls =
        'ml-1.5 inline-block rounded px-2 py-0.5 text-[0.6875rem] font-semibold text-white bg-[#E64D4D]'
    const badgeOptionalCls =
        'ml-1.5 inline-block rounded px-2 py-0.5 text-[0.6875rem] font-medium text-white bg-[hsl(20_15%_50%)]'
    const inputCls =
        'w-full rounded-t-lg border-0 border-b-2 border-[#D4B876] bg-[#FDF9F5] px-4 py-3.5 pb-3 text-base text-[#403a36] shadow-[0_1px_0_0_rgba(212,184,118,0.2)] outline-none transition-colors placeholder:text-[#bdaca2] focus:border-[#E5A00D] focus:bg-white'
    const textareaCls = `${inputCls} min-h-[160px] resize-y`
    const submitBtnCls =
        'inline-flex min-w-[10rem] max-w-[14rem] items-center justify-center rounded-full bg-[#E5A00D] px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(229,160,13,0.35)] transition hover:bg-[#d4910c] hover:shadow-[0_6px_20px_rgba(229,160,13,0.45)] hover:-translate-y-0.5 focus:outline-none focus:ring-[3px] focus:ring-[rgba(229,160,13,0.4)] motion-reduce:hover:translate-y-0'

    if (submitted) {
        return (
            <FormSuccessScreen
                decoration={<ApplicationBlobDecoration compact />}
                title="応募を受け付けました"
                message={
                    <>
                        ご応募いただきありがとうございます。
                        <br />
                        内容を確認の上、担当者よりご連絡差し上げます。
                    </>
                }
                icon="✨"
                onBack={() => {
                    setSubmitted(false)
                    setForm(initialForm)
                    setErrors({})
                }}
            />
        )
    }

    return (
        <section className={sectionCls}>
            <ApplicationBlobDecoration />
            <WaveDecoration />
            <div className="container relative z-30 mx-auto max-w-4xl px-4 pt-12 md:pt-16 pb-40 md:pb-48">
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-[#E5A00D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                        RECRUIT
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-5 text-[#B8860D]">
                        FORM
                    </h2>
                    <p className="text-[#403a36] text-base leading-relaxed max-w-xl mx-auto text-[#E5A00D] mt-2">
                        ご希望の内容をご入力の上<br />
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
                                    placeholder="例) 山田 太郎"
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
                                    ふりがな
                                    <span className={badgeOptionalCls}>任意</span>
                                </label>
                                <input
                                    type="text"
                                    name="nameKana"
                                    value={form.nameKana}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例) やまだ たろう"
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
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例) 03-1234-5678"
                                />
                            </div>

                            <div>
                                <label className={labelCls}>
                                    希望雇用形態
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <select
                                    name="workStyle"
                                    value={form.workStyle}
                                    onChange={handleChange}
                                    className={`${inputCls} cursor-pointer`}
                                    aria-invalid={!!errors.workStyle}
                                    aria-describedby={errors.workStyle ? 'error-workStyle' : undefined}
                                >
                                    {workStyleOptions.map((opt) => (
                                        <option key={opt.value || 'empty'} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.workStyle && (
                                    <p id="error-workStyle" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.workStyle}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className={labelCls}>
                                    希望職種・興味のある業務
                                    <span className={badgeOptionalCls}>任意</span>
                                </label>
                                <input
                                    type="text"
                                    name="desiredRole"
                                    value={form.desiredRole}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="例) データ入力、経理補助 など"
                                />
                            </div>

                            <div>
                                <label className={labelCls}>
                                    経歴・アピールポイント
                                    <span className={badgeRequiredCls}>必須</span>
                                </label>
                                <textarea
                                    name="careerPr"
                                    value={form.careerPr}
                                    onChange={handleChange}
                                    className={textareaCls}
                                    placeholder="これまでの経験や、働きたい理由、アピールしたい点などをご記入ください"
                                    aria-invalid={!!errors.careerPr}
                                    aria-describedby={errors.careerPr ? 'error-careerPr' : undefined}
                                />
                                {errors.careerPr && (
                                    <p id="error-careerPr" className="mt-1 text-sm text-[#E64D4D]">
                                        {errors.careerPr}
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

                            {status === 'error' && (
                                <p className="text-center text-sm text-[#E64D4D]">
                                    送信に失敗しました。しばらく経ってから再度お試しください。
                                </p>
                            )}
                            <div className="pt-2 flex justify-center">
                                <button
                                    type="submit"
                                    className={submitBtnCls}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? '送信中...' : '送信する'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
