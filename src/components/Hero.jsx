import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const TITLE_MAIN = 'O lugar onde futuros fundadores'
const TITLE_EM = 'ganham forma.'

const FLIP_CARDS = [
  { icon: 'fi-rr-users',    number: '2.5k+', label: 'Alcance',  sub: 'pessoas no ecossistema',   backTitle: 'Comunidade ativa',   backDesc: 'Estudantes, ex-membros e parceiros que fazem parte do ecossistema LEIbmec.', target: 2500 },
  { icon: 'fi-rr-calendar', number: '12+',   label: 'Eventos',  sub: 'realizados em 2024–25',    backTitle: 'Do Summit ao dia a dia', backDesc: 'Palestras, dinâmicas, visitas e o Z-Summit — experiências que marcam quem passa pela liga.', target: 12 },
  { icon: 'fi-rr-layers',   number: '6',     label: 'Setores',  sub: 'áreas de atuação interna', backTitle: 'Estrutura real',      backDesc: 'Gestão, Marketing, Projetos, RI, Inteligência de Mercado e Tecnologia & Inovação.', target: 6 },
]

function AnimatedNumber({ target, suffix = '+' }) {
  const [display, setDisplay] = useState('0')
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
          if (target >= 1000) setDisplay((val / 1000).toFixed(1).replace('.0', '') + 'k' + suffix)
          else setDisplay(val + suffix)
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])
  return <span ref={ref}>{display}</span>
}

function FlipCard({ card, index }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div className="flip-card" tabIndex={0} aria-label={`${card.number} ${card.sub}`}
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setFlipped(true)} onHoverEnd={() => setFlipped(false)}
      onFocus={() => setFlipped(true)} onBlur={() => setFlipped(false)}
      style={{ height: 190 }}
    >
      <motion.div className="flip-card-inner" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <div className="flip-card-front flex flex-col items-center justify-center rounded-2xl p-5 gap-1"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', height: '100%' }}>
          <i className={`fi ${card.icon}`} style={{ fontSize: 18, color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}></i>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2rem', color: '#fff', fontWeight: 700, lineHeight: 1 }}>
            <AnimatedNumber target={card.target} suffix={card.number.replace(/[\d.]+k?/i, '')} />
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fec539' }}>{card.label}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(221,223,231,0.55)', textAlign: 'center' }}>{card.sub}</span>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl p-5 gap-2 text-center"
          style={{ background: 'rgba(254,197,57,0.1)', border: '1px solid rgba(254,197,57,0.2)', backdropFilter: 'blur(10px)' }}>
          <strong style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#fec539', fontSize: '1rem' }}>{card.backTitle}</strong>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(221,223,231,0.8)', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>{card.backDesc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const titleWords = TITLE_MAIN.split(' ')

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0e36 0%, #1a1850 50%, #0f0e36 100%)', minHeight: '100vh', paddingTop: 64 }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(254,197,57,0.06) 0%, transparent 70%)' }} />
      <div className="hero-shapes" aria-hidden="true">
        {[1,2,3,4,5].map(n => (
          <div key={n} className={`hero-shape-outer hero-shape-${n}`}>
            <div className="hero-shape-float"><div className="hero-shape-visual" /></div>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="absolute select-none pointer-events-none"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(120px, 20vw, 260px)', fontWeight: 700, color: 'transparent', WebkitTextStroke: '1px rgba(254,197,57,0.06)', right: '-2%', top: '50%', transform: 'translateY(-50%)', lineHeight: 1, userSelect: 'none' }}>
        LEI
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 pointer-events-none h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f0e36)' }} />

      <div className="container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <motion.div className="flex items-center gap-2 mb-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="eyebrow-dot rounded-full" style={{ width: 8, height: 8, background: '#fec539', display: 'inline-block' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(221,223,231,0.7)' }}>Liga de Empreendedorismo · Ibmec SP</span>
            </motion.div>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: '0 0 8px 0' }}>
              {titleWords.map((word, i) => (
                <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.em className="hero-title-em" style={{ fontStyle: 'italic', display: 'inline-block' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 + titleWords.length * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                {TITLE_EM}
              </motion.em>
            </h1>
            <motion.p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(221,223,231,0.7)', lineHeight: 1.7, marginBottom: 36 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}>
              A LEIbmec é o ecossistema de empreendedorismo do Ibmec SP. Capacitamos, conectamos e aceleramos estudantes que querem construir negócios reais — não apenas estudar sobre eles.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }}>
              <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" className="btn btn-primary btn-large" aria-label="Quero fazer parte da LEIbmec">
                Quero fazer parte <i className="fi fi-rr-arrow-right" style={{ fontSize: '0.85rem' }}></i>
              </a>
              <a href="#manifesto" className="btn btn-outline btn-large">Conheça a liga</a>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[220px]">
            {FLIP_CARDS.map((card, i) => <FlipCard key={card.label} card={card} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
