import { t } from '../i18n/translations.js'

export function renderCTA(lang = 'pt') {
  return `
    <section class="parcerias section-dark" id="parcerias">
      <div class="container">
        <div class="parcerias-header r">
          <div class="chip chip-dark">${t(lang, 'cta_chip')}</div>
          <h2 class="parcerias-title">${t(lang, 'cta_title')}</h2>
          <p class="parcerias-subtitle">
            ${t(lang, 'cta_subtitle')}
          </p>
          <div class="parcerias-buttons">
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary btn-large" aria-label="${t(lang, 'cta_btn1')}">
              ${t(lang, 'cta_btn1')} <i class="fi fi-rr-arrow-right"></i>
            </a>
            <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener" class="btn btn-outline btn-large" aria-label="${t(lang, 'cta_btn2')}">
              ${t(lang, 'cta_btn2')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
