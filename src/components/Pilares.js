import { t } from '../i18n/translations.js'

const ICONS = [
  'fi-rr-settings',
  'fi-rr-megaphone',
  'fi-rr-chart-line-up',
  'fi-rr-rocket',
  'fi-rr-handshake',
  'fi-rr-microchip',
]

export function renderPilares(lang = 'pt') {
  const pilares = t(lang, 'pilares_items')

  return `
    <section class="pilares section-gray" id="pilares">
      <div class="container">
        <div class="section-header r">
          <div class="chip">${t(lang, 'pilares_chip')}</div>
          <h2 class="section-title">${t(lang, 'pilares_title')}</h2>
        </div>
        <div class="pilares-grid">
          ${pilares.map((p, i) => `
            <div class="pilar-flip r" style="--delay: ${i * 0.07}s">
              <div class="pilar-flip-inner">
                <div class="pilar-flip-front">
                  <div class="pilar-card-top">
                    <span class="pilar-num">${p.num}</span>
                    <div class="icon-box">
                      <i class="fi ${ICONS[i]}"></i>
                    </div>
                  </div>
                  <h3 class="pilar-name">${p.name}</h3>
                </div>
                <div class="pilar-flip-back">
                  <div class="icon-box" style="margin-bottom: 16px;">
                    <i class="fi ${ICONS[i]}"></i>
                  </div>
                  <h3 class="pilar-name">${p.name}</h3>
                  <p class="pilar-desc">${p.desc}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}
