export function renderNav() {
  return `
    <nav class="nav" id="main-nav" role="navigation" aria-label="Navegação principal">
      <div class="nav-container">
        <a href="/" class="nav-logo" aria-label="LEIbmec - Página inicial">
          <div class="logo-wordmark"><em class="logo-le">LE</em><span class="logo-ibmec">Ibmec</span></div>
          <span class="logo-tagline">Liga de Empreendedorismo</span>
        </a>

        <ul class="nav-links" role="list">
          <li><a href="/#manifesto" class="nav-link">Manifesto</a></li>
          <li><a href="/#pilares" class="nav-link">Pilares</a></li>
          <li><a href="/#eventos" class="nav-link">Eventos</a></li>
          <li><a href="/#processo" class="nav-link">Seleção</a></li>
          <li><a href="/#parcerias" class="nav-link">Parceria</a></li>
        </ul>

        <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary nav-cta" aria-label="Inscreva-se na LEIbmec">
          Inscreva-se <i class="fi fi-rr-arrow-right"></i>
        </a>

        <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="nav-mobile-menu" id="nav-mobile-menu" role="dialog" aria-label="Menu mobile">
        <ul role="list">
          <li><a href="/#manifesto" class="nav-link">Manifesto</a></li>
          <li><a href="/#pilares" class="nav-link">Pilares</a></li>
          <li><a href="/#eventos" class="nav-link">Eventos</a></li>
          <li><a href="/#processo" class="nav-link">Seleção</a></li>
          <li><a href="/#parcerias" class="nav-link">Parceria</a></li>
          <li><a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary">Inscreva-se <i class="fi fi-rr-arrow-right"></i></a></li>
        </ul>
      </div>
    </nav>
  `
}
