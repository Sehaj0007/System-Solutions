import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { LogOut, Package } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Account() {
  const { user, logout } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('sns_orders_v1')) || [])
  }, [])

  if (!user) return <Navigate to="/login" replace />

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Hi, {user.name.split(' ')[0]}</h1>
          <p className="mt-1 text-sm text-ink/50">{user.email}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-sm border border-steel/30 px-4 py-2 text-sm font-medium text-ink/70 hover:border-red-400 hover:text-red-500"
        >
          <LogOut size={15} /> Sign out
        </button>
      </div>

      <h2 className="mt-10 font-display text-lg font-semibold text-navy">Order history</h2>
      {orders.length === 0 ? (
        <p className="mt-4 text-sm text-ink/50">No orders yet — your custom builds will show up here.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="rounded-sm border border-steel/20 bg-ice p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-medium text-navy">
                  <Package size={16} className="text-blue" /> {o.id}
                </div>
                <span className="text-xs text-ink/50">{new Date(o.date).toLocaleDateString('en-IN')}</span>
              </div>
              <p className="mt-2 text-sm text-ink/60">{o.items.length} item(s) · ₹{o.total.toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
