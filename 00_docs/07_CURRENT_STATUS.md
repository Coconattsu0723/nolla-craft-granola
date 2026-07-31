# CURRENT STATUS｜nolla LP

最終更新：2026/08/01

このファイルは履歴ではなく、現在の実装状況を示します。

## 1. 実装済みセクション

- Header
- 1023px以下の固定ハンバーガーメニュー
- 固定ハンバーガーは、枠線なしの淡い半透明背景とぼかした影で周囲になじむ表示
- 1024px以上のPCナビ
- 右下固定CTA
- Hero（PCは画像左・コピー右、SPは画像からコピーへ続く縦配置。7袋セット画像・商品名・価格を表示）
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
- QUESTIONS
- Final CTA（淡いベージュ背景）
- Footer（ロゴ直下に`CRAFT GRANOLA`を配置し、重複する`nolla`テキストなし）
- TRIAL BOX・Final CTA共通のポートフォリオ用案内ダイアログ

LP本体のSP・PCレイアウト、公開前確認、GitHub Pagesの`main / docs`用公開構成と`docs`単独の6幅・主要機能確認まで完了。Git操作とPages設定はまだ行っていない。

## 2. 制作対象外と未完成

以下は今回の「未実装」ではなく、作成しない制作対象外とする。

- order.html
- order-confirm.html
- order-complete.html
- 購入フォーム・個人情報入力・注文確認・注文完了
- 決済・カート・数量変更・送料計算・外部決済連携

現在の未完成事項：

- Git初期化・GitHubリポジトリ作成・初回push
- GitHub Pagesの`main / docs`設定
- 公開URL確定後の公開環境確認
- 専用OGP画像と`og:image`・`og:url`
- 正式favicon・Apple Touch Icon

## 3. 作成済みページ

- `03_code/pages/index.html`
- `docs/index.html`（GitHub Pages公開用）

## 4. 作成しないページ

- `order.html`
- `order-confirm.html`
- `order-complete.html`

## 5. 現在のJavaScript機能

- 診断回答の集計と結果表示
- 診断結果・追加フレーバー・セット内訳の`sessionStorage`保存
- 診断のリセット
- THREE FLAVORSカルーセル
- SEVEN MORNINGSカルーセル
- INSIDE THE BOWL段階画像切り替え
- TRIAL BOXの追加フレーバー変更と表示同期
- Final CTAの追加フレーバー・セット内訳・CTA文言同期
- TRIAL BOXとFinal CTAの共通ポートフォリオ用案内ダイアログ
- ダイアログを開く直前の追加フレーバー・7袋内訳反映
- `showModal()`・`close()`による開閉、Esc閉鎖、開いた元のCTAへのフォーカス復帰
- 固定CTAの表示制御
- Hero表示中の固定CTA非表示
- ページ内リンク選択後のハンバーガーメニュー閉鎖
- Escキーによるメニュー閉鎖とフォーカス復帰
- TRIAL BOX購入エリア、ハンバーガーメニュー、Final CTA、Footer表示中の固定CTA一時非表示

FAQの開閉にはJavaScriptを使用していない。

## 6. 現在の画像素材状況

- HTML・JavaScriptが参照する画像パス：欠落なし
- MORNING VOICES：人物アイコン3枚を使用
- MORNING VOICES：生活写真を使用しない
- SEVEN MORNINGS：専用画像5枚を使用し、口コミへ再利用しない
- INSIDE THE BOWL：正式な段階画像6枚を使用
- Final CTA：正式画像`final-cta_ready-for-day.png`を使用
- PC用Hero・PC用診断結果：1024px以上で`picture`により使用
- 詳細は`05_IMAGE_ASSETS.md`を参照

## 7. 既知の不具合・未確認事項

- SP版で既知の操作不能・横はみ出し・画像欠落・リンク404・コンソールエラー：なし
- 正式faviconは未実装だが、空favicon宣言により`favicon.ico`の自動404は発生しない
- 実機での指によるスワイプ：未確認
- スクリーンリーダー読み上げ：未確認
- `prefers-reduced-motion`を有効にした実操作：未確認
- 自動操作環境での`summary`のEnter / Space直接操作：未確認
- ポートフォリオ用`dialog`のEsc実操作：自動操作環境でEscキー入力が届かず未確認。標準`dialog`と`showModal()`による実装は確認済み
- 公開環境：未確認

## 8. 確認済み画面幅

- 実ブラウザ：320×700px
- 実ブラウザ：375×667px
- 実ブラウザ：390×844px
- 実ブラウザ：768×900px
- 実ブラウザ：1024×768px
- 実ブラウザ：1024×640px（低いPC画面）
- 実ブラウザ：1280×800px
- 実ブラウザ：1366×900px
- 実ブラウザ：1440×900px

GitHub Pages用`docs/`でも375、390、768、1024、1366、1440pxの6幅を再確認済み。

## 8-1. 正常動作を確認した機能

- ハンバーガーメニューの開閉、Esc、リンク選択後の閉鎖とフォーカス復帰
- Headerメニュー5リンクとFooterリンクのページ内移動
- Hero、固定CTA、診断結果CTAからTRIAL BOXへの移動
- 固定CTAのHero・購入エリア・メニュー・Final CTA・Footer非表示
- MORNING ROUTE中の固定CTAコンパクト表示と対象通過後の復帰
- 診断5パターン、未回答制御、戻る、回答保持、再診断
- YOUR FLAVOR、THREE FLAVORS、TRIAL BOX、Final CTAの追加フレーバー同期
- 再読み込み後の選択状態・診断済みCTA・おすすめ状態の保持
- THREE FLAVORSとSEVEN MORNINGSの前後・disabled・位置・矢印キー・横スクロール
- INSIDE THE BOWLのSTEP 1〜6正順・逆順切り替え
- 商品詳細3件とFAQ 7件の開閉、複数同時開閉
- TRIAL BOXとFinal CTAから共通案内ダイアログを開く動作
- 未診断のSUNNY NUTS、BERRY MORNING、CACAO QUIETの3状態でダイアログ内の追加フレーバーと7袋内訳が同期
- ×、「LPに戻る」、背景クリックでの閉鎖と元CTAへのフォーカス復帰
- 375px、390px、768pxのページ全体横スクロールなし
- 1024px、1366px、1440pxのページ全体横スクロールなし
- 1024px以上のPCナビ、Hero左右分割、各2〜3カラム、PC画像切り替え
- PC Heroは画像52%を左、コピー・商品情報・CTAを右に配置
- PCのOUR IDEAは本文側を広くし、固定改行を解除した自然な折り返し
- PCのINSIDE THE BOWLで左sticky画像・右説明の正順／逆順同期
- PCのTHREE FLAVORS中央強調とSEVEN MORNINGS 1.5〜2枚表示
- PCのTRIAL BOX・Final CTA 2カラム、MORNING VOICES 3カラム、QUESTIONS中央1カラム

## 9. QUESTIONSの現在仕様

- FAQ：7問
- 配置：MORNING VOICES直後
- Headerリンク：有効
- 構造：`details` / `summary`
- 初期状態：全件閉じる
- 複数同時開閉：可能
- Q・Aラベル：あり
- 開閉アイコン：＋／−
- FAQ専用JavaScript：なし

## 10. 次に進む最小単位

ユーザーが`docs/`の構成を確認した後、Git初期化と初回コミットを行う。

## 11. 次工程で確認が必要なこと

- GitHubのリポジトリ名と公開先アカウント
- 初回コミット内容
- 専用OGP画像と公開URL
- 正式favicon素材
- 実機スワイプ、スクリーンリーダー、`prefers-reduced-motion`の最終確認範囲
- Lighthouseを実行する環境と目標値
- 公開ファイルは確定方針どおり`docs/`へ配置し、GitHub Pagesの`main / docs`から公開する
- 公開URLは未設定
