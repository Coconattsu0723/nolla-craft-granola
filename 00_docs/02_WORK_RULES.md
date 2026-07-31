# WORK RULES｜CodeX作業ルール

このファイルは、CodeXへ制作を依頼するときの共通ルールです。
今回のLP制作中は、この内容を優先してください。

## 1. 制作方針

- AIへすべてを任せず、制作者が構造と理由を理解しながら進める
- 企画・構成が確定するまではコードを作成しない
- 一度に全セクションを実装せず、段階的に進める
- SP版を正本とし、PC版は後から差分を調整する
- テキスト正本を勝手に変更しない
- 参考サイトをそのまま複製しない
- 実装前に不足情報や矛盾を報告する
- 既存機能を壊す可能性がある場合は、変更前に確認する

## 2. 優先順位

1. 最新のユーザー指示
2. 00_PROJECT_BRIEF.md
3. 04_DESIGN_RULES.md
4. 03_DECISIONS_LOG.md
5. 02_WORK_RULES.md
6. 05_IMAGE_ASSETS.md
7. ASSET_INDEX.md
8. その他のmd

矛盾がある場合は、勝手に判断せず確認してください。

## 2-1. 作業後のmd更新

- すべての実装・修正・素材変更・仕様変更を`03_DECISIONS_LOG.md`へ追記する
- 実装内容を`06_IMPLEMENTATION_LOG.md`へ追記する
- 現在の状態を`07_CURRENT_STATUS.md`へ反映する
- ページ全体の仕様変更は`00_PROJECT_BRIEF.md`へ反映する
- UIルールの変更は`04_DESIGN_RULES.md`へ反映する
- 画像の追加・差し替え・用途変更は`05_IMAGE_ASSETS.md`へ反映する
- 実際に確認していない画面幅や動作を「確認済み」と記録しない
- 不明点は推測せず「未確認」と記録する

## 3. 実装前のルール

- 最初は分析と企画だけを行う
- HTML / CSS / JavaScriptをまだ変更しない
- 画像生成・画像加工をまだ行わない
- mdファイルを書き換える場合は、変更内容を事前に説明する
- セクション構成・ターゲット・コンバージョンを確定してから実装する

## 4. HTMLルール

- header / main / section / footerでランドマークを整理
- Heroはh1
- 各主要セクションはh2
- カードやSTEPはh3
- sectionと見出しをaria-labelledbyで関連付け
- 順番が重要な内容はol
- 通常の箇条書きはul
- FAQはdetails / summaryを優先
- フォームはlabel / fieldset / legendを使用
- Skip linkを配置
- 内容画像には意味のあるaltを設定
- 装飾画像は疑似要素またはCSS背景で管理
- 見出し階層を崩さない
- 見た目のためだけの不要なdivを増やしすぎない

## 5. CSSルール

- モバイルファースト
- 色・余白・角丸・時間・最大幅をCSS変数で管理
- 共通コンテナ幅を設ける
- max-widthとmargin-inline: autoで中央配置
- 画像にwidth / heightを設定
- 必要に応じてaspect-ratio / object-fitを使用
- GridとFlexboxを役割で使い分ける
- 375px・390pxで横はみ出しを確認
- 768px直後に無理な2カラムを作らない
- 1024px以上でPCレイアウトを検討
- focus-visibleを設定
- prefers-reduced-motionへ対応
- sticky要素とoverflowの関係を確認
- アンカー移動にはscroll-margin-topを検討
- transformや疑似要素が画面幅を超えないよう管理

## 6. JavaScriptルール

- HTML標準機能で実装できるものはHTMLを優先
- 見た目の動きはCSSを優先
- JavaScriptは状態管理・計算・監視に限定
- 対象要素が存在しない場合にエラーを出さない
- IntersectionObserverを優先
- scrollイベントにはrequestAnimationFrameを検討
- JavaScriptが動かなくても内容を読める構造
- デバッグコードを本番へ残さない
- prefers-reduced-motionを壊さない

## 7. 確認幅

- SP：375px / 390px
- タブレット：768px
- PC：1024px / 1366px / 1440px
- 必要に応じて実機確認

## 8. 実装後の報告項目

1. 変更したファイル
2. 変更したHTMLのまとまり
3. 使用したタグと理由
4. 共通パーツ
5. ページ固有クラス
6. 主に変更したCSS
7. SPとPCの違い
8. JavaScriptの役割
9. なぜその構造にしたか
10. 確認した画面幅
11. 既存機能への影響
12. 初心者が覚えるべきポイント
13. 実務で説明する場合の言い方
14. 次の工程

## 9. 禁止事項

- ユーザー確認なしの全面再設計
- 参考サイトのコピー
- テキスト正本の無断変更
- 画像ファイル名の無断変更
- 不要なライブラリ追加
- 不要なJavaScript追加
- 原因不明のままoverflowで隠すだけの修正
- デバッグ用コードの残置
- SP修正によるPC崩れ
- PC修正によるSP崩れ
- 実装内容を説明せずコードだけ提示すること
