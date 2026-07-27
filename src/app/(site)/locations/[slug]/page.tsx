import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, MapPin, Check } from 'lucide-react'
import { locations, getLocationBySlug } from '@/lib/locations'
import { clinicTypes } from '@/lib/clinicTypes'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map(l => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) return {}
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://zenithfacilitymanagement.com.au/locations/${slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://zenithfacilitymanagement.com.au/locations/${slug}`,
    },
  }
}

const standardInclusions = [
  'RACGP GP4.1 colour-coded zone cleaning',
  'TGA-approved hospital-grade disinfectants',
  'Photo-documented checklist after every clean',
  'Same dedicated team every visit',
  'After-hours scheduling as standard',
  'Monthly compliance report for your accreditation file',
]

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zenithfacilitymanagement.com.au' },
      { '@type': 'ListItem', position: 2, name: loc.suburb, item: `https://zenithfacilitymanagement.com.au/locations/${slug}` },
    ],
  }

  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: '#0D1F3C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
          <p
            className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#2A7FBC' }}
          >
            <MapPin size={13} />
            {loc.region}
          </p>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] mb-5"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {loc.headline}
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            RACGP GP4.1 compliant cleaning for {loc.suburb} medical practices — documented, after-hours, and audit-ready.
          </p>
        </div>
      </section>

      {/* Intro + local context */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7A8D' }}>
              {loc.intro}
            </p>
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: 'rgba(42,127,188,0.05)', borderLeft: '3px solid #2A7FBC' }}
            >
              <p
                className="text-xs font-bold tracking-wider uppercase mb-2"
                style={{ color: '#2A7FBC' }}
              >
                Local knowledge
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                {loc.localContext}
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#F7F9FC', border: '1px solid rgba(13,31,60,0.07)' }}
          >
            <p
              className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
              style={{ color: '#6B7A8D' }}
            >
              Every {loc.suburb} clean includes
            </p>
            <ul className="space-y-4">
              {standardInclusions.map(point => (
                <li key={point} className="flex gap-3 items-start">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(42,127,188,0.12)' }}
                  >
                    <Check size={11} style={{ color: '#2A7FBC' }} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: '#0D1F3C' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic types we service here */}
      <section className="py-16" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Clinic types we clean in {loc.suburb}
          </h2>
          <p className="text-sm mb-8" style={{ color: '#6B7A8D' }}>
            Every clinic type has different compliance requirements — see exactly what we do for yours.
          </p>
          <div className="flex flex-wrap gap-3">
            {clinicTypes.map(c => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="text-sm px-4 py-2 rounded-full transition-colors duration-200 hover:border-[#2A7FBC]"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(13,31,60,0.12)',
                  color: '#0D1F3C',
                }}
              >
                {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Practice in {loc.suburb}? Let&apos;s walk your site.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7A8D' }}>
            Book a free RACGP GP4.1 compliance walkthrough — we assess every room, hand you a written gap report, and you decide what happens next. No cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#2A7FBC' }}
            >
              Book Free Walkthrough
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200"
              style={{ color: '#0D1F3C', border: '1.5px solid rgba(13,31,60,0.2)' }}
            >
              Get a price estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-16" style={{ backgroundColor: '#F7F9FC', borderTop: '1px solid rgba(13,31,60,0.06)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: '#6B7A8D' }}
          >
            Also servicing near {loc.suburb}
          </p>
          <p className="text-sm mb-6" style={{ color: '#9CA3AF' }}>
            {loc.nearbyAreas.join(' · ')}
          </p>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter(l => l.slug !== slug)
              .map(l => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="text-sm px-4 py-2 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(13,31,60,0.12)',
                    color: '#0D1F3C',
                  }}
                >
                  {l.suburb}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
