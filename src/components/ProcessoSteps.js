import { t } from '../i18n/translations.js'

export function renderProcessoSteps(lang = 'pt') {
  const steps = t(lang, 'processo_steps')

  return `
    <section class="processo section-gray" id="processo">
      <div class="container">
        <div class="section-header r">
          <div class="chip">${t(lang, 'processo_chip')}</div>
          <h2 class="section-title">${t(lang, 'processo_title')}</h2>
        </div>

        <div class="steps-track r">
          ${steps.map((s, i) => `
            <div class="step-item">
              <div class="step-circle" aria-hidden="true">
                <span class="step-num">${s.n}</span>
              </div>
              ${i < steps.length - 1 ? '<div class="step-connector" aria-hidden="true"></div>' : ''}
            </div>
          `).join('')}
        </div>

        <div class="steps-content r">
          ${steps.map((s, i) => `
            <div class="step-detail" style="--delay: ${i * 0.1}s" data-glow>
              <div data-glow></div>
              <div class="icon-box" style="margin-bottom: 16px;">
                <i class="fi ${s.icon}"></i>
              </div>
              <span class="step-detail-num">${s.n}</span>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
              <span class="step-badge">${s.badge}</span>
            </div>
          `).join('')}
        </div>

        <div class="processo-btn-wrap r">
          <a href="/processo-seletivo" onclick="event.preventDefault(); window.navigateTo('/processo-seletivo')" class="btn btn-primary btn-large" aria-label="${t(lang, 'processo_btn')}">
            ${t(lang, 'processo_btn')} <i class="fi fi-rr-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `
}
