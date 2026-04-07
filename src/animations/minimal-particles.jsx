import { useEffect, useRef } from 'react'

// ─── MinimalParticles ─────────────────────────────────────────────────────────
// Fixed full-page background: rising white particles + animated accent grid.
// Use as the FIRST child inside a `relative` page wrapper.
// All sections above it should use semi-transparent backgrounds.

function makeParticle(w, h) {
  const fadeDelay = Math.random() * 600 + 100
  return {
    x:         Math.random() * w,
    y:         Math.random() * h,
    speed:     Math.random() / 5 + 0.1,
    opacity:   0.7,
    fadeDelay,
    fadeStart: Date.now() + fadeDelay,
    fadingOut: false,
  }
}

function resetParticle(p, w, h) {
  p.x         = Math.random() * w
  p.y         = Math.random() * h
  p.speed     = Math.random() / 5 + 0.1
  p.opacity   = 0.7
  p.fadeDelay = Math.random() * 600 + 100
  p.fadeStart = Date.now() + p.fadeDelay
  p.fadingOut = false
}

export function MinimalParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles = []
    let rafId

    const setSize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    const count = () => Math.floor((canvas.width * canvas.height) / 6000)

    const init = () => {
      setSize()
      particles = Array.from({ length: count() }, () =>
        makeParticle(canvas.width, canvas.height),
      )
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.y -= p.speed
        if (p.y < 0) resetParticle(p, canvas.width, canvas.height)
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true
        if (p.fadingOut) {
          p.opacity -= 0.006
          if (p.opacity <= 0) resetParticle(p, canvas.width, canvas.height)
        }
        ctx.fillStyle = `rgba(250, 250, 250, ${p.opacity})`
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 2.5 + 1)
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

  const hLines = ['20%', '50%', '80%']
  const vLines = ['20%', '50%', '80%']

  return (
    <>
      {/* Particle canvas — fixed, behind everything */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -10, mixBlendMode: 'screen', opacity: 0.9 }}
        aria-hidden="true"
      />

      {/* Animated accent grid lines — fixed, behind everything */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -9 }}
        aria-hidden="true"
      >
        {hLines.map((top, i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top,
              background: 'rgba(254,197,57,0.35)',
              transformOrigin: '50% 50%',
              animation: `memberDrawX 900ms cubic-bezier(.22,.61,.36,1) ${150 + i * 130}ms both`,
            }}
          />
        ))}
        {vLines.map((left, i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left,
              background: 'rgba(254,197,57,0.28)',
              transformOrigin: '50% 0%',
              animation: `memberDrawY 1000ms cubic-bezier(.22,.61,.36,1) ${520 + i * 120}ms both`,
            }}
          />
        ))}
      </div>
    </>
  )
}
