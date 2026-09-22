import { useState } from 'react'
import { CATEGORIES, getComponentsByCategory } from '../data/components'
import CategoryPanel from '../components/CategoryPanel'
import BuildSummary from '../components/BuildSummary'

export default function BuildPC() {
  const [openCategory, setOpenCategory] = useState(CATEGORIES[0].id)

  return (
    <div>
      <section className="bg-navy py-14 text-ice">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">Build Your PC</span>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Configure your machine</h1>
          <p className="mt-4 max-w-2xl text-ice/70">
            Pick a part from each category below. Prices update live, and our technicians double-check
            compatibility before we start building.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-14">
        {/* Category quick-jump */}
        <div className="order-2 lg:order-1">
          <div className="thin-scroll mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={() => setOpenCategory(c.id)}
                className="shrink-0 rounded-full border border-steel/30 px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {c.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            {CATEGORIES.map((category) => (
              <CategoryPanel
                key={category.id}
                category={category}
                components={getComponentsByCategory(category.id)}
                open={openCategory === category.id}
                onToggle={() => setOpenCategory(openCategory === category.id ? null : category.id)}
              />
            ))}
          </div>
        </div>

        {/* Sticky summary */}
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <BuildSummary />
          </div>
        </div>
      </section>
    </div>
  )
}
