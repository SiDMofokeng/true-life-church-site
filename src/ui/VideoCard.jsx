// src/ui/VideoCard.jsx
export default function VideoCard({ v, onOpen }) {
  return (
    <button
      onClick={() => onOpen?.(v)}
      className="text-left card hover:shadow transition"
      aria-label={`Play ${v.title}`}
    >
      <div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
        {v.thumbnail && (
          <img src={v.thumbnail} alt="" className="w-full h-full object-cover" loading="lazy" />
        )}
      </div>
      <h3 className="font-semibold mt-3 line-clamp-2">{v.title}</h3>
      <p className="muted text-sm">{formatDate(v.publishedAt)}</p>
    </button>
  )
}

function formatDate(d) {
  try { return new Date(d).toLocaleDateString() } catch { return d }
}
