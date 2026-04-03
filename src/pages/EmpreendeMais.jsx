import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { IconBarChart, IconPlay, IconWrench, IconTrendUp } from '../components/icons/index.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

const features = [
  {
    icon: <IconBarChart size={22} />,
    title: 'Aulas por área',
    description: 'Conteúdos produzidos pelos líderes de cada área da liga — marketing, projetos, RI e mais.',
  },
  {
    icon: <IconPlay size={22} />,
    title: 'Palestras exclusivas',
    description: 'Gravações de eventos e palestras realizados pela LEIbmec com profissionais do mercado.',
  },
  {
    icon: <IconWrench size={22} />,
    title: 'Projetos em andamento',
    description: 'Acompanhe o que cada área está desenvolvendo e entenda como a liga funciona por dentro.',
  },
  {
    icon: <IconTrendUp size={22} />,
    title: 'Aprenda com especialistas',
    description: 'Profissionais do mercado que ensinam dentro da plataforma. Conteúdo que a grade não tem.',
  },
]


export default function EmpreendaMaisPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 md:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-navy-light/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">
                  Plataforma exclusiva para membros
                </span>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5">
                  <span className="text-gold">Empreenda+</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-gray-200 text-xl leading-relaxed font-sans-custom mb-4">
                  O sistema de aprendizado da LEIbmec, criado pelos próprios membros da área de Tecnologia.
                </p>
              </FadeIn>
              <FadeIn delay={0.17}>
                <p className="text-gray-400 text-base leading-relaxed font-sans-custom mb-8">
                  Aqui você estuda cada área da liga, assiste aulas com especialistas do mercado e acompanha o que está sendo construído dentro da LEIbmec.
                </p>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="flex items-center gap-3 text-sm text-gray-400 font-sans-custom">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Desenvolvido pela área de Tecnologia
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Exclusivo para membros ativos
                  </span>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionTitle
            chip="O que você encontra lá"
            title="Conteúdo feito por quem está dentro"
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08} className="h-full">
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 text-gold">
                    {f.icon}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{f.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who can access */}
      <section className="py-16 md:py-24 bg-navy-mid">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="relative bg-navy border border-gold/20 rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col items-center text-center">
              <FadeIn>
                <span className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/25 text-gold text-xs font-medium font-sans-custom uppercase tracking-wider mb-5">
                  Acesso exclusivo
                </span>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-5">
                  Quem pode acessar o Empreenda+?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-300 text-lg leading-relaxed font-sans-custom mb-8 max-w-xl">
                  O Empreenda+ é uma plataforma exclusiva para{' '}
                  <strong className="text-white">membros ativos da LEIbmec</strong>. Quer ter acesso? Entre para a liga.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <Link
                  to="/membros"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 min-w-[120px]"
                >
                  Quero ser membro
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer credit */}
      <div className="bg-navy-mid border-t border-white/10 py-4 text-center">
        <p className="text-gray-600 text-xs font-sans-custom">
          Desenvolvido pela área de Tecnologia e Desenvolvimento da LEIbmec
        </p>
      </div>

      <Footer />
    </motion.div>
  )
}
