import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants.js'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { StepItem } from '../components/StepItem.jsx'
import { IconTrophy, IconBroadcast, IconBolt, IconLink } from '../components/icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { FloatingParticles } from '../animations/floating-particles.jsx'

const whyIcons = [<IconTrophy size={22} />, <IconBroadcast size={22} />, <IconBolt size={22} />, <IconLink size={22} />]

export default function Palestrar() {
  const { t } = useLanguage()
  const p = t.palestrar

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="relative">
      {/* Fixed floating-particle background for the entire page */}
      <FloatingParticles />

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 md:pb-20 overflow-hidden" style={{ background: 'rgba(15,14,54,0.62)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-navy-light/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{p.hero.badge}</span>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
                  {p.hero.titleStart}{' '}<span className="text-gold italic">{p.hero.titleHighlight}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-gray-300 text-lg leading-relaxed font-sans-custom mb-8">{p.hero.description}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link to="/contato-palestrante" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200">
                  {p.hero.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/apresentacao-diretores.jpg" alt="Palestrantes e mentores LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 md:py-24" style={{ background: 'rgba(26,24,80,0.68)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <SectionTitle chip={p.why.chip} title={p.why.title} dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {p.why.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="flex flex-col min-h-[220px] bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(254,197,57,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 text-gold shrink-0">{whyIcons[i]}</div>
                  <h3 className="font-display text-xl text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{card.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 md:py-24" style={{ background: 'rgba(15,14,54,0.62)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <SectionTitle chip={p.events.chip} title={p.events.title} dark />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {['/evento1.jpg', '/evento2.jpg', '/evento3.jpg'].map((src, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img src={src} alt={`Evento LEIbmec ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24" style={{ background: 'rgba(26,24,80,0.68)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle chip={p.how.chip} title={p.how.title} dark />
              <div className="mt-4">
                {p.how.steps.map((step, i) => (
                  <StepItem key={step.number} number={step.number} title={step.title} description={step.description} delay={i * 0.1} last={step.last} />
                ))}
              </div>
            </div>
            <FadeIn delay={0.1} className="hidden lg:flex items-center">
              <div className="aspect-square w-full rounded-2xl overflow-hidden">
                <img src="/backstage.jpg" alt="Bastidores de palestra LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24" style={{ background: 'rgba(15,14,54,0.62)' }}>
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center">
          <FadeIn><h2 className="font-display text-4xl md:text-5xl text-white mb-4">{p.cta.title}</h2></FadeIn>
          <FadeIn delay={0.07}><p className="text-gray-400 font-sans-custom mb-8">{p.cta.description}</p></FadeIn>
          <FadeIn delay={0.14}>
            <Link to="/contato-palestrante" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-lg">
              {p.cta.btn}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
