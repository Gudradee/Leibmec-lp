import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { parceiros } from '../data/ecossistema.js'

// ⚠️  PÁGINA OCULTA — NÃO adicionar à navbar, footer ou qualquer link público.
// Para lançar: adicionar a rota /ecossistema nos links de navegação.

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

function PartnerCard({ parceiro }) {
  const isEmpty = !parceiro.nome

  if (isEmpty || !parceiro.ativo) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed border-white/15 opacity-40 min-h-[160px]">
        {!isEmpty && (
          <>
            <p className="text-white font-display text-lg">{parceiro.nome}</p>
          </>
        )}
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-500 text-xs font-sans-custom uppercase tracking-wide">
          Em breve
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300">
      {/* Logo placeholder */}
      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
        <img
          src={parceiro.logo}
          alt={`Logo ${parceiro.nome}`}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div
          className="hidden w-full h-full items-center justify-center"
          style={{ display: 'none' }}
        >
          <span className="font-display text-white text-lg font-bold">
            {parceiro.nome.charAt(0)}
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-display text-white text-xl mb-2">{parceiro.nome}</h3>
        <p className="text-gray-400 text-sm font-sans-custom leading-relaxed">{parceiro.descricao}</p>
      </div>
      {parceiro.link && (
        <a
          href={parceiro.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold text-sm font-medium font-sans-custom hover:gap-2.5 transition-all duration-200 mt-auto"
        >
          Conhecer
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </div>
  )
}

export default function Ecossistema() {
  // Inject noindex meta tag — this page must not be indexed by search engines
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    meta.id = 'ecossistema-noindex'
    document.head.appendChild(meta)
    document.title = 'Ecossistema — LEIbmec'
    return () => {
      const el = document.getElementById('ecossistema-noindex')
      if (el) el.remove()
    }
  }, [])

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center pt-28 pb-16 md:pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-navy-light/40 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center w-full">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">
                Rede de ligas e parceiros
              </span>
            </FadeIn>
            <FadeIn delay={0.07}>
              <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-5">
                Nosso <span className="text-gold italic">ecossistema</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-gray-300 text-lg leading-relaxed font-sans-custom max-w-2xl mx-auto">
                A LEIbmec faz parte de uma rede crescente de ligas e organizações que compartilham os mesmos valores: aprendizado prático, empreendedorismo e impacto real.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Partners grid */}
        <section className="py-16 md:py-24 bg-navy-mid">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionTitle
              chip="Parceiros e aliados"
              title="Organizações do ecossistema"
              dark
              center
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {parceiros.map((p, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <PartnerCard parceiro={p} />
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <p className="text-center text-gray-600 text-sm font-sans-custom mt-10">
                Quer fazer parte do ecossistema?{' '}
                <a
                  href="mailto:ri@leibmec.com.br"
                  className="text-gray-400 hover:text-gold transition-colors duration-200 underline underline-offset-2"
                >
                  Entre em contato
                </a>
              </p>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </motion.div>
  )
}
