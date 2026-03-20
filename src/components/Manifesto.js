import { t } from '../i18n/translations.js'

export function renderManifesto(lang = 'pt') {
  return `
    <section class="manifesto section-light" id="manifesto">
      <div class="container manifesto-container">
        <div class="manifesto-left">
          <div class="chip r">${t(lang, 'manifesto_chip')}</div>
          <h2 class="section-title r">${t(lang, 'manifesto_title')}</h2>
        </div>
        <div class="manifesto-divider" id="manifesto-line" aria-hidden="true"></div>
        <div class="manifesto-right">
          <p class="manifesto-text r">${t(lang, 'manifesto_p1')}</p>
          <p class="manifesto-text r">${t(lang, 'manifesto_p2')}</p>
          <p class="manifesto-text r">${t(lang, 'manifesto_p3')}</p>
          <blockquote class="manifesto-quote r">${t(lang, 'manifesto_quote')}</blockquote>
          <p class="manifesto-text r">${t(lang, 'manifesto_p4')}</p>
          <p class="manifesto-text r">${t(lang, 'manifesto_p5')}</p>
        </div>
      </div>
    </section>
  `
}
