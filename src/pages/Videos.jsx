// src/pages/Videos.jsx
import RootLayout from '../layouts/RootLayout.jsx'

export default function Videos() {
  return (
    <RootLayout>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Videos</h1>
        <p className="text-slate-600">This page will auto-update from the church YouTube uploads.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-video rounded-xl bg-slate-200" />
          <div className="aspect-video rounded-xl bg-slate-200" />
          <div className="aspect-video rounded-xl bg-slate-200" />
        </div>
      </section>
    </RootLayout>
  )
}
