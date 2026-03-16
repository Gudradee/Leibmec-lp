import { motion } from 'framer-motion'

const MAIN_EVENTS = [
  { tag: 'Evento Anual', icon: 'fi-rr-star',            name: 'Z-Summit',          desc: 'O evento âncora da LEIbmec. Um dia completo de imersão com palestras, painéis, networking e conexões que vão além da universidade.' },
  { tag: 'Conhecimento', icon: 'fi-rr-book-open-cover', name: 'Learning Week',     desc: 'Uma semana de aprendizado intensivo — finanças, marketing, inovação e venture capital para quem quer construir com fundamento.' },
  { tag: 'Visita',       icon: 'fi-rr-building',        name: 'XP Inc. — Por dentro', desc: 'Membros da LEI visitaram a XP Inc. para entender como se constrói uma das maiores fintechs do Brasil.' },
]

const ACTIVITIES = [
  { icon: 'fi-rr-microphone',      tag: 'Atividade', name: 'Palestras & Talks',   desc: 'Empreendedores, investidores e executivos compartilham o que os livros não ensinam — de fusões a startups bilionárias.' },
  { icon: 'fi-rr-people-roof',     tag: 'Dinâmica',  name: 'Dinâmicas em Grupo',  desc: 'Atividades hands-on que desenvolvem pensamento estratégico, liderança e capacidade de execução sob pressão real.' },
  { icon: 'fi-rr-coins',           tag: 'Projeto',   name: 'Semana do Financeiro', desc: 'Finanças pessoais, estrutura de negócios e primeiros investimentos — para quem quer empreender com responsabilidade financeira.' },
  { icon: 'fi-rr-diagram-project', tag: 'Projeto',   name: 'Projetos Internos',   desc: 'Iniciativas conduzidas pelos próprios membros — da concepção à entrega. O laboratório prático da liga.' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Eventos() {
  return (
    <section id="eventos" className="py-24 lg:py-32" style={{ background: '#fff' }}>
      <div className="container">
        <motion.div {...fade()} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="chip mb-3" style={{ background: 'rgba(15,14,54,0.07)', color: '#0f0e36', borderColor: 'rgba(15,14,54,0.15)' }}>Experiências</span>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f0e36', fontWeight: 700, margin: '12px 0 0' }}>Eventos que marcam.</h2>
          </div>
          <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener" aria-label="Ver eventos no Instagram"
            className="flex items-center gap-2 no-underline shrink-0 self-end sm:self-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 600, color: '#0f0e36', opacity: 0.6, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}>
            Ver no Instagram <i className="fi fi-rr-external-link" style={{ fontSize: '0.8rem' }}></i>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {MAIN_EVENTS.map((e, i) => (
            <motion.div key={e.name} {...fade(i * 0.1)}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(15,14,54,0.15)' }}
              className="rounded-2xl p-7 flex flex-col gap-3"
              style={{ background: '#f4f5f9', border: '1px solid rgba(15,14,54,0.08)', boxShadow: '0 2px 12px rgba(15,14,54,0.04)', transition: 'box-shadow 0.2s' }}>
              <div className="icon-box icon-box--dark" style={{ background: 'rgba(15,14,54,0.07)', borderColor: 'rgba(15,14,54,0.12)', color: '#0f0e36' }}>
                <i className={`fi ${e.icon}`}></i>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(15,14,54,0.4)' }}>{e.tag}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.25rem', color: '#0f0e36', fontWeight: 700, margin: 0 }}>{e.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(15,14,54,0.65)', lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ACTIVITIES.map((a, i) => (
            <motion.div key={a.name} {...fade(0.2 + i * 0.08)} className="flex gap-4 rounded-xl p-5"
              style={{ background: '#f4f5f9', border: '1px solid rgba(15,14,54,0.07)' }}>
              <div className="icon-box shrink-0" style={{ background: 'rgba(15,14,54,0.07)', borderColor: 'rgba(15,14,54,0.12)', color: '#0f0e36' }}>
                <i className={`fi ${a.icon}`}></i>
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(15,14,54,0.4)' }}>{a.tag}</span>
                <h4 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1rem', color: '#0f0e36', fontWeight: 700, margin: 0 }}>{a.name}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(15,14,54,0.6)', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
