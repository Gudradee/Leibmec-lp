const faqItems = [
  {
    id: 'faq-1',
    icon: 'fi-rr-user',
    question: 'Preciso ter experiência em empreendedorismo?',
    answer: 'Não. Buscamos pessoas curiosas e comprometidas. Você aprenderá tudo o que precisa dentro da liga — o que importa é a disposição para aprender e agir.'
  },
  {
    id: 'faq-2',
    icon: 'fi-rr-clock',
    question: 'Qual é o nível de comprometimento esperado?',
    answer: 'Reuniões semanais + participação em eventos e projetos. Estimamos cerca de 4–6 horas por semana, mas isso varia conforme o pilar e o momento do semestre.'
  },
  {
    id: 'faq-3',
    icon: 'fi-rr-calendar',
    question: 'Posso me inscrever em qualquer período?',
    answer: 'Sim, desde que você seja aluno do Ibmec SP. As seleções ocorrem no início de cada semestre — fique atento ao nosso Instagram para não perder o prazo.'
  },
  {
    id: 'faq-4',
    icon: 'fi-rr-layers',
    question: 'Posso participar de mais de um pilar?',
    answer: 'Cada membro é alocado em um pilar principal, mas projetos cross-funcionais são comuns e encorajados. Você terá contato com todas as frentes da liga.'
  },
]

export function renderFAQ() {
  const items = faqItems.map(({ id, icon, question, answer }) => `
    <div class="faq-accordion-item" data-faq-id="${id}">
      <button class="faq-accordion-trigger" aria-expanded="false" aria-controls="${id}-content">
        <div class="faq-trigger-left">
          <span class="faq-icon-wrap"><i class="fi ${icon}"></i></span>
          <span class="faq-question">${question}</span>
        </div>
        <span class="faq-toggle" aria-hidden="true">
          <span class="faq-toggle-plus">+</span>
          <span class="faq-toggle-minus">−</span>
        </span>
      </button>
      <div class="faq-accordion-content" id="${id}-content" role="region">
        <div class="faq-accordion-body">
          <p>${answer}</p>
        </div>
      </div>
    </div>
  `).join('')

  return `
    <div class="faq-accordion">
      ${items}
    </div>
  `
}

export function initFAQ() {
  const accordion = document.querySelector('.faq-accordion')
  if (!accordion) return

  // Remove previous listener if re-init
  accordion.replaceWith(accordion.cloneNode(true))
  const freshAccordion = document.querySelector('.faq-accordion')

  freshAccordion.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-accordion-trigger')
    if (!trigger) return

    const item = trigger.closest('.faq-accordion-item')
    const isOpen = item.classList.contains('is-open')

    // Close all
    freshAccordion.querySelectorAll('.faq-accordion-item.is-open').forEach(openItem => {
      openItem.classList.remove('is-open')
      openItem.querySelector('.faq-accordion-trigger').setAttribute('aria-expanded', 'false')
    })

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('is-open')
      trigger.setAttribute('aria-expanded', 'true')
    }
  })
}
