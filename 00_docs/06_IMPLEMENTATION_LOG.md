# IMPLEMENTATION LOG｜nolla LP

実装作業を初心者でも追える形で残す履歴です。過去の詳しい作業順は記録がないため、2026/07/31より前の内容は「現在のコードで確認できた状態」として整理しています。

## 2026/07/31｜現在のコード確認

### 実装済みと確認できたセクション

- Header・ハンバーガーメニュー
- 右下固定CTA
- Hero
- MORNING REALITY
- OUR IDEA
- MORNING ROUTE
- YOUR FLAVOR
- INSIDE THE BOWL
- THREE FLAVORS
- HOW TO ENJOY
- SEVEN MORNINGS
- TRIAL BOX
- MORNING VOICES

### JavaScriptで確認できた機能

- 3問診断
- 診断結果・追加フレーバー・セット内訳の`sessionStorage`保存
- THREE FLAVORSの横カルーセル
- SEVEN MORNINGSの横カルーセル
- INSIDE THE BOWLの段階画像切り替え
- TRIAL BOXとのフレーバー状態同期
- 固定CTAの表示制御

### 注意

- 上記は現在のコードから確認した状態であり、過去の実装日や修正順は未確認
- 1024px以上の完成レイアウトは未実装
- この確認時点では、Headerとハンバーガーメニューは固定ではなかった

## 2026/07/31｜QUESTIONS

### 実装したセクション

- QUESTIONS「はじめる前に、気になること。」
- FAQ 7問
- HeaderのQUESTIONSリンク

### 変更ファイル

- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- `00_docs`内の正本・履歴ファイル
- `README_FOLDER_GUIDE.md`

### HTML構造

- `section#questions`
- 英字ラベル、h2、導入文を持つheader
- 7件の`details.faq-item`
- 各`details`内に`summary`と回答ブロック
- Q・Aラベルを文字として表示

### CSSの主要クラス

- `questions`
- `questions__inner`
- `questions__heading`
- `questions__lead`
- `questions__list`
- `faq-item`
- `faq-item__question`
- `faq-item__label`
- `faq-item__question-text`
- `faq-item__icon`
- `faq-item__answer`
- `faq-item__answer-label`

### JavaScriptの主要関数

- `initSpMenu`
  - Header内のページ内リンクを選択したとき、メニューの`open`状態を解除する
- FAQの開閉用JavaScriptは追加していない

### 使用したWeb標準機能

- `details`
- `summary`
- `open`属性
- ページ内アンカー
- CSS Grid
- CSS疑似要素

### 実装理由

- JavaScriptが停止してもFAQを利用できる
- キーボード操作と開閉状態管理をブラウザへ任せられる
- 複数の回答を同時に開いて比較できる
- 1カラムで長い日本語を読みやすくする

### 動作確認

- FAQ 7件、Q・Aラベル、`details` / `summary`、初期`open`属性なしを静的確認
- HeaderのQUESTIONSが`#questions`への`a`要素であることを確認
- CSSとJavaScriptの構文を確認
- 375px / 390px / 768px / 1024pxは静的な幅計算で確認
- 実ブラウザでのタップ・キーボード・コンソール確認：未確認

### 不具合と修正

- 実装前はQUESTIONSが無効な`span`だったため、正式な`a`要素へ変更
- メニューリンク選択後に`details`が開いたままになるため、`initSpMenu`を追加
- FAQ専用の独自開閉処理は追加していない

### 覚えておくべきポイント

- 標準HTMLで実装できるUIは、独自JavaScriptより先に検討する
- `summary`へ不要な`role`や`aria-expanded`を追加しない
- 開閉アイコンの状態だけでなく、質問文と回答文そのものを明確にする
- 実際にブラウザ確認していない幅は「確認済み」と記録しない

### 次の作業

- Final CTA＋Footer
- その前後で全体の実ブラウザ確認

## 2026/07/31｜SPハンバーガーメニュー固定化

### 実装した内容

- 1023px以下でハンバーガーメニューだけを右上へ固定
- 上から開く全幅メニューパネル
- 1024px以上のPCナビ
- メニュー表示中の固定CTA一時非表示

### 変更ファイル

- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- 関連する正本・履歴md

### 維持したHTML構造

- `details.sp-menu`
- `summary.sp-menu__button`
- `nav`と5件のページ内リンク

同じハンバーガーボタンを追加せず、既存の1要素を固定した。

### CSSの主要変更

- `.sp-menu`：`position: fixed`
- `.sp-menu__button`：淡い背景、罫線、角丸、48pxのタップ領域
- `.sp-menu__panel`：全幅固定パネル、`100dvh`、縦スクロール
- `.site-header__inner`：固定ボタン分の右余白
- `.pc-nav`：1024px以上で表示
- `.fixed-cta--menu-open`：この時点ではメニュー表示中だけ固定CTAを隠していた。Final CTA実装時に共通状態管理へ統合
- z-indexをCSS変数化

### JavaScript

- 既存の`initSpMenu`へ、`toggle`イベントと固定CTAクラス同期を追加
- メニューリンククリック時の閉鎖処理は維持
- リンク選択後とEscキーで閉じた後は、スクロールさせずメニューボタンへフォーカスを戻す
- 画面幅が1024px以上へ変わった場合は、SPメニューの`open`状態を解除する
- 診断・カルーセル・保存処理は変更していない

### 実装理由

- 長いLPの途中からでも主要セクションへ移動できるようにする
- Header全体を固定せず、本文を隠す面積を抑える
- メニューと購入CTAの役割を視覚的・位置的に分ける
- 既存の固定CTA状態管理とメニュー状態を競合させない

### 動作確認

- HTML・CSS・JavaScript構文：確認済み
- 5件のSPリンク、5件のPCリンク、リンク先ID：確認済み
- 375px / 390px / 768px / 1024px：静的レイアウト検証済み
- 実ブラウザでの固定位置・スクロール・開閉・キーボード・コンソール：未確認

### 覚えておくべきポイント

- `position: fixed`は通常の配置から外れるため、Header側へ同じ幅の余白を確保する
- safe areaは`env(safe-area-inset-*)`で考慮する
- 同じ要素に複数の表示条件がある場合、目的別のクラスを分けて競合を避ける
- 1024px以上で不要な固定要素はメディアクエリで明示的に非表示にする

### 次の作業

- Final CTA＋Footer
- 実ブラウザで固定メニューを確認

## 2026/07/31｜SP用固定メニューの背景をソフト化

- `.sp-menu__button`の枠線を削除
- 淡い半透明背景と低濃度の広い影へ変更し、背景へじわっとなじむ見た目に調整
- メニュー展開時のボタンも枠線を使わず、背景濃度と影のみで状態を表現
- 展開パネル下端の罫線を削除し、影をより淡く調整
- 固定位置、タップ領域、HTML、JavaScript、固定CTAの挙動は変更なし

## 2026/07/31｜Final CTA・Footer

### HTML構造

- `section#final-cta`
  - 4:3画像
  - 英字ラベル
  - h2と本文
  - 現在の追加フレーバーとセット内訳
  - 4つの商品要点
  - 価格・送料・買い切り表記
  - 仮購入ボタンと案内
- `footer.site-footer`
  - 正式ロゴとブランド表記
  - ページ内リンク5件
  - 商品補助情報
  - 架空サイト注記
  - コピーライト

### CSSの主要クラス

- `final-cta`と`final-cta__*`
- `site-footer`と`site-footer__*`
- 375px〜767pxは1カラム
- 768pxのFinal CTAは1カラム、Footerは3ブロック
- 1024px以上のFinal CTAは基本2カラム
- Footer下部にsafe areaを加算

### JavaScript

- `initFinalCta`
  - `flavorStateListeners`へ登録
  - 診断状態でCTA文言を切り替える
  - `selectedExtraFlavor`と`createSetBreakdown`から表示を更新する
- `initPurchaseCtas`
  - TRIAL BOXとFinal CTAの仮購入案内を共通化する
- `initFixedCta`
  - MORNING ROUTE、TRIAL BOX購入エリア、メニュー、Final CTA、Footerの状態を1つのオブジェクトで管理する
  - 最終表示は`updateFixedCta`だけで決定する

### 確認結果

- HTMLタグ、ID、アンカーリンク、ローカル参照：静的確認済み
- JavaScript構文、CSS構造：確認済み
- 主要4ファイルのHTTP応答：200
- 未診断と3診断結果のCTA文言・セット内訳計算：確認済み
- 375px / 390px / 768px / 1024px：CSS条件の静的確認済み
- 実ブラウザの表示、クリック、スクロール、コンソール：未確認

### 不具合と修正

- 複数箇所が固定CTAへ個別クラスを付ける構造を、共通状態と1つの更新関数へ整理
- body末尾に残る固定CTA用余白を削除し、Footer側でsafe areaを確保
- 768pxではFinal CTAを無理に2カラムにせず、文章幅と画像比率を維持

### 覚えておくべきポイント

- 同じ商品状態は再計算を直書きせず、共通状態と共通関数から表示する
- 複数のIntersection Observer条件は、個別に表示を上書きせず最終状態を1か所で決める
- 未実装ページへはリンクせず、既存CTAと同じ仮挙動を使う
- 静的確認と実ブラウザ確認を区別して記録する

### 次の作業

- SP全体の実ブラウザ通し確認と修正

## 2026/07/31｜Final CTAの明背景化

- `.final-cta`をダークブラウンから`--color-bg-sub`の淡いベージュへ変更
- 見出し、本文、商品情報、セット確認カードを明背景用の配色へ変更
- 購入ボタンを既存の主CTA配色へ統一
- Footerの暗背景は変更なし
- HTML・JavaScript・画像ファイルは変更なし

## 2026/07/31｜商品名・価格の近接配置とFooter簡略化

- Final CTAの`.final-cta__product-meta`へ商品名を追加し、価格を直下へ配置
- Footerの`.site-footer__product`をHTML・CSSから削除
- 768px以上のFooterを3列から2列へ変更
- JavaScript、画像、固定CTA制御は変更なし

## 2026/07/31｜Heroの商品カード化

- Heroの`.hero__facts`と独立した`.hero__price`を削除
- 7袋セット画像、商品名、価格をまとめる`.hero-product`コンポーネントを追加
- 画像は`trial-box_full-set_sunny-nuts.png`を4:3で表示し、HTMLへ実寸の`width`と`height`を指定
- 商品名と価格を画像直下に配置し、その後に既存の主CTAが続く構成へ変更
- JavaScriptと画像ファイルは変更なし

## 2026/07/31｜SP版LP全体の通し確認

### 確認対象と画面幅

- HeaderからFooterまでの全セクション
- 実ブラウザ：375×667px、390×844px、768×900px
- 補助確認：1024×800px

### 修正前の問題

- 375pxのHeroで右下固定CTAが見出しへ重なる
- 768pxのTRIAL BOX導入カード3列表示で、長い日本語見出しの末尾が不自然に改行される

### 修正内容

- `initFixedCta`の監視対象へ`.hero`を追加
- 初期表示時もHeroの位置から非表示状態を決定し、Observer開始前の表示を防止
- Intersection Observerのthresholdを`[0, 0.05]`とし、Heroを完全に離れた後の復帰を確認
- 768pxにあった`.trial-box__reasons`の3列指定を1024px以上へ移動
- `<head>`へ空のfavicon宣言を追加し、ブラウザによる未実装`favicon.ico`の自動取得を停止

### 変更ファイル

- HTML：`03_code/pages/index.html`へ空favicon宣言を追加
- CSS：`03_code/css/style.css`
- JavaScript：`03_code/js/main.js`
- 仕様・履歴md：`00_PROJECT_BRIEF.md`、`03_DECISIONS_LOG.md`、`04_DESIGN_RULES.md`、`06_IMPLEMENTATION_LOG.md`、`07_CURRENT_STATUS.md`
- 画像：変更なし

### 不具合原因と解決方法

- 固定CTAはHeroを非表示条件として監視していなかったため、低い画面高では初期コピー上へ重なっていた
- 768pxで3枚を均等3列にすると1枚約219pxとなり、カード内余白を含めた本文幅が不足していた
- 固定CTAは既存の共通状態管理へHero状態を追加し、カードはブレークポイントを移す最小変更で解決

### 動作確認

- 横はみ出し：375px、390px、768pxすべてなし
- 固定メニュー：固定位置、開閉、Esc、リンク閉鎖、フォーカス復帰、5リンクを確認
- 固定CTA：Hero・メニュー・購入エリア・Final CTA・Footerで非表示、MORNING ROUTEで縮小、上方向復帰を確認
- 診断：全SUNNY、全BERRY、全CACAO、質問2優先2パターン、戻る、未回答、再診断を確認
- 選択同期：YOUR FLAVOR、THREE FLAVORS、TRIAL BOXから他表示・画像・Final CTAへの反映を確認
- 保存：再読み込み後の選択状態、診断済みCTA文言、おすすめ状態から保持を確認
- THREE FLAVORS / SEVEN MORNINGS：前後ボタン、disabled、位置表示、矢印キー、横スクロールを確認
- INSIDE THE BOWL：STEP 1〜6を正順・逆順で確認
- 商品詳細・FAQ：クリック開閉、複数同時開閉を確認
- 購入CTA：TRIAL BOXとFinal CTAで同じ未実装案内を確認
- コンソールエラー：なし
- 画像・内部リンク404：なし
- 正式favicon画像：未実装。画像ファイルは追加せず、空favicon宣言のみ設定

### 未確認

- 実機タッチスワイプ
- スクリーンリーダー
- reduced motionを有効にした実操作
- 自動操作環境での`summary`のEnter / Space直接操作
- 1024px以上のPC完成レイアウト

### 覚えておくべきポイント

- 固定要素はサイズだけでなく、画面高が低い状態の初期表示でも本文を隠さないか確認する
- タブレット幅でも、3列化によって日本語の意味のまとまりが崩れる場合は1カラムを維持する
- 保存機能は保存値の直接確認だけでなく、再読み込み後の画面反映でも確認できる
- カルーセル内部の横スクロールと、ページ全体の横はみ出しは別々に確認する

### 次の作業（当時の案・後の方針変更で不採用）

- order.htmlのSP構造ワイヤー（2026/07/31の1ページ完結方針により不採用）

## 2026/07/31｜購入CTAのポートフォリオ用案内ダイアログ化

### 購入導線の変更

- 作成ページを`index.html`だけとし、order.html、order-confirm.html、order-complete.htmlは作成しない
- Hero、右下固定CTA、診断結果CTAは引き続き`#trial-box`へページ内移動する
- TRIAL BOXとFinal CTAは、別ページへ移動せず共通のポートフォリオ用案内ダイアログを開く

### HTML

- `#portfolio-purchase-dialog`の`dialog`要素を1つだけFooter後に配置
- 右上の×と「LPに戻る」の2つの閉じるボタンを配置
- 商品名、追加の1袋、7袋内訳、価格、購入形式を`dl`とテキストで表示
- 旧「購入ページは次の工程で実装します。」表示とorder.html用TODOを削除

### CSS

- 幅を`min(calc(100% - 32px), 480px)`、最大高をsafe areaを考慮した`100dvh`以内に制限
- ダイアログ内縦スクロール、44pxの閉じるボタン、オフホワイト背景、半透明ダークブラウンの`::backdrop`を実装
- 旧購入案内テキスト用の未使用CSSを削除
- 既存の`prefers-reduced-motion: reduce`で開閉周辺のtransitionをほぼ停止

### JavaScript

- `initPurchaseCtas`を`initPortfolioPurchaseDialog`へ置き換え
- `.js-open-portfolio-dialog`を共通トリガーとし、TRIAL BOXとFinal CTAの重複処理を作らない
- 開く直前に`flavorState.selectedExtraFlavor`と`createSetBreakdown`から各要素の`textContent`を更新
- `showModal()`で開き、×・LPに戻る・背景クリックは`close()`で閉じる。Escは`dialog`標準動作を使用
- 開いた元のCTAを`lastPurchaseTrigger`に保持し、`close`イベント後にフォーカスを戻す

### 不具合原因と採用した方法

- 以前は購入ボタンごとに近接する未実装案内を表示するだけで、現在の商品内容を確認できなかった
- HTML標準`dialog`のトップレイヤー、Esc閉鎖、フォーカス管理を活用し、独自オーバーレイを追加しない

### 動作確認

- 375×667px、390×844px、768×900px、1024×800px：ダイアログサイズ、開閉、スクロール、固定要素との重なりを確認
- TRIAL BOXとFinal CTAから開くことを確認
- SUNNY NUTS、BERRY MORNING、CACAO QUIETの3状態で、追加の1袋と内訳が最新状態に一致することを確認
- ×、「LPに戻る」、背景クリックで閉じ、開いた元のCTAへフォーカスが戻ることを確認
- Hero・固定CTA・診断結果CTAが`#trial-box`へ移動し、order.htmlへ移動しないことを確認
- ページ全体の横はみ出し、空リンク、コンソールエラーなし

### 未確認

- 自動操作環境でEscキー入力がネイティブ`dialog`へ届かず、Escの実操作だけは未確認。`showModal()`で開く標準`dialog`構造としての実装は確認済み

### 覚えておくべきポイント

- 同じ商品状態はダイアログ用に別管理せず、LP全体の共通状態から表示する
- 将来作らないページを「未実装」として残さず、制作対象外として正本へ明記する

### 次の作業

- PC版の差分設計

## 2026/07/31｜Footerの重複ブランド名を削除

- HTMLから`.site-footer__name`の`nolla`テキストを削除
- `.site-footer__name`の未使用CSSを削除
- `.site-footer__subname`へ`margin-top: 8px`を移し、`CRAFT GRANOLA`をロゴ直下に配置
- Footerのリンク、注記、コピーライトは変更なし
- HTMLの構造とCSSの波括弧数を確認

## 2026/07/31｜PC版差分実装

### HTML・JavaScript

- Hero画像と診断結果画像を`picture`化し、1024px以上だけ既存PC用4:3画像へ切り替え
- 診断結果データへPC画像パスを追加し、現在のフレーバーに合わせて`source.srcset`を更新
- TRIAL BOXは商品画像群と、選択・購入情報をPCで左右に分けられる最小ラッパーを追加
- 商品コピー、価格、送料、診断判定、保存キー、カルーセル制御は変更なし

### CSS

- 1024px以上へ、最大幅1160pxを基準にしたPC差分を追加
- HeaderはPCナビ、Heroはコピー左・画像右
- MORNING REALITY、OUR IDEAの強み、HOW TO ENJOY、MORNING VOICESは3カラム
- MORNING ROUTE、YOUR FLAVOR、INSIDE THE BOWL、TRIAL BOX、Final CTAは2カラム
- INSIDE THE BOWLは左画像sticky・右説明通常スクロールとし、PCでは縦Scroll Snapを解除
- THREE FLAVORSは中央強調、SEVEN MORNINGSは1.5〜2枚表示
- QUESTIONSは最大820pxの中央1カラム、Footerはブランドとナビの2ブロック
- ダイアログはPC幅520px、固定CTAは右端の細いタブ形状
- 1366px以上はセクション余白とHero内余白のみ追加調整

### 動作確認

- 375×667px、390×844px、768×900px、1024×800px、1366×900px、1440×900pxで実表示を確認
- 全幅でページ全体の横はみ出しなし
- SPメニュー開閉と固定CTA連動、PCナビ、診断完了、結果画像切り替え、ボウル正逆スクロールを確認
- THREE FLAVORS、SEVEN MORNINGSの前後制御と現在位置を確認
- TRIAL BOXの商品詳細、味変更、Final CTA同期、再読み込み保持、両購入CTAの共通ダイアログとフォーカス復帰を確認
- FAQ開閉、固定CTAのHero・購入エリア・メニュー・Final CTA・Footer非表示を確認
- JavaScript構文、CSS波括弧、ローカル画像参照、重複ID、ブラウザコンソールを確認

### 次の作業

- 公開前の最終確認、公開方法、OGP、正式favicon、READMEの整備範囲を決める

## 2026/08/01｜PC Hero・OUR IDEA配置調整

- PC Heroのグリッドを画像52%・コピー48%へ変更し、画像を左、コピーを右へ反転
- コピー側の外余白を右端のコンテンツ基準へ合わせ、画像との間に可変余白を設定
- OUR IDEAのPCグリッドを本文側が広い比率へ変更
- PCではOUR IDEA本文の固定改行を解除し、最大46emの範囲で自然に折り返す
- 390pxでは従来の縦配置、1024px・1440pxではPC左右配置、全3幅で横はみ出しなしを確認
- HTML、JavaScript、画像ファイル、文章内容は変更なし

## 2026/08/01｜公開前の最終確認と仕上げ

### HTML

- title・descriptionを内容に合わせて更新
- URLと画像が確定している範囲のOGP・Twitterメタ情報を追加
- Heroを優先読み込みし、ファーストビュー外の静的画像34枚を遅延読み込みへ変更
- 画像37要素の`alt`・`width`・`height`、h1数、見出し構造、重複ID、リンク先を確認
- 過去の仮テキスト用コメント3件を削除。表示コピーは変更なし

### 公開準備ファイル

- ルート`README.md`を作成し、概要、構成、機能、確認幅、注意事項、改善候補を整理
- `.gitignore`へ`.DS_Store`、`__MACOSX/`、`._*`を追加
- プロジェクト内の`.DS_Store` 13件を削除
- 公開用ファイルの移動・複製・書き出し、画像加工は行わない

### 検証

- 9つの画面条件（320×700〜1440×900）で横はみ出しなし
- 診断、状態同期、カルーセル、ボウル段階、FAQ、商品詳細、固定要素、共通ダイアログを確認
- HTML参照の404、ローカル画像の破損、コンソールエラー、ページエラーなし
- JavaScript構文とCSS波括弧の対応を確認

### 残課題

- 公開前時点では、専用OGP画像、正式favicon、公開先の確定と公開方法の実施が残っていた
- Lighthouse、実機タッチスワイプ、スクリーンリーダー、reduced motion実操作は未確認

## 2026/08/01｜GitHub Pages用docs生成

### 公開構成

- `docs/index.html`へ制作元HTMLをコピー
- `docs/css/style.css`と`docs/js/main.js`へ制作元をコピー
- 参照中の画像45枚を`docs/assets/`へコピーし、未使用画像・archiveは含めない
- `docs/.nojekyll`を作成

### パス調整

- HTMLのCSSを`./css/style.css`、JavaScriptを`./js/main.js`へ変更
- HTML・JavaScriptの画像参照を`./assets/01_brand/`または`./assets/02_assets/`へ変更
- 制作元を参照する`../../`、ルート起点パス、ローカル絶対パスを公開用ファイルへ残さない

### 管理準備

- `.gitignore`へ`*.zip`を追加
- READMEへGit管理、GitHub Pages `main / docs`、公開前時点のURL状況を記録
- Git初期化、add、commit、remote、push、リポジトリ作成、Pages設定は未実施
- APIキー、Firebase設定、秘密鍵、パスワード、トークン、実個人情報、`.env`、認証JSONは検出されなかった

### docs単独の動作確認

- 375×667、390×844、768×900、1024×768、1366×900、1440×900で確認
- 6幅すべてでページ全体の横はみ出しなし。1023px以下はSPメニュー、1024px以上はPCナビを表示
- BERRY MORNING診断結果、CACAO QUIETへの追加フレーバー変更、TRIAL BOX・Final CTA・セット画像・再読み込み後の状態保持を確認
- SPのINSIDE THE BOWLはSTEP 1〜6と各公開画像が一致。PCはstickyとScroll Snap解除を確認
- THREE FLAVORSは3 / 3、SEVEN MORNINGSは5 / 5まで進み、末尾の次ボタンがdisabledになることを確認
- 商品詳細とFAQの複数開閉、TRIAL BOXダイアログ、固定メニュー閉鎖、元CTAへのフォーカス復帰を確認
- 画像45枚、CSS、JavaScriptはHTTP 200または304。404、コンソールエラー、ページエラーなし

## 2026/08/01｜Git管理開始・GitHub Pages公開

### 実施内容

- プロジェクトルートでGitを初期化
- `main`ブランチを使用
- 初回コミット`Initial commit: nolla CRAFT GRANOLA LP`を作成
- `origin`へ`https://github.com/Coconattsu0723/nolla-craft-granola.git`を登録
- GitHubの`main`ブランチへpush
- GitHub Pagesの公開元を`main / docs`に設定
- 公開URL：`https://coconattsu0723.github.io/nolla-craft-granola/`
- 公開サイトとGitHubリポジトリがHTTP 200で応答することを確認

### 公開後の更新手順

1. 制作元ファイルを修正する
2. `docs/`へ公開用ファイルを反映する
3. 関係するmdを更新する
4. `git status`で変更内容を確認する
5. `git add .`
6. 内容に合うメッセージで`git commit`する
7. `git push`する
8. 公開サイトを確認する

### 覚えておくべきポイント

- Gitでは制作フォルダ全体を管理し、GitHub Pagesは`docs/`だけを公開する
- 表示や機能の修正は制作元へ行い、公開用`docs/`だけを直接修正しない
- `docs/`の同期とmd更新を確認してからコミットする
- 作成ページは`index.html`だけで、order関連ページ・購入フォーム・決済は制作対象外
