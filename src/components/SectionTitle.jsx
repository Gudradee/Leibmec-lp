import { FadeIn } from './FadeIn.jsx'

export function SectionTitle({ chip, title, subtitle, dark = false, center = false }) {
  const chipClass = dark
    ? 'bg-white/10 text-gray-300 border border-white/20'
    : 'bg-navy/10 text-navy border border-navy/20'
  const titleClass = dark ? 'text-white' : 'text-navy'
  const subtitleClass = dark ? 'text-gray-300' : 'text-gray-600'
  const alignClass = center ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-8 md:mb-12 ${alignClass}`}>
      {chip && (
        <FadeIn>
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium font-sans-custom ${chipClass}`}>
            {chip}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className={`font-display text-4xl md:text-5xl leading-tight ${titleClass}`}>
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.1}>
          <p className={`text-lg max-w-2xl leading-relaxed font-sans-custom ${subtitleClass}`}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
