function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target)
  const suffix = el.dataset.suffix || ''
  const duration = 1600
  const start = performance.now()

  function update(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)
    const current = Math.round(target * eased)

    // Format display value
    let display = current
    if (target >= 1000) {
      display = (current / 1000).toFixed(1).replace('.0', '') + 'k'
    }
    el.textContent = display + suffix

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

export function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('.counter').forEach(el => observer.observe(el))
}
