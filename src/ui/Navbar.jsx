// src/ui/Navbar.jsx
import AppNav from './AppNav.jsx'

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="container-narrow flex items-center justify-between py-4">
        <a href="/" className="font-bold text-xl tracking-tight">True Life Church</a>
        <AppNav />
      </nav>
    </header>
  )
}
