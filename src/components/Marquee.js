export function renderMarquee() {
  const items = [
    'Empreendedorismo',
    'Z-Summit 2025',
    'Learning Week',
    'Visita XP Inc.',
    'Ibmec São Paulo',
    'Networking',
    'Nova Gestão 2025.2',
    'Palestras',
    'Dinâmicas'
  ]
  const itemsHTML = items.map(i => `<span class="marquee-item">${i}</span><span class="marquee-sep" aria-hidden="true">·</span>`).join('')
  return `
    <div class="marquee-wrapper" aria-hidden="true">
      <div class="marquee-track" id="marquee-track">
        <div class="marquee-content">${itemsHTML}</div>
      </div>
    </div>
  `
}
