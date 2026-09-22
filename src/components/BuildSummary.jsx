import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function BuildSummary() {
  const { items, updateQty, removeItem, subtotal, gst, total, count } = useCart()

  return (
    <div className="rounded-sm border border-steel/20 bg-ice">
      <div className="border-b border-steel/20 p-5">
        <h3 className="font-display text-base font-semibold text-navy">Your Build</h3>
        <p className="text-xs text-ink/50">{count} {count === 1 ? 'item' : 'items'} selected</p>
      </div>

      {items.length === 0 ? (
        <p className="p-5 text-sm text-ink/50">
          Nothing selected yet — expand a category and add parts to see your build here.
        </p>
      ) : (
        <div className="thin-scroll max-h-80 overflow-y-auto divide-y divide-steel/10 p-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-navy">{item.name}</p>
                <p className="text-xs text-ink/50">₹{item.price.toLocaleString('en-IN')} each</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-sm border border-steel/30 text-ink/60 hover:border-blue hover:text-blue"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-5 text-center text-sm">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-sm border border-steel/30 text-ink/60 hover:border-blue hover:text-blue"
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-ink/30 hover:text-red-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-navy">
                ₹{(item.price * item.qty).toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2 border-t border-steel/20 p-5">
        <div className="flex justify-between text-sm text-ink/60">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between text-sm text-ink/60">
          <span>GST (18%)</span>
          <span>₹{gst.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between border-t border-steel/20 pt-2 font-display text-base font-semibold text-navy">
          <span>Total</span>
          <span>₹{total.toLocaleString('en-IN')}</span>
        </div>
        <Link
          to="/checkout"
          className={`mt-3 flex items-center justify-center gap-2 rounded-sm py-3 text-sm font-medium transition ${
            items.length === 0
              ? 'pointer-events-none bg-steel/20 text-ink/30'
              : 'bg-gold text-navy hover:bg-gold-light'
          }`}
        >
          Proceed to Checkout <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
