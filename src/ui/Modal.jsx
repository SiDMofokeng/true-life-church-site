// src/ui/Modal.jsx
import { useEffect, useRef } from 'react'

export default function Modal({ open, onClose, children, ariaLabel = 'Dialog' }) {
  const openerRef = useRef(null)

  useEffect(() => {
    if (!open) return

    openerRef.current = document.activeElement
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)

    // lock page scroll while modal is open
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      html.style.overflow = prev
      openerRef.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={ariaLabel}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog container that can scroll if content is tall */}
      <div className="relative z-10 mx-auto my-8 w-[92vw] max-w-5xl max-h-[85vh] overflow-auto rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b sticky top-0 bg-white">
          <span className="font-semibold">Now Playing</span>
          <button className="px-3 py-1 rounded-lg hover:bg-slate-100" onClick={onClose} autoFocus>
            Close ✕
          </button>
        </div>

        {/* Content (iframe, etc.) */}
        {children}
      </div>
    </div>
  )
}
