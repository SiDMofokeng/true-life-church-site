// src/layouts/RootLayout.jsx
import Navbar from '../ui/Navbar.jsx'
import Footer from '../ui/Footer.jsx'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <div className="container-narrow py-10">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
