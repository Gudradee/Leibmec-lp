const BASE_DELAY = 0.5   // matches framer-motion delay: 0.5
const STEP = 0.12        // matches framer-motion i * 0.2 / ~words

export function initHeroWordSplit() {
  const mainSpan = document.getElementById('hero-title-main')
  const emSpan   = document.getElementById('hero-title-em')
  if (!mainSpan) return

  // Split main text into animated word spans
  const words = mainSpan.textContent.trim().split(/\s+/)
  mainSpan.innerHTML = words
    .map((word, i) =>
      `<span class="hw" style="transition-delay: ${(BASE_DELAY + i * STEP).toFixed(3)}s">${word}</span>`
    )
    .join(' ')

  // Animate em as a single word (after main words)
  if (emSpan) {
    const emDelay = BASE_DELAY + words.length * STEP + 0.06
    emSpan.style.transitionDelay = `${emDelay.toFixed(3)}s`
    emSpan.classList.add('hw')
  }

  // Trigger on next two frames (ensure DOM painted)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      mainSpan.querySelectorAll('.hw').forEach(w => w.classList.add('on'))
      if (emSpan) emSpan.classList.add('on')
    })
  })
}
