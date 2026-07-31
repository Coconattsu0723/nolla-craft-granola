# PROJECT BRIEF｜nolla CRAFT GRANOLA

このファイルは、nolla LPの企画と現在の確定仕様をまとめる正本です。未確認事項は推測で補わず、「未確認」または「未決」と記録します。

## 1. 基本情報

- 制作区分：自主制作／架空サイト
- サイト種別：1ページ完結型の商品LP
- 商材：1食分ずつ個包装したクラフトグラノーラ
- ブランド名：nolla CRAFT GRANOLA
- 商品名：7 DAYS BREAKFAST BOX
- 制作目的：ポートフォリオ掲載
- 実装：HTML / CSS / JavaScript
- 制作方針：モバイルファースト
- SP基準幅：375px
- 公開方法：プロジェクト全体をGit管理し、GitHub Pagesの`main / docs`から公開する方針。公開URLは未設定

## 2. 商品仕様

- 内容量：40g × 7袋
- 価格：1,980円（税込）
- 購入形式：1回限りの買い切り。定期購入ではない
- 基本セット：SUNNY NUTS、BERRY MORNING、CACAO QUIETを各2袋
- 追加分：3フレーバーから1袋を選び、合計7袋にする
- 診断をしない場合：SUNNY NUTSを追加の1袋として設定
- 送料：本州・四国・九州は無料、北海道・沖縄は700円
- ギフト対応：なし
- 想定購入数：お一人様1セット
- 実際の販売・決済：行わない架空サイト

## 3. 想定するユーザー

- 中心となる想定ユーザー：30代前半の働く女性
- 朝食を頑張りすぎず、手軽に取り入れたい人
- 大袋を使い切れるか不安で、少量から試したい人
- 味を選ぶ楽しさと、1食分の分かりやすさを求める人
- 家族構成など、上記以外の厳密な属性指定：未確認

## 4. LPの目的とCTA

- LPを見る前：朝食を続けられるか、量・味・定期購入・送料に不安がある
- LPを読んだ後：7日分なら気軽に試せると理解できる
- 主なCTA：TRIAL BOXへ移動し、7袋セットの内容を確認する
- 固定CTA：「7日間／試す」。Hero表示中はHero内CTAとの重複とコピーへの重なりを避けるため非表示
- 購入ボタン：「この内容で購入へ進む」
- Final CTA：未診断時「7日間の朝食を試してみる」、診断済み「この組み合わせで7日間試す」
- TRIAL BOX・Final CTAの購入ボタン：現在のセット内容を反映したポートフォリオ用案内ダイアログを表示

## 5. LP内の体験フロー

1. 3問診断を行う（任意）
2. おすすめフレーバーと7袋セット内訳を確認する
3. 追加の1袋を必要に応じて変更する
4. TRIAL BOXの商品情報・価格・送料・条件を確認する
5. QUESTIONSで購入前の疑問を確認する
6. Final CTAで現在の7袋セットを再確認する
7. TRIAL BOXまたはFinal CTAの購入ボタンからポートフォリオ用案内ダイアログを開く
8. 実際の購入ページへは移動しない

## 6. ページ構成と役割

1. Header：ロゴ、1023px以下の固定ハンバーガーメニュー、1024px以上のPCナビ
2. Hero：7袋セット画像・商品名・価格をまとめて見せ、「7日間だけ試せる」価値を提示
3. MORNING REALITY：朝食を用意できない悩みへの共感
4. OUR IDEA：朝食を頑張ることにしないブランド思想
5. MORNING ROUTE：3問診断への導入
6. YOUR FLAVOR：診断結果と追加フレーバー変更
7. INSIDE THE BOWL：素材が加わる段階と商品情報
8. THREE FLAVORS：3種類の味を比較
9. HOW TO ENJOY：食べ方を紹介
10. SEVEN MORNINGS：7日間の使用イメージ
11. TRIAL BOX：商品構成・価格・送料・原材料・購入条件
12. MORNING VOICES：人物アイコンとサンプルコメント3件
13. QUESTIONS：購入前の不安を解消するFAQ 7問
14. Final CTA：「明日の朝を、少しだけ楽しみに。」で締め、現在の追加フレーバーと7袋内訳を再確認する
15. Footer：ブランド、ページ内リンク、架空サイト注記を整理する

## 7. QUESTIONSの確定仕様

- セクションID：`questions`
- 見出し：はじめる前に、気になること。
- FAQ数：7問
- 実装：HTML標準の`details` / `summary`
- 初期状態：すべて閉じる
- 複数同時開閉：可能
- FAQ専用JavaScript：使用しない
- HeaderのQUESTIONSリンク：`#questions`として有効

## 8. 現在のJavaScript機能

- 診断結果の算出と表示
- 診断結果・追加フレーバー・セット内訳の`sessionStorage`保存
- THREE FLAVORSカルーセル制御
- SEVEN MORNINGSカルーセル制御
- INSIDE THE BOWLの段階画像切り替え
- TRIAL BOXの追加フレーバー・画像・内訳同期
- Final CTAの追加フレーバー・内訳・診断状態別CTA文言同期
- TRIAL BOX・Final CTA共通のポートフォリオ用案内ダイアログ
- ダイアログを開く直前の追加フレーバー・7袋内訳反映と、閉じた後のフォーカス復帰
- 固定CTAの表示状態切り替え
- ページ内リンク選択時のハンバーガーメニュー閉鎖
- TRIAL BOX購入エリア、ハンバーガーメニュー、Final CTA、Footer表示中の固定CTA一時非表示

## 8-1. ナビゲーションの確定仕様

- Header全体とロゴは固定しない
- 1023px以下：ハンバーガーメニューだけを画面右上へ固定
- 1024px以上：固定ハンバーガーを非表示にし、Header内へPCナビを表示
- メニュー構造：HTML標準の`details` / `summary`
- パネル：画面上部から下へ表示
- メニュー選択後：パネルを閉じる
- Escキー：パネルを閉じ、フォーカスをメニューボタンへ戻す
- メニュー表示中：右下固定CTAを一時的に非表示
- safe area：上端・右端・パネル内余白へ反映

## 8-2. Final CTA・Footerの確定仕様

- Final CTAセクションID：`final-cta`
- Final CTAコピー：`明日の朝を、少しだけ楽しみに。`
- Final CTA画像：`02_assets/images/final-cta/final-cta_ready-for-day.png`
- 未診断時CTA：`7日間の朝食を試してみる`
- 診断済みCTA：`この組み合わせで7日間試す`
- Final CTAは`selectedExtraFlavor`と共通のセット内訳計算を使用する
- 購入CTAはTRIAL BOXと共通の`dialog`要素を開き、現在の追加フレーバーと7袋内訳を表示する
- Footerナビ：OUR IDEA、MORNING ROUTE、THREE FLAVORS、TRIAL BOX、QUESTIONS
- Footer注記：ポートフォリオ用架空サイトであり、実際の商品販売・決済を行わない旨を表示する
- コピーライト：`© 2026 nolla CRAFT GRANOLA`

## 9. 制作対象外と未決事項

今回のポートフォリオは`index.html`の1ページだけで完結する。以下は「未実装」ではなく、制作対象外とする。

- order.html
- order-confirm.html
- order-complete.html
- 利用規約・プライバシーポリシー・特定商取引法ページ
- 購入フォーム・個人情報入力・注文確認・注文完了
- 決済・カート・数量変更・送料計算・外部決済連携

現在の未決・未完成事項：

- [x] 1024px以上のPC完成レイアウト
- [x] ローカル環境での公開前表示・機能確認
- [x] `README.md`の作成
- [x] title・description・基本SNSメタ情報の整理
- [x] GitHub Pages用`docs/`公開構成
- [ ] Git初期化・GitHubリポジトリ作成・push
- [ ] GitHub Pages設定（`main / docs`）
- [ ] 公開URL確定後の`og:url`
- [ ] 専用OGP画像と`og:image`
- [ ] 正式favicon・Apple Touch Icon

## 10. 次工程

公開用`docs/`の内容をユーザー確認後、Git初期化、GitHubリポジトリ作成、初回pushを行い、GitHub Pagesを`main / docs`へ設定する。公開URL確定後に`og:url`と公開環境を最終確認する。
