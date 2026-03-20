export function renderLangPopup() {
  return `
    <div id="lang-popup-overlay" class="lang-popup-overlay" role="dialog" aria-modal="true" aria-label="Choose language">
      <div class="lang-popup">
        <div class="lang-popup-icon" aria-hidden="true">
          <i class="fi fi-rr-globe"></i>
        </div>
        <div class="lang-popup-body">
          <h2 class="lang-popup-title">Language preference</h2>
          <p class="lang-popup-subtitle">Select the language you'd like to use while browsing this site.</p>
        </div>
        <div class="lang-popup-options">
          <button class="lang-option-btn lang-option-btn--active" onclick="window.chooseLang('en')" aria-label="Switch to English">
            <span class="lang-option-flag">🇺🇸</span>
            <span class="lang-option-name">English</span>
            <i class="fi fi-rr-arrow-right lang-option-arrow"></i>
          </button>
          <button class="lang-option-btn" onclick="window.chooseLang('pt')" aria-label="Manter em Português">
            <span class="lang-option-flag">🇧🇷</span>
            <span class="lang-option-name">Português</span>
            <i class="fi fi-rr-arrow-right lang-option-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  `
}
