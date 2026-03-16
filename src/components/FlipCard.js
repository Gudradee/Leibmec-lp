// FlipCard is rendered inline in Hero.js but this module handles the JS behavior
export function initFlipCards() {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped')
    })
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        card.classList.toggle('flipped')
      }
    })
  })
}
