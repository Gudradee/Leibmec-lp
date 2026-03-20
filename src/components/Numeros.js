import { t } from '../i18n/translations.js'

const NUMS_BASE = [
  { target: 2500, display: '2.5k+', suffix: '+' },
  { target: 12,   display: '12+',   suffix: '+' },
  { target: 50,   display: '50+',   suffix: '+' },
  { target: 100,  display: '100%',  suffix: '%' },
]

export function renderNumeros(lang = 'pt') {
  const labels = t(lang, 'numeros_items')
  return `
    <section class="numeros section-dark" id="numeros">
      <div class="container">
        <div class="numeros-grid">
          ${NUMS_BASE.map((n, i) => `
            <div class="numero-item r" style="--delay: ${i * 0.1}s">
              <span class="numero-value counter" data-target="${n.target}" data-suffix="${n.suffix}">${n.display}</span>
              <span class="numero-label">${labels[i].label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}
