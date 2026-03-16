import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', icon: 'fi-rr-pencil',       title: 'Inscrição',          desc: 'Preencha o formulário online com seus dados e motivações. Queremos entender quem você é e o que quer construir.', badge: 'Formulário online' },
  { n: '02', icon: 'fi-rr-document',     title: '1ª Fase',            desc: 'Prova escrita para avaliar raciocínio, conhecimento e capacidade analítica. Objetiva, sem decoreba.', badge: 'Prova escrita' },
  { n: '03', icon: 'fi-rr-user-add',     title: 'Dinâmica em Grupo',  desc: 'Atividade presencial em equipe. Avaliamos como você pensa, colabora e se posiciona sob pressão real.', badge: 'Presencial' },
  { n: '04', icon: 'fi-rr-comment-user', title: 'Entrevista Pessoal', desc: 'Conversa individual com a gestão para alinhar expectativas, valores e confirmar o encaixe com a liga.', badge: 'Etapa final' },
]

export default function ProcessoSteps() {
  return (
    <section id="processo" className="py-24 lg:py-32" style={{ background: '#f4f5f9' }}>
      <div className="container">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="chip mb-3" style={{ background: 'rgba(15,14,54,0.07)', color: '#0f0e36', borderColor: 'rgba(15,14,54,0.15)' }}>Processo seletivo</span>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f0e36', fontWeight: 700, margin: '12px 0 0' }}>Como entrar na liga</h2>
        </motion.div>

        <motion.div className="flex items-center mb-10 overflow-x-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="flex items-center justify-center rounded-full font-bold"
                  style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #fec539, #f5b800)', color: '#0f0e36', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 4px 16px rgba(254,197,57,0.3)' }}>
                  {s.n}
                </div>
              </div>
              {i < STEPS.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {STEPS.map((s, i) => (
            <motion.div key={s.n} className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: '#fff', border: '1px solid rgba(15,14,54,0.08)', boxShadow: '0 2px 12px rgba(15,14,54,0.05)', minHeight: 220 }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(15,14,54,0.12)' }}>
              <div className="icon-box" style={{ background: 'rgba(15,14,54,0.05)', borderColor: 'rgba(15,14,54,0.1)', color: '#0f0e36' }}>
                <i className={`fi ${s.icon}`}></i>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(15,14,54,0.4)', textTransform: 'uppercase' }}>{s.n}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.1rem', color: '#0f0e36', fontWeight: 700, margin: 0 }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(15,14,54,0.6)', lineHeight: 1.65, margin: 0, flex: 1 }}>{s.desc}</p>
              <span className="self-start rounded-full px-3 py-1"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(254,197,57,0.12)', color: '#0f0e36', border: '1px solid rgba(254,197,57,0.25)' }}>
                {s.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div className="flex justify-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
          <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" className="btn btn-primary btn-large" aria-label="Quero fazer parte da LEIbmec">
            Quero fazer parte <i className="fi fi-rr-arrow-right" style={{ fontSize: '0.85rem' }}></i>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
