import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleShell, h2Style } from '@/components/guides/ArticleShell'
import { getGuideBySlug } from '@/lib/guides'

const guide = getGuideBySlug('prepare-practice-accreditation-audit')!

export const metadata: Metadata = {
  title: 'How to Prepare Your Practice for an Accreditation Audit',
  description:
    'A practical timeline for accreditation review preparation — the cleaning and documentation evidence surveyors ask for, common findings, and how to walk in ready.',
  alternates: { canonical: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, type: 'article' },
}

export default function Page() {
  return (
    <ArticleShell guide={guide}>
      <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
        Accreditation reviews are rarely failed on the day. They&apos;re failed
        in the months beforehand — when evidence that should have been
        accumulating quietly wasn&apos;t. This guide covers the environmental and
        cleaning side of preparation: what surveyors actually look at, and a
        timeline to work backwards from.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        How surveyors assess your environment
      </h2>

      <p>
        Whether your standard is RACGP (general practice), NSQHS (day
        procedure), ADA guidelines (dental) or NATA (pathology), surveyors
        assess the physical environment the same three ways:
      </p>

      <ol className="list-decimal pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>They look.</strong> Walking the practice, they notice what any trained eye notices — dust on high surfaces, stained carpet at reception, a mop bucket sitting in a treatment room, a toilet brush that&apos;s seen better decades.</li>
        <li><strong style={{ color: '#0D1F3C' }}>They ask staff.</strong> &quot;Who cleans the treatment room between patients?&quot; &quot;Where&apos;s the spill kit?&quot; If your team gives three different answers, that&apos;s a system finding — regardless of how clean the room is.</li>
        <li><strong style={{ color: '#0D1F3C' }}>They ask for records.</strong> Cleaning schedules, completed checklists, product information. This is where most practices get caught: the cleaning happens, but nothing proves it.</li>
      </ol>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The preparation timeline
      </h2>

      <h3 className="text-xl font-bold" style={{ color: '#0D1F3C' }}>Three months out: audit yourself</h3>
      <p>
        Walk the practice with fresh eyes — or better, have someone external do
        it. Check every room against your standard&apos;s requirements: zoning,
        products, schedules, records. Write down every gap, however small. Three
        months is enough time to fix almost anything; three weeks isn&apos;t.
        Our{' '}
        <Link href="/guides/racgp-cleaning-requirements-checklist" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          cleaning requirements checklist
        </Link>{' '}
        is built for exactly this walk-through.
      </p>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>Two months out: close the system gaps</h3>
      <ul className="list-disc pl-6 space-y-3">
        <li>If your cleaning arrangement produces no records, fix that now — two months of documented cleans is credible evidence; two weeks looks like what it is.</li>
        <li>Confirm your written cleaning schedule matches reality — who cleans what, how often, with which products.</li>
        <li>Resolve the staff/cleaner boundary explicitly: clinical staff handle between-patient surfaces, the cleaning provider handles environmental cleaning, and both know where the line is.</li>
        <li>Collect Safety Data Sheets for every chemical on site into one folder.</li>
      </ul>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>One month out: assemble the evidence file</h3>
      <p>
        Build one folder — physical or digital — a surveyor can be handed
        directly: the cleaning schedule, recent completed checklists, product
        list with SDS, your cleaning provider&apos;s details and the compliance
        standard named in your agreement with them, spill and outbreak
        procedures. If a question has to leave the room to be answered, the
        file isn&apos;t finished.
      </p>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>One week out: the physical pass</h3>
      <ul className="list-disc pl-6 space-y-3">
        <li>Book a deep clean covering what regular cleans don&apos;t: vents, high dusting, skirtings, blinds, under fixed equipment.</li>
        <li>Walk the practice at patient height <em>and</em> surveyor height — they look up at vents and down behind doors.</li>
        <li>Brief the team on the two questions they&apos;ll be asked: who cleans what, and where things are kept.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The findings that come up again and again
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>No cleaning records at all</strong> — the single most common environmental finding, and the easiest to prevent.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Unzoned equipment</strong> — one mop and bucket serving bathrooms and clinical rooms alike.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Domestic products in clinical areas</strong> — no TGA listing, no documented contact time.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Schedules that describe a fantasy</strong> — a beautiful roster on the wall bearing no relationship to what actually happens at 7pm.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Staff who don&apos;t know the system</strong> — the paperwork exists, but the person asked about it has never seen it.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The shortcut
      </h2>

      <p>
        Everything above compresses to one principle: <strong style={{ color: '#0D1F3C' }}>
        run your practice so that audit day is a normal day.</strong> If cleaning
        is zoned, documented and reported every week of the year, preparation
        stops being a project — it&apos;s just pulling a folder that already
        exists. That&apos;s the entire argument for a{' '}
        <Link href="/services" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          compliance-grade cleaning arrangement
        </Link>: it converts accreditation from a recurring crisis into an
        administrative non-event.
      </p>
    </ArticleShell>
  )
}
