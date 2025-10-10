import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../ui/Navbar.jsx'
import Footer from '../ui/Footer.jsx'

export default function RootLayout({ children }) {
  const location = useLocation()

  // Safety: every route change, re-enable scrolling just in case
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    html.style.overflow = ''
    body.style.overflow = ''
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="container-narrow py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
