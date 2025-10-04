// src/ui/AppNav.jsx
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg hover:bg-slate-100 ${isActive ? 'bg-slate-100 font-semibold' : ''}`

export default function AppNav() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/sermons" className={linkClass}>Sermons</NavLink>
      <NavLink to="/videos" className={linkClass}>Videos</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
    </div>
  )
}
