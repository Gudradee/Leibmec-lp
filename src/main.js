import { router, navigate }   from './router.js'
import { initAllAnimations }   from './animations/index.js'
import { getLang, setLang }    from './lang.js'
import { renderLangPopup }     from './components/LangPopup.js'

// ── SPA navigation (exposed for inline onclick) ───────────────
window.navigateTo = navigate

// ── Language switch ───────────────────────────────────────────
window.switchLang = function () {
  const btn      = document.getElementById('lang-toggle-btn')
  const current  = getLang()
  const next     = current === 'pt' ? 'en' : 'pt'
  const scrollY  = window.scrollY

  const doSwitch = () => {
    setLang(next)

    // Disable reveal transitions so elements don't re-animate
    document.documentElement.classList.add('lang-switching')

    router()

    // Restore scroll position
    window.scrollTo(0, scrollY)

    // Instantly show all reveal elements (already visible content)
    document.querySelectorAll('.r, .hw').forEach(el => el.classList.add('on'))

    // Re-enable transitions next frame
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('lang-switching')
    })
  }

  if (btn) {
    btn.classList.add('lang-flipping')
    setTimeout(doSwitch, 200)
  } else {
    doSwitch()
  }
}

// ── Language popup choice ─────────────────────────────────────
window.chooseLang = function (lang) {
  setLang(lang)

  const overlay = document.getElementById('lang-popup-overlay')
  if (overlay) {
    overlay.style.transition = 'opacity 0.3s ease'
    overlay.style.opacity = '0'
    setTimeout(() => overlay.remove(), 300)
  }

  // Re-render with chosen language
  const scrollY = window.scrollY
  document.documentElement.classList.add('lang-switching')
  router()
  window.scrollTo(0, scrollY)
  document.querySelectorAll('.r, .hw').forEach(el => el.classList.add('on'))
  requestAnimationFrame(() => document.documentElement.classList.remove('lang-switching'))
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  router()

  // Show popup once per browser session (sessionStorage clears when tab/window closes)
  if (!sessionStorage.getItem('leibmec-popup')) {
    sessionStorage.setItem('leibmec-popup', '1')
    setTimeout(() => {
      document.body.insertAdjacentHTML('beforeend', renderLangPopup())
    }, 600)
  }
})

window.addEventListener('popstate', () => {
  router()
})
