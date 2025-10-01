# adez360 VPM Package Listing

> 🌐 **Language / 語言 / 语言 / 言語**: [English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

adez360 が提供する VRChat パッケージリスト。よく使用されるツールとカスタムツールを含みます。

このリポジトリには、adez360 が開発・保守する VRChat パッケージが含まれており、VPM (VRChat Package Manager) を通じて簡単にインストール・更新できます。

## 📦 含まれるパッケージ

現在以下のパッケージが含まれています：

- **EditorScreenShot** - エディタースクリーンショットツール

## 🚀 インストール方法

### 方法1: VPM 経由でインストール

1. Unity で VRChat SDK を開く
2. VPM ウィンドウを開く
3. "Add Repository" をクリック
4. 以下の URL を入力：`https://adez360.github.io/adez360-packages/index.json`
5. "Add" をクリックして追加完了

### 方法2: 手動インストール

1. 必要なパッケージをダウンロード
2. Unity でパッケージファイルをインポート
3. 各パッケージの説明書に従って設定

## 📋 パッケージリスト

| パッケージ名 | 説明 | バージョン | ステータス |
|-------------|------|-----------|-----------|
| EditorScreenShot | エディタースクリーンショットツール | 最新 | ✅ 利用可能 |

## 🔧 開発者情報

- **作者**: adez360
- **連絡先**: admin@adez360.com
- **GitHub**: [@adez360](https://github.com/adez360)
- **プロジェクトページ**: [adez360-packages](https://github.com/adez360/adez360-packages)

## 🔄 自動更新

このパッケージリストは GitHub Actions を通じて自動的にビルド・公開されます。新しいパッケージバージョンがリリースされると、VPM が自動的に検出して更新を通知します。

- **自動ビルド**: main ブランチへのプッシュ時に自動的にパッケージリストを再ビルド
- **GitHub Pages**: パッケージリストは https://adez360.github.io/adez360-packages/ に公開
- **リアルタイム更新**: VPM が定期的にチェックして最新のパッケージバージョンをダウンロード

## 🛠️ 技術詳細

### パッケージリスト形式
このリポジトリは [`source.json`](source.json) で定義された標準の VPM Repo Listing 形式を使用：

- **name**: パッケージリスト名
- **id**: 一意識別子 (com.adez360.packages)
- **url**: パッケージリストの JSON ファイル位置
- **author**: 作者情報
- **githubRepos**: GitHub でホストされているパッケージリスト

### ビルドプロセス
[build-listing.yml](.github/workflows/build-listing.yml) ワークフローは以下を実行：

1. 指定されたすべての GitHub リポジトリをチェック
2. 最新のリリースバージョン情報を収集
3. VPM 形式に準拠したパッケージリスト JSON を生成
4. GitHub Pages 上のパッケージリストを更新

## 📞 サポートとフィードバック

問題が発生した場合やご提案がある場合は：

- [GitHub Issues](https://github.com/adez360/adez360-packages/issues) で問題を報告
- email で連絡：admin@adez360.com
- 各パッケージの個別説明書を確認

## 📄 ライセンス

各パッケージのライセンス条項は個別パッケージのリポジトリを参照してください。ご質問がある場合は開発者にお問い合わせください。

---

## 🌐 他の言語 / Other Languages

- [English](README.md)
- [繁體中文](README.zh-TW.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
