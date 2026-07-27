import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Compliance Guides for Healthcare Practices',
  description:
    'Practical guides on medical cleaning compliance for Adelaide healthcare practices — RACGP requirements, colour-coded zones, audit preparation and documentation.',
  alternates: { canonical: 'https://zenithfacilitymanagement.com.au/guides' },
}

export default function GuidesIndexPage() {
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: '#0D1F3C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#2A7FBC' }}
          >
            Guides
          </p>
          <h1
            className="text-white text-4xl md:text-5xl font-bold leading-[1.08] mb-5"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Compliance guides for practice managers
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            Plain-English answers to the cleaning and compliance questions your
            accreditor will eventually ask. Written by the team that cleans to
            these standards every night.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-5">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group block rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13,31,60,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(42,127,188,0.1)', color: '#2A7FBC' }}
                >
                  {g.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                  <Clock size={12} />
                  {g.readMinutes} min read
                </span>
              </div>
              <h2
                className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#2A7FBC] transition-colors"
                style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {g.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7A8D' }}>
                {g.description}
              </p>
              <span
                className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                style={{ color: '#2A7FBC' }}
              >
                Read the guide <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Prefer someone just checks your practice for you?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7A8D' }}>
            Book a free compliance walkthrough — we walk every room against your
            accreditation standard and hand you a written gap report. No cost, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#2A7FBC' }}
          >
            Book Free Walkthrough
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  )
}
