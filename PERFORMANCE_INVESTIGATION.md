# パフォーマンス調査レポート（2025年2月）

## 調査サマリー

ページの重さ・カクつきの主な原因を特定しました。影響度の高い順に列挙します。

---

## 1. 【高】ヒーロー動画が約16MB

**場所**: `app/page.tsx` セクション1  
**ファイル**: `/Adobe Express - AdobeStock_487035634.mp4`（約16MB）

- フルページ動画が `autoPlay` で即時再生
- 初期ロード・デコードに時間がかかり、メインスレッドをブロック
- モバイルでは特に負荷が大きい

**推奨**:
- 動画を圧縮（例: H.264, 2–3Mbps, 720p）して 2–3MB 程度に
- `poster` 画像でプレースホルダーを表示し、`preload="none"` で遅延読み込み
- または IntersectionObserver でビューポートに入ったら再生開始

---

## 2. 【高】`scroll-snap-type: y proximity` によるスクロール負荷

**場所**: `app/globals.css` 6–11行目

```css
html {
  scroll-snap-type: y proximity;
  ...
}
```

- スクロールのたびにスナップ計算が走る
- セクションに `scroll-snap-align` がほぼ指定されておらず、効果も限定的
- スクロールのカクつきの主要因になりやすい

**推奨**: 削除するか、`prefers-reduced-motion: reduce` 時のみ無効化

---

## 3. 【中】Header の `useScroll` が毎フレーム実行

**場所**: `components/Header.tsx`

```tsx
const { scrollY } = useScroll()
useMotionValueEvent(scrollY, 'change', (latest) => {
  setIsScrolled(latest > 10)
})
```

- スクロールごとに `setIsScrolled` が呼ばれ、再レンダリングが発生
- ヘッダーは常に表示のため、スクロール中ずっと処理が走る

**推奨**: `useScroll` に `layoutEffect: false` を指定するか、throttle（例: 100ms）をかける

---

## 4. 【中】`backdrop-blur` の負荷

**場所**: `components/Header.tsx`（`backdrop-blur-sm`）、`StaggeredMenu.css`（`blur(12px)`）

- `backdrop-filter` は GPU 負荷が高く、特に低スペック端末で重い
- ヘッダーは常時表示のため影響が大きい

**推奨**: ヘッダーの `backdrop-blur-sm` を削除し、背景色のみにする

---

## 5. 【中】GSAP SplitText の `chars` による DOM 増加

**場所**: `app/page.tsx`、`components/ui/SplitText.tsx`

- ヒーローだけで 3 つの SplitText が `splitType="chars"` を使用
- 1 文あたり 20–30 文字 → 60–90 個の `<span>` が生成
- 各 SplitText に ScrollTrigger が紐づき、計算コストが増える

**推奨**: 見た目を許容できる範囲で `splitType="words"` に変更し、DOM ノード数を削減

---

## 6. 【中】WebGL Particles の常時描画

**場所**: `components/ParticlesSection.tsx`、`components/ui/Particles.tsx`

- 50–100 パーティクルで `requestAnimationFrame` が常時実行
- `pauseWhenHidden` はあるが、セクション2は初期表示で見えるため、すぐにアニメーション開始
- 低スペック端末では負荷になりやすい

**推奨**: パーティクル数を 30–50 に減らす、または `pixelRatio` を 1 のまま維持（既に 1）

---

## 7. 【中】`will-change` の常時指定

**場所**: `components/ui/StaggeredMenu.css`（`.sm-icon`, `.sm-icon-line`, `.sm-panel` など）

- `will-change: transform` が常時指定されている
- ブラウザがレイヤーを事前に確保し続け、メモリ使用量が増える

**推奨**: アニメーション中のみ `will-change` を付与し、終了後に解除

---

## 8. 【低】StackCardsWithFixedMarquee のスクロール処理

**場所**: `components/StackCardsWithFixedMarquee.tsx`

- スクロールごとに `getBoundingClientRect` を複数回実行
- `requestAnimationFrame` でスロットリング済みだが、それでも負荷はある

**推奨**: 現状の実装で許容範囲。必要なら throttle を 100ms 程度に延長

---

## 9. 【低】画像最適化が無効

**場所**: `next.config.ts`

```ts
images: { unoptimized: true }
```

- `output: 'export'` のため、Next.js の画像最適化が使えない
- WebP 等への変換やリサイズが行われない

**推奨**: 静的エクスポートを維持する場合、ビルド前に画像を手動で最適化（Squoosh 等）

---

## 10. 【低】Lenis が未使用

**場所**: `package.json`

- `lenis` がインストールされているが、コード内で使用されていない
- スムーススクロール用ライブラリだが、現状はネイティブスクロールを使用

**推奨**: 使わない場合はアンインストールしてバンドルサイズを削減

---

## 実装優先度

| 優先度 | 項目 | 期待効果 | 工数 |
|--------|------|----------|------|
| 1 | scroll-snap-type 削除 | スクロールのカクつき軽減 | 小 |
| 2 | Header backdrop-blur 削除 | 描画負荷軽減 | 小 |
| 3 | useScroll の throttle | 再レンダリング削減 | 小 |
| 4 | 動画の圧縮・遅延読み込み | 初期ロード時間短縮 | 中 |
| 5 | SplitText を words に変更 | DOM・ScrollTrigger 負荷軽減 | 小 |
| 6 | Particles 数削減 | GPU 負荷軽減 | 小 |

---

## 補足

- `LazySection` による遅延レンダリングは適切に使われている
- `OurDeskMarquee` の IntersectionObserver による一時停止も妥当
- `StackCardsWithFixedMarquee` の `passive: true` も適切
