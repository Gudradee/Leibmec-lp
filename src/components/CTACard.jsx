import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn.jsx'

export function CTACard({ icon, title, description, btnLabel, href, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/40 hover:bg-white/[0.08] transition-all duration-300 group hover:scale-[1.02] cursor-pointer">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors text-gold shrink-0">
            {icon}
          </div>
        )}
        <h3 className="font-display text-2xl text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-base leading-relaxed font-sans-custom flex-1 mb-6">
          {description}
        </p>
        <Link
          to={href}
          className="inline-flex items-center gap-2 min-w-[120px] text-gold font-medium font-sans-custom hover:gap-3 transition-all duration-200 text-sm"
        >
          {btnLabel}
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </FadeIn>
  )
}
