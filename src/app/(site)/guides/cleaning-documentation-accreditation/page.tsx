import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleShell, h2Style } from '@/components/guides/ArticleShell'
import { getGuideBySlug } from '@/lib/guides'

const guide = getGuideBySlug('cleaning-documentation-accreditation')!

export const metadata: Metadata = {
  title: 'Cleaning Documentation: What Your Accreditor Will Ask For',
  description:
    'The exact cleaning records accreditation surveyors request — checklists, schedules, product evidence and reports — and how to build a file that answers every question in minutes.',
  alternates: { canonical: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, type: 'article' },
}

export default function Page() {
  return (
    <ArticleShell guide={guide}>
      <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
        Here is the uncomfortable truth about accreditation: a spotless practice
        with no records can fail the cleaning criteria, while an ordinary
        practice with a complete evidence file sails through. Surveyors
        can&apos;t assess what happened last Tuesday by looking at a clean room
        today. They assess your <strong style={{ color: '#0D1F3C' }}>documentation</strong>.
        This guide covers exactly what they ask for.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        Why &quot;we clean regularly&quot; isn&apos;t evidence
      </h2>

      <p>
        Accreditation is built on a single principle: if it isn&apos;t
        documented, it didn&apos;t happen. Not because surveyors think
        you&apos;re lying — because a verbal assurance can&apos;t be verified,
        can&apos;t be audited, and can&apos;t demonstrate consistency over time.
        The moment your evidence is a sentence spoken in a meeting rather than a
        record on a page, you&apos;ve failed the test regardless of how clean
        the practice is.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The four documents surveyors ask for
      </h2>

      <h3 className="text-xl font-bold" style={{ color: '#0D1F3C' }}>1. The cleaning schedule</h3>
      <p>
        A written document listing every area of the practice, the cleaning
        tasks for each, and the frequency — matched to risk, so clinical rooms
        and bathrooms appear more often than storerooms. Crucially, it should
        state <em>who</em> performs each task, closing the gap between what
        clinical staff do between patients and what the cleaning provider does.
      </p>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>2. Completed cleaning checklists</h3>
      <p>
        This is the evidence that the schedule is actually executed. Each clean
        produces a checklist — dated, task-level, and signed by the person who
        did it. A schedule proves intent; completed checklists prove it
        happened. Surveyors routinely ask for a specific period — &quot;show me
        your cleaning records for March&quot; — and expect them produced without
        a hunt.
      </p>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>3. Product evidence</h3>
      <p>
        A list of the cleaning and disinfection products used, with Safety Data
        Sheets available for each. For clinical areas, surveyors want to see
        TGA-listed disinfectants — and increasingly, that they&apos;re used at
        the correct dilution and contact time. Product on a shelf isn&apos;t
        evidence; product on your documented schedule is.
      </p>

      <h3 className="text-xl font-bold pt-2" style={{ color: '#0D1F3C' }}>4. The agreement itself</h3>
      <p>
        Your contract with the cleaning provider should name the compliance
        standard being cleaned to. A generic commercial cleaning agreement that
        never mentions infection control or accreditation is, in itself, a gap —
        it signals the arrangement was never designed for a clinical
        environment.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The evidence photos add
      </h2>

      <p>
        Photo documentation isn&apos;t strictly required by most standards, but
        it is the strongest evidence you can hold — and it ends disputes before
        they start. A time-stamped photo of a completed clean answers &quot;was
        this actually done&quot; permanently, for both you and your provider. It
        also turns your monthly file from a stack of ticked boxes into something
        a surveyor can see at a glance. When we clean a practice, every visit is
        photo-documented as standard — it&apos;s the difference between claiming
        a clean happened and proving it.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        How to build a file that answers everything in minutes
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>Keep it in one place.</strong> One folder — physical or digital — holding the schedule, checklists, product list with SDS, and the provider agreement. If a surveyor&apos;s question sends someone to three different drawers, the file isn&apos;t ready.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Organise by month.</strong> Surveyors think in periods. A file organised by month answers &quot;show me March&quot; instantly.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Make it current, not retrospective.</strong> A file assembled the week before review looks exactly like what it is. A file that&apos;s been accumulating monthly all year is unimpeachable.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Get it delivered to you.</strong> The right cleaning provider hands you this documentation by default — a monthly compliance report you file and forget until review time.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The bottom line
      </h2>

      <p>
        Cleaning documentation isn&apos;t administrative busywork — it&apos;s the
        entire basis on which your environmental compliance is judged. The
        practices that never scramble before a review are the ones whose
        cleaning arrangement produces the evidence automatically, every visit,
        without anyone having to ask. See{' '}
        <Link href="/guides/racgp-cleaning-requirements-checklist" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          the full cleaning requirements checklist
        </Link>{' '}
        or{' '}
        <Link href="/guides/prepare-practice-accreditation-audit" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          how to prepare for an accreditation audit
        </Link>{' '}
        for the wider picture.
      </p>
    </ArticleShell>
  )
}
