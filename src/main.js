import { router } from './router.js'
import { initAllAnimations } from './animations/index.js'

document.addEventListener('DOMContentLoaded', () => {
  router()
  initAllAnimations()
})

window.addEventListener('popstate', () => {
  router()
})
