// src/pages/Sermons.jsx
import RootLayout from '../layouts/RootLayout.jsx'

export default function Sermons() {
  return (
    <RootLayout>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Sermons (Podcast)</h1>
        <p className="text-slate-600">
          This page will auto-update from the podcast RSS. Audio player + download coming next.
        </p>
        <ul className="list-disc pl-6">
          <li>Sample Sermon — placeholder</li>
        </ul>
      </section>
    </RootLayout>
  )
}
