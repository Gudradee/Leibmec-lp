import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NUMS = [
  { target: 2500, display: '2.5k+', suffix: '+', label: 'pessoas alcançadas no ecossistema' },
  { target: 12,   display: '12+',   suffix: '+', label: 'eventos realizados em 2024–25' },
  { target: 50,   display: '50+',   suffix: '+', label: 'conteúdos produzidos sobre empreendedorismo' },
  { target: 100,  display: '100%',  suffix: '%', label: 'foco em formar os fundadores de amanhã' },
]

function Counter({ target, suffix, display }) {
  const [value, setValue] = useState(display)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = performance.now()
        const step = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          const val = Math.round(ease * target)
          if (target >= 1000) setValue((val / 1000).toFixed(1).replace('.0', '') + 'k' + suffix)
          else setValue(val + suffix)
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])
  return <span ref={ref}>{value}</span>
}

export default function Numeros() {
  return (
    <section id="numeros" className="py-20 lg:py-28" style={{ background: '#0f0e36' }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {NUMS.map((n, i) => (
            <motion.div key={i} className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#fec539', fontWeight: 700, lineHeight: 1 }}>
                <Counter target={n.target} suffix={n.suffix} display={n.display} />
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(221,223,231,0.6)', lineHeight: 1.5 }}>{n.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
