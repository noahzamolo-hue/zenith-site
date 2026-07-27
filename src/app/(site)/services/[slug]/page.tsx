import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import { clinicTypes, getClinicBySlug } from '@/lib/clinicTypes'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return clinicTypes.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const clinic = getClinicBySlug(slug)
  if (!clinic) return {}
  return {
    title: clinic.metaTitle,
    description: clinic.metaDescription,
    alternates: { canonical: `https://zenithfacilitymanagement.com.au/services/${slug}` },
    openGraph: {
      title: clinic.metaTitle,
      description: clinic.metaDescription,
      url: `https://zenithfacilitymanagement.com.au/services/${slug}`,
    },
  }
}

export default async function ClinicTypePage({ params }: Props) {
  const { slug } = await params
  const clinic = getClinicBySlug(slug)
  if (!clinic) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://zenithfacilitymanagement.com.au/services' },
      { '@type': 'ListItem', position: 2, name: clinic.shortName, item: `https://zenithfacilitymanagement.com.au/services/${slug}` },
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
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#2A7FBC' }}
          >
            Adelaide Medical Cleaning
          </p>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] mb-5"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {clinic.headline}
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            {clinic.subheadline}
          </p>
        </div>
      </section>

      {/* Intro + compliance standard */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: '#6B7A8D' }}
            >
              {clinic.intro}
            </p>

            {/* Compliance badge */}
            <div
              className="rounded-xl p-5 flex gap-3 items-start"
              style={{ backgroundColor: 'rgba(31,122,92,0.07)', border: '1px solid rgba(31,122,92,0.18)' }}
            >
              <div
                className="w-1 min-h-[2.5rem] rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: '#1F7A5C' }}
              />
              <div>
                <p
                  className="text-xs font-bold tracking-wider uppercase mb-1"
                  style={{ color: '#1F7A5C' }}
                >
                  Compliance Standard
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: '#0D1F3C' }}>
                  {clinic.complianceStandard}
                </p>
                <p className="text-sm" style={{ color: '#4A5568' }}>
                  {clinic.complianceDetail}
                </p>
              </div>
            </div>
          </div>

          {/* Included list */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#F7F9FC', border: '1px solid rgba(13,31,60,0.07)' }}
          >
            <p
              className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
              style={{ color: '#6B7A8D' }}
            >
              What&apos;s included
            </p>
            <ul className="space-y-4">
              {clinic.included.map(point => (
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

      {/* Key needs */}
      <section className="py-20" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10"
            style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            What we specifically address
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {clinic.keyNeeds.map(need => (
              <div
                key={need.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13,31,60,0.07)' }}
              >
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: '#0D1F3C' }}
                >
                  {need.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7A8D' }}>
                  {need.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone system */}
      <section className="py-16" style={{ backgroundColor: '#0D1F3C' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.28em] uppercase mb-3"
            style={{ color: '#2A7FBC' }}
          >
            RACGP GP4.1 Zone System
          </p>
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Colour-coded zones used in your clinic
          </h2>
          <div className="flex flex-wrap gap-3">
            {clinic.zones.map((zone, i) => {
              const colours = ['#DC2626', '#CA8A04', '#1F7A5C', '#2A7FBC']
              const colour = colours[i % colours.length]
              return (
                <span
                  key={zone}
                  className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{ backgroundColor: `${colour}22`, color: colour, border: `1px solid ${colour}44` }}
                >
                  {zone}
                </span>
              )
            })}
          </div>
          <p className="text-white/40 text-sm mt-5">
            Equipment for each zone is never used in another — preventing cross-contamination between areas.{' '}
            <Link href="/services#zone-cleaning" className="text-white/60 underline hover:text-white">
              Learn more about zone cleaning →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Ready to get started?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7A8D' }}>
            {clinic.cta}. No cost, no obligation — we walk every room and give you a written compliance report whether or not you become a client.
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
              style={{ color: '#0D1F3C', border: '1.5px solid rgba(13,31,60,0.2)', backgroundColor: 'transparent' }}
            >
              Get a price estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Other clinic types */}
      <section className="py-16" style={{ backgroundColor: '#F7F9FC', borderTop: '1px solid rgba(13,31,60,0.06)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
            style={{ color: '#6B7A8D' }}
          >
            We also clean
          </p>
          <div className="flex flex-wrap gap-3">
            {clinicTypes
              .filter(c => c.slug !== slug)
              .map(c => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="text-sm px-4 py-2 rounded-full transition-colors duration-200"
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
    </div>
  )
}
