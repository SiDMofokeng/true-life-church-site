// src/pages/Contact.jsx
import { useEffect } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'

export default function Contact() {
  useEffect(() => { document.title = 'Contact — True Life Church' }, [])

  return (
    <RootLayout>
      <section className="space-y-8">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="muted">We’d love to hear from you. Send a message and we’ll reply soon.</p>
        </header>

        <form
          name="contact"
          method="POST"
          action="/contact/sent"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="card space-y-5 max-w-2xl"
        >
          {/* Netlify form requirements */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot (hidden to humans) */}
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <input name="firstName" required className="input" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input name="lastName" className="input" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input name="subject" className="input" />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" required rows="6" className="textarea"></textarea>
          </div>

          <button className="btn-primary" type="submit">Send message</button>
        </form>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card space-y-2">
            <h2 className="font-semibold text-lg">Visit</h2>
            <p className="text-slate-700">
              123 Church Street, [Your City] • Sundays 10:00 AM
            </p>
          </div>
          <div className="card space-y-2">
            <h2 className="font-semibold text-lg">Direct</h2>
            <p className="text-slate-700">
              <strong>Email:</strong> hello@truelife.church<br />
              <strong>Phone:</strong> (000) 000-0000
            </p>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}
