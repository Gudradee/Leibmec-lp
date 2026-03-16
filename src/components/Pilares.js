const pilares = [
  {
    num: '01 / 06',
    name: 'Gestão Interna',
    desc: 'O núcleo que mantém a liga funcionando. Responsável por processos, pessoas, cultura organizacional e a evolução contínua da LEIbmec.',
    icon: 'fi-rr-settings'
  },
  {
    num: '02 / 06',
    name: 'Marketing',
    desc: 'Comunicação, identidade visual e presença digital da liga. Transforma o que acontece dentro da LEI em conteúdo que inspira fora dela.',
    icon: 'fi-rr-megaphone'
  },
  {
    num: '03 / 06',
    name: 'Inteligência de Mercado',
    desc: 'Análise de tendências, mapeamento de ecossistemas e geração de insights que embasam decisões estratégicas da liga e dos membros.',
    icon: 'fi-rr-chart-line-up'
  },
  {
    num: '04 / 06',
    name: 'Projetos',
    desc: 'Concepção e execução de iniciativas reais — de eventos a programas de capacitação. O lugar onde ideias viram entregas concretas.',
    icon: 'fi-rr-rocket'
  },
  {
    num: '05 / 06',
    name: 'Relações Institucionais',
    desc: 'Pontes com empresas, investidores, outras ligas e a própria instituição. Quem amplia o alcance e abre portas para o ecossistema.',
    icon: 'fi-rr-handshake'
  },
  {
    num: '06 / 06',
    name: 'Tecnologia & Inovação',
    desc: 'Explora o que há de mais novo em tech, IA e modelos de negócio. Conteúdo, projetos e visão de futuro para quem quer construir o próximo grande produto.',
    icon: 'fi-rr-microchip'
  }
]

export function renderPilares() {
  return `
    <section class="pilares section-gray" id="pilares">
      <div class="container">
        <div class="section-header r">
          <div class="chip">O que fazemos</div>
          <h2 class="section-title">Nossos pilares de atuação</h2>
        </div>
        <div class="pilares-grid">
          ${pilares.map((p, i) => `
            <div class="pilar-flip r" style="--delay: ${i * 0.07}s">
              <div class="pilar-flip-inner">

                <!-- FRONT -->
                <div class="pilar-flip-front">
                  <div class="pilar-card-top">
                    <span class="pilar-num">${p.num}</span>
                    <div class="icon-box">
                      <i class="fi ${p.icon}"></i>
                    </div>
                  </div>
                  <h3 class="pilar-name">${p.name}</h3>
                </div>

                <!-- BACK -->
                <div class="pilar-flip-back">
                  <div class="icon-box" style="margin-bottom: 16px;">
                    <i class="fi ${p.icon}"></i>
                  </div>
                  <h3 class="pilar-name">${p.name}</h3>
                  <p class="pilar-desc">${p.desc}</p>
                </div>

              </div>
            </div>
          `).join('')}
        </div>
        <p class="pilares-hint">Passe o mouse sobre cada card para saber mais</p>
      </div>
    </section>
  `
}
