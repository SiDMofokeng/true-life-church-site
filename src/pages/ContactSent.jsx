// src/pages/ContactSent.jsx
import RootLayout from '../layouts/RootLayout.jsx'
import { Link } from 'react-router-dom'

export default function ContactSent() {
  return (
    <RootLayout>
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Thanks for reaching out!</h1>
        <p className="muted max-w-xl">
          We’ve received your message and will get back to you soon.
        </p>
        <div className="flex gap-3">
          <Link to="/" className="btn-primary">Go home</Link>
          <Link to="/sermons" className="btn-outline">Listen to sermons</Link>
        </div>
      </section>
    </RootLayout>
  )
}
