import Link from 'next/link'

const PRODUCT_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Methodology', href: '/about' },
  { label: 'Changelog', href: '/changelog' },
]

const CONNECT_LINKS = [
  { label: 'Email', href: 'mailto:hello@refocus.app' },
  { label: 'GitHub', href: 'https://github.com/Gilbert-Dev17/RePomodoro', external: true },
  {label: 'LinkedIn', href: 'https://www.linkedin.com/in/gilbert-cura/', external: true },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export function MegaFooter() {
  return (
    <footer className="bg-[#2E2017] text-[#FAF6EF] pt-24 relative overflow-hidden flex flex-col justify-between mt-auto">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-medium italic text-2xl tracking-tight text-[#EADDCF] mb-2">
              Re.Focus
            </span>
            <p className="text-[#A08878] text-sm leading-relaxed pr-4">
              Rethink how you rest. A softer, human approach to productivity.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#A08878] font-bold text-xs tracking-widest uppercase mb-2">
              Product
            </h2>
            {PRODUCT_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#C9523A] transition-colors text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#A08878] font-bold text-xs tracking-widest uppercase mb-2">
              Connect
            </h2>
            {CONNECT_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hover:text-[#C9523A] transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#A08878] font-bold text-xs tracking-widest uppercase mb-2">
              Legal
            </h2>
            {LEGAL_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#C9523A] transition-colors text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-[#A08878] text-xs font-medium pb-8 border-b border-[#3C312B]">
          <span>© 2026 Re.Focus. Built by Gilbert.</span>
        </div>
      </div>

      {/* Watermark wordmark */}
      <div
        className="w-full h-[18vw] mt-10 relative overflow-hidden pointer-events-none select-none flex justify-center"
        aria-hidden="true"
      >
        <span className="absolute -bottom-[5vw] text-[22vw] leading-none font-bold italic text-[#38271C] tracking-tighter w-full text-center whitespace-nowrap">
          RE.FOCUS
        </span>
      </div>
    </footer>
  )
}