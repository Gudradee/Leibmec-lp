export function initPilaresMobileFlip() {
  const cards = Array.from(document.querySelectorAll('.pilar-flip'))
  if (!cards.length) return

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  cards.forEach(card => {
    card.classList.remove('is-active')
    card.onclick = null
    card.onkeydown = null

    if (!isMobile) {
      card.removeAttribute('role')
      card.removeAttribute('tabindex')
      card.removeAttribute('aria-expanded')
      return
    }

    card.setAttribute('role', 'button')
    card.setAttribute('tabindex', '0')
    card.setAttribute('aria-expanded', 'false')

    const toggleCard = () => {
      const willOpen = !card.classList.contains('is-active')
      cards.forEach(item => {
        item.classList.remove('is-active')
        item.setAttribute('aria-expanded', 'false')
      })
      if (willOpen) {
        card.classList.add('is-active')
        card.setAttribute('aria-expanded', 'true')
      }
    }

    card.onclick = toggleCard
    card.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggleCard()
      }
    }
  })
}
