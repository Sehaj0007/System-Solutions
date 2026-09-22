import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-6xl font-bold text-steel/40">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-navy">Page not found</h1>
      <p className="mt-2 text-ink/60">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 rounded-sm bg-navy px-6 py-3 text-sm font-medium text-ice hover:bg-blue">
        Back to home
      </Link>
    </div>
  )
}
