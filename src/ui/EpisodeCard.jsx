// src/ui/EpisodeCard.jsx
export default function EpisodeCard({ ep }) {
  return (
    <article className="card">
      <h3 className="font-semibold">{ep.title}</h3>
      <p className="muted text-sm">{formatDate(ep.pubDate)} {ep.duration ? `• ${ep.duration}` : ''}</p>

      <audio className="w-full mt-3" controls preload="none" src={ep.audioUrl}>
        Your browser does not support the audio element.
      </audio>

      <div className="flex gap-3 mt-4">
        <a className="btn-primary" href={ep.audioUrl} download>
          Download
        </a>
        {ep.link && (
          <a className="px-4 py-2 rounded-xl border" href={ep.link} target="_blank" rel="noreferrer">
            Show notes
          </a>
        )}
      </div>
    </article>
  )
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString()
  } catch {
    return d
  }
}
