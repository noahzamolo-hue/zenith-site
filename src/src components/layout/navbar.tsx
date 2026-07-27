'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'var(--navy)' }} className="w-full px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-white text-xl font-bold tracking-tight">
        Zenith Facility Management
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/services" className="text-white/80 hover:text-white text-sm transition">Services</Link>
        <Link href="/about" className="text-white/80 hover:text-white text-sm transition">About</Link>
        <Link href="/contact" className="text-white/80 hover:text-white text-sm transition">Contact</Link>
        <Link href="/contact" style={{ backgroundColor: 'var(--accent)' }} className="text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 transition">
          Book Free Walkthrough
        </Link>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: 'var(--navy-light)' }} className="absolute top-16 left-0 w-full flex flex-col gap-4 px-6 py-6 md:hidden z-50">
          <Link href="/services" className="text-white/80 hover:text-white text-sm">Services</Link>
          <Link href="/about" className="text-white/80 hover:text-white text-sm">About</Link>
          <Link href="/contact" className="text-white/80 hover:text-white text-sm">Contact</Link>
          <Link href="/contact" style={{ backgroundColor: 'var(--accent)' }} className="text-white text-sm px-5 py-2 rounded-lg text-center">
            Book Free Walkthrough
          </Link>
        </div>
      )}
    </nav>
  )
}
