// src/ui/BackButton.jsx
import { useNavigate } from 'react-router-dom'

export default function BackButton({ fallback = '/' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        // Try history back; if no referrer or same-page, go to fallback
        if (window.history.length > 1 && document.referrer) {
          navigate(-1)
        } else {
          navigate(fallback)
        }
      }}
      className="btn-outline"
      aria-label="Go back"
    >
      ← Back
    </button>
  )
}
