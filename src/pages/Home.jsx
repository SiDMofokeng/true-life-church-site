// src/pages/Home.jsx
import { useEffect } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'

export default function Home() {
  useEffect(() => { document.title = 'True Life Church' }, [])
  return (
    <RootLayout>
      <section className="space-y-8">
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to True Life Church</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Sermons, videos, and community — all in one place.
          </p>
        </div>
      </section>
    </RootLayout>
  )
}
