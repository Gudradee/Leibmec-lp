import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="parcerias" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0e36 0%, #1a1850 50%, #0f0e36 100%)' }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(254,197,57,0.08) 0%, transparent 70%)' }} />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="chip chip-dark">Parcerias estratégicas</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
            Vamos construir algo maior juntos.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: 'rgba(221,223,231,0.7)', lineHeight: 1.7, margin: 0 }}>
            A LEIbmec está pronta para dar o próximo passo. Buscamos parceiros que entendam que investir nos fundadores de amanhã é o retorno mais estratégico que existe.
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener" className="btn btn-primary btn-large">
              Quero ser parceiro <i className="fi fi-rr-arrow-right" style={{ fontSize: '0.85rem' }}></i>
            </a>
            <a href="#manifesto" className="btn btn-outline btn-large">Conhecer a comunidade</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
