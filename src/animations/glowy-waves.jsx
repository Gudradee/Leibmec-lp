import { useEffect, useRef } from 'react'

// ─── GlowyWaves ──────────────────────────────────────────────────────────────
// Canvas sine-wave animation with mouse influence and glow blur.
// Adapted from GlowyWavesHero to work as an `absolute inset-0` background
// layer inside a `relative overflow-hidden` parent.
//
// Wave palette is hardcoded to the site's navy/gold theme.

// Navy/gold wave palette
const WAVE_PALETTE = [
  { offset: 0,               amplitude: 65,  frequency: 0.003,  color: 'rgba(254,197,57,1)',   opacity: 0.40 },
  { offset: Math.PI / 2,     amplitude: 85,  frequency: 0.0026, color: 'rgba(254,220,100,1)',  opacity: 0.28 },
  { offset: Math.PI,         amplitude: 55,  frequency: 0.0034, color: 'rgba(254,150,30,1)',   opacity: 0.25 },
  { offset: Math.PI * 1.5,   amplitude: 75,  frequency: 0.0022, color: 'rgba(255,240,180,1)',  opacity: 0.18 },
  { offset: Math.PI * 2,     amplitude: 50,  frequency: 0.004,  color: 'rgba(254,197,57,1)',   opacity: 0.15 },
]

export function GlowyWaves() {
  const canvasRef    = useRef(null)
  const mouseRef     = useRef({ x: 0, y: 0 })
  const targetMouse  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    let time = 0

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouseInfluence  = prefersReduced ? 10  : 65
    const influenceRadius = prefersReduced ? 160 : 360
    const smoothing       = prefersReduced ? 0.04 : 0.09

    // Resize to parent element so it fills the section (not the full window)
    const resize = () => {
      const parent = canvas.parentElement
      canvas.width  = parent ? parent.offsetWidth  : window.innerWidth
      canvas.height = parent ? parent.offsetHeight : window.innerHeight
      // Re-center mouse ref after resize
      mouseRef.current = targetMouse.current = {
        x: canvas.width  / 2,
        y: canvas.height / 2,
      }
    }

    const onMouseMove = (e) => {
      // Convert window coords to canvas-relative coords
      const rect = canvas.getBoundingClientRect()
      targetMouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onMouseLeave = () => {
      targetMouse.current = { x: canvas.width / 2, y: canvas.height / 2 }
    }

    resize()
    window.addEventListener('resize', resize)
    // Track mouse on the canvas's parent section
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', onMouseMove)
      parent.addEventListener('mouseleave', onMouseLeave)
    }

    const drawWave = (wave) => {
      ctx.save()
      ctx.beginPath()

      for (let x = 0; x <= canvas.width; x += 3) {
        const dx       = x - mouseRef.current.x
        const dy       = canvas.height / 2 - mouseRef.current.y
        const dist     = Math.sqrt(dx * dx + dy * dy)
        const infl     = Math.max(0, 1 - dist / influenceRadius)
        const mouseEff = infl * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset)

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.4) +
          mouseEff

        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }

      ctx.lineWidth   = 2.5
      ctx.strokeStyle = wave.color
      ctx.globalAlpha = wave.opacity
      ctx.shadowBlur  = 40
      ctx.shadowColor = wave.color
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      time += 1

      // Smooth mouse lerp
      mouseRef.current.x += (targetMouse.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouse.current.y - mouseRef.current.y) * smoothing

      // Navy gradient background — matches the section's bg-navy-mid
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, '#0f0e36')
      grad.addColorStop(1, '#1a1850')
      ctx.globalAlpha = 1
      ctx.shadowBlur  = 0
      ctx.fillStyle   = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      WAVE_PALETTE.forEach(drawWave)

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      if (parent) {
        parent.removeEventListener('mousemove', onMouseMove)
        parent.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
