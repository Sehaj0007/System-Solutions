// Subtle circuit-board line motif, echoing the brand's existing banner art.
// Pure decoration — aria-hidden, and respects prefers-reduced-motion via CSS.
export default function CircuitLines({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 400 400"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <path d="M0 60 H120 L140 80 H260 L280 60 H400" className="circuit-pulse" />
        <path d="M0 160 H80 L100 140 H220" className="circuit-pulse" style={{ animationDelay: '0.6s' }} />
        <path d="M400 220 H300 L280 240 H160 L140 260 H0" className="circuit-pulse" style={{ animationDelay: '1.2s' }} />
        <path d="M60 400 V320 L80 300 V180" className="circuit-pulse" style={{ animationDelay: '1.8s' }} />
        <path d="M340 400 V300 L320 280 V180" className="circuit-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="140" cy="80" r="4" fill="currentColor" stroke="none" />
        <circle cx="260" cy="60" r="4" fill="currentColor" stroke="none" />
        <circle cx="100" cy="140" r="4" fill="currentColor" stroke="none" />
        <circle cx="280" cy="240" r="4" fill="currentColor" stroke="none" />
        <circle cx="80" cy="300" r="4" fill="currentColor" stroke="none" />
        <circle cx="320" cy="280" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}
