#!/usr/bin/env node

/**
 * Language Selector Sync Script
 * 
 * This script ensures all language files have the same language selector
 * and updates them if needed.
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = {
  'en': { file: 'README.md', name: 'English', flag: '🇺🇸' },
  'zh-TW': { file: 'README.zh-TW.md', name: '繁體中文', flag: '🇹🇼' },
  'zh-CN': { file: 'README.zh-CN.md', name: '简体中文', flag: '🇨🇳' },
  'ja': { file: 'README.ja.md', name: '日本語', flag: '🇯🇵' }
};

function generateLanguageSelector() {
  const links = Object.entries(LANGUAGES)
    .map(([code, lang]) => `[${lang.name}](${lang.file})`)
    .join(' | ');
  
  return `> 🌐 **Language / 語言 / 语言 / 言語**: ${links}`;
}

function updateLanguageSelector(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if language selector already exists
    if (content.includes('> 🌐 **Language / 語言 / 语言 / 言語**:')) {
      console.log(`✅ ${path.basename(filePath)}: Language selector already exists`);
      return true;
    }
    
    // Find the position after the title
    const titleMatch = content.match(/^# adez360 VPM Package Listing\n/);
    if (!titleMatch) {
      console.log(`❌ ${path.basename(filePath)}: Title not found`);
      return false;
    }
    
    const titleEnd = titleMatch.index + titleMatch[0].length;
    const newContent = content.slice(0, titleEnd) + 
                      '\n' + 
                      generateLanguageSelector() + 
                      '\n\n' + 
                      content.slice(titleEnd);
    
    fs.writeFileSync(filePath, newContent);
    console.log(`✅ ${path.basename(filePath)}: Language selector added`);
    return true;
    
  } catch (error) {
    console.log(`❌ ${path.basename(filePath)}: Error - ${error.message}`);
    return false;
  }
}

function syncAllLanguageSelectors() {
  console.log('🔄 Syncing language selectors...\n');
  
  let allSuccess = true;
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const filePath = path.join(__dirname, '..', lang.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${lang.name}: File not found`);
      allSuccess = false;
      continue;
    }
    
    const success = updateLanguageSelector(filePath);
    if (!success) {
      allSuccess = false;
    }
  }
  
  console.log(`\n${allSuccess ? '✅' : '❌'} Language selector sync ${allSuccess ? 'completed successfully' : 'had errors'}`);
  return allSuccess;
}

function checkLanguageSelectors() {
  console.log('🔍 Checking language selectors...\n');
  
  let allHaveSelector = true;
  
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const filePath = path.join(__dirname, '..', lang.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${lang.name}: File not found`);
      allHaveSelector = false;
      continue;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const hasSelector = content.includes('> 🌐 **Language / 語言 / 语言 / 言語**:');
      
      console.log(`${hasSelector ? '✅' : '❌'} ${lang.name}: ${hasSelector ? 'Has selector' : 'Missing selector'}`);
      
      if (!hasSelector) {
        allHaveSelector = false;
      }
    } catch (error) {
      console.log(`❌ ${lang.name}: Error reading file - ${error.message}`);
      allHaveSelector = false;
    }
  }
  
  console.log(`\n${allHaveSelector ? '✅' : '❌'} All language files ${allHaveSelector ? 'have' : 'missing'} language selectors`);
  return allHaveSelector;
}

// Main execution
const command = process.argv[2] || 'check';

switch (command) {
  case 'check':
    checkLanguageSelectors();
    break;
  case 'sync':
    syncAllLanguageSelectors();
    break;
  default:
    console.log('Usage: node scripts/sync-language-selector.js [command]');
    console.log('Commands: check, sync');
    process.exit(1);
}
