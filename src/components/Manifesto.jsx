import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 lg:py-32" style={{ background: '#f4f5f9' }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-64 lg:shrink-0 lg:sticky lg:top-28 lg:self-start">
            <motion.div {...fade(0)} className="mb-4">
              <span className="chip" style={{ background: 'rgba(15,14,54,0.07)', color: '#0f0e36', borderColor: 'rgba(15,14,54,0.15)' }}>Manifesto</span>
            </motion.div>
            <motion.h2 {...fade(0.1)} style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f0e36', fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
              Por que existimos
            </motion.h2>
          </div>

          <motion.div className="hidden lg:block w-px self-stretch origin-top" style={{ background: 'rgba(15,14,54,0.12)' }}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} />

          <div className="flex-1 flex flex-col gap-5 max-w-2xl">
            {[
              'O Brasil precisa de mais fundadores, não de mais candidatos ao emprego dos outros. A universidade forma profissionais qualificados — mas raramente forma quem cria o próximo negócio.',
              'A LEIbmec existe para preencher esse gap.',
              'Criamos um espaço onde estudantes aprendem na prática: apresentam ideias, se expõem ao erro, constroem com outros e se conectam com quem já fez acontecer.',
            ].map((text, i) => (
              <motion.p key={i} {...fade(0.1 + i * 0.1)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#2c2b5a', lineHeight: 1.75, margin: 0 }}>
                {text}
              </motion.p>
            ))}
            <motion.blockquote {...fade(0.4)} style={{ margin: '8px 0', padding: '20px 24px', borderLeft: '3px solid #fec539', background: 'rgba(254,197,57,0.06)', borderRadius: '0 8px 8px 0' }}>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontSize: '1.25rem', color: '#0f0e36', margin: 0 }}>
                "Não ensinamos teoria. Provocamos ação."
              </p>
            </motion.blockquote>
            {[
              'Cada palestra, cada dinâmica, cada evento é uma aposta no potencial de quem ainda está dentro da faculdade, mas já pensa além dela.',
              'Esses são os fundadores de amanhã. E eles estão aqui.',
            ].map((text, i) => (
              <motion.p key={i} {...fade(0.5 + i * 0.1)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#2c2b5a', lineHeight: 1.75, margin: 0 }}>
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
