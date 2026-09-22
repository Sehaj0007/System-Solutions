import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ShieldCheck, Lock } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

// Loads the Razorpay checkout script once.
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export default function Checkout() {
  const { items, subtotal, gst, total, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    name: user?.name || '', email: user?.email || '', phone: '', address: '',
  })
  const [placing, setPlacing] = useState(false)

  useEffect(() => {
    if (items.length === 0) navigate('/build-your-pc')
  }, [items, navigate])

  const saveOrder = (paymentId) => {
    const orders = JSON.parse(localStorage.getItem('sns_orders_v1')) || []
    const order = {
      id: `SNS-${Date.now()}`,
      date: new Date().toISOString(),
      items,
      total,
      paymentId,
      customer: details,
    }
    localStorage.setItem('sns_orders_v1', JSON.stringify([order, ...orders]))
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!details.name || !details.email || !details.phone || !details.address) {
      toast.error('Please fill in all delivery details')
      return
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID

    if (!keyId) {
      // No key configured yet — demo mode so the flow is still testable.
      toast('Demo mode: add VITE_RAZORPAY_KEY_ID to accept real payments.', { icon: '⚠️' })
      setPlacing(true)
      await new Promise((r) => setTimeout(r, 900))
      saveOrder('demo_payment')
      clearCart()
      setPlacing(false)
      navigate('/order-confirmed')
      return
    }

    setPlacing(true)
    const ok = await loadRazorpayScript()
    if (!ok) {
      toast.error('Could not load payment gateway. Check your connection and try again.')
      setPlacing(false)
      return
    }

    const options = {
      key: keyId,
      amount: total * 100, // paise
      currency: 'INR',
      name: 'System & Solutions',
      description: 'Custom PC Build Order',
      // In production, generate `order_id` via your backend's Razorpay
      // Orders API call so the amount can't be tampered with client-side.
      prefill: { name: details.name, email: details.email, contact: details.phone },
      theme: { color: '#2454E8' },
      handler: (response) => {
        saveOrder(response.razorpay_payment_id)
        clearCart()
        navigate('/order-confirmed')
      },
      modal: { ondismiss: () => setPlacing(false) },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
    setPlacing(false)
  }

  if (items.length === 0) return null

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-navy">Checkout</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handlePayment} className="space-y-4 rounded-sm border border-steel/20 bg-ice p-6">
          <h2 className="font-display text-base font-semibold text-navy">Delivery details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" value={details.name} onChange={(v) => setDetails({ ...details, name: v })} />
            <Field label="Phone" value={details.phone} onChange={(v) => setDetails({ ...details, phone: v })} />
          </div>
          <Field label="Email" type="email" value={details.email} onChange={(v) => setDetails({ ...details, email: v })} />
          <div>
            <label className="text-sm font-medium text-navy">Delivery address</label>
            <textarea
              rows={3}
              value={details.address}
              onChange={(e) => setDetails({ ...details, address: e.target.value })}
              className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
              placeholder="House no., street, city, PIN code"
            />
          </div>

          <div className="flex items-center gap-2 rounded-sm bg-ice-2 p-3 text-xs text-ink/60">
            <Lock size={14} className="shrink-0 text-blue" />
            Payments are processed securely via Razorpay. We never store your card details.
          </div>

          <button
            type="submit"
            disabled={placing}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold py-3.5 text-sm font-medium text-navy transition hover:bg-gold-light disabled:opacity-60"
          >
            <ShieldCheck size={16} /> {placing ? 'Processing...' : `Pay ₹${total.toLocaleString('en-IN')}`}
          </button>
        </form>

        <div className="h-fit rounded-sm border border-steel/20 bg-ice p-6">
          <h2 className="font-display text-base font-semibold text-navy">Order summary</h2>
          <div className="thin-scroll mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-ink/70">{item.name} × {item.qty}</span>
                <span className="font-medium text-navy">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1.5 border-t border-steel/20 pt-4 text-sm">
            <div className="flex justify-between text-ink/60"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between text-ink/60"><span>GST (18%)</span><span>₹{gst.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between pt-1 font-display text-base font-semibold text-navy"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          </div>
          <Link to="/build-your-pc" className="mt-4 block text-center text-xs text-blue hover:underline">
            ← Edit build
          </Link>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-sm border border-steel/30 px-3.5 py-2.5 text-sm outline-none focus:border-blue"
      />
    </div>
  )
}
