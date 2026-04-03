import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { LanguagePopup } from './components/LanguagePopup.jsx'
import Home from './pages/Home.jsx'
import Membros from './pages/Membros.jsx'
import Empresas from './pages/Empresas.jsx'
import Palestrar from './pages/Palestrar.jsx'
import Parceiros from './pages/Parceiros.jsx'
import EmpreendeMais from './pages/EmpreendeMais.jsx'
import Ecossistema from './pages/Ecossistema.jsx'
import ContatoPalestrante from './pages/ContatoPalestrante.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/palestrar" element={<Palestrar />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/empreendamais" element={<EmpreendeMais />} />
        <Route path="/ecossistema" element={<Ecossistema />} />
        <Route path="/contato-palestrante" element={<ContatoPalestrante />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
        <LanguagePopup />
      </BrowserRouter>
    </LanguageProvider>
  )
}
