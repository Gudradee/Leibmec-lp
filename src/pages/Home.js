import { renderNav }           from '../components/Nav.js'
import { renderHero }          from '../components/Hero.js'
import { renderMarquee }       from '../components/Marquee.js'
import { renderManifesto }     from '../components/Manifesto.js'
import { renderPilares }       from '../components/Pilares.js'
import { renderNumeros }       from '../components/Numeros.js'
import { renderEventos }       from '../components/Eventos.js'
import { renderProcessoSteps } from '../components/ProcessoSteps.js'
import { renderCTA }           from '../components/CTA.js'
import { renderFooter }        from '../components/Footer.js'

export function renderHome(lang = 'pt') {
  return `
    ${renderNav(lang)}
    <main>
      ${renderHero(lang)}
      ${renderMarquee(lang)}
      ${renderManifesto(lang)}
      ${renderPilares(lang)}
      ${renderNumeros(lang)}
      ${renderEventos(lang)}
      ${renderProcessoSteps(lang)}
      ${renderCTA(lang)}
    </main>
    ${renderFooter(lang)}
  `
}
