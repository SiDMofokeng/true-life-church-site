// src/pages/About.jsx
import { useEffect } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'

export default function About() {
  useEffect(() => { document.title = 'True Life Church' }, [])
  return (
    <RootLayout>
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">About True Life Church</h1>
        <p className="muted">We’re a Christ-centered community. Here you’ll find sermons, video messages, events, and ways to connect.</p>
      </section>
    </RootLayout>
  )
}
