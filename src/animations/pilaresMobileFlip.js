export function initPilaresMobileFlip() {
  const cards = Array.from(document.querySelectorAll('.pilar-flip'))
  if (!cards.length) return

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  cards.forEach(card => card.classList.remove('is-active'))
  if (!isMobile) return

  if (window.__pilaresMobileObserver) {
    window.__pilaresMobileObserver.disconnect()
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (!visible) return

      cards.forEach(card => card.classList.remove('is-active'))
      visible.target.classList.add('is-active')
    },
    {
      threshold: [0.35, 0.5, 0.65, 0.8],
      rootMargin: '-12% 0px -12% 0px',
    }
  )

  cards.forEach(card => observer.observe(card))
  window.__pilaresMobileObserver = observer
}
