// ─── AuroraBackground ────────────────────────────────────────────────────────
// Pure CSS aurora waves adapted to the navy/gold site theme.
// Renders as an `absolute inset-0` layer — place inside a
// `relative overflow-hidden` parent.
//
// Keyframes are defined in index.css (aurora1–aurora4).

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base: subtle navy-purple gradient tint */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(15,14,54,0.8) 0%, rgba(26,24,80,0.6) 50%, rgba(37,35,96,0.8) 100%)',
        }}
      />

      {/* Wave 1 — gold, top-center, slow drift */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 820px 520px at 50% 15%, rgba(254,197,57,0.18) 0%, transparent 55%)',
          animation: 'aurora1 9s ease-in-out infinite alternate',
        }}
      />

      {/* Wave 2 — amber/warm gold, right side */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          background:
            'radial-gradient(ellipse 600px 380px at 82% 35%, rgba(254,150,30,0.15) 0%, transparent 52%)',
          animation: 'aurora2 7s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Wave 3 — soft gold, left-center */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(ellipse 700px 450px at 18% 60%, rgba(254,197,57,0.12) 0%, transparent 50%)',
          animation: 'aurora3 11s ease-in-out infinite alternate',
        }}
      />

      {/* Wave 4 — navy-purple depth glow, bottom */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 900px 280px at 55% 88%, rgba(37,35,96,0.55) 0%, transparent 60%)',
          animation: 'aurora4 8s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Top + bottom vignette for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/40 via-transparent to-navy-mid/50" />
    </div>
  )
}
