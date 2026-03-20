import { renderNav }    from '../components/Nav.js'
import { renderFooter } from '../components/Footer.js'
import { renderFAQ }    from '../components/FAQ.js'
import { t }            from '../i18n/translations.js'

export function renderProcessoSeletivo(lang = 'pt') {
  const steps = t(lang, 'processoPage_steps')

  return `
    ${renderNav(lang)}
    <main class="processo-page">
      <section class="processo-hero section-dark">
        <div class="retro-grid" aria-hidden="true">
          <div class="retro-grid-inner">
            <div class="retro-grid-lines"></div>
          </div>
          <div class="retro-grid-fade"></div>
        </div>
        <div class="container" style="position: relative; z-index: 1;">
          <div class="chip r">${t(lang, 'processoPage_chip')}</div>
          <h1 class="processo-hero-title r">
            <span class="processo-hero-line1">${t(lang, 'processoPage_title')}</span>
            <span class="hw-wrap"><span class="text-gold">LEIbmec</span><svg class="hw-svg" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none"><path class="hw-path" d="M 262 48 C 262 18, 212 8, 150 9 C 88 9, 38 20, 38 50 C 38 80, 88 92, 150 91 C 212 91, 263 79, 262 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </h1>
          <p class="subtitle r">${t(lang, 'processoPage_subtitle')}</p>
        </div>
      </section>

      <section class="processo-steps-full section-light">
        <div class="container">
          <div class="section-header r">
            <div class="chip">${t(lang, 'processoPage_howChip')}</div>
            <h2 class="section-title">${t(lang, 'processoPage_howTitle')}</h2>
          </div>
          <div class="steps-grid-vertical r">
            ${steps.map(s => `
              <div class="step-item-full">
                <div class="step-number">${s.n}</div>
                <div class="step-content">
                  <h3>${s.title}</h3>
                  <p>${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="processo-cta r">
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary btn-large" aria-label="${t(lang, 'processoPage_ctaBtn')}">
              ${t(lang, 'processoPage_ctaBtn')} <i class="fi fi-rr-arrow-right"></i>
            </a>
            <p class="processo-note">${t(lang, 'processoPage_note')}</p>
          </div>
        </div>
      </section>

      <section class="section-dark faq-section">
        <div class="container">
          <div class="section-header r">
            <div class="chip chip-dark">${t(lang, 'processoPage_faqChip')}</div>
            <h2 class="section-title">${t(lang, 'processoPage_faqTitle')}</h2>
          </div>
          ${renderFAQ(lang)}
        </div>
      </section>
      ${renderFooter(lang)}
    </main>
  `
}
