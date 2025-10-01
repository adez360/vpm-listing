# adez360 VPM Package Listing

> 🌐 **Language / 語言 / 语言 / 言語**: [English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

A VRChat package listing provided by adez360, including commonly used and custom tools.

This repository contains VRChat packages developed and maintained by adez360, which can be easily installed and updated through VPM (VRChat Package Manager).

## 📦 Included Packages

Currently includes the following packages:

- **EditorScreenShot** - Editor screenshot tool

## 🚀 How to Install

### Method 1: Install via VPM

1. Open VRChat SDK in Unity
2. Open VPM window
3. Click "Add Repository"
4. Enter the following URL: `https://adez360.github.io/adez360-packages/index.json`
5. Click "Add" to complete

### Method 2: Manual Installation

1. Download the packages you need
2. Import package files in Unity
3. Follow the documentation for each package

## 📋 Package List

| Package Name | Description | Version | Status |
|-------------|-------------|---------|--------|
| EditorScreenShot | Editor screenshot tool | Latest | ✅ Available |

## 🔧 Developer Information

- **Author**: adez360
- **Contact**: admin@adez360.com
- **GitHub**: [@adez360](https://github.com/adez360)
- **Project Page**: [adez360-packages](https://github.com/adez360/adez360-packages)

## 🔄 Auto Updates

This package listing is automatically built and published through GitHub Actions. When new package versions are released, VPM will automatically detect and prompt for updates.

- **Auto Build**: Automatically rebuilds the package listing every time you push to the main branch
- **GitHub Pages**: Package listing is published to https://adez360.github.io/adez360-packages/
- **Real-time Updates**: VPM periodically checks and downloads the latest package versions

## 🛠️ Technical Details

### Package Listing Format
This repository uses the standard VPM Repo Listing format, defined in [`source.json`](source.json):

- **name**: Package listing name
- **id**: Unique identifier (com.adez360.packages)
- **url**: JSON file location for the package listing
- **author**: Author information
- **githubRepos**: Package list hosted on GitHub

### Build Process
The [build-listing.yml](.github/workflows/build-listing.yml) workflow will:

1. Check all specified GitHub repositories
2. Collect the latest release version information
3. Generate a VPM-compatible package listing JSON
4. Update the package listing on GitHub Pages

## 📞 Support & Feedback

If you encounter any issues or have suggestions, please:

- Report issues on [GitHub Issues](https://github.com/adez360/adez360-packages/issues)
- Contact via email: admin@adez360.com
- Check individual package documentation

## 📄 License

Please refer to individual package repositories for license terms. If you have questions, please contact the developer.

---

## 🌐 Other Languages

- [English](README.md)
- [繁體中文](README.zh-TW.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
