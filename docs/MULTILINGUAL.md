# 多語言支援指南 / Multilingual Support Guide

## 🌐 支援的語言 / Supported Languages

| 語言 / Language | 檔案 / File | 狀態 / Status | 維護者 / Maintainer |
|----------------|-------------|---------------|-------------------|
| 🇺🇸 English | `README.md` | ✅ 完整 / Complete | adez360 |
| 🇹🇼 繁體中文 | `README.zh-TW.md` | ✅ 完整 / Complete | adez360 |
| 🇨🇳 简体中文 | `README.zh-CN.md` | ✅ 完整 / Complete | adez360 |
| 🇯🇵 日本語 | `README.ja.md` | ✅ 完整 / Complete | adez360 |

## 📝 如何新增語言 / How to Add a New Language

### 1. 建立新的 README 檔案 / Create New README File

```bash
# 複製英文版本作為範本 / Copy English version as template
cp README.md README.[language-code].md
```

### 2. 翻譯內容 / Translate Content

請確保翻譯以下部分：
- 標題和描述
- 安裝說明
- 套件清單
- 技術細節
- 支援資訊

### 3. 更新語言選擇器 / Update Language Selector

在所有 README 檔案中更新語言選擇器：

```markdown
> 🌐 **Language / 語言 / 语言 / 言語**: 
[English](README.md) | 
[繁體中文](README.zh-TW.md) | 
[简体中文](README.zh-CN.md) | 
[日本語](README.ja.md) |
[新語言](README.new.md)
```

### 4. 更新語言管理腳本 / Update Language Management Script

在 `scripts/update-languages.js` 中新增新語言：

```javascript
const LANGUAGES = {
  // ... existing languages
  'new': { file: 'README.new.md', name: 'New Language', flag: '🇳🇿' }
};
```

## 🔧 維護指南 / Maintenance Guide

### 檢查語言檔案 / Check Language Files

```bash
# 檢查所有語言檔案是否存在 / Check if all language files exist
node scripts/update-languages.js check

# 列出所有可用語言 / List all available languages
node scripts/update-languages.js list

# 驗證語言檔案結構 / Validate language file structure
node scripts/update-languages.js validate
```

### 自動檢查 / Automated Checks

GitHub Actions 會自動檢查：
- 所有語言檔案是否存在
- 語言檔案結構是否正確
- 必要章節是否完整

## 📋 翻譯檢查清單 / Translation Checklist

- [ ] 標題和描述已翻譯
- [ ] 安裝說明已翻譯
- [ ] 套件清單已翻譯
- [ ] 技術細節已翻譯
- [ ] 支援資訊已翻譯
- [ ] 語言選擇器已更新
- [ ] 檔案格式正確
- [ ] 連結有效
- [ ] 表情符號正確顯示

## 🤝 貢獻翻譯 / Contributing Translations

如果您想貢獻翻譯，請：

1. Fork 此儲存庫
2. 建立新的分支
3. 翻譯 README 檔案
4. 更新語言選擇器
5. 提交 Pull Request

## 📞 支援 / Support

如果您需要語言支援或有翻譯問題，請：

- 在 [GitHub Issues](https://github.com/adez360/adez360-packages/issues) 回報
- 聯絡：admin@adez360.com
- 使用 "Language Support Request" 範本

---

## 🛠️ 技術細節 / Technical Details

### 檔案命名規範 / File Naming Convention

- 英文：`README.md`
- 其他語言：`README.[language-code].md`
- 語言代碼使用 ISO 639-1 標準

### 內容結構 / Content Structure

所有語言版本應包含相同的章節：
- 標題和語言選擇器
- 專案描述
- 包含的套件
- 安裝說明
- 套件清單
- 開發者資訊
- 自動更新說明
- 技術細節
- 支援與回饋
- 授權資訊
- 其他語言連結

### 自動化 / Automation

- GitHub Actions 自動檢查語言檔案
- 語言管理腳本協助維護
- 自動化驗證確保品質
