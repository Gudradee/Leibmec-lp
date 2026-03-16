export function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero-gradient-background" aria-hidden="true"></div>

      <!-- Ghost "LEI" watermark -->
      <div class="hero-bg-text" aria-hidden="true">LEI</div>

      <!-- Top + bottom gradient vignette -->
      <div class="hero-vignette" aria-hidden="true"></div>

      <div class="hero-container container">
        <div class="hero-content">

          <!-- Badge eyebrow (pill style) -->
          <div class="hero-eyebrow r">
            <span class="hero-eyebrow-dot" aria-hidden="true"></span>
            <span class="hero-eyebrow-text">Liga de Empreendedorismo · Ibmec SP</span>
          </div>

          <!-- Title — split into main + em for separate word animation -->
          <h1 class="hero-title">
            <span id="hero-title-main">O lugar onde futuros fundadores</span>
            <em class="hero-title-em" id="hero-title-em">
              <span class="hu-wrap"> ganham forma.
                <svg class="hu-svg" width="100%" height="24" viewBox="0 0 300 20" aria-hidden="true" preserveAspectRatio="none">
                  <path class="hu-path" d="M 0,10 Q 75,0 150,10 Q 225,20 300,10" stroke="currentColor" stroke-width="2.5" fill="none" />
                </svg>
              </span>
            </em>
          </h1>

          <p class="hero-subtitle r">
            A LEIbmec é o ecossistema de empreendedorismo do Ibmec SP. Capacitamos, conectamos e aceleramos estudantes que querem construir negócios reais — não apenas estudar sobre eles.
          </p>

          <div class="hero-buttons r">
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary btn-large" aria-label="Quero fazer parte da LEIbmec">
              Quero fazer parte <i class="fi fi-rr-arrow-right"></i>
            </a>
            <a href="#manifesto" class="btn btn-outline btn-large" aria-label="Conheça a liga LEIbmec">
              Conheça a liga
            </a>
          </div>
        </div>

        <!-- Flip cards -->
        <div class="hero-cards r">
          <div class="flip-card" tabindex="0" aria-label="2.5k+ pessoas no ecossistema">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-users flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="2500" data-suffix="+">2.5k+</span>
                <span class="flip-label">Alcance</span>
                <span class="flip-sub">pessoas no ecossistema</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">Comunidade ativa</strong>
                <p>Estudantes, ex-membros e parceiros que fazem parte do ecossistema LEIbmec.</p>
              </div>
            </div>
          </div>

          <div class="flip-card" tabindex="0" aria-label="12 eventos realizados em 2024-25">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-calendar flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="12" data-suffix="+">12+</span>
                <span class="flip-label">Eventos</span>
                <span class="flip-sub">realizados em 2024–25</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">Do Summit ao dia a dia</strong>
                <p>Palestras, dinâmicas, visitas e o Z-Summit — experiências que marcam quem passa pela liga.</p>
              </div>
            </div>
          </div>

          <div class="flip-card" tabindex="0" aria-label="6 setores de atuação interna">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <i class="fi fi-rr-layers flip-icon" aria-hidden="true"></i>
                <span class="flip-number counter" data-target="6" data-suffix="">6</span>
                <span class="flip-label">Setores</span>
                <span class="flip-sub">áreas de atuação interna</span>
              </div>
              <div class="flip-card-back">
                <strong class="flip-back-title">Estrutura real</strong>
                <p>Gestão, Marketing, Projetos, RI, Inteligência de Mercado e Tecnologia & Inovação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
