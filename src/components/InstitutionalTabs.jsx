import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeIn } from './FadeIn.jsx'
import { SectionTitle } from './SectionTitle.jsx'
import { IconMegaphone, IconHandshake, IconUsers, IconWrench, IconBarChart, IconLaptop } from './icons/index.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

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

function TabAreas({ areas }) {
  return (
    <motion.div key="areas" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {areas.map((area, i) => (
          <div key={area.name} className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">{areaIcons[i]}</div>
              <span className="px-2.5 py-0.5 rounded-full bg-navy text-gold text-[10px] font-medium font-sans-custom uppercase tracking-wide border border-gold/20">{area.badge}</span>
            </div>
            <div>
              <h3 className="font-display text-white text-base mb-1">{area.name}</h3>
              <p className="text-gray-400 text-sm font-sans-custom leading-relaxed">{area.description}</p>
            </div>
          </div>
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
    <section className="py-16 md:py-24 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
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
