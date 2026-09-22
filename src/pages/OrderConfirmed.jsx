import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function OrderConfirmed() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-5 py-20 text-center">
      <CheckCircle2 size={56} className="text-blue" />
      <h1 className="mt-6 font-display text-3xl font-semibold text-navy">Order placed!</h1>
      <p className="mt-3 max-w-md text-ink/60">
        Thanks for your order. Our team will verify part compatibility and reach out shortly to confirm
        build timelines and delivery.
      </p>
      <div className="mt-8 flex gap-4">
        <Link to="/account" className="rounded-sm bg-navy px-6 py-3 text-sm font-medium text-ice hover:bg-blue">
          View my orders
        </Link>
        <Link to="/" className="rounded-sm border border-steel/30 px-6 py-3 text-sm font-medium text-ink/70">
          Back to home
        </Link>
      </div>
    </div>
  )
}
