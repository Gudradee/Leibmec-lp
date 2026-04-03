import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/FooterNew.jsx'
import { FadeIn } from '../components/FadeIn.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

export default function ContatoPalestrante() {
  const { t } = useLanguage()
  const cp = t.contatoPalestrante
  const f = cp.form

  const [form, setForm] = useState({ nome: '', email: '', linkedin: '', tema: [], formato: [], mensagem: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleCheckbox(field, id) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(id) ? prev[field].filter((i) => i !== id) : [...prev[field], id],
    }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validate() {
    const e = {}
    if (!form.nome.trim()) e.nome = f.errors.nome
    if (!form.email.trim()) e.email = f.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = f.errors.email
    if (form.tema.length === 0) e.tema = f.errors.tema
    if (form.formato.length === 0) e.formato = f.errors.formato
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-gray-500 font-sans-custom text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-200'
  const errorClass = 'text-red-400 text-xs font-sans-custom mt-1'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-16 md:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-navy-light/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center w-full">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{cp.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-5">
              {cp.hero.title} <span className="text-gold italic">{cp.hero.titleHighlight}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-gray-300 text-lg leading-relaxed font-sans-custom">{cp.hero.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* Value bullets */}
      <section className="py-12 bg-navy-mid border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {cp.bullets.map((b, i) => (
              <FadeIn key={i} delay={i * 0.07} className="flex flex-col">
                <div className="flex gap-4 items-start flex-1 p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <div>
                    <p className="text-white font-semibold font-sans-custom text-sm mb-1">{b.title}</p>
                    <p className="text-gray-400 text-sm font-sans-custom leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          {submitted ? (
            <FadeIn>
              <div className="text-center py-16 px-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="font-display text-3xl text-white mb-3">{f.success.title}</h2>
                <p className="text-gray-300 font-sans-custom leading-relaxed mb-8">
                  {f.success.message} <strong className="text-white">{f.success.days}</strong>{f.success.messageEnd}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="https://www.instagram.com/leibmec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-gray-300 text-sm font-sans-custom hover:border-gold/40 hover:text-gold transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    @leibmec
                  </a>
                  <a href="https://www.linkedin.com/company/leibmec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-gray-300 text-sm font-sans-custom hover:border-gold/40 hover:text-gold transition-all duration-200">
                    LinkedIn da LEIbmec
                  </a>
                </div>
                <div className="mt-8">
                  <Link to="/" className="text-gray-500 text-sm font-sans-custom hover:text-gold transition-colors duration-200">{f.success.back}</Link>
                </div>
              </div>
            </FadeIn>
          ) : (
            <>
              <SectionTitle chip={f.chip} title={f.title} dark />
              <FadeIn delay={0.05}>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">{f.nome}</label>
                      <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder={f.nomePlaceholder} className={inputClass} />
                      {errors.nome && <p className={errorClass}>{errors.nome}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">{f.email}</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={f.emailPlaceholder} className={inputClass} />
                      {errors.email && <p className={errorClass}>{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">
                      {f.linkedin} <span className="normal-case text-gray-500">{f.linkedinLabel}</span>
                    </label>
                    <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder={f.linkedinPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-3">{f.tema}</label>
                    <div className="flex flex-wrap gap-2">
                      {f.temaOptions.map((opt) => (
                        <button key={opt.id} type="button" onClick={() => handleCheckbox('tema', opt.id)} className={`px-4 py-2 rounded-full text-sm font-sans-custom border transition-all duration-200 ${form.tema.includes(opt.id) ? 'bg-gold text-navy border-gold font-semibold' : 'bg-transparent text-gray-400 border-white/15 hover:border-gold/40 hover:text-gray-200'}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {errors.tema && <p className={errorClass}>{errors.tema}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-3">{f.formato}</label>
                    <div className="flex flex-wrap gap-2">
                      {f.formatoOptions.map((opt) => (
                        <button key={opt.id} type="button" onClick={() => handleCheckbox('formato', opt.id)} className={`px-4 py-2 rounded-full text-sm font-sans-custom border transition-all duration-200 ${form.formato.includes(opt.id) ? 'bg-gold text-navy border-gold font-semibold' : 'bg-transparent text-gray-400 border-white/15 hover:border-gold/40 hover:text-gray-200'}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {errors.formato && <p className={errorClass}>{errors.formato}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">
                      {f.mensagem} <span className="normal-case text-gray-500">{f.mensagemLabel}</span>
                    </label>
                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder={f.mensagemPlaceholder} rows={4} className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-base mt-2">
                    {f.submit}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <p className="text-gray-500 text-xs font-sans-custom text-center">{f.responseTime}</p>
                </form>
              </FadeIn>
            </>
          )}
        </div>
      </section>
      <Footer />
    </motion.div>
  )
}
