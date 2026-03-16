import { motion } from 'framer-motion'

const PILARES = [
  { num: '01 / 06', name: 'Gestão Interna',         icon: 'fi-rr-settings',      desc: 'O núcleo que mantém a liga funcionando. Responsável por processos, pessoas, cultura organizacional e a evolução contínua da LEIbmec.' },
  { num: '02 / 06', name: 'Marketing',               icon: 'fi-rr-megaphone',     desc: 'Comunicação, identidade visual e presença digital da liga. Transforma o que acontece dentro da LEI em conteúdo que inspira fora dela.' },
  { num: '03 / 06', name: 'Inteligência de Mercado', icon: 'fi-rr-chart-line-up', desc: 'Análise de tendências, mapeamento de ecossistemas e geração de insights que embasam decisões estratégicas da liga e dos membros.' },
  { num: '04 / 06', name: 'Projetos',                icon: 'fi-rr-rocket',        desc: 'Concepção e execução de iniciativas reais — de eventos a programas de capacitação. O lugar onde ideias viram entregas concretas.' },
  { num: '05 / 06', name: 'Relações Institucionais', icon: 'fi-rr-handshake',     desc: 'Pontes com empresas, investidores, outras ligas e a própria instituição. Quem amplia o alcance e abre portas para o ecossistema.' },
  { num: '06 / 06', name: 'Tecnologia & Inovação',   icon: 'fi-rr-microchip',     desc: 'Explora o que há de mais novo em tech, IA e modelos de negócio. Conteúdo, projetos e visão de futuro para quem quer construir o próximo grande produto.' },
]

export default function Pilares() {
  return (
    <section id="pilares" className="py-24 lg:py-32" style={{ background: '#f4f5f9' }}>
      <div className="container">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="chip mb-3" style={{ background: 'rgba(15,14,54,0.07)', color: '#0f0e36', borderColor: 'rgba(15,14,54,0.15)' }}>O que fazemos</span>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f0e36', fontWeight: 700, margin: '12px 0 0' }}>
            Nossos pilares de atuação
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILARES.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(15,14,54,0.18)' }}
              className="rounded-2xl p-7 flex flex-col gap-4 cursor-default"
              style={{ background: '#fff', border: '1px solid rgba(15,14,54,0.08)', boxShadow: '0 2px 12px rgba(15,14,54,0.06)', transition: 'box-shadow 0.2s' }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(15,14,54,0.4)', textTransform: 'uppercase' }}>{p.num}</span>
                <div className="icon-box" style={{ background: 'rgba(15,14,54,0.05)', borderColor: 'rgba(15,14,54,0.1)', color: '#0f0e36' }}>
                  <i className={`fi ${p.icon}`}></i>
                </div>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.2rem', color: '#0f0e36', fontWeight: 700, margin: 0 }}>{p.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(15,14,54,0.65)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
