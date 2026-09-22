import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-steel/20 bg-navy text-ice/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold font-display text-lg font-bold text-navy">
              S
            </span>
            <span className="font-display text-lg font-semibold text-ice">System &amp; Solutions</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ice/60">
            Trusted computer hardware solutions since 1999. Your complete tech partner — build, repair, upgrade, perform.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ice/90">Navigate</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/build-your-pc" className="hover:text-gold">Build Your PC</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ice/90">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ice/70">
            <li>Custom PC Builds</li>
            <li>Laptop &amp; Desktop Repair</li>
            <li>Windows &amp; Software Setup</li>
            <li>Hardware Upgrades</li>
            <li>AMCs &amp; Networking</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ice/90">Visit / Call</h4>
          <ul className="mt-4 space-y-3 text-sm text-ice/70">
            <li className="flex gap-2.5"><MapPin size={17} className="mt-0.5 shrink-0 text-gold" /> Plot No 248, Industrial Area Phase 1, Chandigarh</li>
            <li className="flex gap-2.5"><Phone size={17} className="mt-0.5 shrink-0 text-gold" /> 94174 97785 &nbsp;/&nbsp; 90410 17785</li>
            <li className="flex gap-2.5"><Mail size={17} className="mt-0.5 shrink-0 text-gold" /> hello@systemandsolutions.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ice/10 py-5 text-center text-xs text-ice/40">
        © {new Date().getFullYear()} System &amp; Solutions. GSTIN: 04ABZPS5599L1ZD. All rights reserved.
      </div>
    </footer>
  )
}
