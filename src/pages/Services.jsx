import { Link } from 'react-router-dom'
import { Cpu, Wrench, MonitorCog, ArrowUpCircle, Network, ArrowRight, Check } from 'lucide-react'

const SERVICES = [
  {
    icon: Cpu,
    title: 'Custom PC Builds',
    desc: 'Gaming, editing and workstation PCs assembled to your exact spec and budget.',
    points: ['Free compatibility check on every build', 'Cable management & thermal testing included', 'Choose parts yourself or let us recommend a build'],
  },
  {
    icon: Wrench,
    title: 'Laptop & Desktop Repair',
    desc: 'Diagnostics and repair for hardware faults, screen/keyboard replacement, liquid damage and more.',
    points: ['Free diagnosis before any work begins', 'Genuine replacement parts', 'Most repairs completed same-day'],
  },
  {
    icon: MonitorCog,
    title: 'Windows & Software Installation',
    desc: 'Clean OS installs, driver setup, and software configuration for home or office machines.',
    points: ['Licensed Windows installation', 'Driver & BIOS updates', 'Essential software setup'],
  },
  {
    icon: ArrowUpCircle,
    title: 'Hardware Upgrades',
    desc: 'RAM, storage and GPU upgrades to extend the life of your existing machine.',
    points: ['Free upgrade consultation', 'Data migration on storage upgrades', 'Old component buy-back available'],
  },
  {
    icon: Network,
    title: 'AMCs & Networking',
    desc: 'Annual maintenance contracts and network setup for homes and small businesses.',
    points: ['Scheduled preventive maintenance', 'Priority support response', 'Router, switch & Wi-Fi setup'],
  },
]

export default function Services() {
  return (
    <div>
      <section className="bg-navy py-16 text-ice">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-gold">Services</span>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Everything your hardware needs, in one place
          </h1>
          <p className="mt-4 max-w-2xl text-ice/70">
            Since 1999, we've kept Chandigarh's PCs running — from first-time builds to enterprise networking.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl divide-y divide-steel/20 px-5 lg:px-8">
        {SERVICES.map(({ icon: Icon, title, desc, points }, i) => (
          <div key={title} className="grid gap-8 py-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-1">
              <span className="font-display text-sm text-steel">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="lg:col-span-5">
              <Icon size={26} className="text-blue" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-ink/60">{desc}</p>
            </div>
            <div className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-ink/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-ice-2 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Ready to start your build?
          </h2>
          <Link
            to="/build-your-pc"
            className="flex items-center gap-2 rounded-sm bg-navy px-7 py-3.5 font-medium text-ice transition hover:bg-blue"
          >
            Build Your PC <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
