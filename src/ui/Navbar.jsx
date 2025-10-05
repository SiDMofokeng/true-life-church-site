// src/ui/Navbar.jsx
import AppNav from './AppNav.jsx'
import SkipLink from './SkipLink.jsx'

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-40 shadow-sm">
      <SkipLink />
      <nav className="container-narrow flex items-center justify-between py-4">
        <a href="/" className="font-bold text-xl tracking-tight">True Life Church</a>
        <AppNav />
      </nav>
    </header>
  )
}
