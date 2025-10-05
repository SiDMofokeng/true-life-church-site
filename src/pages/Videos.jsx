// src/pages/Videos.jsx
import { useEffect, useState } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'
import { getVideos } from '../lib/youtube.js'
import VideoCard from '../ui/VideoCard.jsx'
import VideoModal from '../ui/VideoModal.jsx'

export default function Videos() {
  const [list, setList] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [active, setActive] = useState(null)      // currently open video
  useEffect(() => { document.title = 'True Life Church' }, [])

  useEffect(() => {
    let mounted = true
    getVideos()
      .then((json) => {
        if (mounted) {
          setList(json.videos || [])
          setStatus('ready')
        }
      })
      .catch(() => setStatus('error'))
    return () => (mounted = false)
  }, [])

  return (
    <RootLayout>
      <section className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Videos</h1>
          <p className="muted">Latest uploads from our YouTube channel.</p>
        </header>

        {status === 'loading' && <p className="muted">Loading videos…</p>}
        {status === 'error' && <p className="text-red-600">Could not load videos.</p>}

        {status === 'ready' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((v) => (
              <VideoCard key={v.id} v={v} onOpen={(v) => setActive(v)} />
            ))}
          </div>
        )}

        <VideoModal open={!!active} video={active} onClose={() => setActive(null)} />
      </section>
    </RootLayout>
  )
}
