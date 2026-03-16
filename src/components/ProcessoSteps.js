export function renderProcessoSteps() {
  const steps = [
    {
      n: '01',
      icon: 'fi-rr-pencil',
      title: 'Inscrição',
      desc: 'Preencha o formulário online com seus dados e motivações. Queremos entender quem você é e o que quer construir.',
      badge: 'Formulário online'
    },
    {
      n: '02',
      icon: 'fi-rr-document',
      title: '1ª Fase',
      desc: 'Prova escrita para avaliar raciocínio, conhecimento e capacidade analítica. Objetiva, sem decoreba.',
      badge: 'Prova escrita'
    },
    {
      n: '03',
      icon: 'fi-rr-user-add',
      title: 'Dinâmica em Grupo',
      desc: 'Atividade presencial em equipe. Avaliamos como você pensa, colabora e se posiciona sob pressão real.',
      badge: 'Presencial'
    },
    {
      n: '04',
      icon: 'fi-rr-comment-user',
      title: 'Entrevista Pessoal',
      desc: 'Conversa individual com a gestão para alinhar expectativas, valores e confirmar o encaixe com a liga.',
      badge: 'Etapa final'
    }
  ]

  return `
    <section class="processo section-gray" id="processo">
      <div class="container">
        <div class="section-header r">
          <div class="chip">Processo seletivo</div>
          <h2 class="section-title">Como entrar na liga</h2>
        </div>

        <div class="steps-track r">
          ${steps.map((s, i) => `
            <div class="step-item">
              <div class="step-circle" aria-hidden="true">
                <span class="step-num">${s.n}</span>
              </div>
              ${i < steps.length - 1 ? '<div class="step-connector" aria-hidden="true"></div>' : ''}
            </div>
          `).join('')}
        </div>

        <div class="steps-content r">
          ${steps.map((s, i) => `
            <div class="step-detail" style="--delay: ${i * 0.1}s" data-glow>
              <div data-glow></div>
              <div class="icon-box" style="margin-bottom: 16px;">
                <i class="fi ${s.icon}"></i>
              </div>
              <span class="step-detail-num">${s.n}</span>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
              <span class="step-badge">${s.badge}</span>
            </div>
          `).join('')}
        </div>

        <div class="processo-btn-wrap r">
          <a href="/processo-seletivo" class="btn btn-primary btn-large" aria-label="Entenda o processo seletivo completo">
            Entenda mais <i class="fi fi-rr-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `
}
