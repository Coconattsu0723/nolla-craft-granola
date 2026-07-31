# DESIGN RULES｜nolla LP

このファイルは、現在のHTML・CSS・JavaScriptから確認できるUI規則をまとめた正本です。コードから確認できない内容は「未確認」と記載します。

## 1. 基本方針

- モバイルファースト
- SP基準幅：375px
- 基本背景はオフホワイトと淡いベージュを交互に使用
- 強い影・派手なグラデーション・過剰なアニメーションを避ける
- タイトルだけでなく、導入文・キャプション・カード本文も自然な改行を優先する
- 長文には必要に応じて`text-wrap: pretty`を使用する

## 2. 配色

| 用途 | CSS変数 | 色 |
|---|---|---|
| メイン背景 | `--color-bg-main` | `#FFFCF6` |
| サブ背景 | `--color-bg-sub` | `#F4EBDD` |
| メイン文字 | `--color-text-main` | `#3E2B24` |
| 補助文字 | `--color-text-sub` | `#74655E` |
| 罫線 | `--color-line` | `#DED3C5` |
| CTA | `--color-cta` | `#A85F46` |
| CTA hover | `--color-cta-hover` | `#8E4D38` |
| SUNNY NUTS | `--color-flavor-sunny` | `#E9C978` |
| BERRY MORNING | `--color-flavor-berry` | `#D99A9D` |
| CACAO QUIET | `--color-flavor-cacao` | `#A9775C` |

フレーバーは色だけで伝えず、必ず名称を併記する。

## 3. フォント

- 本文：Noto Sans JP
- UI見出し：Zen Kaku Gothic New
- コピー・大見出し：Zen Old Mincho
- 英字ラベル・数値：Manrope

## 4. 余白・幅・角丸

- SP左右余白：24px
- 768px以上の左右余白：40px
- コンテンツ最大幅：SP〜タブレット 1120px、1024px以上 1160px
- 通常セクション余白：SP 96px、768px以上 112px、1024px以上 124px、1366px以上 132px
- 小角丸：12px
- 中角丸：20px
- ピル形状：999px
- FAQの読み物幅：1024px以上で最大820px
- MORNING VOICES：1024px以上は同幅3カラム

## 5. 画像

- HTMLで使用する画像には`width`と`height`を指定する
- 内容画像には内容を示す`alt`を設定する
- 文章で同じ情報を伝える補助アイコンは`alt=""`とする
- HeroはSPで4:5、1024px以上でPC用4:3画像へ切り替える
- 診断結果はSP用4:3画像とPC用4:3画像を`picture`で切り替える
- Heroの商品情報は4分割の数値表を使わず、7袋セットの4:3画像・商品名・価格を1枚のカードにまとめる
- Heroの商品名と価格は画像の直下へ近接配置し、カードの次に主CTAを置く
- ボウル段階画像は4:3の枠内で`object-fit: contain`
- 人物アイコンは正方形画像を円形表示する
- HeaderロゴとHero画像は遅延読み込みしない
- Hero画像は`loading="eager"`と`fetchpriority="high"`を設定する
- ファーストビュー外の静的画像は原則`loading="lazy"`とする
- JavaScriptで切り替える診断結果・ボウル段階・TRIAL BOX画像は、表示の跳ねを避けるため既存の事前読み込みを維持する

### 公開用メタ画像

- faviconは正式素材が決まるまで、不要な`favicon.ico`取得を止める空favicon宣言を維持する
- 専用OGP画像と公開URLが未決の間は、誤った`og:image`・`og:url`を推測で設定しない
- OGP画像は1200×630pxを基準に、ブランド名と商品が小さい表示でも判別できる専用画像を用意する
- 正式favicon・OGP画像を追加した場合は`05_IMAGE_ASSETS.md`へ用途と保存場所を記録する

## 6. カード

- オフホワイトまたは白背景
- 1pxの淡い罫線
- 20〜28px程度の角丸
- 強い影を避ける
- 同一用途のカードは共通クラスを使用し、色差分はmodifierまたはCSS変数で管理する

## 7. ボタン・focus

- 主CTAはピル形状、背景`--color-cta`、白文字
- タップ領域は原則44px以上
- `:focus-visible`は3pxのCTA色アウトライン、4pxオフセット
- hoverは対応端末に限定し、色・小さな移動に留める

## 8. Header・ハンバーガーメニュー

- Header高さ：68px
- Header全体とロゴは固定しない
- メニューはHTML標準の`details` / `summary`
- 開閉アイコンは2本線をCSSで変形
- ページ内リンク選択時は`main.js`の`initSpMenu`でメニューを閉じる
- リンク選択後とEscキーで閉じた後は、固定メニューボタンへフォーカスを戻す
- QUESTIONSリンク先：`#questions`
- 1023px以下では`details.sp-menu`だけを画面右上へ固定
- 固定位置：上10px＋上safe area、右16px＋右safe area
- 固定ボタン：最小82×48px、枠線なしの淡い半透明背景、周囲になじむぼかした控えめな影
- Header内は固定ボタン用に右側90pxを追加確保
- パネルは画面上部から下へ表示し、最大高`100dvh`、縦スクロール可
- パネルを開いている間もbodyのスクロールロックは行わない
- オーバーレイは使用しない
- 1024px以上は固定ハンバーガーを非表示にし、Header内へPCナビを表示
- 画面幅が1024px以上へ変わった場合は、開いていたSPメニューを閉じる
- 1023px以下の`.section`は84px相当、1024px以上は24pxの`scroll-margin-top`

### 重なり順

- Skip link：1000
- 固定ハンバーガーとパネル：120
- Header：100
- 右下固定CTA：80
- 通常コンテンツ：通常の文書順

## 9. 右下固定CTA

- 1023px以下は画面右下へ円形で固定
- 通常サイズ：86px
- Hero表示中は、Hero内CTAとの重複と見出しへの重なりを避けるため非表示
- MORNING ROUTE表示中は56pxのコンパクト表示
- TRIAL BOXの購入エリア表示中は非表示
- QUESTIONSでは通常表示
- Observer条件は`main.js`の`initFixedCta`で管理
- ハンバーガーメニュー表示中は、共通状態管理から`fixed-cta--hidden`を付けて一時非表示
- Final CTAまたはFooterが画面内に入ると非表示
- メニュー、TRIAL BOX購入エリア、Final CTA、Footerの状態は1つの更新関数で最終表示へ反映する
- 各対象から離れた場合は、他の非表示条件を確認してから再表示
- 1024px以上は右端に沿う50×104pxの細いタブ形状とし、本文やカードへの重なりを抑える
- 1024px以上でもMORNING ROUTE内は54pxのコンパクトな円形表示とする

## 10. Scroll Snap・カルーセル

### THREE FLAVORS

- 横方向Scroll Snap
- SPは1カードずつ読みやすい幅
- 1024px以上は中央カードを主役にし、左右カードの一部が見える幅とする
- 前後ボタン、現在位置表示、左右矢印キーを使用
- JavaScriptはアクティブカードとスクロール位置を同期

### SEVEN MORNINGS

- 横方向Scroll Snap
- 5カード
- 1024px以上は1.5〜2枚が見えるカード幅とし、カード内を画像・文章の2カラムにする
- 前後ボタン、現在位置表示、左右矢印キーを使用
- 自動再生は使用しない

### INSIDE THE BOWL

- 画像表示部はstickyを基本とする
- 1023px以下では説明カード側を縦方向Scroll Snapにする
- IntersectionObserverで表示段階と画像を同期
- 段階画像は6枚

## 11. QUESTIONS

- 1カラム
- HTML標準の`details` / `summary`
- FAQは7問
- 初期状態はすべて閉じる
- 複数同時に開ける
- Q・Aラベルを文字で表示
- ＋アイコンは開いたときに−へ変化
- summaryの最小高さ：SP 72px、768px以上 80px
- 375px〜1024pxで無理に2列にしない
- FAQの開閉にJavaScriptを使用しない
- セクション下部は固定CTAを考慮して通常より40px多く確保

## 12. ブレークポイント

- 基本：375pxを基準としたモバイルファースト
- 375px以上：一部の細かな文字サイズ・配置調整
- 480px以上：主要見出し領域を最大640pxへ制限
- 768px以上：左右余白・セクション余白・カード内余白を拡大
- 768pxのTRIAL BOX導入カードは、長い日本語見出しを自然に読める1カラムを維持
- 1023px以下：INSIDE THE BOWLを縦Scroll Snap表示
- 1023px以下：固定ハンバーガーメニュー
- 1024px以上：固定ハンバーガーを非表示、PCナビを表示
- 1024px以上：TRIAL BOX導入カードを3カラムに切り替える
- 1024px以上：Hero、MORNING ROUTE、YOUR FLAVOR、INSIDE THE BOWL、TRIAL BOX、Final CTAを2カラム化
- 1024px以上のHero：PC画像を左52%、コピー・商品情報・CTAを右48%に配置
- 1024px以上のOUR IDEA：タイトル側より本文側を広くし、本文の固定改行を解除して自然に折り返す
- 1024px以上：MORNING REALITY、OUR IDEAの強み、HOW TO ENJOY、MORNING VOICESを3カラム化
- 1024px以上：FAQは最大820pxの中央1カラムを維持
- 1024px以上：INSIDE THE BOWLは左の画像をsticky、右の説明を通常の縦並びとし、縦Scroll Snapを解除
- 1366px以上：セクション余白とHero内余白を少し拡張

## 13. アニメーション・reduced motion

- 基本の短いtransition：180ms
- カルーセルはユーザー操作時のみ移動
- ボウル・TRIAL BOX画像は控えめなフェード
- FAQは背景・罫線・＋／−の短い変化のみ
- メニューパネルは小さな上移動とフェードを240msで表示
- バウンド・点滅・強い回転・自動スライドは使用しない
- `prefers-reduced-motion: reduce`ではtransitionとanimationをほぼ停止する
- reduced motionでも内容・順序・FAQ開閉機能は維持する

## 14. アクセシビリティ

- Skip linkを設置
- 主要セクションはh2と`aria-labelledby`で関連付け
- `details` / `summary`へ不要な`role`や`aria-expanded`を追加しない
- 装飾アイコンは`aria-hidden="true"`または`alt=""`
- 色だけに依存しない
- キーボード操作と`focus-visible`を維持する
- 実ブラウザでのスクリーンリーダー確認：未確認

## 15. Final CTA・Footer

### Final CTA

- 配置：QUESTIONS直後
- SP：画像、英字ラベル、h2、本文、現在のセット、商品要点、CTAの1カラム
- 768px：読みやすさを優先して1カラムを維持
- 1024px以上：画像を左、本文・商品情報・CTAを右に置く2カラム
- 背景：他の明背景セクションとそろえた`--color-bg-sub`の淡いベージュ
- 文字：主見出しは`--color-text-main`、補助文字は`--color-text-sub`
- 画像：4:3、`object-fit: cover`、縦横比を維持
- CTA：`--color-cta`背景と白文字でコントラストを確保
- 診断済み・未診断でCTA文言を切り替える
- `selectedExtraFlavor`と共通のセット内訳計算を表示する
- 商品名`7 DAYS BREAKFAST BOX`と価格`1,980円（税込）`を同じ商品情報ブロック内で隣接表示する

### Footer

- 背景：ページ末尾を締める深いダークブラウン
- SP：ブランド、2列ナビ、架空サイト注記、コピーライトの1カラム
- 768px以上：ブランドとナビを2ブロックに整理
- ブランド表記：ロゴ画像の下に`CRAFT GRANOLA`だけを配置し、`nolla`のテキストを重複表示しない
- 商品名・内容量・価格・BUY ONCEの補助テキストはFooterへ重複表示しない
- ナビ：OUR IDEA、MORNING ROUTE、THREE FLAVORS、TRIAL BOX、QUESTIONS
- リンクのタップ領域：48px
- 下余白：`env(safe-area-inset-bottom)`を加算
- 架空サイト注記：12px、淡色ボックス内で読めるコントラストを確保

### 動き

- Final CTAとFooterに強い動きや自動アニメーションを追加しない
- `prefers-reduced-motion: reduce`でもCTA状態・Footer情報・固定CTA制御を維持する

## 16. ポートフォリオ用案内ダイアログ

- HTML標準の`dialog`要素と1つの共通実体を使用する
- TRIAL BOXとFinal CTAの`.js-open-portfolio-dialog`から同じダイアログを開く
- 本体はオフホワイト背景、ダークブラウン文字、淡い罫線、20px角丸
- `::backdrop`はダークブラウン45%の半透明背景
- SPは左右16px以上の余白を確保し、幅は`min(calc(100% - 32px), 480px)`
- 高さはsafe areaを引いた`100dvh`以内とし、内容が長い場合はダイアログ内を縦スクロールする
- 右上の×と「LPに戻る」の2か所を閉じる操作とし、タップ領域は44px以上
- 現在の追加フレーバー・7袋内訳・価格・購入形式を文字で表示し、色だけに依存しない
- エラー表現ではなく、ポートフォリオ作品であることを丁寧に伝える案内とする
- `prefers-reduced-motion: reduce`で開閉機能・商品内容・フォーカス管理を維持し、長いフェードや大きな移動を行わない

## 17. GitHub Pages公開用docs

- 制作元は`03_code/pages/index.html`、`03_code/css/style.css`、`03_code/js/main.js`とし、公開用の見た目・機能を独自変更しない
- 公開用は`docs/index.html`、`docs/css/style.css`、`docs/js/main.js`、`docs/assets/`で構成する
- GitHub PagesのプロジェクトURLへ対応するため、公開用パスは`./css/`、`./js/`、`./assets/`の相対パスとする
- `/assets/`のようなサイトルート起点、制作元を指す`../../`、ローカル絶対パスを使用しない
- 公開画像は制作元で実際に参照される画像だけを同名・同内容でコピーする
- `docs/.nojekyll`を置き、GitHub PagesのJekyll処理を無効化する
