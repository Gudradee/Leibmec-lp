import { t } from '../i18n/translations.js'

export function renderNav(lang = 'pt') {
  const currentLang = lang || 'pt'
  const otherLang   = currentLang === 'pt' ? 'EN' : 'PT'

  const links = [
    { label: t(lang, 'nav_manifesto'), href: '/#manifesto' },
    { label: t(lang, 'nav_pilares'),   href: '/#pilares' },
    { label: t(lang, 'nav_eventos'),   href: '/#eventos' },
    { label: t(lang, 'nav_selecao'),   href: '/#processo' },
    { label: t(lang, 'nav_parceria'),  href: '/#parcerias' },
  ]

  const linksHtml = links.map(l => `<li><a href="${l.href}" class="nav-link">${l.label}</a></li>`).join('')
  const mobileLinksHtml = links.map(l => `<li><a href="${l.href}" class="nav-link">${l.label}</a></li>`).join('')

  return `
    <nav class="nav" id="main-nav" role="navigation" aria-label="${t(lang, 'nav_manifesto')}">
      <div class="nav-container">
        <a href="/" class="nav-logo" aria-label="LEIbmec — ${t(lang, 'nav_tagline')}">
          <div class="logo-wordmark"><em class="logo-le">LE</em><span class="logo-ibmec">Ibmec</span></div>
          <span class="logo-tagline">${t(lang, 'nav_tagline')}</span>
        </a>

        <ul class="nav-links" role="list">
          ${linksHtml}
        </ul>

        <div class="nav-actions">
          <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary nav-cta" aria-label="${t(lang, 'nav_inscrevase')}">
            ${t(lang, 'nav_inscrevase')} <i class="fi fi-rr-arrow-right"></i>
          </a>
          <button
            id="lang-toggle-btn"
            class="lang-toggle-btn"
            onclick="window.switchLang()"
            aria-label="Switch language to ${otherLang}"
            title="Switch language"
          >
            <i class="fi fi-rr-globe" style="font-size:0.8rem"></i>
            <span class="lang-label">${currentLang.toUpperCase()}</span>
          </button>
        </div>

        <button type="button" class="nav-hamburger" id="nav-hamburger" aria-label="${t(lang, 'nav_openMenu')}" aria-expanded="false" aria-controls="nav-mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="nav-mobile-menu" id="nav-mobile-menu" role="dialog" aria-label="Menu mobile">
        <ul role="list">
          ${mobileLinksHtml}
          <li>
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary">
              ${t(lang, 'nav_inscrevase')} <i class="fi fi-rr-arrow-right"></i>
            </a>
          </li>
          <li>
            <button class="lang-toggle-btn-mobile" onclick="window.switchLang()" aria-label="Switch language to ${otherLang}">
              <i class="fi fi-rr-globe" style="font-size:0.85rem"></i>
              ${otherLang === 'EN' ? 'Switch to English' : 'Mudar para Português'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `
}
