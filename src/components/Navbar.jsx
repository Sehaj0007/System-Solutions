import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/build-your-pc', label: 'Build Your PC' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const { user } = useAuth()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? 'text-blue' : 'text-ink/70 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-ice/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy font-display text-lg font-bold text-gold">
            S
          </span>
          <span className="font-display text-lg font-semibold leading-none text-navy">
            System <span className="text-blue">&amp;</span> Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/build-your-pc"
            className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-steel/30 text-ink/80 transition hover:border-blue hover:text-blue"
            aria-label="View cart"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-navy">
                {count}
              </span>
            )}
          </Link>
          <Link
            to={user ? '/account' : '/login'}
            className="flex items-center gap-2 rounded-sm bg-navy px-4 py-2 text-sm font-medium text-ice transition hover:bg-blue"
          >
            <User size={16} />
            {user ? user.name.split(' ')[0] : 'Login'}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-steel/20 bg-ice px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-ice-2 text-blue' : 'text-ink/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-3">
              <Link
                to="/build-your-pc"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-steel/30 py-3 text-sm font-medium"
              >
                <ShoppingCart size={16} /> Cart ({count})
              </Link>
              <Link
                to={user ? '/account' : '/login'}
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-navy py-3 text-sm font-medium text-ice"
              >
                <User size={16} /> {user ? user.name.split(' ')[0] : 'Login'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
