// Modern VPM Package Listing JavaScript
const LISTING_URL = "{{ listingInfo.Url }}";

const PACKAGES = {
{{~ for package in packages ~}}
  "{{ package.Name }}": {
    name: "{{ package.Name }}",
    displayName: "{{ if package.DisplayName; package.DisplayName; end; }}",
    description: "{{ if package.Description; package.Description; end; }}",
    version: "{{ package.Version }}",
    author: {
      name: "{{ if package.Author.Name; package.Author.Name; end; }}",
      url: "{{ if package.Author.Url; package.Author.Url; end; }}",
    },
    dependencies: {
      {{~ for dependency in package.Dependencies ~}}
        "{{ dependency.Name }}": "{{ dependency.Version }}",
      {{~ end ~}}
    },
    keywords: [
      {{~ for keyword in package.Keywords ~}}
        "{{ keyword }}",
      {{~ end ~}}
    ],
    license: "{{ package.License }}",
    licensesUrl: "{{ package.LicensesUrl }}",
  },
{{~ end ~}}
};

// Utility functions
const showNotification = (message, type = 'success') => {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 20px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '500',
    zIndex: '10000',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  });
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showNotification('Copied to clipboard!');
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification('Copied to clipboard!');
  }
};

const updatePackageCount = () => {
  const visibleCards = document.querySelectorAll('.package-card:not([style*="display: none"])');
  const countElement = document.getElementById('packageCount');
  if (countElement) {
    countElement.textContent = `${visibleCards.length} packages`;
  }
};

// Search functionality
const initializeSearch = () => {
  const searchInput = document.getElementById('searchInput');
  const packageCards = document.querySelectorAll('.package-card');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', ({ target: { value = '' } }) => {
    const searchTerm = value.toLowerCase().trim();
    
    packageCards.forEach(card => {
      const packageName = card.dataset?.packageName?.toLowerCase() || '';
      const packageId = card.dataset?.packageId?.toLowerCase() || '';
      const description = card.querySelector('.package-description')?.textContent?.toLowerCase() || '';
      
      if (searchTerm === '' || 
          packageName.includes(searchTerm) || 
          packageId.includes(searchTerm) ||
          description.includes(searchTerm)) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.3s ease-out';
      } else {
        card.style.display = 'none';
      }
    });
    
    updatePackageCount();
  });
};

// Modal functionality
const initializeModals = () => {
  // Help modal
  const helpModal = document.getElementById('addListingToVccHelp');
  const helpButton = document.getElementById('urlBarHelp');
  const helpCloseButton = document.getElementById('addListingToVccHelpClose');
  
  if (helpButton && helpModal) {
    helpButton.addEventListener('click', () => {
      helpModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (helpCloseButton && helpModal) {
    helpCloseButton.addEventListener('click', () => {
      helpModal.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
  
  // Package info modal
  const packageInfoModal = document.getElementById('packageInfoModal');
  const packageInfoCloseButton = document.getElementById('packageInfoModalClose');
  
  if (packageInfoCloseButton && packageInfoModal) {
    packageInfoCloseButton.addEventListener('click', () => {
      packageInfoModal.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
  
  // Close modals when clicking outside
  [helpModal, packageInfoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
          document.body.style.overflow = '';
        }
      });
    }
  });
};

// Copy functionality
const initializeCopyButtons = () => {
  // Main URL copy button
  const mainCopyButton = document.getElementById('vccUrlFieldCopy');
  const mainUrlField = document.getElementById('vccUrlField');
  
  if (mainCopyButton && mainUrlField) {
    mainCopyButton.addEventListener('click', () => {
      copyToClipboard(mainUrlField.value);
    });
  }
  
  // Help modal URL copy button
  const helpCopyButton = document.getElementById('vccListingInfoUrlFieldCopy');
  const helpUrlField = document.getElementById('vccListingInfoUrlField');
  
  if (helpCopyButton && helpUrlField) {
    helpCopyButton.addEventListener('click', () => {
      copyToClipboard(helpUrlField.value);
    });
  }
  
  // Package info modal URL copy button
  const packageInfoCopyButton = document.getElementById('packageInfoVccUrlFieldCopy');
  const packageInfoUrlField = document.getElementById('packageInfoVccUrlField');
  
  if (packageInfoCopyButton && packageInfoUrlField) {
    packageInfoCopyButton.addEventListener('click', () => {
      copyToClipboard(packageInfoUrlField.value);
    });
  }
};

// VCC integration
const initializeVCCButtons = () => {
  // Main add to VCC button
  const mainVCCButton = document.getElementById('vccAddRepoButton');
  if (mainVCCButton) {
    mainVCCButton.addEventListener('click', () => {
      window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(LISTING_URL)}`);
    });
  }
  
  // Package add to VCC buttons
  const packageVCCButtons = document.querySelectorAll('.action-btn.primary[data-package-id]');
  packageVCCButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(LISTING_URL)}`);
    });
  });
};

// Package info functionality
const initializePackageInfo = () => {
  const packageInfoButtons = document.querySelectorAll('.package-info-btn');
  const packageInfoModal = document.getElementById('packageInfoModal');
  
  if (!packageInfoModal) return;
  
  // Get modal elements
  const packageInfoName = document.getElementById('packageInfoName');
  const packageInfoId = document.getElementById('packageInfoId');
  const packageInfoVersion = document.getElementById('packageInfoVersion');
  const packageInfoDescription = document.getElementById('packageInfoDescription');
  const packageInfoAuthor = document.getElementById('packageInfoAuthor');
  const packageInfoDependencies = document.getElementById('packageInfoDependencies');
  const packageInfoKeywords = document.getElementById('packageInfoKeywords');
  const packageInfoLicense = document.getElementById('packageInfoLicense');
  const packageInfoVccUrlField = document.getElementById('packageInfoVccUrlField');
  
  packageInfoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const packageId = e.currentTarget.dataset?.packageId;
      const packageInfo = PACKAGES?.[packageId];
      
      if (!packageInfo) {
        console.error(`Package not found: ${packageId}`);
        showNotification('Package information not available', 'error');
        return;
      }
      
      // Update modal content
      if (packageInfoName) packageInfoName.textContent = packageInfo.displayName || packageInfo.name;
      if (packageInfoId) packageInfoId.textContent = packageInfo.name;
      if (packageInfoVersion) packageInfoVersion.textContent = `v${packageInfo.version}`;
      if (packageInfoDescription) packageInfoDescription.textContent = packageInfo.description || 'No description available';
      if (packageInfoAuthor) {
        packageInfoAuthor.textContent = packageInfo.author.name || 'Unknown';
        packageInfoAuthor.href = packageInfo.author.url || '#';
      }
      if (packageInfoVccUrlField) packageInfoVccUrlField.value = LISTING_URL;
      
      // Update dependencies
      if (packageInfoDependencies) {
        packageInfoDependencies.innerHTML = '';
        const deps = Object.entries(packageInfo.dependencies || {});
        if (deps.length > 0) {
          deps.forEach(([name, version]) => {
            const li = document.createElement('li');
            li.textContent = `${name} @ v${version}`;
            li.style.marginBottom = '8px';
            packageInfoDependencies.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'No dependencies';
          li.style.color = 'var(--text-tertiary)';
          li.style.fontStyle = 'italic';
          packageInfoDependencies.appendChild(li);
        }
      }
      
      // Update keywords
      if (packageInfoKeywords) {
        packageInfoKeywords.innerHTML = '';
        const keywords = packageInfo.keywords || [];
        if (keywords.length > 0) {
          keywords.forEach(keyword => {
            const badge = document.createElement('span');
            badge.className = 'keyword-badge';
            badge.textContent = keyword;
            packageInfoKeywords.appendChild(badge);
          });
        } else {
          const span = document.createElement('span');
          span.textContent = 'No keywords';
          span.style.color = 'var(--text-tertiary)';
          span.style.fontStyle = 'italic';
          packageInfoKeywords.appendChild(span);
        }
      }
      
      // Update license
      if (packageInfoLicense) {
        if (packageInfo.license || packageInfo.licensesUrl) {
          packageInfoLicense.textContent = packageInfo.license || 'View License';
          packageInfoLicense.href = packageInfo.licensesUrl || '#';
          packageInfoLicense.style.display = 'inline';
        } else {
          packageInfoLicense.style.display = 'none';
        }
      }
      
      // Show modal
      packageInfoModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });
};

// Download functionality
const initializeDownloadButtons = () => {
  const downloadButtons = document.querySelectorAll('.download-btn[data-package-url]');
  
  downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const url = e.currentTarget.dataset?.packageUrl;
      if (url) {
        window.open(url, '_blank');
        showNotification('Download started');
      }
    });
  });
};

// Help button functionality
const initializeHelpButtons = () => {
  const helpButtons = document.querySelectorAll('#packageInfoListingHelp');
  const helpModal = document.getElementById('addListingToVccHelp');
  
  helpButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (helpModal) {
        helpModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });
};

// Keyboard navigation
const initializeKeyboardNavigation = () => {
  document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.show');
      if (openModal) {
        openModal.classList.remove('show');
        document.body.style.overflow = '';
      }
    }
  });
};

// Smooth scrolling for anchor links
const initializeSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('VPM Package Listing initialized');
  
  // Initialize all functionality
  initializeSearch();
  initializeModals();
  initializeCopyButtons();
  initializeVCCButtons();
  initializePackageInfo();
  initializeDownloadButtons();
  initializeHelpButtons();
  initializeKeyboardNavigation();
  initializeSmoothScrolling();
  
  // Update package count on load
  updatePackageCount();
  
  // Add loading animation completion
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause any animations or timers
  } else {
    // Page is visible, resume functionality
    updatePackageCount();
  }
});

// Export for potential external use
window.VPMPackageListing = {
  PACKAGES,
  LISTING_URL,
  showNotification,
  copyToClipboard,
  updatePackageCount
};