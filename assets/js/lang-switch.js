// Simple and reliable language switcher
(function() {
  'use strict';

  // Get or set default language
  function getCurrentLang() {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'zh') {
      return stored;
    }
    // Default to English
    localStorage.setItem('lang', 'en');
    return 'en';
  }

  // Apply language to page
  function applyLanguage(lang) {
    // Hide all language-specific elements
    document.querySelectorAll('[class*="lang-"]').forEach(function(el) {
      if (el.classList.contains('lang-' + lang)) {
        el.style.display = '';
        el.removeAttribute('style'); // Remove inline style to use default display
      } else if (el.classList.contains('lang-en') || el.classList.contains('lang-zh')) {
        el.style.display = 'none';
      }
    });

    // Update button states
    document.querySelectorAll('.lang-switch-btn').forEach(function(btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  // Switch language
  function switchLanguage(lang) {
    if (lang !== 'en' && lang !== 'zh') {
      lang = 'en';
    }
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
  }

  // Initialize
  function init() {
    const currentLang = getCurrentLang();
    applyLanguage(currentLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-switch-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetLang = this.getAttribute('data-lang');
        switchLanguage(targetLang);
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also expose globally for debugging
  window.switchLanguage = switchLanguage;
})();