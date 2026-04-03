import { FadeIn } from './FadeIn.jsx'

export function StepItem({ number, title, description, delay = 0, last = false }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold font-sans-custom text-lg shrink-0">
            {number}
          </div>
          {!last && <div className="w-0.5 flex-1 mt-3 bg-white/10 min-h-[40px]" />}
        </div>
        <div className="pb-10">
          <h3 className="font-display text-xl text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed font-sans-custom">{description}</p>
        </div>
      </div>
    </FadeIn>
  )
}
