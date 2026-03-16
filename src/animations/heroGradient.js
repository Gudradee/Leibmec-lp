export function initHeroGradient() {
  const section = document.getElementById('hero')
  const mouseBlob = document.getElementById('hero-gb-mouse')
  if (!section || !mouseBlob) return

  let targetX = window.innerWidth / 2
  let targetY = window.innerHeight / 2
  let currentX = targetX
  let currentY = targetY
  let rafId = null
  let active = false

  function lerp(a, b, t) {
    return a + (b - a) * t
  }

  function tick() {
    currentX = lerp(currentX, targetX, 0.06)
    currentY = lerp(currentY, targetY, 0.06)

    const rect = section.getBoundingClientRect()
    const relX = currentX - rect.left
    const relY = currentY - rect.top

    mouseBlob.style.left = relX + 'px'
    mouseBlob.style.top = relY + 'px'

    rafId = requestAnimationFrame(tick)
  }

  function onMouseMove(e) {
    targetX = e.clientX
    targetY = e.clientY
    if (!active) {
      active = true
      mouseBlob.style.opacity = '1'
      tick()
    }
  }

  function onMouseLeave() {
    active = false
    mouseBlob.style.opacity = '0'
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  // Remove old listeners if re-init
  section.removeEventListener('mousemove', section._heroMouseMove)
  section.removeEventListener('mouseleave', section._heroMouseLeave)

  section._heroMouseMove = onMouseMove
  section._heroMouseLeave = onMouseLeave

  section.addEventListener('mousemove', onMouseMove)
  section.addEventListener('mouseleave', onMouseLeave)

  mouseBlob.style.opacity = '0'
  mouseBlob.style.transition = 'opacity 0.4s ease'
}
