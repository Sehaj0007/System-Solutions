import * as Icons from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import ComponentCard from './ComponentCard'
import { useCart } from '../context/CartContext'

export default function CategoryPanel({ category, components, open, onToggle }) {
  const Icon = Icons[category.icon] || Icons.Box
  const { items } = useCart()
  const selectedCount = items.filter((i) => i.category === category.id).length

  return (
    <div id={category.id} className="scroll-mt-24 overflow-hidden rounded-sm border border-steel/20 bg-ice">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-ice-2 text-blue">
            <Icon size={20} />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-navy">{category.label}</h3>
            <p className="text-xs text-ink/50">{category.blurb}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {selectedCount > 0 && (
            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold">
              {selectedCount} selected
            </span>
          )}
          <ChevronDown size={18} className={`text-steel-dark transition ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="grid gap-4 border-t border-steel/20 p-5 sm:grid-cols-2 xl:grid-cols-3">
          {components.map((c) => (
            <ComponentCard key={c.id} component={c} />
          ))}
        </div>
      )}
    </div>
  )
}
