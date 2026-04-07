import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

// SVG distortion filters for the liquid glass effect
function GlassFilter() {
  return (
    <svg style={{ display: 'none' }} aria-hidden="true">
      <defs>
        {/* Filter for the full navbar bar */}
        <filter
          id="navbar-glass-distortion"
          x="0%" y="0%" width="100%" height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.02"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0" k2="1" k3="1" k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="60"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Filter for the active nav pill — gentler distortion */}
        <filter
          id="nav-pill-glass"
          x="-30%" y="-80%" width="160%" height="260%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.12"
            numOctaves="1"
            seed="9"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="8" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="2" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="4"
            specularConstant="1"
            specularExponent="80"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-50" y="-100" z="200" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0" k2="1" k3="1" k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()
  const { t, lang, toggleLang } = useLanguage()

  const navLinks = [
    { label: t.nav.inicio, href: '/' },
    { label: t.nav.membros, href: '/membros' },
    { label: t.nav.empresas, href: '/empresas' },
    { label: t.nav.palestrar, href: '/palestrar' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <GlassFilter />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.35), 0 1px 0 rgba(254,197,57,0.12)'
            : 'none',
          transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.5)',
        }}
      >
        {/* Glass background layers — rendered below content, clipped to bar height */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ pointerEvents: 'none' }}
        >
          {/* Layer 1: blurred backdrop with liquid distortion */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'blur(0px)',
              WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'blur(0px)',
              filter: scrolled ? 'url(#navbar-glass-distortion)' : 'none',
              isolation: 'isolate',
              transition: 'backdrop-filter 0.5s ease, filter 0.5s ease',
            }}
          />

          {/* Layer 2: dark navy tint */}
          <div
            className="absolute inset-0"
            style={{
              background: scrolled
                ? 'rgba(15, 14, 54, 0.72)'
                : 'transparent',
              transition: 'background 0.5s ease',
            }}
          />

          {/* Layer 3: inner border highlights — gold top edge, subtle white bottom */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: scrolled
                ? 'inset 0 1px 0 rgba(254,197,57,0.2), inset 0 -1px 0 rgba(255,255,255,0.06), inset 1px 0 0 rgba(255,255,255,0.04), inset -1px 0 0 rgba(255,255,255,0.04)'
                : 'none',
              transition: 'box-shadow 0.5s ease',
            }}
          />
        </div>

        {/* Nav content */}
        <div className="relative z-10 px-6 md:px-14 flex items-center justify-between">
          {/* Logo — far left */}
          <Link to="/" className="flex items-center shrink-0" aria-label="LEIbmec — página inicial">
            <Logo size={96} />
          </Link>

          {/* Desktop nav — absolutely centered */}
          <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              const isHovered = hoveredLink === link.href
              const showPill = isActive || isHovered
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative text-sm font-medium font-sans-custom transition-colors duration-200 px-4 py-2 rounded-xl ${
                    isActive ? 'text-gold' : isHovered ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {/* Liquid glass pill — shown on hover or active */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    style={{
                      opacity: showPill ? 1 : 0,
                      transform: showPill ? 'scale(1)' : 'scale(0.75)',
                      transition: 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.8)',
                    }}
                  >
                    {/* Distortion + blur layer */}
                    <span
                      className="absolute inset-0"
                      style={{
                        backdropFilter: 'blur(10px) saturate(1.6)',
                        WebkitBackdropFilter: 'blur(10px) saturate(1.6)',
                        filter: 'url(#nav-pill-glass)',
                        isolation: 'isolate',
                      }}
                    />
                    {/* Gold-tinted fill — stronger when active */}
                    <span
                      className="absolute inset-0"
                      style={{
                        background: isActive
                          ? 'rgba(254, 197, 57, 0.12)'
                          : 'rgba(255, 255, 255, 0.06)',
                        transition: 'background 0.2s ease',
                      }}
                    />
                    {/* Inner border highlights */}
                    <span
                      className="absolute inset-0 rounded-xl"
                      style={{
                        boxShadow: isActive
                          ? 'inset 0 1px 0 rgba(254,197,57,0.35), inset 0 -1px 0 rgba(255,255,255,0.08), inset 1px 0 0 rgba(255,255,255,0.06), inset -1px 0 0 rgba(255,255,255,0.06)'
                          : 'inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.06), inset 1px 0 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.05)',
                        border: isActive
                          ? '1px solid rgba(254,197,57,0.2)'
                          : '1px solid rgba(255,255,255,0.1)',
                        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                      }}
                    />
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Actions — far right */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="https://www.instagram.com/leibmec/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram LEIbmec"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/leibmec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn LEIbmec"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <Link
              to="/membros"
              className="px-5 py-2.5 bg-gold text-navy text-sm font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200"
            >
              {t.nav.cta}
            </Link>

            <button
              onClick={toggleLang}
              className="px-4 py-2.5 rounded-lg border border-white/20 text-gray-300 text-sm font-semibold font-sans-custom hover:border-gold/50 hover:text-gold transition-all duration-200"
              aria-label="Toggle language"
            >
              {lang === 'pt' ? '🇬🇧 EN' : '🇧🇷 PT'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-lg border border-white/20 text-gray-300 text-xs font-semibold font-sans-custom hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              className="text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu — with glass treatment */}
        {menuOpen && (
          <div
            className="md:hidden relative px-6 py-6 flex flex-col gap-5"
            style={{
              backdropFilter: 'blur(18px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
              background: 'rgba(15, 14, 54, 0.82)',
              boxShadow: 'inset 0 1px 0 rgba(254,197,57,0.1), 0 8px 24px rgba(0,0,0,0.3)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium font-sans-custom transition-colors duration-200 ${
                  location.pathname === link.href ? 'text-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/membros"
              className="mt-2 px-6 py-3 bg-gold text-navy text-sm font-semibold font-sans-custom rounded-lg text-center hover:bg-gold-muted transition-colors duration-200"
            >
              {t.nav.cta}
            </Link>
          </div>
        )}
      </header>
    </>
  )
}
