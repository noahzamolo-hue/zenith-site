import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Guide } from '@/lib/guides'

export function ArticleShell({ guide, children }: { guide: Guide; children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: { '@type': 'Organization', name: 'Zenith Facility Management', url: 'https://zenithfacilitymanagement.com.au' },
    publisher: { '@type': 'Organization', name: 'Zenith Facility Management', url: 'https://zenithfacilitymanagement.com.au' },
    mainEntityOfPage: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://zenithfacilitymanagement.com.au/guides' },
      { '@type': 'ListItem', position: 2, name: guide.title, item: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}` },
    ],
  }

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: '#0D1F3C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link href="/guides" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors">
            ← All guides
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(42,127,188,0.15)', color: '#2A7FBC' }}
            >
              {guide.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Clock size={12} />
              {guide.readMinutes} min read
            </span>
          </div>
          <h1
            className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.12]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {guide.title}
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-[15px] leading-[1.8]" style={{ color: '#4A5568' }}>
          {children}

          <div
            className="rounded-2xl p-8 md:p-10 text-center !mt-14"
            style={{ background: 'linear-gradient(135deg, #1B6CA8 0%, #0D1F3C 100%)' }}
          >
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Want a second set of eyes on your practice?
            </h2>
            <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-7">
              Book a free compliance walkthrough — we assess every room against
              your accreditation standard and hand you a written gap report,
              whether or not you become a client.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffffff', color: '#0D1F3C' }}
            >
              Book Free Compliance Walkthrough
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="text-xs leading-relaxed !mt-10" style={{ color: '#9CA3AF' }}>
            This guide is general information, not accreditation or professional
            advice. Refer to the standards applying to your practice for
            authoritative requirements.
          </p>
        </div>
      </article>
    </div>
  )
}

export const h2Style = {
  color: '#0D1F3C',
  fontFamily: 'var(--font-playfair), Georgia, serif',
} as const
