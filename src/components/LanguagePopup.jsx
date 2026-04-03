import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'

export function LanguagePopup() {
  const [visible, setVisible] = useState(false)
  const { setLanguage } = useLanguage()

  useEffect(() => {
    if (!localStorage.getItem('lei_lang_popup')) {
      const t = setTimeout(() => setVisible(true), 900)
      return () => clearTimeout(t)
    }
  }, [])

  const choose = (lang) => {
    setLanguage(lang)
    localStorage.setItem('lei_lang_popup', '1')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => choose('pt')}
          />
          <motion.div
            className="relative z-10 bg-navy-mid border border-white/15 rounded-2xl p-8 max-w-sm w-full shadow-2xl"
            initial={{ opacity: 0, y: 48, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🌐</span>
              <h2 className="text-white font-display text-xl">Language / Idioma</h2>
            </div>
            <p className="text-gray-300 text-sm font-sans-custom mb-6 leading-relaxed">
              Would you like to switch the website to <strong className="text-white">English</strong>?
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => choose('en')}
                className="w-full px-5 py-3 bg-gold text-navy font-semibold font-sans-custom rounded-lg hover:bg-gold-muted transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                🇬🇧 Switch to English
              </button>
              <button
                onClick={() => choose('pt')}
                className="w-full px-5 py-3 bg-white/5 border border-white/15 text-gray-300 font-medium font-sans-custom rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                🇧🇷 Manter em Português
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
