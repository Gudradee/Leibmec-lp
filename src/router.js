import { renderHome } from './pages/Home.js'
import { renderProcessoSeletivo } from './pages/ProcessoSeletivo.js'
import { renderInstagram } from './pages/Instagram.js'
import { initAllAnimations } from './animations/index.js'

export function router() {
  const app = document.getElementById('app')
  const path = window.location.pathname

  if (path === '/processo-seletivo') {
    app.innerHTML = renderProcessoSeletivo()
  } else if (path === '/instagram') {
    renderInstagram()
  } else {
    app.innerHTML = renderHome()
  }

  // Re-init animations after route change
  setTimeout(() => initAllAnimations(), 50)
}

export function navigate(path) {
  window.history.pushState({}, '', path)
  router()
}
