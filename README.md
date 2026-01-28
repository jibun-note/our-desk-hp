# OurDesk株式会社 ホームページ

Next.js 16、TypeScript、Tailwind CSSを使用したSSG（Static Site Generation）対応の会社ホームページです。

## 技術スタック

- **Next.js 16**: Reactフレームワーク（App Router使用）
- **TypeScript**: 型安全性を確保
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク（モバイルファーストで記述）
- **SSG**: 静的サイト生成による高速なパフォーマンス
- **GSAP**: アニメーションライブラリ
- **Three.js**: 3Dグラフィックス（@react-three/fiber）
- **tsparticles**: パーティクルエフェクト
- **motion**: モーションライブラリ
- **ogl**: WebGLライブラリ

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## ビルドとデプロイ

### 静的サイトのビルド

```bash
npm run build
```

ビルドされたファイルは`out`ディレクトリに生成されます。

**注意**: Next.js 16では`next export`コマンドは不要です。`next.config.ts`で`output: 'export'`が設定されているため、`next build`だけで`out`ディレクトリに静的ファイルが生成されます。

### ビルド後の動作確認

ビルド後、本番環境と同様の動作確認を行うには、以下のコマンドを実行してください：

```bash
npx serve@latest out
```

これにより、ビルドされた静的ファイルがローカルサーバーで配信され、本番環境と同様の動作を確認できます。

### ロリポップへのデプロイ

このプロジェクトはSSG（Static Site Generation）対応のため、ロリポップなどのレンタルサーバーにデプロイできます。

#### デプロイ手順

1. **ビルドの実行**

    ```bash
    npm run build
    ```

2. **FTPでアップロード**
    - `out`ディレクトリ内の**すべてのファイルとフォルダ**を選択
    - ロリポップの`public_html`ディレクトリにアップロード
    - 既存のファイルがある場合は、事前にバックアップを取ることを推奨

3. **アップロード後の確認**
    - トップページ（`/`）が正しく表示されるか確認
    - 各ページ（`/about-us/`、`/company/`、`/service/`、`/recruit/`、`/contact/`、`/privacy/`）が正しく表示されるか確認
    - 画像やCSSが正しく読み込まれているか確認
    - 動画ファイルが正しく読み込まれているか確認

#### デプロイチェックリスト

**ビルド前の確認事項**

- [ ] すべてのコンテンツが最新であることを確認
- [ ] ロゴファイル（`OurDesk_logo.png`）が`public`ディレクトリに配置されていることを確認
- [ ] 動画ファイル（`eye-catch-movie.mp4`）が`public`ディレクトリに配置されていることを確認
- [ ] 開発サーバー（`npm run dev`）で動作確認

**デプロイ後の確認事項**

- [ ] トップページが正しく表示される
- [ ] すべてのページが正しく表示される
- [ ] ナビゲーションが正常に動作する
- [ ] 画像が正しく表示される
- [ ] モバイル表示が正常である

#### よくある問題と解決方法

**問題: ページが404エラーになる**

- 原因: ファイルのアップロードが不完全、またはパスの問題
- 解決: `out`ディレクトリ内のすべてのファイルとフォルダを確実にアップロードしてください

**問題: CSSや画像が読み込まれない**

- 原因: `_next`ディレクトリがアップロードされていない
- 解決: `out/_next`ディレクトリも含めてすべてアップロードしてください

**問題: ページ遷移が正常に動作しない**

- 原因: `.htaccess`ファイルの設定不足
- 解決: `public/.htaccess`ファイルが`out`ディレクトリにコピーされているか確認してください

### その他のホスティングサービス

`out`ディレクトリの内容を以下の静的ホスティングサービスにもデプロイできます：

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## プロジェクト構造

```
our-desk-hp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   ├── (static)/          # ルートグループ（静的ページ）
│   │   ├── layout.tsx     # 静的ページ用レイアウト
│   │   ├── about-us/      # About usページ
│   │   ├── company/       # Companyページ
│   │   ├── service/       # Serviceページ
│   │   ├── recruit/       # Recruitページ
│   │   ├── contact/       # お問い合わせページ
│   │   └── privacy/       # プライバシーポリシーページ
│   ├── not-found.tsx      # 404ページ
│   └── globals.css        # グローバルスタイル
├── components/            # 再利用可能なコンポーネント
│   ├── Header.tsx         # ヘッダー/ナビゲーション
│   ├── Footer.tsx         # フッター
│   ├── Layout.tsx         # 共通レイアウト
│   ├── HeroSection.tsx   # ヒーローセクション
│   └── ui/                # UIコンポーネント
│       ├── SplitText.tsx  # テキスト分割アニメーション
│       └── Particles.tsx  # パーティクルエフェクト
├── lib/                   # ユーティリティ関数
│   └── utils.ts           # 共通ユーティリティ
├── public/                # 静的ファイル（画像、動画など）
│   ├── OurDesk_logo.png   # ロゴ画像
│   ├── eye-catch-movie.mp4 # アイキャッチ動画
│   └── .htaccess          # Apache設定ファイル
└── ...設定ファイル
```

## ページ構成

- **トップページ** (`/`): ヒーローセクション、特徴、CTA
- **About us** (`/about-us/`): 会社について
- **Company** (`/company/`): 会社情報、理念、沿革
- **Service** (`/service/`): サービス一覧
- **Recruit** (`/recruit/`): 採用情報
- **Contact** (`/contact/`): お問い合わせフォーム（現在は表示のみ）
- **Privacy Policy** (`/privacy/`): プライバシーポリシー

## カスタマイズ

### カラーテーマ

`tailwind.config.ts`でカラーテーマをカスタマイズできます。デフォルトでは以下のカラーが設定されています：

- **Primary**: イエロー（`#FDD000`）からオレンジ（`#F08300`）のグラデーション
- **Gray**: グレースケール（`#f9f9f9`から`#1a1a1a`）

### コンテンツの編集

各ページのコンテンツは`app`ディレクトリ内の各`page.tsx`ファイルで編集できます。静的ページは`app/(static)/`ディレクトリ配下に配置されています。

### アニメーション

GSAPを使用したアニメーションが実装されています。`components/ui/SplitText.tsx`などでテキストアニメーションを管理しています。

## 注意事項

- お問い合わせフォームは現在表示のみの状態です。実際の送信機能を実装するには、バックエンドAPIまたはフォームサービス（Formspree、SendGrid等）の連携が必要です。
- 画像最適化はSSGモードでは無効化されています（`next.config.ts`で設定）。必要に応じて調整してください。
- `next.config.ts`で`trailingSlash: true`が設定されているため、すべてのURLに末尾スラッシュが付きます。
- 3Dグラフィックスやパーティクルエフェクトを使用しているため、パフォーマンスに注意してください。

## ライセンス

© 2026 OurDesk株式会社. All rights reserved.
