import { useState } from 'react'
import toast from 'react-hot-toast'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message')
      return
    }
    setSending(true)
    // -----------------------------------------------------------------
    // TODO (business owner / dev): wire this up to a real email service.
    // Easiest options: Formspree (formspree.io) — just POST this `form`
    // object to your form endpoint — or EmailJS. See README.md.
    // -----------------------------------------------------------------
    await new Promise((r) => setTimeout(r, 700))
    setSending(false)
    toast.success('Message received — we\u2019ll get back to you shortly!')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
      <section className="bg-navy py-16 text-ice">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Let's talk hardware</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">Get in touch</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-blue" />
              <span className="text-ink/70">Plot No 248, Industrial Area Phase 1, Chandigarh</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-blue" />
              <span className="text-ink/70">94174 97785 &nbsp;/&nbsp; 90410 17785</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-blue" />
              <span className="text-ink/70">hello@systemandsolutions.in</span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-blue" />
              <span className="text-ink/70">Mon–Sat, 10:00 AM – 8:00 PM</span>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-sm border border-steel/20">
            <iframe
              title="System & Solutions location"
              className="h-56 w-full grayscale"
              loading="lazy"
              src="https://www.google.com/maps?q=Industrial+Area+Phase+1+Chandigarh&output=embed"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-sm border border-steel/20 bg-ice p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
          </div>
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          <div>
            <label className="text-sm font-medium text-navy">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you need help with..."
              className="mt-1.5 w-full rounded-sm border border-steel/30 bg-ice px-3.5 py-2.5 text-sm outline-none focus:border-blue"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy py-3 text-sm font-medium text-ice transition hover:bg-blue disabled:opacity-60"
          >
            {sending ? 'Sending...' : <>Send Message <Send size={15} /></>}
          </button>
        </form>
      </section>
    </div>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-sm border border-steel/30 bg-ice px-3.5 py-2.5 text-sm outline-none focus:border-blue"
      />
    </div>
  )
}
