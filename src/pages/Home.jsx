import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { CTACard } from '../components/CTACard.jsx'
import { InstitutionalTabs } from '../components/InstitutionalTabs.jsx'
import { IconBolt, IconHandshake, IconRocket, IconGraduation, IconBuilding, IconMic } from '../components/icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { pageTransition } from '../animations/variants.js'
import { ModernBackgroundPaths } from '../animations/modern-background-paths.jsx'
import { DigitalLoomBackground } from '../animations/digital-loom-background.jsx'

function CountUp({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!isInView) return
    const match = value.match(/^(\d+\.?\d*)(.*)$/)
    if (!match) { setDisplay(value); return }
    const end = parseFloat(match[1])
    const suffix = match[2]
    const steps = 40
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end
      const rounded = end % 1 !== 0 ? Math.round(current * 10) / 10 : Math.floor(current)
      setDisplay(`${rounded}${suffix}`)
      if (step >= steps) { setDisplay(value); clearInterval(timer) }
    }, 1200 / steps)
    return () => clearInterval(timer)
  }, [isInView, value])
  return <span ref={ref}>{display}</span>
}

function HeroSection() {
  const { t } = useLanguage()
  const h = t.home.hero

  // ── Scroll-driven parallax ──────────────────────────────────────────────
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  // Three depth layers — bg moves least, image moves most
  const bgY    = useTransform(scrollYProgress, [0, 1], [0, -35])
  const textY  = useTransform(scrollYProgress, [0, 1], [0, -75])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -130])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.07])
  // ────────────────────────────────────────────────────────────────────────

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 md:pb-20 overflow-hidden bg-navy">
      {/* Cycling SVG background patterns — neural / flow / geometric / spiral */}
      <ModernBackgroundPaths />

      {/* Depth layer 1 — slowest (blobs) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-navy-light/60 rounded-full blur-3xl" animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
        <motion.div className="absolute top-1/2 left-2/3 w-56 h-56 bg-gold/[0.03] rounded-full blur-3xl" animate={{ x: [0, 24, 0], y: [0, -24, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
      </motion.div>

      <motion.span
        className="absolute bottom-0 right-0 font-display leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(160px,22vw,340px)', color: 'rgba(255,255,255,0.04)', y: bgY }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >LEI</motion.span>

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Depth layer 2 — text column */}
          <motion.div style={{ y: textY }}>
            <FadeIn>
              <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6" animate={{ borderColor: ['rgba(254,197,57,0.25)', 'rgba(254,197,57,0.65)', 'rgba(254,197,57,0.25)'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                {h.badge}
              </motion.span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                {h.titleStart} <span className="italic font-bold text-gold underline decoration-gold">{h.titleHighlight}</span> {h.titleEnd}
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans-custom mb-8 max-w-lg">{h.description}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/membros" className="px-7 py-3.5 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-base">{h.ctaMember}</Link>
                <Link to="/empresas" className="px-7 py-3.5 border border-white/25 text-white font-medium font-sans-custom rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-base">{h.ctaPartner}</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-center gap-3 text-sm text-gray-400 font-sans-custom">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{h.stat1}</span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{h.stat2}</span>
              </div>
            </FadeIn>
          </motion.div>

          {/* Depth layer 3 — image column (moves fastest = deepest parallax) */}
          <FadeIn delay={0.1} className="hidden lg:block">
            <motion.div style={{ y: imageY, scale: imgScale }}>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/equipe-lei.jpeg" alt="Equipe LEIbmec" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

function NewsBanner() {
  const { t } = useLanguage()
  const n = t.home.news
  return (
    <div className="bg-gold py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 bg-navy text-gold text-xs font-bold font-sans-custom rounded uppercase tracking-wide">{n.badge}</span>
          <span className="text-navy font-semibold font-sans-custom text-sm md:text-base">{n.title}</span>
          <span className="hidden sm:block text-navy/60 text-sm font-sans-custom">{n.subtitle}</span>
        </div>
        <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold font-sans-custom text-sm flex items-center gap-1.5 shrink-0 hover:gap-2.5 transition-all">
          {n.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </div>
  )
}

function SegmentedCTAs() {
  const { t } = useLanguage()
  const s = t.home.segmented
  const icons = [<IconGraduation size={22} />, <IconBuilding size={22} />, <IconMic size={22} />]
  const hrefs = ['/membros', '/parceiros', '/palestrar']
  const [mouse, setMouse] = useState({ x: 0, y: 0, visible: false })

  return (
    <section
      className="relative py-16 md:py-24 bg-navy-mid overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
      }}
      onMouseLeave={() => setMouse(m => ({ ...m, visible: false }))}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: mouse.visible ? 1 : 0,
          background: `radial-gradient(650px at ${mouse.x}px ${mouse.y}px, rgba(254,197,57,0.08), transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14">
        <SectionTitle chip={s.chip} title={s.title} dark />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {s.cards.map((card, i) => (
            <CTACard key={i} icon={icons[i]} title={card.title} description={card.description} btnLabel={card.btn} href={hrefs[i]} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const { t } = useLanguage()
  const sp = t.home.socialProof
  const [mouse, setMouse] = useState({ x: 0, y: 0, visible: false })

  return (
    <section
      className="relative py-16 md:py-24 bg-navy overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
      }}
      onMouseLeave={() => setMouse(m => ({ ...m, visible: false }))}
    >
      {/* Digital loom — gold threads on navy */}
      <DigitalLoomBackground backgroundColor="#0f0e36" />

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-navy/50 pointer-events-none" />

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: mouse.visible ? 1 : 0,
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(254,197,57,0.1), transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div><SectionTitle chip={sp.chip} title={sp.title} dark /></div>
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {sp.metrics.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.04, borderColor: 'rgba(254,197,57,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-display text-4xl text-gold mb-1"><CountUp value={m.value} /></div>
                    <div className="text-gray-400 text-sm font-sans-custom">{m.label}</div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['/feira.jpg', '/visitaxp.jpg', '/lei.jpg', '/resenha.jpg'].map((src, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="aspect-square w-full rounded-2xl overflow-hidden">
                <img src={src} alt={`LEIbmec momento ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const { t } = useLanguage()
  const a = t.home.about
  const icons = [<IconBolt size={18} />, <IconHandshake size={18} />, <IconRocket size={18} />]
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle chip={a.chip} title={a.title} dark={false} />
            <FadeIn delay={0.05}><p className="text-gray-600 leading-relaxed font-sans-custom mb-5">{a.p1}</p></FadeIn>
            <FadeIn delay={0.1}><p className="text-gray-600 leading-relaxed font-sans-custom">{a.p2}</p></FadeIn>
          </div>
          <div className="flex flex-col justify-center gap-5">
            {a.pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-gold shrink-0">{icons[i]}</div>
                  <div>
                    <h3 className="font-display text-navy text-lg mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm font-sans-custom leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PublicProfiles() {
  const { t } = useLanguage()
  const pp = t.home.profiles
  const hrefs = ['/membros', '/parceiros', '/palestrar']
  const [mouse, setMouse] = useState({ x: 0, y: 0, visible: false })

  return (
    <section
      className="relative py-16 md:py-24 bg-navy overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
      }}
      onMouseLeave={() => setMouse(m => ({ ...m, visible: false }))}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: mouse.visible ? 1 : 0,
          background: `radial-gradient(650px at ${mouse.x}px ${mouse.y}px, rgba(254,197,57,0.07), transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14">
        <SectionTitle chip={pp.chip} title={pp.title} dark center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pp.cards.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08} className="h-full">
              <motion.div
                className="h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer"
                whileHover={{ scale: 1.03, borderColor: 'rgba(254,197,57,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-gold text-xs font-medium font-sans-custom uppercase tracking-widest mb-3">{p.audience}</span>
                <h3 className="font-display text-xl text-white mb-5">{p.label}</h3>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-gray-300 text-sm font-sans-custom">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />{b}
                    </li>
                  ))}
                </ul>
                <Link to={hrefs[i]} className="px-5 py-2.5 bg-gold/15 border border-gold/30 text-gold text-sm font-medium font-sans-custom rounded-lg text-center hover:bg-gold/25 transition-colors duration-200">{p.cta}</Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmpreendeMaisSection() {
  const { t } = useLanguage()
  const e = t.home.empreendaMais
  return (
    <section className="py-16 md:py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div className="relative bg-navy-light border border-gold/20 rounded-3xl p-10 md:p-16 overflow-hidden" animate={{ borderColor: ['rgba(254,197,57,0.2)', 'rgba(254,197,57,0.5)', 'rgba(254,197,57,0.2)'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <motion.div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn><span className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/25 text-gold text-xs font-medium font-sans-custom uppercase tracking-wider mb-5">{e.badge}</span></FadeIn>
              <FadeIn delay={0.05}><h2 className="font-display text-4xl md:text-5xl text-white mb-5">{e.titlePre} <span className="text-gold">{e.highlight}</span></h2></FadeIn>
              <FadeIn delay={0.1}><p className="text-gray-300 text-lg leading-relaxed font-sans-custom mb-4">{e.p1}</p></FadeIn>
              <FadeIn delay={0.15}><p className="text-gray-400 leading-relaxed font-sans-custom mb-8">{e.p2}</p></FadeIn>
              <FadeIn delay={0.2}>
                <Link to="/empreendamais" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200">
                  {e.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/empreenda-mais.jpg" alt="Empreenda+" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <HeroSection />
      <NewsBanner />
      <SegmentedCTAs />
      <SocialProof />
      <AboutSection />
      <InstitutionalTabs />
      <PublicProfiles />
      <EmpreendeMaisSection />
      <Footer />
    </motion.div>
  )
}
