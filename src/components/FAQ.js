import { t } from '../i18n/translations.js'

export function renderFAQ(lang = 'pt') {
  const items = t(lang, 'faq_items')

  const html = items.map(({ id, icon, question, answer }) => `
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

  return `<div class="faq-accordion">${html}</div>`
}

export function initFAQ() {
  const accordion = document.querySelector('.faq-accordion')
  if (!accordion) return

  accordion.replaceWith(accordion.cloneNode(true))
  const freshAccordion = document.querySelector('.faq-accordion')

  freshAccordion.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-accordion-trigger')
    if (!trigger) return

    const item = trigger.closest('.faq-accordion-item')
    const isOpen = item.classList.contains('is-open')

    freshAccordion.querySelectorAll('.faq-accordion-item.is-open').forEach(openItem => {
      openItem.classList.remove('is-open')
      openItem.querySelector('.faq-accordion-trigger').setAttribute('aria-expanded', 'false')
    })

    if (!isOpen) {
      item.classList.add('is-open')
      trigger.setAttribute('aria-expanded', 'true')
    }
  })
}
