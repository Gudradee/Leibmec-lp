const ITEMS = [
  'Empreendedorismo','Z-Summit 2025','Learning Week','Visita XP Inc.',
  'Ibmec São Paulo','Networking','Nova Gestão 2025.2','Palestras','Dinâmicas',
]

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS]
  return (
    <div
      className="marquee-wrapper overflow-hidden py-4 border-y"
      style={{ background: 'rgba(254,197,57,0.04)', borderColor: 'rgba(254,197,57,0.12)' }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(221,223,231,0.55)', padding: '0 20px', whiteSpace: 'nowrap' }}>
                {item}
              </span>
              <span style={{ color: 'rgba(254,197,57,0.4)', fontSize: '0.5rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
