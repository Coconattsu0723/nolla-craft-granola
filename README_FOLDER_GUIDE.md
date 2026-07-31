# nolla LP｜フォルダガイド

このフォルダは、クラフトグラノーラブランド「nolla」のLP制作データをまとめるための正本です。

## 00_docs
企画・参考分析・作業ルール・決定履歴などのmdファイルを格納します。

- `00_PROJECT_BRIEF.md`：企画と現在の確定仕様
- `01_REFERENCE_NOTES.md`：参考サイト分析
- `02_WORK_RULES.md`：実装・報告・md運用ルール
- `03_DECISIONS_LOG.md`：決定と変更の時系列記録
- `04_DESIGN_RULES.md`：現在のUI・レスポンシブ・アクセシビリティ規則
- `05_IMAGE_ASSETS.md`：画像の用途・再利用・差し替え管理
- `06_IMPLEMENTATION_LOG.md`：初心者向けの実装履歴
- `07_CURRENT_STATUS.md`：現在の実装状況

## 01_brand
ロゴ、パッケージ、外箱など、ブランドの基準となるデータを格納します。

- `logo/final`：確定ロゴ
- `logo/drafts`：検討中ロゴ
- `package/final`：確定パッケージ
- `package/drafts`：検討中パッケージ
- `package/box`：7 DAYS BREAKFAST BOXの外箱

## 02_assets
LP内で使用する画像・透過素材・アイコン・モックアップを格納します。

- `images/hero`：Hero画像
- `images/problem`：共感セクション
- `images/features`：ブランド・3つの強み
- `images/morning-route/background`：診断背景
- `images/morning-route/ingredients`：食材・器などの透過素材
- `images/morning-route/results`：診断結果3種
- `images/inside-the-bowl`：朝のボウル段階画像
- `images/flavors`：フレーバー生活写真
- `images/seven-mornings`：7日間ストーリー
- `images/trial-box`：外箱・7袋セット・商品詳細
- `images/voices`：口コミ用素材
- `images/final-cta`：Final CTA画像
- `icons`：補助アイコン
- `mockups`：ポートフォリオ掲載用モックアップ

## 03_code
HTML / CSS / JavaScriptの実装データを格納します。

- `pages`：HTMLファイル
- `css`：CSSファイル
- `js`：JavaScriptファイル

## 04_exports
Web公開用やポートフォリオ掲載用に書き出したデータを格納します。

## 99_archive
使用しなくなった旧データを、削除せず保管します。

## ファイル名の基本ルール

- 半角英数字とハイフンを使用
- 用途が分かる名前にする
- 確定版に `final-final` や日付を重ねない
- 旧版は `99_archive` へ移動する

例：

- `hero_morning-granola_sp.jpg`
- `hero_morning-granola_pc.jpg`
- `ingredient_almond_single.png`
- `result_berry-morning.jpg`
- `trial-box_open.png`
