import { useEffect, useRef } from 'react'

// ─── FloatingParticles ────────────────────────────────────────────────────────
// Fixed full-page background: particles that drift in all directions and bounce
// off walls, plus an animated radial glow blob.
// Use as the FIRST child inside a `relative` page wrapper.
// Sections above must use semi-transparent backgrounds.

function makeParticle(w, h) {
  const angle = Math.random() * Math.PI * 2
  const speed = Math.random() * 0.55 + 0.15
  const isGold = Math.random() < 0.35            // 35% gold, 65% white
  return {
    x:       Math.random() * w,
    y:       Math.random() * h,
    vx:      Math.cos(angle) * speed,
    vy:      Math.sin(angle) * speed,
    r:       Math.random() * 1.6 + 0.6,           // radius 0.6–2.2 px
    opacity: Math.random() * 0.45 + 0.55,         // 0.55–1.0
    gold:    isGold,
    glow:    Math.random() < 0.2,                 // 20% have extra glow
  }
}

export function FloatingParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles = []
    let rafId
    let w = 0
    let h = 0

    // Slow-moving glow blob
    let blobX = 0.5
    let blobY = 0.45
    let blobVx = 0.00015
    let blobVy = 0.00012

    const setSize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width  = w
      canvas.height = h
    }

    const count = () => Math.floor((w * h) / 5500)

    const init = () => {
      setSize()
      particles = Array.from({ length: count() }, () => makeParticle(w, h))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Animate glow blob
      blobX += blobVx
      blobY += blobVy
      if (blobX < 0.2 || blobX > 0.8) blobVx *= -1
      if (blobY < 0.2 || blobY > 0.8) blobVy *= -1

      // Draw soft radial glow
      const gx = blobX * w
      const gy = blobY * h
      const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.min(w, h) * 0.5)
      gr.addColorStop(0,   'rgba(254,197,57,0.07)')
      gr.addColorStop(0.4, 'rgba(254,197,57,0.03)')
      gr.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = gr
      ctx.fillRect(0, 0, w, h)

      // Draw particles
      for (const p of particles) {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce off walls
        if (p.x < 0)  { p.x = 0;  p.vx *= -1 }
        if (p.x > w)  { p.x = w;  p.vx *= -1 }
        if (p.y < 0)  { p.y = 0;  p.vy *= -1 }
        if (p.y > h)  { p.y = h;  p.vy *= -1 }

        // Glow halo for special particles
        if (p.glow) {
          ctx.shadowColor  = p.gold ? 'rgba(254,197,57,0.9)' : 'rgba(220,220,255,0.7)'
          ctx.shadowBlur   = 8
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(254,197,57,${p.opacity})`
          : `rgba(230,230,255,${p.opacity})`
        ctx.fill()

        if (p.glow) {
          ctx.shadowBlur = 0
          ctx.shadowColor = 'transparent'
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    init()
    rafId = requestAnimationFrame(draw)
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -10, opacity: 1 }}
      aria-hidden="true"
    />
  )
}
