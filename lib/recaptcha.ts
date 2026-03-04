/**
 * reCAPTCHA v3 サイトキー（Formspree Custom reCAPTCHA Key 方式用）
 * - 本番・Vercel ではここにサイトキーを設定すれば、Environment Variables の設定は不要です。
 * - ローカルで .env.local の NEXT_PUBLIC_RECAPTCHA_SITE_KEY を設定している場合はそちらが優先されます。
 */
const RECAPTCHA_SITE_KEY_BUILD = "6LdRTngsAAAAAG7oVUHt38HYGoS7dRLbH5LJuF5n";

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? RECAPTCHA_SITE_KEY_BUILD;
