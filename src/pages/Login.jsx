import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(form)) navigate('/account')
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-ice-2 px-5 py-16">
      <div className="w-full max-w-sm rounded-sm border border-steel/20 bg-ice p-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy font-display text-lg font-bold text-gold">S</span>
          <span className="font-display text-lg font-semibold text-navy">System &amp; Solutions</span>
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-navy">Welcome back</h1>
        <p className="mt-1 text-sm text-ink/50">Log in to track your orders and builds.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy py-3 text-sm font-medium text-ice transition hover:bg-blue"
          >
            <LogIn size={16} /> Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/60">
          New here?{' '}
          <Link to="/signup" className="font-medium text-blue hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
