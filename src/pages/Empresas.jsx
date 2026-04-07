import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants.js'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { StepItem } from '../components/StepItem.jsx'
import { IconTarget, IconPin, IconWrench } from '../components/icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { GridPattern } from '../components/ui/grid-pattern.jsx'

const vpIcons = [<IconTarget size={22} />, <IconPin size={22} />, <IconWrench size={22} />]

// Scattered highlighted squares for visual interest
const gridSquares = [
  [1,1],[4,2],[8,1],[12,3],[16,1],[19,2],
  [2,5],[6,4],[10,6],[14,5],[18,4],
  [3,9],[7,8],[11,9],[15,8],[20,9],
  [1,13],[5,12],[9,14],[13,12],[17,13],
  [4,17],[8,16],[12,18],[16,17],[19,16],
  [2,21],[6,20],[10,22],[14,21],[18,20],
]

function SectionGrid() {
  return (
    // Outer div: extends beyond section top/bottom so skew corners don't show gaps
    <div
      className="absolute inset-x-0 pointer-events-none"
      style={{ top: '-30%', height: '160%' }}
    >
      {/* Inner div: applies the 3D skew + radial gradient mask */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          transform: 'skewY(12deg)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, white 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, white 30%, transparent 100%)',
        }}
      >
        <GridPattern
          width={44}
          height={44}
          squares={gridSquares}
          strokeDasharray="1 2"
          style={{
            fill: 'rgba(254,197,57,0.12)',
            stroke: 'rgba(254,197,57,0.22)',
          }}
        />
      </div>
    </div>
  )
}

export default function Empresas() {
  const { t } = useLanguage()
  const e = t.empresas

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 md:pb-20 overflow-hidden bg-navy">
        <SectionGrid />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 w-full">
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-navy-mid">
        <SectionGrid />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
          <SectionTitle chip={e.valueProps.chip} title={e.valueProps.title} dark />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {e.valueProps.items.map((vp, i) => (
              <FadeIn key={i} delay={i * 0.08} className="h-full">
                <motion.div
                  className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(254,197,57,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 text-gold">{vpIcons[i]}</div>
                  <h3 className="font-display text-xl text-white mb-3">{vp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{vp.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-navy">
        <SectionGrid />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-navy-mid">
        <SectionGrid />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-navy">
        <SectionGrid />
        <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
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
