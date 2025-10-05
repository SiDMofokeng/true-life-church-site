// src/pages/Give.jsx
import RootLayout from '../layouts/RootLayout.jsx'
import { useEffect } from 'react'

export default function Give() {
  useEffect(() => { document.title = 'Give — True Life Church' }, [])
  return (
    <RootLayout>
      <section className="space-y-6">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Give</h1>
          <p className="muted">Your generosity fuels ministry and community impact.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <h2 className="font-semibold text-lg">Online Giving</h2>
            <p className="muted">Fast and secure. One-time or recurring gifts.</p>
            <div className="flex gap-3 flex-wrap">
              {/* Replace hrefs with your real links */}
              <a className="btn-primary" href="#" target="_blank" rel="noreferrer">Give Online</a>
              <a className="btn-outline" href="#" target="_blank" rel="noreferrer">Set Up Recurring</a>
            </div>
            <p className="badge mt-1">🔒 100% secure • Cancel anytime</p>
          </div>
          <div className="card space-y-4">
            <h2 className="font-semibold text-lg">Other Ways to Give</h2>
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
              <li><strong>EFT/Bank Transfer</strong>: Account details below</li>
              <li><strong>In Person</strong>: Cash/card during services</li>
              <li><strong>PayPal</strong>: <a className="underline" href="#" target="_blank" rel="noreferrer">paypal.me/yourchurch</a></li>
            </ul>
          </div>
        </div>

        <div className="card space-y-3">
          <h2 className="font-semibold text-lg">Bank / EFT Details</h2>
          {/* Replace placeholders with your real details */}
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div><dt className="muted">Account Name</dt><dd>True Life Church</dd></div>
            <div><dt className="muted">Bank</dt><dd>Example Bank</dd></div>
            <div><dt className="muted">Account No.</dt><dd>000 000 0000</dd></div>
            <div><dt className="muted">Branch Code</dt><dd>000000</dd></div>
            <div><dt className="muted">SWIFT</dt><dd>ABCXYZ12</dd></div>
            <div><dt className="muted">Reference</dt><dd>Your Name</dd></div>
          </dl>
        </div>

        <p className="muted text-sm">
          Gifts are used for ministry, outreach, and operations. Thank you for partnering with us.
        </p>
      </section>
    </RootLayout>
  )
}
