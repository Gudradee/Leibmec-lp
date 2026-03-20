import { renderHome }             from './pages/Home.js'
import { renderProcessoSeletivo } from './pages/ProcessoSeletivo.js'
import { renderInstagram }        from './pages/Instagram.js'
import { initAllAnimations }      from './animations/index.js'
import { getLang }                from './lang.js'

export function router(resetScroll = false) {
  const app  = document.getElementById('app')
  const path = window.location.pathname
  const lang = getLang()

  if (path === '/processo-seletivo') {
    app.innerHTML = renderProcessoSeletivo(lang)
  } else if (path === '/instagram') {
    renderInstagram()
  } else {
    app.innerHTML = renderHome(lang)
  }

  // Scroll to top immediately after innerHTML (before browser can paint wrong position)
  if (resetScroll) window.scrollTo({ top: 0, behavior: 'instant' })

  setTimeout(() => initAllAnimations(), 50)
}

export function navigate(path) {
  window.history.pushState({}, '', path)
  router(true)
}
