import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { StepItem } from '../components/StepItem.jsx'
import { AreaCard } from '../components/AreaCard.jsx'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder.jsx'
import { IconMegaphone, IconHandshake, IconUsers, IconWrench, IconBarChart, IconLaptop } from '../components/icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

const areaIcons = [
  <IconMegaphone size={20} />,
  <IconHandshake size={20} />,
  <IconUsers size={20} />,
  <IconWrench size={20} />,
  <IconBarChart size={20} />,
  <IconLaptop size={20} />,
]

export default function Membros() {
  const { t } = useLanguage()
  const m = t.membros

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 md:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{m.hero.badge}</span>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
                  {m.hero.titleStart} <span className="text-gold italic">{m.hero.titleHighlight}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-gray-300 text-lg leading-relaxed font-sans-custom mb-8">{m.hero.description}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200">
                  {m.hero.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/dinamica3.jpg" alt="Membros LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Day-to-day */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img src="/dinamica2.jpg" alt="Reunião de área LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div>
              <SectionTitle chip={m.dayToDay.chip} title={m.dayToDay.title} dark />
              <FadeIn delay={0.05}><p className="text-gray-300 leading-relaxed font-sans-custom mb-8">{m.dayToDay.description}</p></FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-3">
                  {m.dayToDay.pills.map((pill) => (
                    <span key={pill} className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-gray-300 text-sm font-sans-custom">{pill}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionTitle chip={m.areas.chip} title={m.areas.title} dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {m.areas.items.map((area, i) => (
              <AreaCard key={area.name} icon={areaIcons[i]} name={area.name} description={area.description} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle chip={m.process.chip} title={m.process.title} dark />
              <div className="mt-4">
                {m.process.steps.map((step, i) => (
                  <StepItem key={step.number} number={step.number} title={step.title} description={step.description} delay={i * 0.1} last={step.last} />
                ))}
              </div>
            </div>
            <FadeIn delay={0.1} className="hidden lg:flex items-center">
              <div className="aspect-square w-full rounded-2xl overflow-hidden">
                <img src="/dinamica1.jpg" alt="Processo seletivo LEIbmec" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{m.cta.badge}</span>
          </FadeIn>
          <FadeIn delay={0.07}><h2 className="font-display text-4xl md:text-5xl text-white mb-4">{m.cta.title}</h2></FadeIn>
          <FadeIn delay={0.14}><p className="text-gray-400 font-sans-custom mb-8">{m.cta.description}</p></FadeIn>
          <FadeIn delay={0.2}>
            <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-lg">
              {m.cta.btn}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
