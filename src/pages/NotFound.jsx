// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'

export default function NotFound() {
  return (
    <RootLayout>
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-4 text-slate-600">We couldn't find that page.</p>
        <p className="mt-6">
          <Link to="/" className="btn-primary">Back home</Link>
        </p>
      </section>
    </RootLayout>
  )
}
