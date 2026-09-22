import { ShieldCheck, Users, Award, Wrench } from 'lucide-react'

const STATS = [
  { icon: Award, value: '25+', label: 'Years in business' },
  { icon: Users, value: '10,000+', label: 'Customers served' },
  { icon: Wrench, value: '1000s', label: 'Builds & repairs completed' },
  { icon: ShieldCheck, value: 'All major', label: 'Brands stocked' },
]

export default function About() {
  return (
    <div>
      <section className="bg-navy py-16 text-ice">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">About Us</span>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Two decades of keeping Chandigarh's PCs running
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Our story</h2>
          <p className="mt-4 leading-relaxed text-ink/60">
            System &amp; Solutions started in 1999 as a small hardware counter in Chandigarh's Industrial
            Area, built on a simple idea: give people honest advice about their computers, not just a sale.
          </p>
          <p className="mt-4 leading-relaxed text-ink/60">
            Over 25 years, that idea grew into a full-service hardware business — custom PC builds, repairs,
            upgrades, and IT support for homes and businesses across the region. We still stand behind
            every recommendation the way we did on day one.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">What we believe</h2>
          <ul className="mt-4 space-y-4">
            {[
              ['Honest advice first', 'We recommend what actually fits your use case and budget — not the most expensive part on the shelf.'],
              ['Quality that lasts', 'We deal only in genuine parts from trusted brands, backed by proper warranty support.'],
              ['Support after the sale', 'Our relationship doesn\u2019t end at checkout — AMCs and support keep your systems running.'],
            ].map(([title, desc]) => (
              <li key={title} className="border-l-2 border-gold pl-4">
                <p className="font-medium text-navy">{title}</p>
                <p className="mt-1 text-sm text-ink/60">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-steel/20 bg-ice-2 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon size={22} className="mx-auto text-blue" />
              <p className="mt-3 font-display text-2xl font-semibold text-navy sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs text-ink/50">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
