import { t } from '../i18n/translations.js'

const MAIN_ICONS = ['fi-rr-star', 'fi-rr-book-open-cover', 'fi-rr-building']
const ACTIVITY_ICONS = ['fi-rr-microphone', 'fi-rr-people-roof', 'fi-rr-coins', 'fi-rr-diagram-project']

function genGFCPattern() {
  return Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ])
}

function renderGFCPattern(squares) {
  const id = 'gfcp-' + Math.random().toString(36).slice(2, 8)
  const w = 20, h = 20
  return `
    <svg class="gfc-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="${id}" width="${w}" height="${h}" patternUnits="userSpaceOnUse" x="-12" y="4">
          <path d="M.5 ${h}V.5H${w}" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#${id})" />
      <svg x="-12" y="4" overflow="visible">
        ${squares.map(([sx, sy]) => `<rect stroke-width="0" width="${w + 1}" height="${h + 1}" x="${sx * w}" y="${sy * h}" />`).join('')}
      </svg>
    </svg>
  `
}

export function renderEventos(lang = 'pt') {
  const mainEvents  = t(lang, 'eventos_main')
  const activities  = t(lang, 'eventos_activities')
  const tilesHtml   = Array.from({ length: 50 * 22 }, () => '<div class="tile"></div>').join('')

  return `
    <section class="eventos section-light section-tiles" id="eventos">
      <div class="tiles-bg" aria-hidden="true">${tilesHtml}</div>
      <div class="container">
        <div class="section-header-row r">
          <div>
            <div class="chip">${t(lang, 'eventos_chip')}</div>
            <h2 class="section-title">${t(lang, 'eventos_title')}</h2>
          </div>
          <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener" class="btn btn-primary eventos-ig-link" aria-label="${t(lang, 'eventos_igLink')}">
            <i class="fi fi-brands-instagram"></i> ${t(lang, 'eventos_igLink')}
          </a>
        </div>

        <div class="dc-eventos-wrap r">
          <div class="dc-eventos-stack">
            ${mainEvents.map((e, i) => `
              <div class="dc-evento dc-evento--${['back','mid','front'][i]}">
                <div class="dc-evento-top">
                  <span class="dc-evento-icon"><i class="fi ${MAIN_ICONS[i]}"></i></span>
                  <span class="dc-evento-tag">${e.tag}</span>
                </div>
                <h3 class="dc-evento-name">${e.name}</h3>
                <p class="dc-evento-desc">${e.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="gfc-grid r">
          ${activities.map((a, i) => {
            const squares = genGFCPattern()
            return `
              <div class="gfc-card">
                <div class="gfc-pattern-wrap" aria-hidden="true">
                  <div class="gfc-pattern-inner">
                    ${renderGFCPattern(squares)}
                  </div>
                </div>
                <i class="fi ${ACTIVITY_ICONS[i]} gfc-icon"></i>
                <span class="gfc-tag">${a.tag}</span>
                <h4 class="gfc-title">${a.name}</h4>
                <p class="gfc-desc">${a.desc}</p>
              </div>
            `
          }).join('')}
        </div>
      </div>
    </section>
  `
}
