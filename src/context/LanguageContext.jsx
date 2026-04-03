import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lei_lang') || 'pt')

  const toggleLang = () => {
    const next = lang === 'pt' ? 'en' : 'pt'
    setLang(next)
    localStorage.setItem('lei_lang', next)
  }

  const setLanguage = (l) => {
    setLang(l)
    localStorage.setItem('lei_lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
