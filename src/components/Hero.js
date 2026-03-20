import { t } from '../i18n/translations.js'

export function renderHero(lang = 'pt') {
  return `
    <section class="hero" id="hero">
      <div class="hero-gradient-background" aria-hidden="true"></div>
      <div class="hero-bg-text" aria-hidden="true">LEI</div>
      <div class="hero-vignette" aria-hidden="true"></div>

      <div class="hero-container container">
        <div class="hero-content">

          <div class="hero-eyebrow r">
            <span class="hero-eyebrow-dot" aria-hidden="true"></span>
            <span class="hero-eyebrow-text">${t(lang, 'hero_eyebrow')}</span>
          </div>

          <h1 class="hero-title">
            <span id="hero-title-main">${t(lang, 'hero_titleMain')}</span>
            <em class="hero-title-em" id="hero-title-em">
              <span class="hu-wrap"> ${t(lang, 'hero_titleEm')}
                <svg class="hu-svg" width="100%" height="24" viewBox="0 0 300 20" aria-hidden="true" preserveAspectRatio="none">
                  <path class="hu-path" d="M 0,10 Q 75,0 150,10 Q 225,20 300,10" stroke="currentColor" stroke-width="2.5" fill="none" />
                </svg>
              </span>
            </em>
          </h1>

          <p class="hero-subtitle r">
            ${t(lang, 'hero_subtitle')}
          </p>

          <div class="hero-buttons r">
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary btn-large" aria-label="${t(lang, 'hero_ctaPrimary')}">
              ${t(lang, 'hero_ctaPrimary')} <i class="fi fi-rr-arrow-right"></i>
            </a>
            <a href="#manifesto" class="btn btn-outline btn-large" aria-label="${t(lang, 'hero_ctaSecondary')}">
              ${t(lang, 'hero_ctaSecondary')}
            </a>
          </div>
        </div>

        <div class="hero-cards r">
          <div class="flip-card" tabindex="0" aria-label="${t(lang, 'hero_card1Aria')}">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-users flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="2500" data-suffix="+">2.5k+</span>
                <span class="flip-label">${t(lang, 'hero_card1Label')}</span>
                <span class="flip-sub">${t(lang, 'hero_card1Sub')}</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">${t(lang, 'hero_card1BackTitle')}</strong>
                <p>${t(lang, 'hero_card1BackDesc')}</p>
              </div>
            </div>
          </div>

          <div class="flip-card" tabindex="0" aria-label="${t(lang, 'hero_card2Aria')}">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-calendar flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="12" data-suffix="+">12+</span>
                <span class="flip-label">${t(lang, 'hero_card2Label')}</span>
                <span class="flip-sub">${t(lang, 'hero_card2Sub')}</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">${t(lang, 'hero_card2BackTitle')}</strong>
                <p>${t(lang, 'hero_card2BackDesc')}</p>
              </div>
            </div>
          </div>

          <div class="flip-card" tabindex="0" aria-label="${t(lang, 'hero_card3Aria')}">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-layers flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="6" data-suffix="">6</span>
                <span class="flip-label">${t(lang, 'hero_card3Label')}</span>
                <span class="flip-sub">${t(lang, 'hero_card3Sub')}</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">${t(lang, 'hero_card3BackTitle')}</strong>
                <p>${t(lang, 'hero_card3BackDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
