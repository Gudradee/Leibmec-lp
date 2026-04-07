import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeIn } from './FadeIn.jsx'
import { SectionTitle } from './SectionTitle.jsx'
import { IconMegaphone, IconHandshake, IconUsers, IconWrench, IconBarChart, IconLaptop } from './icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { GlowyWaves } from '../animations/glowy-waves.jsx'

const areaIcons = [
  <IconMegaphone size={18} />,
  <IconHandshake size={18} />,
  <IconUsers size={18} />,
  <IconWrench size={18} />,
  <IconBarChart size={18} />,
  <IconLaptop size={18} />,
]

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

function TabMissao({ data }) {
  return (
    <motion.div key="missao" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="max-w-3xl mx-auto text-center py-8">
        <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-6">
          {data.quoteStart} <span className="text-gold italic">{data.highlight}</span>{data.quoteEnd}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed font-sans-custom">{data.description}</p>
      </div>
    </motion.div>
  )
}

function AreaCard({ area, icon, index }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] } } }}
      className="group h-48 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Inner — rotates on hover */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── Front face: icon + name ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-4 p-6 border border-white/6"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#080720',
          }}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-gold shrink-0"
            style={{ background: 'rgba(254,197,57,0.12)' }}>
            {/* Clone icon at larger size */}
            <span className="scale-125">{icon}</span>
          </div>
          <h3 className="font-display text-white text-lg text-center leading-tight">{area.name}</h3>
        </div>

        {/* ── Back face: badge + description ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 border border-gold/20"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#0d0b2a',
          }}
        >
          <span className="px-3 py-0.5 rounded-full text-gold text-[10px] font-semibold font-sans-custom uppercase tracking-widest border border-gold/25"
            style={{ background: 'rgba(254,197,57,0.08)' }}>
            {area.badge}
          </span>
          <p className="text-gray-300 text-sm font-sans-custom leading-relaxed text-center">
            {area.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function TabAreas({ areas }) {
  return (
    <motion.div key="areas" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
        {areas.map((area, i) => (
          <AreaCard key={area.name} area={area} icon={areaIcons[i]} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

function TabNumeros({ numeros }) {
  return (
    <motion.div key="numeros" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {numeros.map((m, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <div className="font-display text-4xl md:text-5xl text-gold mb-2">{m.value}</div>
            <div className="text-gray-400 text-sm font-sans-custom">{m.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function TabComo({ como }) {
  return (
    <motion.div key="como" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4">
        {como.map((step) => (
          <div key={step.number} className="flex gap-5 p-5 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold font-sans-custom text-sm shrink-0">{step.number}</div>
            <div>
              <h3 className="font-display text-white text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm font-sans-custom leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function InstitutionalTabs() {
  const [activeTab, setActiveTab] = useState('missao')
  const { t } = useLanguage()
  const tb = t.tabs

  const tabIds = ['missao', 'areas', 'numeros', 'como']
  const tabs = tabIds.map((id, i) => ({ id, label: tb.tabLabels[i] }))

  const tabContent = {
    missao: <TabMissao data={tb.missao} />,
    areas: <TabAreas areas={tb.areas} />,
    numeros: <TabNumeros numeros={tb.numeros} />,
    como: <TabComo como={tb.como} />,
  }

  return (
    <section className="relative py-16 md:py-24 bg-navy-mid overflow-hidden">
      {/* Glowy waves — gold sine waves with mouse influence */}
      <GlowyWaves />

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-navy-mid/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        <SectionTitle chip={tb.chip} title={tb.title} dark center />
        <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
          <div className="flex gap-1 min-w-max md:min-w-0 md:justify-center border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-sm font-medium font-sans-custom whitespace-nowrap transition-colors duration-200 shrink-0 ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-14" />
        <AnimatePresence mode="wait">{tabContent[activeTab]}</AnimatePresence>
      </div>
    </section>
  )
}
