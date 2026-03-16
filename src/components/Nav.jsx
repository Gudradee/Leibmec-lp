import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Manifesto', href: '/#manifesto' },
  { label: 'Pilares',   href: '/#pilares' },
  { label: 'Eventos',   href: '/#eventos' },
  { label: 'Seleção',   href: '/processo-seletivo' },
  { label: 'Parceria',  href: '/#parcerias' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: 'rgba(15,14,54,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
      }}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" aria-label="LEIbmec — Página inicial" className="flex flex-col leading-none no-underline">
          <div style={{ lineHeight: 1 }}>
            <em style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', color: '#fec539', fontSize: '1.7rem' }}>LE</em>
            <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#fff', fontSize: '1.3rem', fontWeight: 600 }}>Ibmec</span>
          </div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(221,223,231,0.55)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
            Liga de Empreendedorismo
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="no-underline transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 500, color: 'rgba(221,223,231,0.75)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,223,231,0.75)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://forms.gle/anKhw9pBqYVkjnqG6"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex btn btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          aria-label="Inscreva-se na LEIbmec"
        >
          Inscreva-se <i className="fi fi-rr-arrow-right" style={{ fontSize: '0.75rem' }}></i>
        </a>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-t"
            style={{ background: 'rgba(15,14,54,0.98)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <ul className="list-none m-0 p-4 flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 no-underline"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(221,223,231,0.8)', fontSize: '1rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="https://forms.gle/anKhw9pBqYVkjnqG6" target="_blank" rel="noopener" className="btn btn-primary">
                  Inscreva-se <i className="fi fi-rr-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
