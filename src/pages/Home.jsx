import { Link } from 'react-router-dom'
import {
  Cpu, Wrench, MonitorCog, ArrowUpCircle, Network, ShieldCheck, ArrowRight, Star,
} from 'lucide-react'
import CircuitLines from '../components/CircuitLines'

const SERVICES = [
  { icon: Cpu, title: 'Custom PCs', desc: 'Gaming & editing rigs built to your budget and workload.' },
  { icon: Wrench, title: 'Repair', desc: 'Laptop & desktop diagnostics and repair, done right.' },
  { icon: MonitorCog, title: 'Software Setup', desc: 'Windows installs, drivers, and software configuration.' },
  { icon: ArrowUpCircle, title: 'Upgrades', desc: 'RAM, storage & GPU upgrades to extend your PC\u2019s life.' },
  { icon: Network, title: 'AMCs & Networking', desc: 'Annual maintenance contracts and office networking.' },
]

const BRANDS = ['ASUS', 'MSI', 'GIGABYTE', 'Intel', 'NVIDIA', 'AMD Ryzen', 'Corsair', 'Cooler Master', 'Crucial', 'ZOTAC']

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-ice">
        <CircuitLines className="left-0 top-0 h-full w-1/2 text-blue-light/40" />
        <CircuitLines className="right-0 top-0 h-full w-1/2 rotate-180 text-gold/30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold">
              Trusted since 1999 · Chandigarh
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Your complete tech partner, <span className="text-blue-light">built to perform.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ice/70">
              From custom gaming PCs to repairs, upgrades and IT support — System &amp; Solutions has kept
              Chandigarh's builders, gamers and businesses running for over two decades.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/build-your-pc"
                className="group flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 font-medium text-navy transition hover:bg-gold-light"
              >
                Build Your PC
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 rounded-sm border border-ice/25 px-6 py-3.5 font-medium text-ice transition hover:border-ice/60"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ice/60">
              <span><strong className="text-ice">25+ yrs</strong> in business</span>
              <span><strong className="text-ice">1000s</strong> of builds delivered</span>
              <span><strong className="text-ice">All major</strong> brands stocked</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="float-slow w-full max-w-md rounded-sm border border-ice/10 bg-navy-2/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between border-b border-ice/10 pb-4">
                <span className="font-display text-sm font-semibold text-ice/90">Live Build Preview</span>
                <span className="rounded-sm bg-blue/20 px-2 py-1 text-[11px] text-blue-light">Editable</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ['Ryzen 5 7600', '₹18,999'],
                  ['RTX 4060 8GB', '₹28,999'],
                  ['32GB DDR5 6000MHz', '₹9,999'],
                  ['1TB NVMe SSD', '₹7,999'],
                ].map(([n, p]) => (
                  <li key={n} className="flex items-center justify-between text-ice/70">
                    <span>{n}</span>
                    <span className="font-medium text-ice">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-ice/10 pt-4">
                <span className="text-sm text-ice/60">Estimated total</span>
                <span className="font-display text-lg font-semibold text-gold">₹65,996</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">What we do</h2>
            <p className="mt-2 max-w-md text-ink/60">End-to-end hardware services, under one roof.</p>
          </div>
          <Link to="/services" className="flex items-center gap-1.5 text-sm font-medium text-blue hover:underline">
            View all services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-ice p-6 transition hover:bg-ice-2">
              <Icon size={24} className="text-blue" />
              <h3 className="mt-4 font-display text-base font-semibold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILD YOUR PC CTA BANNER */}
      <section className="relative overflow-hidden bg-blue">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-16 text-center lg:px-8">
          <ShieldCheck size={32} className="text-ice" />
          <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
            Configure a PC that's exactly yours
          </h2>
          <p className="max-w-xl text-ice/80">
            Pick every part — CPU, GPU, RAM, storage and more — see live pricing, and check out securely.
            Our team verifies compatibility before we build.
          </p>
          <Link
            to="/build-your-pc"
            className="flex items-center gap-2 rounded-sm bg-ice px-7 py-3.5 font-medium text-navy transition hover:bg-gold"
          >
            Start Building <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-ink/40">
          Deals in all brands
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((b) => (
            <span key={b} className="font-display text-sm font-semibold text-steel-dark/70">{b}</span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-steel/20 bg-ice-2">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">What customers say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Arjun M.', text: 'Built my first gaming PC here — patient, honest advice and zero upselling. Runs flawlessly.' },
              { name: 'Priya S.', text: 'Same-day laptop repair when I was mid-deadline. Genuinely saved me.' },
              { name: 'Rohit K.', text: 'We use them for our office AMC. Reliable, quick response, fair pricing.' },
            ].map((t) => (
              <div key={t.name} className="rounded-sm border border-steel/20 bg-ice p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">"{t.text}"</p>
                <p className="mt-4 text-sm font-medium text-navy">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
