import { useEffect, useRef } from 'react'

// ─── DigitalLoomBackground ───────────────────────────────────────────────────
// Canvas animation: animated sine-wave threads moving horizontally.
// Designed as an `absolute inset-0` background layer inside a
// `relative overflow-hidden` parent. No children — purely decorative.
//
// Props:
//   threadColor   — CSS color for the threads          (default: gold)
//   threadCount   — number of concurrent threads       (default: 70)
//   backgroundColor — solid hex used to fill/trail     (default: #0f0e36 navy)

export function DigitalLoomBackground({
  threadColor = 'rgba(254, 197, 57, 0.45)',
  threadCount = 70,
  backgroundColor = '#0f0e36',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let threads = []
    let animId
    let w = 0
    let h = 0

    // Parse the backgroundColor hex into an rgba trail string
    // e.g. '#0f0e36' → 'rgba(15,14,54,0.13)'
    function hexToTrail(hex) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},0.13)`
    }
    const trailColor = hexToTrail(backgroundColor)

    class Thread {
      constructor() { this.init() }

      init() {
        this.x         = Math.random() * w
        this.y         = Math.random() * h
        this.speed     = Math.random() * 0.6 + 0.15
        this.amplitude = Math.random() * 22 + 8
        this.frequency = Math.random() * 0.022 + 0.008
        this.phase     = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.speed
        if (this.x > w) {
          this.x = 0
          this.y = Math.random() * h
        }
      }

      draw() {
        const startX = Math.max(this.x - 220, 0)
        ctx.beginPath()
        ctx.moveTo(
          startX,
          this.y + Math.sin(startX * this.frequency + this.phase) * this.amplitude,
        )
        for (let i = startX + 1; i <= this.x; i++) {
          ctx.lineTo(
            i,
            this.y + Math.sin(i * this.frequency + this.phase) * this.amplitude,
          )
        }
        ctx.strokeStyle = threadColor
        ctx.lineWidth   = 0.6
        ctx.stroke()
      }
    }

    const setup = () => {
      const parent = canvas.parentElement
      w = parent ? parent.offsetWidth  : window.innerWidth
      h = parent ? parent.offsetHeight : window.innerHeight
      canvas.width  = w
      canvas.height = h
      threads = Array.from({ length: threadCount }, () => new Thread())
      // Solid initial fill so trails work correctly
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, w, h)
    }

    const animate = () => {
      // Fade previous frame — uses section's bg color so trails blend naturally
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = trailColor
      ctx.fillRect(0, 0, w, h)

      // Draw threads with additive blending (overlaps glow brighter)
      ctx.globalCompositeOperation = 'lighter'
      for (const t of threads) {
        t.update()
        t.draw()
      }

      animId = requestAnimationFrame(animate)
    }

    setup()
    animate()

    const handleResize = () => setup()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [threadColor, threadCount, backgroundColor])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
