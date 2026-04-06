import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn.jsx'

export function AreaCard({ icon, name, description, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <motion.div
        className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer"
        whileHover={{ scale: 1.03, borderColor: 'rgba(254,197,57,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4 text-gold shrink-0"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(254,197,57,0.25)' }}
          transition={{ duration: 0.18 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-display text-lg text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{description}</p>
      </motion.div>
    </FadeIn>
  )
}
