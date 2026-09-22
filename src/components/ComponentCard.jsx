import { useState } from 'react'
import { Plus, Check, ChevronDown } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ComponentCard({ component }) {
  const { items, addItem } = useCart()
  const [showSpecs, setShowSpecs] = useState(false)
  const inCart = items.some((i) => i.id === component.id)

  return (
    <div className="flex flex-col rounded-sm border border-steel/20 bg-ice p-5 transition hover:border-blue/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-steel-dark">{component.brand}</span>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy">{component.name}</h3>
        </div>
        <span className="whitespace-nowrap font-display text-base font-semibold text-blue">
          ₹{component.price.toLocaleString('en-IN')}
        </span>
      </div>

      <p className="mt-2.5 text-sm leading-relaxed text-ink/60">{component.description}</p>
      <p className="mt-2 text-xs font-medium text-gold">{component.bestFor}</p>

      <button
        onClick={() => setShowSpecs((v) => !v)}
        className="mt-3 flex items-center gap-1 text-xs font-medium text-steel-dark hover:text-navy"
      >
        Specs <ChevronDown size={14} className={`transition ${showSpecs ? 'rotate-180' : ''}`} />
      </button>
      {showSpecs && (
        <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 rounded-sm bg-ice-2 p-3 text-xs">
          {Object.entries(component.specs).map(([k, v]) => (
            <div key={k}>
              <dt className="text-ink/40">{k}</dt>
              <dd className="font-medium text-ink/80">{v}</dd>
            </div>
          ))}
        </dl>
      )}

      <button
        onClick={() => addItem(component)}
        className={`mt-4 flex items-center justify-center gap-1.5 rounded-sm py-2.5 text-sm font-medium transition ${
          inCart ? 'bg-ice-2 text-blue' : 'bg-navy text-ice hover:bg-blue'
        }`}
      >
        {inCart ? <><Check size={15} /> Added — add again</> : <><Plus size={15} /> Add to build</>}
      </button>
    </div>
  )
}
