let initialized = false

export function initSpotlightCards() {
  if (initialized) return
  initialized = true

  document.addEventListener('pointermove', (e) => {
    const { clientX: x, clientY: y } = e
    document.querySelectorAll('[data-glow]').forEach(el => {
      el.style.setProperty('--x', x.toFixed(2))
      el.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
      el.style.setProperty('--y', y.toFixed(2))
      el.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
    })
  }, { passive: true })
}
