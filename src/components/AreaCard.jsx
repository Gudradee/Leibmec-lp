import { FadeIn } from './FadeIn.jsx'

export function AreaCard({ icon, name, description, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer hover:scale-[1.02]">
        <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors text-gold shrink-0">
          {icon}
        </div>
        <h3 className="font-display text-lg text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-sans-custom">{description}</p>
      </div>
    </FadeIn>
  )
}
