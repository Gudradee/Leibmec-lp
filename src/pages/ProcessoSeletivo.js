import { renderNav } from '../components/Nav.js'
import { renderFooter } from '../components/Footer.js'
import { renderFAQ } from '../components/FAQ.js'

export function renderProcessoSeletivo() {
  return `
    ${renderNav()}
    <main class="processo-page">
      <section class="processo-hero section-dark">
        <div class="retro-grid" aria-hidden="true">
          <div class="retro-grid-inner">
            <div class="retro-grid-lines"></div>
          </div>
          <div class="retro-grid-fade"></div>
        </div>
        <div class="container" style="position: relative; z-index: 1;">
          <div class="chip r">Processo Seletivo</div>
          <h1 class="r">Faça parte da
            <span class="hw-wrap">
              <span class="text-gold">LEIbmec</span>
              <svg class="hw-svg" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
                <path class="hw-path" d="M 262 48 C 262 18, 212 8, 150 9 C 88 9, 38 20, 38 50 C 38 80, 88 92, 150 91 C 212 91, 263 79, 262 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </h1>
          <p class="subtitle r">Estamos sempre em busca de pessoas apaixonadas por empreendedorismo, prontas para aprender, colaborar e construir algo real.</p>
        </div>
      </section>

      <section class="processo-steps-full section-light">
        <div class="container">
          <div class="section-header r">
            <div class="chip">Como funciona</div>
            <h2 class="section-title">As etapas do processo</h2>
          </div>
          <div class="steps-grid-vertical r">
            <div class="step-item-full">
              <div class="step-number">01</div>
              <div class="step-content">
                <h3>Inscrição</h3>
                <p>Preencha o formulário online com seus dados e motivações. Queremos entender quem você é e o que quer construir.</p>
              </div>
            </div>
            <div class="step-item-full">
              <div class="step-number">02</div>
              <div class="step-content">
                <h3>1ª Fase</h3>
                <p>Prova escrita para avaliar raciocínio, conhecimento e capacidade analítica. Objetiva, sem decoreba.</p>
              </div>
            </div>
            <div class="step-item-full">
              <div class="step-number">03</div>
              <div class="step-content">
                <h3>Dinâmica em Grupo</h3>
                <p>Atividade presencial em equipe. Avaliamos como você pensa, colabora e se posiciona sob pressão real.</p>
              </div>
            </div>
            <div class="step-item-full">
              <div class="step-number">04</div>
              <div class="step-content">
                <h3>Entrevista Pessoal</h3>
                <p>Conversa individual com a gestão para alinhar expectativas, valores e confirmar o encaixe com a liga.</p>
              </div>
            </div>
          </div>
          <div class="processo-cta r">
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" class="btn btn-primary btn-large" aria-label="Abrir formulário de inscrição">
              Quero fazer parte <i class="fi fi-rr-arrow-right"></i>
            </a>
            <p class="processo-note">As inscrições são abertas semestralmente. Fique atento ao nosso Instagram para não perder o prazo.</p>
          </div>
        </div>
      </section>

      <section class="section-dark faq-section">
        <div class="container">
          <div class="section-header r">
            <div class="chip chip-dark">Dúvidas</div>
            <h2 class="section-title">Perguntas Frequentes</h2>
          </div>
          ${renderFAQ()}
        </div>
      </section>
      ${renderFooter()}
    </main>
  `
}
