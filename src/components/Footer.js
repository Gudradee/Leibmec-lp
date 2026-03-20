import { t } from '../i18n/translations.js'

export function renderFooter(lang = 'pt') {
  const col1 = t(lang, 'footer_col1Links')
  const col2 = t(lang, 'footer_col2Links')
  const col3 = t(lang, 'footer_col3Links')

  const linkHtml = (links) => links.map(l =>
    `<li><a href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a></li>`
  ).join('')

  return `
    <footer class="footer" role="contentinfo">
      <div class="container footer-container">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="LEIbmec — ${t(lang, 'footer_tagline')}">
            <div class="logo-wordmark"><em class="logo-le">LE</em><span class="logo-ibmec">Ibmec</span></div>
            <span class="logo-tagline">${t(lang, 'footer_tagline')}</span>
          </a>
          <p class="footer-desc">${t(lang, 'footer_desc')}</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener" aria-label="Instagram da LEIbmec" class="footer-social-link">
              <i class="fi fi-brands-instagram"></i>
            </a>
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" aria-label="Formulário de inscrição" class="footer-social-link">
              <i class="fi fi-rr-document-signed"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">${t(lang, 'footer_col1Title')}</h4>
          <ul class="footer-links" role="list">${linkHtml(col1)}</ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">${t(lang, 'footer_col2Title')}</h4>
          <ul class="footer-links" role="list">${linkHtml(col2)}</ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">${t(lang, 'footer_col3Title')}</h4>
          <ul class="footer-links" role="list">${linkHtml(col3)}</ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>${t(lang, 'footer_copyright')}</p>
        <p class="uicons-credit">Icons by <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener">Flaticon</a></p>
      </div>
    </footer>
  `
}
