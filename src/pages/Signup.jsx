import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (signup(form)) navigate('/account')
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-ice-2 px-5 py-16">
      <div className="w-full max-w-sm rounded-sm border border-steel/20 bg-ice p-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy font-display text-lg font-bold text-gold">S</span>
          <span className="font-display text-lg font-semibold text-navy">System &amp; Solutions</span>
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-navy">Create your account</h1>
        <p className="mt-1 text-sm text-ink/50">Save builds and track orders in one place.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-navy">Full name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-navy">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-navy">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
              placeholder="At least 6 characters"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy py-3 text-sm font-medium text-ice transition hover:bg-blue"
          >
            <UserPlus size={16} /> Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/60">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}
