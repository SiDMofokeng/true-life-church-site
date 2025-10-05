// src/ui/Modal.jsx
import { useEffect } from 'react'

export default function Modal({ open, onClose, children, ariaLabel = 'Dialog' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* dialog */}
      <div className="relative z-10 mx-auto mt-10 w-[92vw] max-w-5xl">
        <div className="card p-0 overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b">
            <span className="font-semibold">Now Playing</span>
            <button
              className="px-3 py-1 rounded-lg hover:bg-slate-100"
              onClick={onClose}
              autoFocus
            >
              Close ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
