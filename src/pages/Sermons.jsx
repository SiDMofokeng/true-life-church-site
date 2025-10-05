// src/pages/Sermons.jsx
import { useEffect, useState } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'
import { getEpisodes } from '../lib/podcast.js'
import EpisodeCard from '../ui/EpisodeCard.jsx'

export default function Sermons() {
  const [data, setData] = useState({ title: 'Podcast', episodes: [] })
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => { document.title = 'True Life Church' }, [])

  useEffect(() => {
    let mounted = true
    getEpisodes()
      .then((json) => {
        if (mounted) {
          setData(json)
          setStatus('ready')
        }
      })
      .catch(() => setStatus('error'))
    return () => (mounted = false)
  }, [])

  return (
    <RootLayout>
      <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Sermons (Podcast)</h1>
        <p className="muted">
          Auto-updating from our podcast feed{status==='ready' ? ` — ${data.episodes.length} messages` : ''}.
        </p>
      </header>

        {status === 'loading' && <p className="muted">Loading episodes…</p>}
        {status === 'error' && <p className="text-red-600">Could not load episodes.</p>}

        {status === 'ready' && data.episodes.length === 0 && (
          <p className="muted">No sermons available yet.</p>
        )}

        {status === 'ready' && (
          <div className="grid md:grid-cols-2 gap-6">
            {data.episodes.map((ep) => (
              <EpisodeCard key={ep.id} ep={ep} />
            ))}
          </div>
        )}
      </section>
    </RootLayout>
  )
}
