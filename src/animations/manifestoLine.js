export function initManifestoLine() {
  const line = document.getElementById('manifesto-line')
  if (!line) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line.classList.add('grow')
        observer.unobserve(line)
      }
    })
  }, { threshold: 0.2 })

  observer.observe(line)
}
