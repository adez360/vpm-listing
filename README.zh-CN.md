# adez360 VPM Package Listing

> 🌐 **Language / 語言 / 语言 / 言語**: [English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

adez360 提供的 VRChat 套件清单，包含常用与自制工具。

这个存储库包含了 adez360 开发和维护的 VRChat 套件，通过 VPM (VRChat Package Manager) 可以轻松安装和更新这些套件。

## 📦 包含的套件

目前包含以下套件：

- **EditorScreenShot** - 编辑器截图工具

## 🚀 如何安装

### 方法一：通过 VPM 安装

1. 在 Unity 中打开 VRChat SDK
2. 打开 VPM 窗口
3. 点击 "Add Repository"
4. 输入以下 URL：`https://adez360.github.io/adez360-packages/index.json`
5. 点击 "Add" 完成添加

### 方法二：手动安装

1. 下载您需要的套件
2. 在 Unity 中导入套件文件
3. 按照各套件的说明文档进行设置

## 📋 套件清单

| 套件名称 | 描述 | 版本 | 状态 |
|---------|------|------|------|
| EditorScreenShot | 编辑器截图工具 | 最新 | ✅ 可用 |

## 🔧 开发者信息

- **作者**: adez360
- **联系方式**: admin@adez360.com
- **GitHub**: [@adez360](https://github.com/adez360)
- **项目页面**: [adez360-packages](https://github.com/adez360/adez360-packages)

## 🔄 自动更新

此套件清单会自动通过 GitHub Actions 进行构建和发布。当有新的套件版本发布时，VPM 会自动检测并提示更新。

- **自动构建**: 每次推送到 main 分支时会自动重新构建套件清单
- **GitHub Pages**: 套件清单会发布到 https://adez360.github.io/adez360-packages/
- **实时更新**: VPM 会定期检查并下载最新的套件版本

## 🛠️ 技术细节

### 套件清单格式
此存储库使用标准的 VPM Repo Listing 格式，定义在 [`source.json`](source.json) 中：

- **name**: 套件清单名称
- **id**: 唯一识别码 (com.adez360.packages)
- **url**: 套件清单的 JSON 文件位置
- **author**: 作者信息
- **githubRepos**: 托管在 GitHub 上的套件清单

### 构建流程
[build-listing.yml](.github/workflows/build-listing.yml) 工作流程会：

1. 检查所有指定的 GitHub 存储库
2. 收集最新的发布版本信息
3. 生成符合 VPM 格式的套件清单 JSON
4. 更新 GitHub Pages 上的套件清单

## 📞 支持与反馈

如果您遇到任何问题或有建议，请：

- 在 [GitHub Issues](https://github.com/adez360/adez360-packages/issues) 报告问题
- 通过 email 联系：admin@adez360.com
- 查看各套件的个别说明文档

## 📄 授权

各套件的授权条款请参考个别套件的存储库。如有疑问，请联系开发者。

---

## 🌐 其他语言 / Other Languages

- [English](README.md)
- [繁體中文](README.zh-TW.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
