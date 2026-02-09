---
name: StrengthSection 軽量化リファクタ
overview: StrengthSection まわりの「最初のカルーセル操作でガクガクする」原因を、モバイル/デスクトップのコンポーネント統一と State 管理の整理で解消するためのリファクタ計画です。
todos: []
isProject: false
---

# StrengthSection 軽量化・リファクタ計画

## 現状の問題整理

### 1. モバイル/デスクトップで別コンポーネント → 初回・リサイズでガクつき

[StrengthCards.tsx](components/sections/StrengthCards.tsx) では `**isNarrow**` を `useLayoutEffect` + `resize` で管理し、**MobileCard** と **DesktopSlide** を切り替えている。

- 初期レンダー: `isNarrow === true`（デフォルト）で全スライドが **MobileCard**。
- デスクトップでは useLayoutEffect 後に `isNarrow === false` になり、全スライドが **DesktopSlide** に差し替わる → **DOM の作り替え＋レイアウト再計算** が一気に走り、体感が重い。
- ブレークポイントをまたぐたびに同様の切り替えが発生する。

### 2. 見出しの二重管理とレイアウトシフト

[StrengthSection.tsx](components/sections/StrengthSection.tsx) の **Section3HeadingDesktop** は:

- `useState(false)` + `useEffect` で `matchMedia` を購読。
- 初回は `null` を返し、effect 後に「見出しあり」で再描画 → **レイアウトシフト** と、StrengthSection 配下の再レンダー要因になっている。

### 3. カルーセル State の二重管理

[StrengthCards.tsx](components/sections/StrengthCards.tsx) では:

- 自前で **carouselState**（`selectedIndex`, `canScrollPrev`, `canScrollNext`）を保持し、**api.on('select', onSelect)** で更新している。
- 一方 [components/ui/carousel.tsx](components/ui/carousel.tsx) も内部で **canScrollPrev / canScrollNext** を state で持ち、同じ **api.on('select', onSelect)** を購読している。

→ **同一イベントで 2 箇所が setState** するため、1 回のスライド操作で不要な再レンダーが増え、初回スワイプ時の「ガクッ」の一因になっている。

### 4. 初回スワイプ時の負荷

- 上記の二重 state 更新に加え、`shouldLoadImage` で「隣 1 枚だけ画像をマウント」しているため、**初めて次のスライドに移った瞬間**に Image のデコード・描画がまとめて走る。
- そのタイミングで state 更新も重なると、メインスレッドが詰まりやすい。

---

## 修正方針

### A. モバイルとデスクトップで「同じコンポーネント」にする

- **1 つのスライドコンポーネント**にし、レイアウトの違いは **Tailwind のレスポンシブクラス**（`md:grid-cols-2` など）で表現する。
- `**isNarrow` を廃止し、`useLayoutEffect` / `resize` による「MobileCard ⇔ DesktopSlide」の切り替えをやめる。
- これで「初回描画後の作り替え」や「リサイズ時の DOM 差し替え」がなくなり、ガクつき要因を削減する。

### B. 見出しは CSS で出し分け（State をやめる）

- 見出しを **常に 1 つだけ** マークアップで描画する。
- モバイル用（オーバーレイ風）・デスクトップ用（セクション上部）の表示切り替えは `**hidden md:block` / `md:hidden**` など CSS のみで行う。
- Section3HeadingDesktop の **matchMedia + useState** を削除し、**Section3HeadingDesktop は廃止**して、StrengthSection 側で 1 本の見出し構造にまとめる。

### C. カルーセル State の一本化

- **canScrollPrev / canScrollNext** は **Carousel の Context（useCarousel）** の値だけを使い、StrengthCards 側の carouselState からは削除する。
- StrengthCards が持つ state は **selectedIndex のみ**とし、**api.on('select')** の購読は **1 回だけ**（StrengthCards 側の 1 つの effect で selectedIndex だけ更新）にする。
- 必要なら [components/ui/carousel.tsx](components/ui/carousel.tsx) の Context に **selectedIndex**（または selectedScrollSnap）を追加し、StrengthCards はそれを使う形にしてもよい（現状は api 経由で selectedScrollSnap() を読んでいるので、selectedIndex だけ自前で持つ最小変更でも可）。

### D. 画像まわり（オプション）

- `shouldLoadImage` による「表示中＋隣 1 枚だけマウント」は維持してよい。
- 余裕があれば「カルーセルがビューポートに入ったら隣スライドの画像を preload する」などで、初回スワイプ時のデコード負荷を前倒しする方法はある（必須ではない）。

---

## 変更対象ファイルと作業内容

| ファイル                                                       | 変更内容                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [StrengthSection.tsx](components/sections/StrengthSection.tsx) | Section3HeadingDesktop を廃止。見出しを 1 つにまとめ、モバイル用／デスクトップ用を同じ JSX 内で `hidden md:block` / `md:hidden` で出し分け。matchMedia は使わない。                                                                                                                                                                                                                                                                                                   |
| [StrengthCards.tsx](components/sections/StrengthCards.tsx)     | ① MobileCard / DesktopSlide をやめ、1 つの **StrengthSlide**（レスポンシブクラスでレイアウト切替）に統一。② **isNarrow** とその useLayoutEffect / resize を削除。③ **carouselState** から canScrollPrev / canScrollNext を削除し、**useCarousel()** から取得。④ **selectedIndex** のみ state（または Context 拡張で取得）とし、api.on('select') の購読を 1 本化。⑤ ドットインジケーターの「モバイルは丸・デスクトップは横長」などは、必要なら CSS（md: など）で表現。 |
| [components/ui/carousel.tsx](components/ui/carousel.tsx)       | オプション。Context に **selectedIndex**（api.selectedScrollSnap()）を追加し、StrengthCards の state をさらに減らす場合にのみ変更。                                                                                                                                                                                                                                                                                                                                   |

---

## 実装の流れ（推奨順）

1. **StrengthSection**: 見出しを 1 本化し、CSS で表示切替（Section3HeadingDesktop 削除）。
2. **StrengthCards**: carouselState を selectedIndex のみにし、canScrollPrev/Next は useCarousel() から取得。
3. **StrengthCards**: MobileCard / DesktopSlide を廃止し、1 つの StrengthSlide（レスポンシブレイアウト）に統一。isNarrow と useLayoutEffect/resize を削除。
4. （任意）carousel Context に selectedIndex を追加し、StrengthCards の state をさらに削る。

この順で進めると、State とレンダー経路を減らしたうえで、モバイルとデスクトップで同じコンポーネントにでき、初回スワイプやリサイズ時のガクつきを抑えられる構成になる。
