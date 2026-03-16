export function renderFooter() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container footer-container">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="LEIbmec - Início">
            <div class="logo-wordmark"><em class="logo-le">LE</em><span class="logo-ibmec">Ibmec</span></div>
            <span class="logo-tagline">Liga de Empreendedorismo</span>
          </a>
          <p class="footer-desc">Liga de Empreendedorismo do Ibmec SP. Formando os fundadores de amanhã, hoje.</p>
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
          <h4 class="footer-col-title">Liga</h4>
          <ul class="footer-links" role="list">
            <li><a href="/#manifesto">Manifesto</a></li>
            <li><a href="/#pilares">Pilares</a></li>
            <li><a href="/#eventos">Eventos</a></li>
            <li><a href="/processo-seletivo">Seleção</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Participe</h4>
          <ul class="footer-links" role="list">
            <li><a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener">Inscrição</a></li>
            <li><a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Parcerias</h4>
          <ul class="footer-links" role="list">
            <li><a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener">Seja parceiro</a></li>
            <li><a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener">Fale conosco</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 LEIbmec — Liga de Empreendedorismo Ibmec SP</p>
        <p class="uicons-credit">Icons by <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener">Flaticon</a></p>
      </div>
    </footer>
  `
}
