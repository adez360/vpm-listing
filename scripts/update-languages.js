#!/usr/bin/env node

/**
 * Language Management Script for adez360-packages
 * 
 * This script helps manage multiple language versions of README files
 * Usage: node scripts/update-languages.js [command]
 * 
 * Commands:
 * - check: Check if all language files exist and are up to date
 * - list: List all available language files
 * - validate: Validate language file structure
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = {
  'en': { file: 'README.md', name: 'English', flag: '🇺🇸' },
  'zh-TW': { file: 'README.zh-TW.md', name: '繁體中文', flag: '🇹🇼' },
  'zh-CN': { file: 'README.zh-CN.md', name: '简体中文', flag: '🇨🇳' },
  'ja': { file: 'README.ja.md', name: '日本語', flag: '🇯🇵' }
};

function checkLanguageFiles() {
  console.log('🔍 Checking language files...\n');
  
  let allExist = true;
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const filePath = path.join(__dirname, '..', lang.file);
    const exists = fs.existsSync(filePath);
    
    console.log(`${lang.flag} ${lang.name} (${code}): ${exists ? '✅' : '❌'} ${lang.file}`);
    
    if (!exists) {
      allExist = false;
    }
  }
  
  console.log(`\n${allExist ? '✅' : '❌'} All language files ${allExist ? 'exist' : 'missing some files'}`);
  return allExist;
}

function listLanguages() {
  console.log('📋 Available languages:\n');
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const filePath = path.join(__dirname, '..', lang.file);
    const exists = fs.existsSync(filePath);
    const size = exists ? fs.statSync(filePath).size : 0;
    
    console.log(`${lang.flag} ${lang.name} (${code})`);
    console.log(`   File: ${lang.file}`);
    console.log(`   Status: ${exists ? 'Available' : 'Missing'}`);
    console.log(`   Size: ${exists ? `${size} bytes` : 'N/A'}\n`);
  }
}

function validateLanguageFiles() {
  console.log('🔍 Validating language files...\n');
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const filePath = path.join(__dirname, '..', lang.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${lang.name}: File missing`);
      continue;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for required sections
      const requiredSections = [
        '# adez360 VPM Package Listing',
        '> 🌐 **Language / 語言 / 语言 / 言語**:',
        '## 📦',
        '## 🚀',
        '## 📋',
        '## 🔧',
        '## 🔄',
        '## 🛠️',
        '## 📞',
        '## 📄'
      ];
      
      let valid = true;
      const missingSections = [];
      
      for (const section of requiredSections) {
        if (!content.includes(section)) {
          missingSections.push(section);
          valid = false;
        }
      }
      
      console.log(`${valid ? '✅' : '❌'} ${lang.name}: ${valid ? 'Valid' : `Missing sections: ${missingSections.join(', ')}`}`);
      
    } catch (error) {
      console.log(`❌ ${lang.name}: Error reading file - ${error.message}`);
    }
  }
}

function generateLanguageSelector() {
  console.log('🌐 Language selector HTML:\n');
  
  let html = '<div align="center">\n  <h3>🌐 Language / 語言 / 语言 / 言語</h3>\n  <p>\n';
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    html += `    <a href="${lang.file}">${lang.flag} ${lang.name}</a>`;
    if (code !== Object.keys(LANGUAGES)[Object.keys(LANGUAGES).length - 1]) {
      html += ' | ';
    }
  }
  
  html += '\n  </p>\n</div>\n';
  
  console.log(html);
}

// Main execution
const command = process.argv[2] || 'check';

switch (command) {
  case 'check':
    checkLanguageFiles();
    break;
  case 'list':
    listLanguages();
    break;
  case 'validate':
    validateLanguageFiles();
    break;
  case 'selector':
    generateLanguageSelector();
    break;
  default:
    console.log('Usage: node scripts/update-languages.js [command]');
    console.log('Commands: check, list, validate, selector');
    process.exit(1);
}
