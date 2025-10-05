// src/ui/EpisodeCard.jsx
import { Link } from 'react-router-dom'
import { b64u } from '../lib/base64url.js'

export default function EpisodeCard({ ep }) {
  const eid = b64u.encode(ep.id || ep.link || ep.title)
  const filename = toFileName(ep.title || 'sermon') + '.mp3'

  return (
    <article className="card">
      <h3 className="font-semibold">{ep.title}</h3>
      <p className="muted text-sm">
        {formatDate(ep.pubDate)} {ep.duration ? `• ${ep.duration}` : ''}
      </p>

      <audio className="w-full mt-3" controls preload="none" src={ep.audioUrl}>
        Your browser does not support the audio element.
      </audio>

      <div className="flex gap-3 mt-4">
        <a className="btn-primary" href={ep.audioUrl} download={filename}>Download</a>
        {ep.link && (
          <a className="px-4 py-2 rounded-xl border" href={ep.link} target="_blank" rel="noreferrer">
            Show notes
          </a>
        )}
        <Link className="px-4 py-2 rounded-xl border" to={`/sermons/${eid}`}>
          Details
        </Link>
      </div>
    </article>
  )
}

function formatDate(d) {
  try { return new Date(d).toLocaleDateString() } catch { return d }
}
function toFileName(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')
}
