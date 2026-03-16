export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = el.style.getPropertyValue('--delay') || '0s'
        el.style.transitionDelay = delay
        el.classList.add('on')
        observer.unobserve(el)
      }
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  })

  document.querySelectorAll('.r').forEach(el => {
    observer.observe(el)
  })
}
