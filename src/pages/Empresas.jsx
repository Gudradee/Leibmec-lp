import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { StepItem } from '../components/StepItem.jsx'
import { IconTarget, IconPin, IconWrench } from '../components/icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

const vpIcons = [<IconTarget size={22} />, <IconPin size={22} />, <IconWrench size={22} />]

export default function Empresas() {
  const { t } = useLanguage()
  const e = t.empresas

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 md:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{e.hero.badge}</span>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
                  {e.hero.titleStart}{' '}<span className="text-gold italic">{e.hero.titleHighlight}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-gray-300 text-lg leading-relaxed font-sans-custom mb-8">{e.hero.description}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link to="/parceiros" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 min-w-[120px]">
                  {e.hero.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/xp.jpg" alt="Empresas e recrutadores parceiros da LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionTitle chip={e.valueProps.chip} title={e.valueProps.title} dark />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {e.valueProps.items.map((vp, i) => (
              <FadeIn key={i} delay={i * 0.08} className="h-full">
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 text-gold">{vpIcons[i]}</div>
                  <h3 className="font-display text-xl text-white mb-3">{vp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{vp.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/apresentacao.jpg" alt="Membros LEIbmec apresentando projeto" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div>
              <SectionTitle chip={e.members.chip} title={e.members.title} dark />
              <FadeIn delay={0.05}><p className="text-gray-300 leading-relaxed font-sans-custom mb-8">{e.members.description}</p></FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-3">
                  {e.members.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-gray-300 text-sm font-sans-custom">{tag}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle chip={e.process.chip} title={e.process.title} dark />
              <div className="mt-4">
                {e.process.steps.map((step, i) => (
                  <StepItem key={step.number} number={step.number} title={step.title} description={step.description} delay={i * 0.1} last={step.last} />
                ))}
              </div>
            </div>
            <FadeIn delay={0.1} className="hidden lg:flex items-center">
              <div className="aspect-square w-full rounded-2xl overflow-hidden">
                <img src="/fala1.jpg" alt="Como funciona a parceria LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center">
          <FadeIn><h2 className="font-display text-4xl md:text-5xl text-white mb-4">{e.cta.title}</h2></FadeIn>
          <FadeIn delay={0.07}><p className="text-gray-400 font-sans-custom mb-8">{e.cta.description}</p></FadeIn>
          <FadeIn delay={0.14}>
            <Link to="/parceiros" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-lg min-w-[120px]">
              {e.cta.btn}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
