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

export default function Parceiros() {
  const { t } = useLanguage()
  const p = t.parceiros
  const f = p.form

  const [form, setForm] = useState({ nome: '', email: '', empresa: '', cargo: '', interesses: [], mensagem: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleCheckbox(id) {
    setForm((prev) => ({
      ...prev,
      interesses: prev.interesses.includes(id) ? prev.interesses.filter((i) => i !== id) : [...prev.interesses, id],
    }))
    if (errors.interesses) setErrors((prev) => ({ ...prev, interesses: '' }))
  }

  function validate() {
    const e = {}
    if (!form.nome.trim()) e.nome = f.errors.nome
    if (!form.email.trim()) e.email = f.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = f.errors.email
    if (!form.empresa.trim()) e.empresa = f.errors.empresa
    if (!form.cargo.trim()) e.cargo = f.errors.cargo
    if (form.interesses.length === 0) e.interesses = f.errors.interesses
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
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-navy-light/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center w-full">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-sm font-medium font-sans-custom border border-gold/25 mb-6">{p.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-5">
              {p.hero.titleStart} <span className="text-gold italic">{p.hero.titleHighlight}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-gray-300 text-lg leading-relaxed font-sans-custom">{p.hero.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* Value bullets */}
      <section className="py-12 bg-navy-mid border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.bullets.map((b, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-4 items-start p-5 rounded-xl bg-white/5 border border-white/10">
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
                  <a href="mailto:ri@leibmec.com.br" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-gray-300 text-sm font-sans-custom hover:border-gold/40 hover:text-gold transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} points="22,6 12,13 2,6" /></svg>
                    ri@leibmec.com.br
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">{f.empresa}</label>
                      <input type="text" name="empresa" value={form.empresa} onChange={handleChange} placeholder={f.empresaPlaceholder} className={inputClass} />
                      {errors.empresa && <p className={errorClass}>{errors.empresa}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">{f.cargo}</label>
                      <input type="text" name="cargo" value={form.cargo} onChange={handleChange} placeholder={f.cargoPlaceholder} className={inputClass} />
                      {errors.cargo && <p className={errorClass}>{errors.cargo}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-3">{f.interesses} *</label>
                    <div className="flex flex-col gap-3">
                      {f.options.map((opt) => (
                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                          <div onClick={() => handleCheckbox(opt.id)} className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${form.interesses.includes(opt.id) ? 'bg-gold border-gold' : 'bg-transparent border-white/25 group-hover:border-gold/50'}`}>
                            {form.interesses.includes(opt.id) && <svg className="w-3 h-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          <span onClick={() => handleCheckbox(opt.id)} className="text-gray-300 text-sm font-sans-custom select-none">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.interesses && <p className={errorClass}>{errors.interesses}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium font-sans-custom uppercase tracking-wide mb-2">{f.mensagem} <span className="normal-case text-gray-500">(opcional)</span></label>
                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder={f.mensagemPlaceholder} rows={4} className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 text-base mt-2">
                    {f.submit}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
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
