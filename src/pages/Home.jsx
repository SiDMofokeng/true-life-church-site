import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'

export default function Home() {
  useEffect(() => { document.title = 'True Life Church' }, [])

  return (
    <RootLayout>
      <section className="relative overflow-hidden rounded-2xl border bg-white">
        {/* soft background accent */}
        <div className="pointer-events-none absolute -inset-20 -z-10 opacity-60"
             aria-hidden="true"
             style={{
               background: 'radial-gradient(60% 40% at 50% 0%, rgba(14,165,233,0.15), rgba(14,165,233,0) 60%), radial-gradient(40% 30% at 90% 20%, rgba(2,132,199,0.12), rgba(2,132,199,0) 60%)'
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
    </RootLayout>
  )
}
