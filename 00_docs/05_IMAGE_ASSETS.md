# IMAGE ASSETS｜nolla LP

このファイルは、LP画像の保存場所・用途・再利用方針を管理します。2026/08/01時点のファイル一覧とコード参照を確認して作成しました。内容を目視確認していない未使用素材は、ファイル名だけで用途を断定しません。

## 1. 管理ルール

- 正式素材は`01_brand`または`02_assets`で管理する
- 旧素材は削除せず`99_archive`へ保存する
- 画像ファイル名・保存場所・用途を変更した場合は本ファイルを更新する
- 内容画像には具体的な`alt`を設定する
- 文章と重複する補助アイコン・人物アイコンは`alt=""`とする
- SEVEN MORNINGSの生活写真はMORNING VOICESへ再利用しない
- FAQでは画像を使用しない

## 2. ブランド素材

| 保存場所・ファイル | 使用セクション | 状態・用途 |
|---|---|---|
| `01_brand/logo/final/logo_nolla_primary_dark-brown.png` | Header | 正式ロゴ |
| `01_brand/package/final/package_sunny-nuts_front.png` | THREE FLAVORS | 正式パッケージ |
| `01_brand/package/final/package_berry-morning_front.png` | THREE FLAVORS | 正式パッケージ |
| `01_brand/package/final/package_cacao-quiet_front.png` | THREE FLAVORS | 正式パッケージ |
| `01_brand/package/box/trial-box_angle.png` | TRIAL BOX | 正式な外箱表示 |
| `01_brand/package/box/trial-box_full-set_*.png` | Hero / YOUR FLAVOR / TRIAL BOX | 追加フレーバー別の7袋セット。Heroは`trial-box_full-set_sunny-nuts.png`を静的表示し、他セクションではJavaScriptで切り替え |

## 3. セクション別画像

| カテゴリ | 保存場所 | 使用状況 |
|---|---|---|
| Hero | `02_assets/images/hero` | 1023px以下はSP用4:5、1024px以上はPC用4:3画像を`picture`で切り替え |
| Hero商品セット | `01_brand/package/box/trial-box_full-set_sunny-nuts.png` | 4分割の商品情報表に代わり、標準の3種類7袋セットとして使用 |
| 共感 | `02_assets/images/problem` | `coffee-only`、`getting-ready`、`sleepy-morning`を使用 |
| 3つの強み | `02_assets/images/features` | 3枚を使用 |
| 診断結果 | `02_assets/images/flavor-key-visuals/sp` | 1023px以下で3フレーバーをJavaScriptで切り替え |
| PC診断結果 | `02_assets/images/flavor-key-visuals/pc` | 1024px以上で3フレーバーをJavaScriptで切り替え |
| INSIDE THE BOWL | `02_assets/images/morning-route/bowl-steps` | 正式な段階画像6枚を使用 |
| 空のボウル | `02_assets/images/morning-route/items/morning-route_bowl-empty.png` | INSIDE THE BOWLの開始状態 |
| SEVEN MORNINGS | `02_assets/images/seven-mornings` | 5枚すべて使用。MORNING VOICESへの再利用不可 |
| MORNING VOICES | `02_assets/images/voices` | 人物アイコン3枚を使用。生活写真は使用しない |
| Final CTA | `02_assets/images/final-cta/final-cta_ready-for-day.png` | 正式素材として使用 |

## 4. INSIDE THE BOWL正式画像

- `bowl_step-01_oats.png`
- `bowl_step-02_nuts.png`
- `bowl_step-03_fruits.png`
- `bowl_step-04_flavor.png`
- `bowl_step-05_sweetness.png`
- `bowl_step-06_finished.png`

保存場所：

`02_assets/images/morning-route/bowl-steps`

旧STEP 2〜6は次へ保存済み：

`99_archive/bowl-steps_before-unify`

## 5. MORNING VOICES人物アイコン

| ファイル | 表示対象 | alt |
|---|---|---|
| `review_icon_01.png` | 会社員・31歳 | `alt=""` |
| `review_icon_02.png` | 営業職・33歳 | `alt=""` |
| `review_icon_03.png` | 事務職・30歳 | `alt=""` |

- 3枚は1254×1254の人物アイコン
- 写真から職業・年齢などを推測しない
- 属性は必ずテキストで表示する
- 画像の移動・複製・加工は行っていない

## 6. SEVEN MORNINGS専用画像

- `seven-days_yogurt.png`
- `seven-days_takeout.png`
- `seven-days_fruits.png`
- `seven-days_coffee.png`
- `seven-days_milk.png`

この5枚はSEVEN MORNINGS専用として維持し、MORNING VOICESへ再利用しない。

## 7. 現コードで未使用の主な素材

コード内の画像パス検索で未参照だった素材です。未使用であることは確認済みですが、一部は画像内容を今回目視していません。

- `01_brand/package/box/trial-box_front.png`
- `01_brand/package/box/trial-box_open.png`
- `01_brand/package/final/package_three-flavors_group.png`
- `02_assets/images/flavors/*.png`
- `02_assets/images/morning-route/background/morning-route_table.png`
- `02_assets/images/morning-route/ingredients/*.png`
- `02_assets/images/morning-route/items/item_*.png`
- `02_assets/images/product-detail/*.png`
- `02_assets/images/problem/problem_unused-large-bag.png`
- `02_assets/icons/ui/*.png`
- `02_assets/icons/product-info/icon_free-shipping.png`
- `02_assets/icons/product-info/icon_not-subscription.png`
- `02_assets/icons/how-to-eat/icon_eat-directly.png`

未使用素材は削除・移動していない。

## 8. 今回の変更

### 2026/07/31｜QUESTIONS

- 新しい画像：なし
- 画像差し替え：なし
- 画像用途変更：なし
- FAQ開閉アイコン：画像を使わずCSS疑似要素で作成

### 2026/07/31｜Final CTA・Footer

- 使用画像：`final-cta_ready-for-day.png`
- 保存場所：`02_assets/images/final-cta/final-cta_ready-for-day.png`
- 実サイズ：1448×1086px、4:3、RGB、透過なし
- 使用セクション：Final CTA
- 内容：朝食後、バッグを手に出かける前の明るい朝
- alt：朝食後と外出前の状況を簡潔に説明する
- 状態：正式素材
- Heroとは別構図・別用途
- 再利用：現時点ではFinal CTA専用
- 画像の移動・複製・リネーム・加工：なし
- Footerの新規画像：なし。正式ロゴを既存用途のまま参照

### 2026/07/31｜Hero商品情報

- 使用画像：`trial-box_full-set_sunny-nuts.png`
- 保存場所：`01_brand/package/box/trial-box_full-set_sunny-nuts.png`
- 実サイズ：1448×1086px、4:3、RGB、透過なし
- 使用セクション：Hero
- 内容：SUNNY NUTSを1袋追加した、3種類7袋入りの標準セット
- alt：セット内容が分かる具体的な説明を設定
- 画像用途変更：YOUR FLAVOR / TRIAL BOXに加えてHeroでも使用
- 画像の移動・複製・リネーム・加工：なし

### 2026/07/31｜PC差分で既存画像を使用

- Hero：`hero_granola-pouring_pc_4x3.png`を1024px以上で使用
- 診断結果：`flavor-key-visuals/pc/result_*_pc_4x3.png`を1024px以上で使用
- SP用画像は1023px以下で従来どおり使用
- HTMLの`picture`とJavaScriptの`srcset`同期で切り替える
- 画像の移動・複製・リネーム・加工：なし

## 10. 公開前の画像容量確認（2026/08/01）

使用中画像45枚はPNGとして破損がなく、HTML・JavaScriptからの参照欠落もない。500KiB以上は44枚、1MiB以上は41枚、2MiB以上は9枚。今回は画質と見た目を変えないため、変換・圧縮・リサイズは実施しない。

2MiBを超える主な使用画像：

| ファイル | サイズ | ピクセルサイズ |
|---|---:|---:|
| `02_assets/images/hero/hero_granola-pouring_sp_4x5.png` | 2.83MiB | 1122×1402 |
| `02_assets/images/hero/hero_granola-pouring_pc_4x3.png` | 2.76MiB | 1448×1086 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-05_sweetness.png` | 2.30MiB | 1024×1024 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-02_nuts.png` | 2.27MiB | 1024×1024 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-04_flavor.png` | 2.26MiB | 1024×1024 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-06_finished.png` | 2.25MiB | 1024×1024 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-03_fruits.png` | 2.25MiB | 1024×1024 |
| `02_assets/images/morning-route/bowl-steps/bowl_step-01_oats.png` | 2.12MiB | 1024×1024 |
| `02_assets/images/seven-mornings/seven-days_coffee.png` | 2.00MiB | 1122×1402 |

公開時の最適化候補：
- 写真系PNGをWebPまたはAVIFへ変換し、PNGは必要な場合のみフォールバックとする
- SP / PCの実表示幅に合わせた複数サイズと`srcset`を用意する
- 小さく表示するアイコンは実表示寸法に近い画像を用意する
- 変換後は透明背景、色、トリミング、段階画像の連続性を目視で再確認する

## 11. OGP・faviconの状況（2026/08/01）

- 専用OGP画像：未作成
- 正式favicon・Apple Touch Icon：未作成
- 既存Hero PC画像は4:3かつ2.76MiBで、1200×630pxのOGP専用比率ではないため正式OGPには流用しない
- 公開URL：未決のため`og:url`未設定
- 正式素材が準備できるまでは、ブラウザの自動404を防ぐ空favicon宣言を使用する

## 12. GitHub Pages公開用画像（2026/08/01）

- 公開先：`docs/assets/`
- 対象：HTML・JavaScriptから実際に参照される画像45枚
- 構成：`docs/assets/01_brand/`と`docs/assets/02_assets/`に制作元の階層を維持してコピー
- 同一性：画像内容・画質・ファイル名は変更しない
- 対象外：未使用画像40枚、draft、`99_archive`、旧画像、バックアップ、ZIP、macOS管理ファイル
- 正式faviconと専用OGP画像は未作成のため、現時点では`docs/`へ追加しない
