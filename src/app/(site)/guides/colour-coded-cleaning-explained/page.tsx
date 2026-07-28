import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleShell, h2Style } from '@/components/guides/ArticleShell'
import { getGuideBySlug } from '@/lib/guides'

const guide = getGuideBySlug('colour-coded-cleaning-explained')!

export const metadata: Metadata = {
  title: 'Colour-Coded Cleaning Explained: Why the Zones Matter',
  description:
    'What red, yellow, green and blue cleaning zones mean, the cross-contamination problem they solve, and how to tell if your cleaner actually follows the system.',
  alternates: { canonical: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, type: 'article' },
}

const zones = [
  { colour: '#DC2626', label: 'RED', name: 'Bathrooms & toilets', detail: 'Patient and staff toilets, sluice rooms, clinical waste storage. The highest-contamination areas in any practice — red equipment exists so whatever lives here stays here.' },
  { colour: '#CA8A04', label: 'YELLOW', name: 'Clinical areas', detail: 'Consultation, treatment and procedure rooms. Cleaned with TGA-listed disinfectants at labelled contact times, with equipment dedicated to clinical spaces only.' },
  { colour: '#2A7FBC', label: 'BLUE', name: 'General areas', detail: 'Reception, waiting rooms, corridors, admin. Lower infection risk but the highest-touch traffic in the building — seating, counters, door hardware.' },
  { colour: '#1F7A5C', label: 'GREEN', name: 'Kitchen & food areas', detail: 'Staff kitchens, tea points, food-contact surfaces. Food-safe products only, and isolation from every other zone — nobody wants bathroom equipment near the kettle.' },
]

export default function Page() {
  return (
    <ArticleShell guide={guide}>
      <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
        If you&apos;ve seen &quot;colour-coded cleaning&quot; in an accreditation
        standard or a cleaning quote and wondered whether it&apos;s substance or
        marketing — it&apos;s substance. The system solves a real problem with an
        almost embarrassingly simple mechanism, and its absence is one of the
        most common findings in practice audits.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The problem: a mop has no memory
      </h2>

      <p>
        Picture the standard commercial cleaning setup: one trolley, one mop,
        one bucket, one stack of cloths, moving room to room. The cleaner does
        the toilets, then the treatment room. The mop was rinsed in between —
        it <em>looks</em> clean. But rinsing isn&apos;t disinfection, and the
        organisms picked up in a bathroom don&apos;t announce themselves. That
        single mop just gave every pathogen in the practice free transport into
        the room where you see immunocompromised patients.
      </p>

      <p>
        You cannot inspect your way out of this problem — contaminated and
        clean equipment look identical. So the fix isn&apos;t inspection.
        It&apos;s making cross-contamination <em>structurally impossible</em>.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The system: four colours, one rule
      </h2>

      <p>
        Every room in the practice is classified into a zone. Every piece of
        cleaning equipment — mops, buckets, cloths, sometimes gloves — is
        colour-matched to one zone. The rule: <strong style={{ color: '#0D1F3C' }}>
        equipment never crosses zones. Ever.</strong>
      </p>

      <div className="space-y-4 !mt-6">
        {zones.map(z => (
          <div
            key={z.label}
            className="rounded-xl p-5 flex gap-4 items-start"
            style={{ backgroundColor: '#F7F9FC', borderLeft: `4px solid ${z.colour}` }}
          >
            <div>
              <p className="text-xs font-bold tracking-wider mb-1" style={{ color: z.colour }}>
                {z.label} — {z.name}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                {z.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p>
        The genius of the system is that it doesn&apos;t rely on judgement,
        training recall or good intentions at 8pm on a Tuesday. A red mop in a
        yellow room is visibly, instantly wrong — to the cleaner, to the
        practice manager walking past, and to an accreditation surveyor.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        Why your accreditor cares
      </h2>

      <p>
        Infection prevention criteria — RACGP GP4.1 for general practice, NSQHS
        Standard 3 for day procedure, and their equivalents in dental and
        pathology — all require practices to manage environmental
        cross-contamination risk. Colour-coding is the accepted, auditable way
        to demonstrate it: a surveyor can verify the system in ninety seconds by
        opening the cleaner&apos;s cupboard and asking one staff member how it
        works.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        How to tell if your cleaner actually follows it
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>Open the cupboard.</strong> Four colours of equipment, or one lonely mop? The cupboard never lies.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Ask the cleaner directly.</strong> Anyone genuinely trained answers in one sentence. Hesitation is your answer.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Check the paperwork.</strong> A real system appears in the cleaning checklist — zones listed, tasks signed off per zone. If the documentation doesn&apos;t mention zones, the practice probably doesn&apos;t have them.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Look at the buckets.</strong> Colour-coded cloths with a single shared bucket is theatre, not a system.</li>
      </ul>

      <p>
        Zoning is standard in how we clean every practice — see{' '}
        <Link href="/services" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          how it works across our services
        </Link>
        , or check your own setup against the{' '}
        <Link href="/guides/racgp-cleaning-requirements-checklist" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          full cleaning requirements checklist
        </Link>.
      </p>
    </ArticleShell>
  )
}
