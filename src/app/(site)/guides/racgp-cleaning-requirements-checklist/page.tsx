import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Check } from 'lucide-react'
import { getGuideBySlug } from '@/lib/guides'

const guide = getGuideBySlug('racgp-cleaning-requirements-checklist')!

export const metadata: Metadata = {
  title: 'RACGP Cleaning Requirements Checklist for GP Practices',
  description:
    'A practical checklist of what RACGP GP4.1 requires of your practice cleaning — colour-coded zones, TGA-approved products, schedules and the documentation your accreditor will ask to see.',
  alternates: {
    canonical: 'https://zenithfacilitymanagement.com.au/guides/racgp-cleaning-requirements-checklist',
  },
  openGraph: {
    title: 'RACGP Cleaning Requirements Checklist for GP Practices',
    description:
      'What RACGP GP4.1 actually requires of your practice cleaning, laid out as a checklist you can walk your practice against today.',
    type: 'article',
    url: 'https://zenithfacilitymanagement.com.au/guides/racgp-cleaning-requirements-checklist',
  },
}

const h2Style = {
  color: '#0D1F3C',
  fontFamily: 'var(--font-playfair), Georgia, serif',
} as const

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: 'rgba(31,122,92,0.12)' }}
      >
        <Check size={11} style={{ color: '#1F7A5C' }} />
      </div>
      <span className="text-[15px] leading-relaxed" style={{ color: '#374151' }}>
        {children}
      </span>
    </li>
  )
}

export default function RacgpChecklistArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: {
      '@type': 'Organization',
      name: 'Zenith Facility Management',
      url: 'https://zenithfacilitymanagement.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zenith Facility Management',
      url: 'https://zenithfacilitymanagement.com.au',
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: '#0D1F3C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
          >
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
            The RACGP Cleaning Requirements Checklist for GP Practices
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-[15px] leading-[1.8]" style={{ color: '#4A5568' }}>

          <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
            If your practice is accredited against the RACGP Standards for General
            Practices — or working toward it — cleaning is one of the areas where
            practices most often discover a gap only when the accreditation review
            is already booked. Not because the practice is dirty, but because the
            standard asks for something most cleaning arrangements were never set
            up to produce: <strong style={{ color: '#0D1F3C' }}>evidence</strong>.
          </p>

          <p>
            This guide lays out what the infection prevention and control
            requirements (Criterion GP4.1) mean for your cleaning in practical
            terms, as a checklist you can walk your practice against today. It
            reflects how accreditation surveyors commonly assess cleaning — but the
            RACGP Standards are the authoritative source, so always cross-check
            against the current edition.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
            What the standard actually asks of your cleaning
          </h2>

          <p>
            The RACGP Standards don&apos;t prescribe a brand of disinfectant or a
            mopping technique. What they require is that your practice can
            demonstrate a <em>system</em>: infection risks are identified, cleaning
            addresses them, appropriate products and processes are used, and
            there&apos;s a record trail proving it happens consistently. In
            practice, surveyors look at four things:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong style={{ color: '#0D1F3C' }}>Zoning</strong> — is cleaning equipment separated so a mop used in a toilet never touches a treatment room?</li>
            <li><strong style={{ color: '#0D1F3C' }}>Products</strong> — are TGA-listed disinfectants used in clinical areas, at the right concentration and contact time?</li>
            <li><strong style={{ color: '#0D1F3C' }}>Schedule</strong> — is there a documented cleaning schedule matched to each room&apos;s risk level, and is it actually followed?</li>
            <li><strong style={{ color: '#0D1F3C' }}>Records</strong> — can you produce evidence of all of the above, going back months, without scrambling?</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
            The checklist
          </h2>

          <h3 className="text-xl font-bold" style={{ color: '#0D1F3C' }}>
            1. Colour-coded zones and equipment
          </h3>
          <ul className="space-y-3">
            <CheckItem>Every room in the practice is classified into a cleaning zone — bathrooms/toilets, clinical (consultation, treatment and procedure rooms), general/admin, and kitchen/food areas.</CheckItem>
            <CheckItem>Cleaning equipment (mops, buckets, cloths) is colour-coded per zone — conventionally red for bathrooms, yellow for clinical, blue for general, green for kitchens.</CheckItem>
            <CheckItem>Equipment from one zone is never used in another — and your cleaner can explain the system if a surveyor asks them directly.</CheckItem>
            <CheckItem>Zone classifications are written down somewhere a surveyor can see, not just &quot;understood&quot;.</CheckItem>
          </ul>

          <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>
            2. Products and processes
          </h3>
          <ul className="space-y-3">
            <CheckItem>Clinical areas are cleaned with TGA-listed hospital-grade disinfectants, used per label instructions (dilution and contact time matter — a disinfectant wiped dry immediately hasn&apos;t disinfected anything).</CheckItem>
            <CheckItem>Safety Data Sheets (SDS) for every cleaning chemical used on-site are available to staff.</CheckItem>
            <CheckItem>High-touch surfaces — door handles, reception counters, waiting room arms, light switches — are on the schedule explicitly, not assumed under &quot;general cleaning&quot;.</CheckItem>
            <CheckItem>Blood and body-fluid spill procedures exist, staff know where the spill kit is, and the cleaning provider knows their role in it.</CheckItem>
          </ul>

          <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>
            3. Schedule and frequency
          </h3>
          <ul className="space-y-3">
            <CheckItem>A written cleaning schedule exists covering every area of the practice, with frequencies matched to risk — clinical rooms and bathrooms more often than storerooms.</CheckItem>
            <CheckItem>The schedule states <em>who</em> does each task — practice staff handle between-patient wipe-downs; the cleaning provider handles environmental cleaning — so nothing falls in the gap between the two.</CheckItem>
            <CheckItem>Periodic deep-clean tasks (walls, vents, blinds, under fixed equipment) appear on the schedule with their own frequency, not just &quot;as needed&quot;.</CheckItem>
          </ul>

          <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>
            4. Documentation and evidence
          </h3>
          <ul className="space-y-3">
            <CheckItem>Every clean produces a completed checklist — dated, task-level, signed off by the cleaner.</CheckItem>
            <CheckItem>Records are retained and retrievable — if a surveyor asks for &quot;your cleaning records for March&quot;, someone can produce them in minutes.</CheckItem>
            <CheckItem>Photo documentation exists for completed cleans (not required by the letter of the standard, but it&apos;s the strongest evidence you can hold, and it ends any dispute about what was done).</CheckItem>
            <CheckItem>Your agreement with the cleaning provider specifies the compliance standard being cleaned to — a generic commercial cleaning contract that never mentions infection control is itself a gap.</CheckItem>
          </ul>

          <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>
            5. The people doing the cleaning
          </h3>
          <ul className="space-y-3">
            <CheckItem>Cleaners working in your practice have been trained in infection-control cleaning — zoning, products, contact times — not just general commercial cleaning.</CheckItem>
            <CheckItem>They&apos;ve been inducted into <em>your</em> practice: which rooms are which zone, where the spill kit lives, what waste goes where.</CheckItem>
            <CheckItem>The same people clean your practice consistently — high turnover is where trained systems quietly fall apart.</CheckItem>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
            The gaps we find most often
          </h2>

          <p>
            When we run compliance walkthroughs in Adelaide practices, the same
            findings come up again and again — almost never &quot;the practice is
            unclean&quot;, almost always a system gap:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li><strong style={{ color: '#0D1F3C' }}>No records at all.</strong> The practice is cleaned nightly and has nothing to show for it. To a surveyor, undocumented cleaning is indistinguishable from no cleaning.</li>
            <li><strong style={{ color: '#0D1F3C' }}>One mop for the whole practice.</strong> The most common physical finding — the same equipment moving between toilets and treatment rooms.</li>
            <li><strong style={{ color: '#0D1F3C' }}>Supermarket products in clinical rooms.</strong> General-purpose spray isn&apos;t a TGA-listed disinfectant, no matter how strong it smells.</li>
            <li><strong style={{ color: '#0D1F3C' }}>The staff/cleaner gap.</strong> The practice assumes the cleaner does the treatment-room surfaces; the cleaner assumes clinical staff do. Nobody does, and nobody notices until review time.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
            What to do with this checklist
          </h2>

          <p>
            Walk your practice against it — honestly — and write down what&apos;s
            missing. If everything checks out, keep the note as evidence of
            self-assessment; surveyors like seeing that too. If gaps show up,
            they&apos;re almost all fixable in weeks, not months: zoned equipment
            is cheap, schedules are paperwork, and documentation is a habit your
            cleaning provider should be handing you by default.
          </p>

          <p>
            And if your current provider can&apos;t produce a dated, signed
            checklist for last Tuesday&apos;s clean — that&apos;s the conversation
            to have first. See{' '}
            <Link href="/services/gp-practice" style={{ color: '#2A7FBC', fontWeight: 600 }}>
              how we handle GP practice cleaning
            </Link>{' '}
            or get{' '}
            <Link href="/estimate" style={{ color: '#2A7FBC', fontWeight: 600 }}>
              a price estimate for your practice
            </Link>{' '}
            in under a minute.
          </p>

          {/* CTA card */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center !mt-14"
            style={{ background: 'linear-gradient(135deg, #1B6CA8 0%, #0D1F3C 100%)' }}
          >
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Want this checklist run for you — for free?
            </h2>
            <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-7">
              We&apos;ll walk every room of your practice against RACGP GP4.1 and
              hand you a written gap report. Yours to keep, whether or not you
              ever become a client.
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
            This guide is general information, not accreditation advice. Refer to
            the current edition of the RACGP Standards for General Practices for
            the authoritative requirements applying to your practice.
          </p>
        </div>
      </article>
    </div>
  )
}
