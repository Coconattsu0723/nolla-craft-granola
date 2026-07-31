# DECISIONS LOG｜決定事項・変更履歴

このファイルは、壁打ちで決まった内容と制作中の変更理由を記録します。
最新の決定を下へ追記してください。

## 1. 現在の制作状況

- フェーズ：GitHub Pages公開済み・公開後確認
- 実装開始：開始済み
- 公開状態：公開済み
- 最新実装：Git管理開始、GitHubへの初回push、GitHub Pages公開
- 次の作業：公開後の実機確認・必要な修正

## 2. 確定済み

- 制作区分：自主制作／架空サイト
- サイト種別：1ページ完結型LP
- 商材：nolla CRAFT GRANOLA「7 DAYS BREAKFAST BOX」
- 実装：HTML / CSS / JavaScript
- 制作方針：モバイルファースト
- SP基準幅：375px
- ポートフォリオ掲載用
- 価格：1,980円（税込）
- 内容量：40g × 7袋
- 購入形式：買い切り・定期購入ではない
- FAQ：7問、`details` / `summary`を使用
- HeaderのQUESTIONSリンク：`#questions`として有効
- 1023px以下：ハンバーガーメニューだけを右上へ固定
- 1024px以上：Header内へPCナビを表示

## 3. 未決事項

- [x] PC完成レイアウト
- [x] 公開方法：GitHub Pages `main / docs`
- [x] Git初期化・GitHubリポジトリ作成・push・Pages設定
- [ ] 専用OGP画像
- [ ] 正式favicon

order.htmlと以降の購入ページ、購入フォーム、決済は未決事項ではなく、2026/07/31の方針変更により今回の制作対象外とした。

## 4. 決定履歴

### YYYY/MM/DD｜企画開始

決定：
- 

理由：
- 

参考にしたもの：
- 

影響するファイル：
- 

### YYYY/MM/DD｜商材決定

決定：
- 

理由：
- 

比較した案：
- 

### YYYY/MM/DD｜ターゲット決定

決定：
- 

悩み：
- 

取ってほしい行動：
- 

### YYYY/MM/DD｜デザインコンセプト決定

決定：
- 

キーワード：
- 

配色：
- 

写真：
- 

### YYYY/MM/DD｜セクション構成決定

構成：
1. 
2. 
3. 
4. 
5. 

### YYYY/MM/DD｜実装開始

- SP版から開始
- 最初に実装する範囲：
- 確認幅：

## 5. 修正履歴テンプレート

### YYYY/MM/DD｜修正名

修正前：
- 

問題：
- 

修正内容：
- 

修正理由：
- 

確認した幅：
- 

影響範囲：
- 

今後の注意：
- 

## 6. 実作業の記録

### 2026/07/31｜QUESTIONS実装とmd運用開始

作業対象：
- QUESTIONS
- Headerメニュー
- プロジェクト正本md

決定：
- MORNING VOICES直後へFAQ 7問を追加する
- FAQはHTML標準の`details` / `summary`を使用する
- 初期状態は全件閉じ、複数のFAQを同時に開ける
- Q・Aラベルと、＋から−へ変化する開閉アイコンを表示する
- HeaderのQUESTIONSを`#questions`への正式なページ内リンクにする
- メニューリンク選択時にハンバーガーメニューを閉じる
- 今回以降、コード変更とmd更新を同じ作業単位で行う

採用理由：
- FAQをJavaScriptなしでも利用でき、キーボード操作とブラウザ標準の開閉状態管理を維持できるため
- 複数回答を比較できるようにするため
- コードと制作記録の不一致を残さないため

変更したファイル：
- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- `00_docs/00_PROJECT_BRIEF.md`
- `00_docs/02_WORK_RULES.md`
- `00_docs/03_DECISIONS_LOG.md`
- `00_docs/04_DESIGN_RULES.md`
- `00_docs/05_IMAGE_ASSETS.md`
- `00_docs/06_IMPLEMENTATION_LOG.md`
- `00_docs/07_CURRENT_STATUS.md`
- `README_FOLDER_GUIDE.md`

採用した実装方法：
- FAQ：`details` / `summary`
- レイアウト：375pxから768px以上まで1カラム
- 開閉アイコン：CSS疑似要素
- メニュー閉鎖：既存の`details`要素の`open`プロパティをリンク選択時に`false`へ変更

変更しなかったもの：
- FAQの開閉を制御するJavaScript
- 固定CTAの表示条件
- 診断・カルーセル・INSIDE THE BOWL・TRIAL BOXの既存処理
- 画像ファイル
- Final CTA、Footer、購入ページ

確認した画面幅：
- 実ブラウザ確認：未確認
- 静的レイアウト検証：375px / 390px / 768px / 1024px

動作確認結果：
- HTML内のFAQ数、`details` / `summary`構造、初期`open`属性なしを確認
- CSSとJavaScriptの構文、画像参照、既存識別子の維持を確認
- ローカル`file://`ページはブラウザ操作の安全制約により自動再読み込みできず、実際のタップ・キーボード・コンソール確認は未確認

残課題：
- 実ブラウザで375px / 390px / 768px / 1024pxを確認する
- Headerが現コードでは固定ではないため、固定化が必要か次工程前に判断する
- Final CTAとFooterを実装する

次工程：
- Final CTA＋Footer

### 2026/07/31｜SPハンバーガーメニュー固定化

作業対象：
- Headerナビゲーション
- SP・タブレット用ハンバーガーメニュー
- 右下固定CTAとの重なり

決定：
- Header全体とロゴは固定しない
- 1023px以下では、既存の`details.sp-menu`だけを画面右上へ固定する
- メニューは上から開く全幅パネルとする
- 1024px以上では固定ハンバーガーを非表示にし、Header内へPCナビを表示する
- メニュー表示中だけ固定CTAへ専用の非表示クラスを付ける
- メニューを閉じると専用クラスだけを解除し、既存の縮小・購入エリア非表示状態は維持する
- リンク選択後とEscキーで閉じた後は、スクロール位置を変えずメニューボタンへフォーカスを戻す
- スクロールロックとオーバーレイは追加しない

採用理由：
- 長い1ページLPのどの位置からでも主要セクションへ移動できるようにするため
- Header全体を固定せず、本文を隠す面積を小さくするため
- 既存の`details` / `summary`によるキーボード操作と標準開閉を維持するため
- 固定CTAの既存Observer状態とメニュー状態を分離するため

変更したファイル：
- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- `00_docs/00_PROJECT_BRIEF.md`
- `00_docs/03_DECISIONS_LOG.md`
- `00_docs/04_DESIGN_RULES.md`
- `00_docs/06_IMPLEMENTATION_LOG.md`
- `00_docs/07_CURRENT_STATUS.md`

採用した実装方法：
- 固定位置：`position: fixed`
- 上端：`10px + env(safe-area-inset-top)`
- 右端：`16px + env(safe-area-inset-right)`
- パネル：`position: fixed`、最大高`100dvh`、縦スクロール可
- 重なり順：固定CTA 80、Header 100、固定メニュー 120
- CTA連携：`initSpMenu`で`toggle`イベントを監視

変更しなかったもの：
- 商品画像・商品テキスト
- 診断ロジック・フレーバー選択・`sessionStorage`
- INSIDE THE BOWL・カルーセル・TRIAL BOX・MORNING VOICES
- Header全体とロゴの位置
- bodyのスクロール

確認した画面幅：
- 実ブラウザ確認：未確認
- 静的レイアウト検証：375px / 390px / 768px / 1024px

動作確認結果：
- 1023px以下で固定、1024px以上で非表示になるCSS条件を確認
- PCナビ5リンクと各リンク先IDを確認
- メニューリンク閉鎖と固定CTA専用クラスの同期処理を確認
- HTML・CSS・JavaScript構文、アンカーリンク、重なり順、safe area、横幅を静的確認
- ローカル`file://`ページはブラウザ操作の安全制約により、実際のスクロール・開閉・コンソール確認は未確認

残課題：
- 実ブラウザで375px / 390px / 768px / 1024pxの固定位置・開閉・リンク移動を確認する
- 1024px以上のPCナビは実装済みだが、PC全体の完成レイアウトは別工程

次工程：
- Final CTA＋Footer

### 2026/07/31｜SP用固定メニューの背景表現を調整

決定：
- ハンバーガーメニューボタンの明確な枠線をなくし、淡い半透明背景と広くぼかした影で周囲になじませる
- メニュー展開時もボタンを線で囲まず、背景の濃度と影だけをわずかに変化させる
- 展開パネル下端の罫線もなくし、低濃度の影でページ背景へ自然につなげる
- 固定位置、48px以上のタップ領域、開閉処理、固定CTAとの連動は変更しない

### 2026/07/31｜Final CTA・Footer実装

作業対象：
- QUESTIONS直後のFinal CTA
- Footer本実装
- Final CTAとFooter付近の固定CTA
- ページ内リンクと架空サイト注記

決定：
- Final CTAコピーは「明日の朝を、少しだけ楽しみに。」
- 正式画像`final-cta_ready-for-day.png`を4:3で使用する
- 未診断時CTAは「7日間の朝食を試してみる」
- 診断済みCTAは「この組み合わせで7日間試す」
- Final CTAは`selectedExtraFlavor`と共通の`createSetBreakdown`を使用し、追加の1袋と7袋内訳を表示する
- TRIAL BOX・THREE FLAVORSで追加フレーバーを変更するとFinal CTAも即時更新する
- 購入ボタンはTRIAL BOXとFinal CTAで`initPurchaseCtas`を共用し、「購入ページは次の工程で実装します。」を表示する
- 存在しない`order.html`へのリンクは設定しない
- FooterナビはOUR IDEA、MORNING ROUTE、THREE FLAVORS、TRIAL BOX、QUESTIONSの5件
- Footerへ架空サイト注記と`© 2026 nolla CRAFT GRANOLA`を表示する
- 固定CTAはMORNING ROUTE、TRIAL BOX購入エリア、メニュー、Final CTA、Footerの状態を`initFixedCta`内の共通関数で判定する

変更したファイル：
- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- `00_docs/00_PROJECT_BRIEF.md`
- `00_docs/03_DECISIONS_LOG.md`
- `00_docs/04_DESIGN_RULES.md`
- `00_docs/05_IMAGE_ASSETS.md`
- `00_docs/06_IMPLEMENTATION_LOG.md`
- `00_docs/07_CURRENT_STATUS.md`

確認した幅：
- 静的レイアウト確認：375px / 390px / 768px / 1024px
- 実ブラウザ表示：ローカルファイルの再読み込み制限により未確認

確認結果：
- HTMLの入れ子、48件のID重複なし、22本のページ内リンク先を確認
- HTMLから参照するローカル38件、JavaScript画像9件に欠落なし
- HTML・CSS・JavaScript・Final CTA画像はローカルサーバーでHTTP 200
- JavaScript構文とCSS波括弧数を確認
- 未診断、SUNNY NUTS、BERRY MORNING、CACAO QUIETの4状態で、CTA文言と3・2・2の内訳計算を確認
- 実際のクリック、スクロール、固定CTA復帰、横はみ出し、コンソールは実ブラウザ未確認

残課題：
- 375px / 390px / 768px / 1024pxの実表示確認
- 診断、THREE FLAVORS、TRIAL BOXからFinal CTAへの実操作同期
- Final CTA・Footer付近の固定CTA非表示と上方向復帰
- 既存機能の回帰確認とコンソール確認
- 1024px以上のPC完成レイアウト

次工程：
- SP全体の実ブラウザ通し確認と修正

### 2026/07/31｜Final CTAを明背景へ変更

- 暗いFooterと連続して重く見えないよう、Final CTA背景を`--color-bg-sub`の淡いベージュへ変更
- 見出し・本文・セット表示を明背景用のダークブラウン／補助ブラウンへ変更
- セット確認カードは淡いオフホワイト、購入CTAは`--color-cta`背景と白文字へ変更
- Footerの深いダークブラウンは維持
- HTML構造、画像、診断・セット同期、固定CTA制御は変更しない

### 2026/07/31｜Final CTAの商品名・価格とFooter情報を整理

- Final CTAへ`7 DAYS BREAKFAST BOX`を表示し、価格`1,980円（税込）`を直下へ配置
- 送料と買い切り表記は商品名・価格の後へ続ける
- Footerから商品名、内容量、価格、BUY ONCEの4行を削除
- 768px以上のFooterをブランドとナビの2ブロックへ変更
- Final CTAの状態同期、購入CTA、Footerナビ、架空サイト注記は変更しない

### 2026/07/31｜Heroの商品情報を7日間セット画像へ変更

- Heroの`3 FLAVORS`、`7 BAGS`、`40g EACH`、`BUY ONCE`による4分割の商品情報表を削除
- 正式素材`trial-box_full-set_sunny-nuts.png`を、未診断時の標準構成である3種類7袋セットの画像として使用
- 画像直下に商品名`7 DAYS BREAKFAST BOX`と価格`1,980円（税込）`をまとめて配置
- 主CTAは商品カードの直後に維持し、購入導線の順番は変更しない
- HTML・CSS・関連mdを変更。JavaScriptと画像ファイルは変更しない

### 2026/07/31｜SP版LP全体の実ブラウザ通し確認と修正

実施内容：
- 375×667px、390×844px、768×900pxでHeaderからFooterまで実表示を確認
- 1024×800pxではSPメニューからPCナビへの切り替えと大きな崩れがないことのみ確認
- ページ全体の横幅、改行、固定要素、診断、同期、カルーセル、ボウル演出、詳細開閉、ページ内リンク、仮購入挙動を確認

発見した問題：
- 375pxの初期表示で、通常サイズの右下固定CTAがHero見出しへ重なっていた
- 768pxのTRIAL BOX導入カードを3列表示すると、「定期購入ではありません。」の末尾が不自然に分かれていた

修正内容：
- Heroが画面内にある間は固定CTAを非表示にし、Heroを通過すると通常表示へ戻す
- 固定CTAのHero・MORNING ROUTE・購入エリア・メニュー・Final CTA・Footer条件を既存の共通状態で判定する
- 768pxのTRIAL BOX導入カードは1カラムを維持し、3カラムへの切り替えを1024px以上へ移動する

確認結果：
- 375px、390px、768pxでページ全体の横スクロールなし
- ハンバーガーメニューの開閉、Esc閉鎖、リンク選択後の閉鎖・フォーカス復帰、5リンクの移動は正常
- 固定CTAはHero・購入エリア・メニュー・Final CTA・Footerで非表示、MORNING ROUTEでコンパクト表示、対象を離れると復帰
- 診断は全SUNNY、全BERRY、全CACAO、質問2優先のBERRY、質問2優先のSUNNYで想定結果
- 未回答制御、戻る、回答保持、再診断は正常
- YOUR FLAVOR、THREE FLAVORS、TRIAL BOX、Final CTAの追加フレーバー・内訳・画像同期は正常
- 再読み込み後も選択状態、診断済みCTA文言、おすすめ状態が反映され、`sessionStorage`による保持を表示結果から確認
- THREE FLAVORSとSEVEN MORNINGSは前後ボタン、disabled、現在位置、矢印キー、横スクロールが正常
- INSIDE THE BOWLはSTEP 1〜6の正順・逆順と画像パスの同期を確認
- FAQ 7件と商品詳細3件は開閉でき、複数FAQ・複数商品詳細を同時に開ける
- Hero、固定CTA、診断結果、Footerナビのページ内リンクは正しい位置へ移動
- TRIAL BOXとFinal CTAの購入ボタンは同じ未実装案内を表示し、404へ移動しない
- 画像参照の欠落、ページ内リンク先の欠落、重複ID、コンソールエラーなし
- ブラウザの自動`favicon.ico`取得だけが404だったため、正式faviconを新規作成せず`data:,`の空favicon宣言で不要な取得を停止

アクセシビリティ：
- h1 1件、主要h2、fieldset / legend、details / summary、blockquote、dl、navラベルを確認
- メニューのEsc操作、カルーセルの矢印キー、focus-visible、44px以上の主要操作領域を確認
- 固定CTAによるHero見出しの遮蔽を解消

未確認：
- 実機での指によるスワイプ
- スクリーンリーダー読み上げ
- `prefers-reduced-motion`を実際に有効化した状態
- 自動操作環境での`summary`のEnter / Space直接操作。HTML標準構造、`tabIndex=0`、クリック開閉は確認済み
- 1024px以上のPC完成レイアウト

変更したファイル：
- `03_code/css/style.css`
- `03_code/pages/index.html`
- `03_code/js/main.js`
- `00_docs/00_PROJECT_BRIEF.md`
- `00_docs/03_DECISIONS_LOG.md`
- `00_docs/04_DESIGN_RULES.md`
- `00_docs/06_IMPLEMENTATION_LOG.md`
- `00_docs/07_CURRENT_STATUS.md`

変更しなかったもの：
- 画像ファイル
- コピー、価格、送料、商品仕様
- 診断の質問・判定ロジック
- order.html以降の購入ページ

次工程（当時の案・後の方針変更で不採用）：
- order.htmlのSP構造ワイヤー（2026/07/31の1ページ完結方針により不採用）

### 2026/07/31｜購入導線をポートフォリオ用案内ダイアログへ変更

決定：
- ポートフォリオは`03_code/pages/index.html`の1ページだけで完結する
- 過去に想定していたorder.html、order-confirm.html、order-complete.htmlの構想は不採用とし、今回は作成しない
- Hero、右下固定CTA、診断結果CTAは`#trial-box`へページ内移動する
- TRIAL BOXとFinal CTAは、1つのHTML標準`dialog`要素を共用してポートフォリオ用案内を表示する
- ダイアログを開く直前に、共通状態の`selectedExtraFlavor`と`createSetBreakdown`から現在の商品内容を反映する
- 実際の商品販売・注文・決済は行わない

実装：
- `dialog.showModal()`と`dialog.close()`を使用
- 共通トリガークラス：`.js-open-portfolio-dialog`
- 閉じる操作：右上の×、「LPに戻る」、背景クリックは`close()`を使用し、Escキーは`dialog`の標準動作を使用
- ダイアログ閉鎖後は、開いた元の購入CTAへフォーカスを戻す
- `::backdrop`は半透明のダークブラウン、本体はオフホワイトの案内表現とする

変更したファイル：
- `03_code/pages/index.html`
- `03_code/css/style.css`
- `03_code/js/main.js`
- `00_docs/00_PROJECT_BRIEF.md`
- `00_docs/03_DECISIONS_LOG.md`
- `00_docs/04_DESIGN_RULES.md`
- `00_docs/06_IMPLEMENTATION_LOG.md`
- `00_docs/07_CURRENT_STATUS.md`

確認結果：
- 375×667px、390×844px、768×900px、1024×800pxでダイアログの開閉、選択状態、フォーカス復帰、横幅、固定要素との重なりを確認
- 未診断のSUNNY NUTS、BERRY MORNING選択、CACAO QUIET選択の3状態で追加の1袋と7袋内訳を確認
- order関連ファイルは存在せず、新規作成もしていない
- order.htmlへのリンク、空の`href`、コンソールエラー、ページ全体の横はみ出しはなし

未確認：
- 自動操作環境でEscキー入力がネイティブ`dialog`へ届かず、Escの実操作だけは未確認。`showModal()`で開く標準`dialog`構造としての実装は確認済み

過去の記録の扱い：
- 本ログより前の「order.htmlを次工程とする」記録は当時の履歴として保持するが、本決定により不採用・無効とする

次工程：
- PC版の差分設計

### 2026/07/31｜Footerのブランド表記を簡略化

- ロゴ画像と重複していたテキストの`nolla`を削除
- `CRAFT GRANOLA`は残し、ロゴの直下へ8pxの余白で配置
- Footerナビ、架空サイト注記、コピーライト、固定CTA制御は変更しない
- 変更ファイル：`03_code/pages/index.html`、`03_code/css/style.css`、`00_docs/03_DECISIONS_LOG.md`、`00_docs/04_DESIGN_RULES.md`、`00_docs/06_IMPLEMENTATION_LOG.md`、`00_docs/07_CURRENT_STATUS.md`

### 2026/07/31｜1024px以上のPC差分を実装

決定：
- SPのHTML順序・内容・機能を基準とし、1024px以上だけをCSS中心で再配置する
- コンテンツ最大幅は1160px、左右余白は32pxを基準とする
- Heroは左にコピーと商品カード、右にPC用4:3画像を配置する
- 2カラム対象：MORNING ROUTE、YOUR FLAVOR、INSIDE THE BOWL、TRIAL BOX、Final CTA
- 3カラム対象：MORNING REALITY、OUR IDEAの強み、HOW TO ENJOY、MORNING VOICES
- QUESTIONSは最大820pxの中央1カラムを維持する
- THREE FLAVORSは中央カードを強調し、SEVEN MORNINGSは1.5〜2枚を見せる
- PC固定CTAは本文への重なりを抑えるため、右端の細いタブ形状とする

画像：
- Heroと診断結果へ既存のPC用4:3画像を`picture`で割り当てる
- 診断結果のPC用`srcset`だけを既存のフレーバー状態と同期する
- 画像ファイルの追加・加工・移動・リネームは行わない

確認：
- 375×667px、390×844px、768×900px、1024×800px、1366×900px、1440×900pxを実ブラウザで確認
- 全6幅でページ全体の横はみ出しなし
- PCナビ、各カラム、Hero・診断結果のPC画像、sticky、カルーセル、商品選択、共通ダイアログ、FAQ、固定CTAを確認
- CACAO QUIET選択がTRIAL BOX、Final CTA、セット画像へ同期し、再読み込み後も保持されることを確認
- コンソールのerror・warningなし

未確認：
- 実機での指スワイプ
- スクリーンリーダー読み上げ
- `prefers-reduced-motion`を実際に有効にした操作
- 自動操作環境でネイティブ`dialog`へEsc入力が届かないため、Esc実操作のみ未確認

次工程：
- 公開前の最終確認、公開方法、OGP、正式favicon、READMEの整備範囲を決める

### 2026/08/01｜PC Heroの左右反転とOUR IDEA本文幅の調整

- 1024px以上のHeroを、画像左・コピー／商品情報／CTA右へ変更
- 画像の見せ場を保つため、PCの列幅は画像52%・コピー48%とする
- 1023px以下は従来どおり画像の後にコピーが続く縦配置を維持
- OUR IDEAはタイトル側より本文側を広くし、PCでは本文内の固定`br`を解除
- OUR IDEA本文は最大46emとし、右カラム中央に配置して余白を有効活用する
- 画像、HTML、JavaScript、コピー内容は変更しない
- 390px、1024px、1440pxで横はみ出しと改行バランスを確認

### 2026/08/01｜公開前のローカル最終確認と仕上げ

決定・修正：
- titleを`nolla CRAFT GRANOLA｜朝の気分で選ぶ7日間のグラノーラ`へ整理し、descriptionを架空LPであることまで含む説明へ更新
- `og:title`、`og:description`、`og:type`、`og:site_name`、`twitter:card`を追加
- 公開前時点ではURLと専用画像が確定していなかったため、`og:url`と`og:image`は推測で追加しない
- Heroは`loading="eager"`と`fetchpriority="high"`、ファーストビュー外の画像34枚は`loading="lazy"`とする
- 画像の`width`・`height`・`alt`、ページ内リンク、重複ID、ローカル参照を確認
- ルート`README.md`と`.gitignore`を作成し、macOSが生成した`.DS_Store` 13件を削除
- 画像ファイルの加工・変換・移動・削除は行わない

実ブラウザ確認：
- 320×700、375×667、390×844、768×900、1024×768、1024×640、1280×800、1366×900、1440×900の9条件で横はみ出しなし
- 診断5パターン、回答保持・戻る・再診断、3フレーバー同期、再読み込み保持を確認
- INSIDE THE BOWLのSTEP 1〜6、カルーセル2種、FAQ、商品詳細、共通ダイアログ、固定メニュー・固定CTAを確認
- ローカル画像404、ページ内リンク404、コンソールエラー、ページエラーなし

未確認・次工程：
- Lighthouse計測、実機タッチスワイプ、スクリーンリーダー、reduced motion実操作は未確認
- 正式favicon・専用OGP画像を決め、公開先確定後に公開環境で再確認する

### 2026/08/01｜GitHub Pages用docs構成を作成

決定：
- `nolla_lp_project`全体をGitで履歴管理する
- GitHub Pagesは`main / docs`を公開元にする
- 制作元は`03_code`・`01_brand`・`02_assets`に保持し、公開用ファイルは`docs/`へ分離する
- Firebase Hostingとorder関連ページは使用しない

実施：
- `docs/index.html`、`docs/css/style.css`、`docs/js/main.js`を制作元から生成
- 使用中の画像45枚だけを`docs/assets/01_brand`と`docs/assets/02_assets`へコピー
- `docs/index.html`と`docs/js/main.js`の参照先を`./assets/`起点へ変更
- 空の`docs/.nojekyll`を作成
- `.gitignore`へ`*.zip`を追加
- READMEへGitHub Pagesの公開方針と公開前時点のURL状況を追記

セキュリティ・Git状態：
- `.git/`、remote、branchはまだ存在しない
- APIキー、秘密鍵、トークン、`.env`、認証情報、ローカル絶対パスは検出されなかった
- Git初期化、コミット、GitHubリポジトリ作成、push、Pages設定は今回行わない

公開用動作確認：
- `docs/`を公開ルートにし、375、390、768、1024、1366、1440pxで表示を確認
- 全6幅でCSS・JavaScript読み込み、SPメニュー／PCナビ切り替え、横はみ出しなし
- 診断、選択同期・再読み込み保持、STEP 1〜6、両カルーセル、商品詳細、FAQ、ダイアログ、ページ内リンクを確認
- 画像・CSS・JavaScript・リンクの404、コンソールエラー、ページエラーなし

### 2026/08/01｜Git管理を開始しGitHub Pagesで公開

実施：
- `nolla_lp_project`全体のGit管理を開始
- `main`ブランチを使用
- 初回コミット`Initial commit: nolla CRAFT GRANOLA LP`を作成
- `origin`へGitHubリポジトリを登録し、`main`ブランチをpush
- GitHub Pagesの公開元を`main / docs`に設定

公開情報：
- GitHubリポジトリ：`https://github.com/Coconattsu0723/nolla-craft-granola`
- 公開URL：`https://coconattsu0723.github.io/nolla-craft-granola/`
- 公開サイトとGitHubリポジトリがHTTP 200で応答することを2026/08/01に確認

今後の更新方法：
1. 制作元ファイルを修正
2. `docs/`へ公開用ファイルを反映
3. 関係するmdを更新
4. `git status`で変更内容を確認
5. `git add .`
6. 内容に合うメッセージで`git commit`
7. `git push`
8. 公開サイトを確認
