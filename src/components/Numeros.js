export function renderNumeros() {
  const nums = [
    { target: 2500, display: '2.5k+', suffix: '+', label: 'pessoas alcançadas no ecossistema' },
    { target: 12,   display: '12+',   suffix: '+', label: 'eventos realizados em 2024–25' },
    { target: 50,   display: '50+',   suffix: '+', label: 'conteúdos produzidos sobre empreendedorismo' },
    { target: 100,  display: '100%',  suffix: '%', label: 'foco em formar os fundadores de amanhã' }
  ]
  return `
    <section class="numeros section-dark" id="numeros">
      <div class="container">
        <div class="numeros-grid">
          ${nums.map((n, i) => `
            <div class="numero-item r" style="--delay: ${i * 0.1}s">
              <span class="numero-value counter" data-target="${n.target}" data-suffix="${n.suffix}">${n.display}</span>
              <span class="numero-label">${n.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}
