export function initNav() {
  const nav = document.getElementById('main-nav')
  const hamburger = document.getElementById('nav-hamburger')
  const mobileMenu = document.getElementById('nav-mobile-menu')

  if (!nav) return

  // Shadow on scroll + hero-aware transparency
  const heroSection = document.getElementById('hero')

  function updateNavOnScroll() {
    const scrollY = window.scrollY
    const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0

    if (scrollY > 20) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }

    if (heroSection && scrollY < heroBottom - 80) {
      nav.classList.add('in-hero')
    } else {
      nav.classList.remove('in-hero')
    }
  }

  updateNavOnScroll()
  window.addEventListener('scroll', updateNavOnScroll, { passive: true })

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open')
      hamburger.classList.toggle('open', isOpen)
      hamburger.setAttribute('aria-expanded', isOpen)
    })

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        hamburger.classList.remove('open')
        hamburger.setAttribute('aria-expanded', 'false')
      })
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="/#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').replace('/#', '')
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}
