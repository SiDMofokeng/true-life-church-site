// src/ui/Breadcrumbs.jsx
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items = [] }) {
  // items: [{label, to}] – last item is current
  if (!items?.length) return null
  const lastIndex = items.length - 1

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        {items.map((it, idx) => {
          const isLast = idx === lastIndex
          return (
            <li key={idx} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-slate-900">{it.label}</span>
              ) : (
                <Link to={it.to} className="underline hover:no-underline">{it.label}</Link>
              )}
              {!isLast && <span className="text-slate-400">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
