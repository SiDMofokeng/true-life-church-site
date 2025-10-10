// src/pages/About.jsx
import { useEffect } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => { document.title = 'About — True Life Church' }, [])

  return (
    <RootLayout>
      <section className="space-y-10">
        {/* Hero intro */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">About True Life Church</h1>
          <p className="muted max-w-2xl">
            We’re a Christ-centered community in <strong>[Your City]</strong> with a simple mission:
            <em> know Jesus, follow Jesus, and help others find true life in Him.</em>
          </p>
        </header>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-3 gap-6">
          <article className="card space-y-3">
            <h2 className="font-semibold text-lg">Our Mission</h2>
            <p className="text-slate-700">
              To lead people into a growing relationship with Jesus and to serve our city through
              prayer, hospitality, and practical compassion.
            </p>
          </article>
          <article className="card space-y-3">
            <h2 className="font-semibold text-lg">What We Believe</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>The Bible is God’s Word.</li>
              <li>Salvation is by grace through faith in Jesus.</li>
              <li>The Holy Spirit empowers everyday discipleship.</li>
              <li>The Church is a family on mission.</li>
            </ul>
          </article>
          <article className="card space-y-3">
            <h2 className="font-semibold text-lg">Our Rhythm</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Sunday Gathering: <strong>10:00 AM</strong></li>
              <li>Midweek Groups: <strong>Wednesdays 7:00 PM</strong></li>
              <li>Prayer: <strong>First Friday 6:30 PM</strong></li>
            </ul>
          </article>
        </div>

        {/* Pastor / Team (optional—swap photo URL when you have it) */}
        <div className="card grid md:grid-cols-[160px,1fr] gap-6 items-center">
          <div className="w-40 h-40 rounded-2xl overflow-hidden bg-slate-200">
            {/* Replace with your image: /public/pastor.jpg */}
            <img
              src="/pastor.jpg"
              alt="Lead Pastor"
              className="w-full h-full object-cover"
              onError={(e)=>{ e.currentTarget.style.display='none' }}
            />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Our Pastor</h2>
            <p className="text-slate-700">
              [Pastor Name] serves as our lead pastor. Passionate about Scripture and community,
              [he/she/they] teaches the Bible in a clear and practical way and loves seeing people
              take their next step with Jesus.
            </p>
          </div>
        </div>

        {/* Visit info */}
        <div className="grid lg:grid-cols-2 gap-6">
          <article className="card space-y-3">
            <h2 className="font-semibold text-lg">Plan Your Visit</h2>
            <p className="text-slate-700">
              Our gatherings last ~75 minutes with worship, teaching, and prayer. Kids ministry is
              available. Come as you are—there’s a place for you here.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link to="/sermons" className="btn-outline">Listen to a message</Link>
              <Link to="/give" className="btn-primary">Support the mission</Link>
            </div>
          </article>

          {/* Map / Location */}
          <article className="card space-y-3">
            <h2 className="font-semibold text-lg">Where We Meet</h2>
            <p className="text-slate-700">
              <strong>Address:</strong> 123 Church Street, [Your City]  
              <br />
              <strong>Email:</strong> hello@truelife.church  
              <br />
              <strong>Phone:</strong> (000) 000-0000
            </p>
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-200">
              {/* Replace the q= parameter with your real address */}
              <iframe
                title="True Life Church location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                src="https://www.google.com/maps?q=123%20Church%20Street%20Your%20City&output=embed"
              />
            </div>
          </article>
        </div>

        {/* Footer CTA */}
        <div className="card flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="muted">New here? We’d love to connect and answer any questions.</p>
          <a className="btn-primary" href="mailto:hello@truelife.church">Email the team</a>
        </div>
      </section>
    </RootLayout>
  )
}
