// Language switcher for Jekyll multi-language support
(function() {
  'use strict';

  // Get current language from localStorage or default to 'en'
  function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
  }

  // Set language preference
  function setLang(lang) {
    localStorage.setItem('lang', lang);
  }

  // Switch language
  function switchLanguage(lang) {
    setLang(lang);
    
    // Reload page with language parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  // Get language from URL or localStorage
  function getActiveLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'zh')) {
      setLang(urlLang);
      return urlLang;
    }
    
    return getCurrentLang();
  }

  // Initialize language switcher
  function init() {
    const activeLang = getActiveLang();
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-switch-btn').forEach(function(btn) {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === activeLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Add click event listeners
    document.querySelectorAll('.lang-switch-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetLang = this.getAttribute('data-lang');
        if (targetLang !== activeLang) {
          switchLanguage(targetLang);
        }
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();