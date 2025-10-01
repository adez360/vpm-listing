# adez360 VPM Package Listing

> 🌐 **Language / 語言 / 语言 / 言語**: [English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

adez360 提供的 VRChat 套件清單，包含常用與自製工具。

這個儲存庫包含了 adez360 開發和維護的 VRChat 套件，透過 VPM (VRChat Package Manager) 可以輕鬆安裝和更新這些套件。

## 📦 包含的套件

目前包含以下套件：

- **EditorScreenShot** - 編輯器截圖工具

## 🚀 如何安裝

### 方法一：透過 VPM 安裝

1. 在 Unity 中開啟 VRChat SDK
2. 開啟 VPM 視窗
3. 點擊 "Add Repository"
4. 輸入以下 URL：`https://adez360.github.io/adez360-packages/index.json`
5. 點擊 "Add" 完成添加

### 方法二：手動安裝

1. 下載您需要的套件
2. 在 Unity 中匯入套件檔案
3. 按照各套件的說明文件進行設定

## 📋 套件清單

| 套件名稱 | 描述 | 版本 | 狀態 |
|---------|------|------|------|
| EditorScreenShot | 編輯器截圖工具 | 最新 | ✅ 可用 |

## 🔧 開發者資訊

- **作者**: adez360
- **聯絡方式**: admin@adez360.com
- **GitHub**: [@adez360](https://github.com/adez360)
- **專案頁面**: [adez360-packages](https://github.com/adez360/adez360-packages)

## 🔄 自動更新

此套件清單會自動透過 GitHub Actions 進行建置和發布。當有新的套件版本發布時，VPM 會自動檢測並提示更新。

- **自動建置**: 每次推送到 main 分支時會自動重新建置套件清單
- **GitHub Pages**: 套件清單會發布到 https://adez360.github.io/adez360-packages/
- **即時更新**: VPM 會定期檢查並下載最新的套件版本

## 🛠️ 技術細節

### 套件清單格式
此儲存庫使用標準的 VPM Repo Listing 格式，定義在 [`source.json`](source.json) 中：

- **name**: 套件清單名稱
- **id**: 唯一識別碼 (com.adez360.packages)
- **url**: 套件清單的 JSON 檔案位置
- **author**: 作者資訊
- **githubRepos**: 託管在 GitHub 上的套件清單

### 建置流程
[build-listing.yml](.github/workflows/build-listing.yml) 工作流程會：

1. 檢查所有指定的 GitHub 儲存庫
2. 收集最新的發布版本資訊
3. 生成符合 VPM 格式的套件清單 JSON
4. 更新 GitHub Pages 上的套件清單

## 📞 支援與回饋

如果您遇到任何問題或有建議，請：

- 在 [GitHub Issues](https://github.com/adez360/adez360-packages/issues) 回報問題
- 透過 email 聯絡：admin@adez360.com
- 查看各套件的個別說明文件

## 📄 授權

各套件的授權條款請參考個別套件的儲存庫。如有疑問，請聯絡開發者。

---

## 🌐 其他語言 / Other Languages

- [English](README.md)
- [繁體中文](README.zh-TW.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
