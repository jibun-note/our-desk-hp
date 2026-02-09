# 画像・動画ファイル名の英名統一（kebab-case・連番・ページ別ディレクトリ）

## 現状（コードベース確認済み）

- **public/ ルート**: `hero-eyecatch.mp4` と `our-desk-logo.png` は**既にリネーム済み**。コードも `/hero-eyecatch.mp4`・`/our-desk-logo.png` を参照している。
- **public/images/**: ファイルは**平置きのまま**。AdobeStock 系（6件）・日本語ファイル名（5件）・`neugate_logo.jpg` は未リネーム・未移動。
- **未対応**: ディレクトリ分け（home/shared/strength-cards/stack-cards/about-us）と、上記ファイルの移動・連番リネーム、およびコード参照の新パスへの置換。

---

## 命名ルール

- **使用ページ／コンポーネントごとにディレクトリを分ける**: `public/images/<ページまたはコンポーネント名>/`
- **ファイル名**: そのディレクトリ内で **2桁ゼロ埋め連番**（`01.jpeg`, `02.png`, ...）、使用されている**順番**で付与。
- **共有アセット**（複数ページで使うロゴなど）: `public/images/shared/` に配置。ファイル名は `our-desk-logo.png` のように意味のある英名でよい。

**ディレクトリの対応**

| ディレクトリ | 使用箇所 |
|--------------|----------|
| `images/home/` | トップページ専用（ヒーロー動画） |
| `images/shared/` | 全ページで使用（ロゴ等） |
| `images/strength-cards/` | StrengthCards コンポーネント（トップで使用） |
| `images/stack-cards/` | StackCardsSection／スタックカード（トップで使用） |
| `images/about-us/` | about-us ページ |

---

## 対象ファイルと新パス（ディレクトリ＋連番）の対応表

### public/ ルート → ページ別ディレクトリへ移動（現在のファイル名で記載）

| 現在のパス（実態） | 新パス |
|--------------------|--------|
| `public/hero-eyecatch.mp4` | `public/images/home/01.mp4` |
| `public/our-desk-logo.png` | `public/images/shared/our-desk-logo.png` |

### public/images/ 平置き → サブディレクトリへ移動・連番

**strength-cards/**（StrengthCards 内、使用順）

| 現在のパス | 新パス |
|------------|--------|
| `images/AdobeStock_1408184906.jpeg` | `images/strength-cards/01.jpeg` |
| `images/AdobeStock_537141193.jpeg` | `images/strength-cards/02.jpeg` |
| `images/AdobeStock_399162949.jpeg` | `images/strength-cards/03.jpeg` |

**about-us/**（about-us ページ内、使用順）

| 現在のパス | 新パス |
|------------|--------|
| `images/AdobeStock_832084528.jpeg` | `images/about-us/01.jpeg` |
| `images/AdobeStock_33524197_Preview.jpeg` | `images/about-us/02.jpeg` |
| `images/AdobeStock_275188548_Preview.jpeg` | `images/about-us/03.jpeg` |

**stack-cards/**（StackCardsSection＋page から渡す4枚、使用順）

| 現在のパス | 新パス |
|------------|--------|
| `images/モバイル用背景.jpeg` | `images/stack-cards/01.jpeg` |
| `images/イキイキした写真.png` | `images/stack-cards/02.png` |
| `images/ノイゲート写真.png` | `images/stack-cards/03.png` |
| `images/ライフステージ写真.png` | `images/stack-cards/04.png` |
| `images/親子写真.png` | `images/stack-cards/05.png` |

**shared/**（共通・ロゴ）

| 現在のパス | 新パス |
|------------|--------|
| `images/neugate_logo.jpg` | `images/shared/neugate-logo.jpg` |

---

## 実施手順

### 1. ディレクトリ作成とファイルの移動・リネーム（PowerShell）

**実行場所**: プロジェクトルート（`c:\our-desk-hp`）で PowerShell を開き、以下を順に実行する。ソースは**現在のコードベースのファイル名**に合わせてある。

```powershell
# プロジェクトルートに移動
Set-Location c:\our-desk-hp

# ディレクトリ作成
New-Item -ItemType Directory -Path "public\images\home" -Force
New-Item -ItemType Directory -Path "public\images\shared" -Force
New-Item -ItemType Directory -Path "public\images\strength-cards" -Force
New-Item -ItemType Directory -Path "public\images\stack-cards" -Force
New-Item -ItemType Directory -Path "public\images\about-us" -Force

# public ルート → ページ別ディレクトリ（現状のファイル名: hero-eyecatch.mp4, our-desk-logo.png）
Move-Item "public\hero-eyecatch.mp4" "public\images\home\01.mp4"
Move-Item "public\our-desk-logo.png" "public\images\shared\our-desk-logo.png"

# strength-cards
Move-Item "public\images\AdobeStock_1408184906.jpeg" "public\images\strength-cards\01.jpeg"
Move-Item "public\images\AdobeStock_537141193.jpeg" "public\images\strength-cards\02.jpeg"
Move-Item "public\images\AdobeStock_399162949.jpeg" "public\images\strength-cards\03.jpeg"

# about-us
Move-Item "public\images\AdobeStock_832084528.jpeg" "public\images\about-us\01.jpeg"
Move-Item "public\images\AdobeStock_33524197_Preview.jpeg" "public\images\about-us\02.jpeg"
Move-Item "public\images\AdobeStock_275188548_Preview.jpeg" "public\images\about-us\03.jpeg"

# stack-cards（日本語ファイル名は -LiteralPath で指定）
Move-Item -LiteralPath "public\images\モバイル用背景.jpeg" -Destination "public\images\stack-cards\01.jpeg"
Move-Item -LiteralPath "public\images\イキイキした写真.png" -Destination "public\images\stack-cards\02.png"
Move-Item -LiteralPath "public\images\ノイゲート写真.png" -Destination "public\images\stack-cards\03.png"
Move-Item -LiteralPath "public\images\ライフステージ写真.png" -Destination "public\images\stack-cards\04.png"
Move-Item -LiteralPath "public\images\親子写真.png" -Destination "public\images\stack-cards\05.png"

# shared
Move-Item "public\images\neugate_logo.jpg" "public\images\shared\neugate-logo.jpg"
```

### 2. コード参照の置換（現在の参照 → 新パス）

コードベースでは既に `/hero-eyecatch.mp4` と `/our-desk-logo.png` を参照している。以下はそれらを含め、**すべて新ディレクトリ・連番パス**へ置き換える。

| ファイル | 置換内容（現在 → 新） |
|----------|------------------------|
| **app/page.tsx** | `src="/hero-eyecatch.mp4"` → `src="/images/home/01.mp4"`。`/images/イキイキした写真.png` → `'/images/stack-cards/02.png'`、`/images/ノイゲート写真.png` → `'/images/stack-cards/03.png'`、`/images/ライフステージ写真.png` → `'/images/stack-cards/04.png'`、`/images/親子写真.png` → `'/images/stack-cards/05.png'`。 |
| **app/layout.tsx** | `url: '/our-desk-logo.png'` → `url: '/images/shared/our-desk-logo.png'` |
| **lib/seo.ts** | `url: "/our-desk-logo.png"` → `url: "/images/shared/our-desk-logo.png"` |
| **components/JsonLd.tsx** | `our-desk-logo.png` → `images/shared/our-desk-logo.png`（`logo` の URL 内） |
| **components/StaggerdMenuHeader.tsx** | `logoUrl="/our-desk-logo.png"` → `logoUrl="/images/shared/our-desk-logo.png"` |
| **components/Footer.tsx** | `src="/our-desk-logo.png"` → `src="/images/shared/our-desk-logo.png"` |
| **components/ui/StaggeredMenu.tsx** | `'/our-desk-logo.png'` → `'/images/shared/our-desk-logo.png'`（2箇所） |
| **components/StackCardsSection.tsx** | `"/images/モバイル用背景.jpeg"` → `"/images/stack-cards/01.jpeg"` |
| **components/StrengthCards.tsx** | `'/images/AdobeStock_1408184906.jpeg'` → `'/images/strength-cards/01.jpeg'`、`AdobeStock_537141193` → `02`、`AdobeStock_399162949` → `03` |
| **app/(static)/about-us/page.tsx** | `'/images/AdobeStock_832084528.jpeg'` → `'/images/about-us/01.jpeg'`、`AdobeStock_33524197_Preview.jpeg` → `about-us/02.jpeg`、`AdobeStock_275188548_Preview.jpeg` → `about-us/03.jpeg` |

### 3. ドキュメントの更新（任意）

- **README.md**: ロゴ・アイキャッチのパスを `images/shared/our-desk-logo.png`、`images/home/01.mp4` に合わせて修正。

### 4. 動作確認

- `npm run build` でビルドが通ること。
- トップ・About Us・スタックカード・StrengthCards・ヘッダー/フッターのロゴ表示をブラウザで確認する。

---

## 変更後の public/images 構成

```
public/images/
  home/
    01.mp4
  shared/
    our-desk-logo.png
    neugate-logo.jpg
  strength-cards/
    01.jpeg
    02.jpeg
    03.jpeg
  about-us/
    01.jpeg
    02.jpeg
    03.jpeg
  stack-cards/
    01.jpeg
    02.png
    03.png
    04.png
    05.png
```

**注**: `neugate-logo.jpg` は現状コード内で未参照。`images/shared/neugate-logo.jpg` に置いておき、将来使う場合はこのパスで参照する。
