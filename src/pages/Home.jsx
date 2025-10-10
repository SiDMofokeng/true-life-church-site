// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'
import { getEpisodes } from '../lib/podcast.js'
import { getVideos } from '../lib/youtube.js'
import { b64u } from '../lib/base64url.js'

export default function Home() {
  const [episodes, setEpisodes] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { document.title = 'True Life Church' }, [])
  useEffect(() => {
    let active = true
    Promise.allSettled([getEpisodes(), getVideos()]).then(([epRes, vidRes]) => {
      if (!active) return
      const eps = epRes.status === 'fulfilled' ? (epRes.value.episodes || []) : []
      const vids = vidRes.status === 'fulfilled' ? (vidRes.value.videos || []) : []
      setEpisodes(eps.slice(0, 1))   // ⬅️ one sermon
      setVideos(vids.slice(0, 2))    // ⬅️ two videos
      setLoading(false)
    })
    return () => { active = false }
  }, [])

  return (
    <RootLayout>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border bg-white">
        <div
          className="pointer-events-none absolute -inset-20 -z-10 opacity-60"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 40% at 50% 0%, rgba(14,165,233,0.15), rgba(14,165,233,0) 60%), radial-gradient(40% 30% at 90% 20%, rgba(2,132,199,0.12), rgba(2,132,199,0) 60%)',
          }}
        />
        <div className="text-center px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to <span className="text-sky-700">True Life Church</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Sermons, videos, and community — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/sermons" className="btn-primary">Browse Sermons</Link>
            <Link to="/videos" className="btn-outline">Watch Videos</Link>
            <Link to="/give" className="btn-outline">Give</Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-10 grid lg:grid-cols-2 gap-6">
        {/* Sermons highlight */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg">Latest Sermons</h2>
            <Link to="/sermons" className="underline hover:no-underline text-sm">View all</Link>
          </div>

          {loading && <p className="muted">Loading…</p>}
          {!loading && episodes.length === 0 && (
            <p className="muted">No sermons available yet.</p>
          )}

        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3">
          {episodes.map((ep) => {
            const eid = b64u.encode(ep.id || ep.link || ep.title)
            return (
              <li key={eid} className="rounded-xl border p-3">
                <p className="text-sm muted">{fmtDate(ep.pubDate)} {ep.duration ? `• ${ep.duration}` : ''}</p>
                <h3 className="font-medium mt-1 line-clamp-2">{ep.title}</h3>
                <div className="mt-3 flex gap-2">
                  <a className="btn-outline" href={ep.audioUrl} download={toFile(ep.title)+'.mp3'}>Download</a>
                  <Link className="btn-primary" to={`/sermons/${eid}`}>Details</Link>
                </div>
              </li>
            )
          })}
        </ul>

        </div>

        {/* Videos highlight */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg">Latest Videos</h2>
            <Link to="/videos" className="underline hover:no-underline text-sm">View all</Link>
          </div>

          {loading && <p className="muted">Loading…</p>}
          {!loading && videos.length === 0 && (
            <p className="muted">No videos found yet.</p>
          )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {videos.map((v) => (
            <li key={v.id} className="rounded-xl border overflow-hidden">
              <div className="aspect-video w-full bg-slate-200">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-3 space-y-1">
                <h3 className="font-medium line-clamp-2">{v.title}</h3>
                <p className="muted text-sm">{fmtDate(v.publishedAt)}</p>
                <Link to="/videos" className="underline hover:no-underline text-sm">Watch on Videos →</Link>
              </div>
            </li>
          ))}
        </ul>

        </div>
      </section>
    </RootLayout>
  )
}

function fmtDate(d){ try { return new Date(d).toLocaleDateString() } catch { return d } }
function toFile(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') }
