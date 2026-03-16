import { renderNav } from '../components/Nav.js'
import { renderHero } from '../components/Hero.js'
import { renderMarquee } from '../components/Marquee.js'
import { renderManifesto } from '../components/Manifesto.js'
import { renderPilares } from '../components/Pilares.js'
import { renderNumeros } from '../components/Numeros.js'
import { renderEventos } from '../components/Eventos.js'
import { renderProcessoSteps } from '../components/ProcessoSteps.js'
import { renderCTA } from '../components/CTA.js'
import { renderFooter } from '../components/Footer.js'

export function renderHome() {
  return `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderMarquee()}
      ${renderManifesto()}
      ${renderPilares()}
      ${renderNumeros()}
      ${renderEventos()}
      ${renderProcessoSteps()}
      ${renderCTA()}
    </main>
    ${renderFooter()}
  `
}
