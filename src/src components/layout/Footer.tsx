import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)' }} className="w-full px-6 py-12 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Zenith Facility Management</h3>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm max-w-xs">
            Clinical-grade cleaning for Adelaide GP practices. RACGP GP4.1 compliant.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-semibold mb-1">Navigation</p>
          <Link href="/services" className="text-white/70 hover:text-white text-sm transition">Services</Link>
          <Link href="/about" className="text-white/70 hover:text-white text-sm transition">About</Link>
          <Link href="/contact" className="text-white/70 hover:text-white text-sm transition">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-semibold mb-1">Contact</p>
          <p className="text-white/70 text-sm">Adelaide, South Australia</p>
          <p className="text-white/70 text-sm">info@zenithfm.com.au</p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
        <p className="text-white/40 text-xs">© 2025 Zenith Facility Management. All rights reserved.</p>
        <p className="text-white/40 text-xs">ABN: XX XXX XXX XXX</p>
      </div>
    </footer>
  )
}