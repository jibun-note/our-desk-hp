'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    const errors: FormErrors = {}
    if (!form.name.trim()) errors.name = 'お名前を入力してください'
    if (!form.email.trim()) {
        errors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = '正しいメールアドレス形式で入力してください'
    }
    if (!form.workStyle) errors.workStyle = '希望雇用形態を選択してください'
    if (!form.careerPr.trim()) errors.careerPr = '経歴・アピールポイントを入力してください'
    if (!form.privacy) errors.privacy = 'プライバシーポリシーに同意してください'
    return errors
}

/* ─── ラベル共通（内部専用） ─── */
type LabelRowProps = {
    label: string
    badge: 'required' | 'optional'
    htmlFor?: string
}

function LabelRow({ label, badge, htmlFor }: LabelRowProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1"
        >
            {label}
            {badge === 'required' ? (
                <span className="inline-flex items-center gap-0.5 text-[8.5px] text-[#F08300]">
                    <span className="w-1 h-1 rounded-full bg-[#F08300]" aria-hidden />
                    必須
                </span>
            ) : (
                <span className="text-[8.5px] text-gray-400">任意</span>
            )}
        </label>
    )
}

const inputCls =
    'w-full bg-transparent border-0 border-b-[1.5px] border-gray-300 py-1.5 text-[14.5px] text-gray-900 outline-none transition-[border-color] duration-200 placeholder:text-gray-400 placeholder:text-[13px] focus:border-[#F08300]'

export default function ApplicationForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [form, setForm] = useState<FormData>(initialForm)
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
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
                }),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error((data as { error?: string }).error || `送信エラー (${res.status})`)
            }
            setStatus('success')
            setIsSubmitted(true)
        } catch (err) {
            setStatus('error')
            console.error('Formspree error:', err)
        }
    }

    const handleBackToForm = () => {
        setIsSubmitted(false)
        setForm(initialForm)
        setErrors({})
        setStatus('idle')
    }

    return (
        <section
            id="application-form"
            className="relative bg-white py-20 md:py-28 px-4 scroll-mt-20"
            aria-labelledby="application-form-heading"
        >
            {/* セクションヘッダー */}
            <div className="text-center mb-12">
                <p className="text-[10px] tracking-[0.2em] text-[#F08300] uppercase mb-3 font-medium">
                    Recruit Application
                </p>
                <h2
                    id="application-form-heading"
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                >
                    応募フォーム
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                    ご希望の内容を入力の上、「送信する」ボタンからお送りください。
                </p>
            </div>

            {/* カード */}
            <div className="mx-auto max-w-[600px]">
                {/*
                  カード: ミモザ画像を 7% opacity で敷き、白 88% オーバーレイを重ねる。
                  スライドアニメーションのため overflow-hidden + 200% 幅の内部コンテナを使用。
                */}
                <div
                    className="relative rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,.04),0_16px_56px_rgba(0,0,0,.09)] overflow-hidden"
                    role="region"
                    aria-live="polite"
                >
                    {/* 背景: ミモザ画像 7% opacity */}
                    <div
                        className="absolute inset-0 z-0"
                        aria-hidden
                    >
                        <img
                            src="/images/recruit/mimosa.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                            style={{ opacity: 0.07 }}
                        />
                    </div>
                    {/* オーバーレイ */}
                    <div
                        className="absolute inset-0 z-[1]"
                        style={{ background: 'rgba(255,255,255,0.88)' }}
                        aria-hidden
                    />

                    {/* スライドコンテナ */}
                    <div
                        className="relative z-10 flex w-[200%] motion-reduce:transition-none"
                        style={{
                            transform: isSubmitted ? 'translateX(-50%)' : 'translateX(0)',
                            transition: 'transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)',
                        }}
                    >
                        {/* ── 左半分: フォーム ── */}
                        <div className="w-1/2 flex-shrink-0 px-6 py-8 md:px-10 md:py-10">
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                                {/* お名前 / ふりがな */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <LabelRow label="お名前" badge="required" htmlFor="app-name" />
                                        <input
                                            id="app-name"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className={inputCls}
                                            placeholder="山田 太郎"
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'err-name' : undefined}
                                        />
                                        {errors.name && (
                                            <p id="err-name" className="mt-1 text-xs text-red-600">{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <LabelRow label="ふりがな" badge="optional" htmlFor="app-nameKana" />
                                        <input
                                            id="app-nameKana"
                                            type="text"
                                            name="nameKana"
                                            value={form.nameKana}
                                            onChange={handleChange}
                                            className={inputCls}
                                            placeholder="やまだ たろう"
                                        />
                                    </div>
                                </div>

                                {/* メール / 電話 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <LabelRow label="メールアドレス" badge="required" htmlFor="app-email" />
                                        <input
                                            id="app-email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={inputCls}
                                            placeholder="example@example.com"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'err-email' : undefined}
                                        />
                                        {errors.email && (
                                            <p id="err-email" className="mt-1 text-xs text-red-600">{errors.email}</p>
                                        )}
                                    </div>
                                    <div>
                                        <LabelRow label="電話番号" badge="optional" htmlFor="app-phone" />
                                        <input
                                            id="app-phone"
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className={inputCls}
                                            placeholder="03-1234-5678"
                                        />
                                    </div>
                                </div>

                                {/* 希望雇用形態 */}
                                <div>
                                    <LabelRow label="希望雇用形態" badge="required" htmlFor="app-workStyle" />
                                    <select
                                        id="app-workStyle"
                                        name="workStyle"
                                        value={form.workStyle}
                                        onChange={handleChange}
                                        className={`${inputCls} cursor-pointer`}
                                        aria-invalid={!!errors.workStyle}
                                        aria-describedby={errors.workStyle ? 'err-workStyle' : undefined}
                                    >
                                        {workStyleOptions.map((opt) => (
                                            <option key={opt.value || 'empty'} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.workStyle && (
                                        <p id="err-workStyle" className="mt-1 text-xs text-red-600">{errors.workStyle}</p>
                                    )}
                                </div>

                                {/* 希望職種 */}
                                <div>
                                    <LabelRow label="希望職種・興味のある業務" badge="optional" htmlFor="app-desiredRole" />
                                    <input
                                        id="app-desiredRole"
                                        type="text"
                                        name="desiredRole"
                                        value={form.desiredRole}
                                        onChange={handleChange}
                                        className={inputCls}
                                        placeholder="例) データ入力、経理補助 など"
                                    />
                                </div>

                                {/* 経歴・アピールポイント */}
                                <div>
                                    <LabelRow label="経歴・アピールポイント" badge="required" htmlFor="app-careerPr" />
                                    <textarea
                                        id="app-careerPr"
                                        name="careerPr"
                                        value={form.careerPr}
                                        onChange={handleChange}
                                        className={`${inputCls} min-h-[130px] resize-y`}
                                        placeholder="これまでの経験や、働きたい理由、アピールしたい点などをご記入ください"
                                        aria-invalid={!!errors.careerPr}
                                        aria-describedby={errors.careerPr ? 'err-careerPr' : undefined}
                                    />
                                    {errors.careerPr && (
                                        <p id="err-careerPr" className="mt-1 text-xs text-red-600">{errors.careerPr}</p>
                                    )}
                                </div>

                                {/* プライバシー同意 */}
                                <div>
                                    <div className="flex items-start gap-2 py-2.5 px-3.5 rounded-lg bg-gray-50 border border-gray-200">
                                        <input
                                            type="checkbox"
                                            name="privacy"
                                            id="app-privacy"
                                            checked={form.privacy}
                                            onChange={handleChange}
                                            className="mt-0.5 w-[15px] h-[15px] shrink-0 accent-[#F08300] cursor-pointer"
                                            aria-invalid={!!errors.privacy}
                                            aria-describedby={errors.privacy ? 'err-privacy' : undefined}
                                        />
                                        <label htmlFor="app-privacy" className="text-sm text-gray-600 leading-[1.7] cursor-pointer text-pretty">
                                            <Link href="/privacy/" className="text-gray-800 font-medium border-b border-gray-800 hover:no-underline">
                                                個人情報の取り扱い
                                            </Link>
                                            に同意の上、送信してください。
                                        </label>
                                    </div>
                                    {errors.privacy && (
                                        <p id="err-privacy" className="mt-1 text-xs text-red-600">{errors.privacy}</p>
                                    )}
                                </div>

                                {/* 送信エラー */}
                                {status === 'error' && (
                                    <p className="text-sm text-red-600 text-center">
                                        送信に失敗しました。しばらく経ってから再度お試しください。
                                    </p>
                                )}

                                {/* 送信ボタン */}
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

                        {/* ── 右半分: 送信完了メッセージ ── */}
                        <div
                            className="w-1/2 flex-shrink-0 flex flex-col justify-center py-12 px-8 md:px-12"
                            aria-hidden={!isSubmitted}
                        >
                            <div
                                className="text-[10px] tracking-[0.14em] text-[#C8A070] mb-3.5 flex items-center gap-2.5 after:content-[''] after:w-8 after:h-px after:bg-[#F0E4D4]"
                                aria-hidden
                            >
                                送信完了
                            </div>
                            <h2 className="text-[#1A0F04] font-bold leading-snug mb-4 text-balance text-2xl md:text-3xl">
                                応募を受け付けました
                            </h2>
                            <p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-[340px] mb-10 text-sm">
                                ご応募いただきありがとうございます。<br />
                                内容を確認の上、担当者よりご連絡差し上げます。
                            </p>
                            <div className="w-full max-w-[340px] border-t border-[#F0E4D4] mb-8" aria-hidden />
                            <button
                                type="button"
                                onClick={handleBackToForm}
                                className="inline-flex items-center gap-2 py-2.5 px-7 rounded-full border-[1.5px] border-[#E8D8C8] bg-transparent text-[#7A5A3A] text-[13px] font-medium cursor-pointer hover:border-[#F08300] hover:text-[#F08300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F08300] focus-visible:ring-offset-2 motion-reduce:transition-none transition-[border-color,color] duration-200"
                            >
                                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
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
        </section>
    )
}
