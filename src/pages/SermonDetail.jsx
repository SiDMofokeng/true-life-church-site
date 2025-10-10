// src/pages/SermonDetail.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'
import { getEpisodes } from '../lib/podcast.js'
import { b64u } from '../lib/base64url.js'
import Breadcrumbs from '../ui/Breadcrumbs.jsx'
import BackButton from '../ui/BackButton.jsx'

export default function SermonDetail() {
  const { eid } = useParams()           // base64url id
  const [ep, setEp] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let mounted = true
    getEpisodes()
      .then((json) => {
        const id = b64u.decode(eid)
        const match = (json.episodes || []).find(e => (e.id || e.link) === id)
        if (mounted) {
          setEp(match || null)
          setStatus(match ? 'ready' : 'error')
          if (match?.title) document.title = `${match.title} — True Life Church`
        }
      })
      .catch(() => setStatus('error'))
    return () => { mounted = false }
  }, [eid])

  if (status === 'loading') {
    return <RootLayout><p className="muted">Loading message…</p></RootLayout>
  }
  if (status === 'error' || !ep) {
    return <RootLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Message not found</h1>
        <p className="muted">We couldn’t find that sermon.</p>
        <Link className="btn-primary" to="/sermons">Back to Sermons</Link>
      </div>
    </RootLayout>
  }

  const filename = toFileName(ep.title || 'sermon') + '.mp3'
  return (
    <RootLayout>
      <article className="space-y-6">
        <header className="space-y-3">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Sermons', to: '/sermons' },
              { label: ep.title || 'Message' },
            ]}
          />

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="muted text-sm">{formatDate(ep.pubDate)} {ep.duration ? `• ${ep.duration}` : ''}</p>
              <h1 className="text-3xl font-bold">{ep.title}</h1>
            </div>
            <BackButton fallback="/sermons" />
          </div>
        </header>

        <audio className="w-full" controls preload="none" src={ep.audioUrl}>
          Your browser does not support the audio element.
        </audio>

        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={ep.audioUrl} download={filename}>Download</a>
          <Share ep={ep} />
          <Link className="px-4 py-2 rounded-xl border" to="/sermons">All sermons</Link>
        </div>

        {ep.description && (
          <p className="muted">{ep.description}</p>
        )}
      </article>
    </RootLayout>
  )
}

function formatDate(d){ try { return new Date(d).toLocaleDateString() } catch { return d } }
function toFileName(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') }

function Share({ ep }) {
  const url = window.location.href
  const text = encodeURIComponent(`${ep.title} — True Life Church`)
  const share = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${text}%20${encodeURIComponent(url)}` },
    { label: 'X (Twitter)', href: `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ]
  return (
    <div className="flex gap-2">
      {share.map(s => (
        <a key={s.label} className="px-4 py-2 rounded-xl border" href={s.href} target="_blank" rel="noreferrer">
          Share on {s.label}
        </a>
      ))}
    </div>
  )
}
