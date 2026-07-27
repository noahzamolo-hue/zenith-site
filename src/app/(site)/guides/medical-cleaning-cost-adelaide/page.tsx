import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleShell, h2Style } from '@/components/guides/ArticleShell'
import { getGuideBySlug } from '@/lib/guides'

const guide = getGuideBySlug('medical-cleaning-cost-adelaide')!

export const metadata: Metadata = {
  title: 'What Medical Cleaning Costs in Adelaide (2026)',
  description:
    'Real Adelaide medical cleaning prices — hourly rates, monthly costs for typical practices, what drives pricing, and why the cheapest quote costs more at accreditation time.',
  alternates: { canonical: `https://zenithfacilitymanagement.com.au/guides/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, type: 'article' },
}

export default function Page() {
  return (
    <ArticleShell guide={guide}>
      <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
        Almost nobody in this industry publishes prices, which forces practice
        managers to collect three quotes just to learn what normal looks like.
        Here&apos;s what normal looks like — actual Adelaide numbers, what moves
        them up or down, and where cheap quotes quietly cost you more.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The hourly rates in Adelaide right now
      </h2>

      <p>
        Commercial cleaning in Adelaide broadly prices in two tiers:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong style={{ color: '#0D1F3C' }}>General commercial cleaning: roughly $40–$55/hour.</strong>{' '}
          Offices, retail, common areas. Perfectly good work — but no clinical
          zoning, no TGA-listed disinfectants, no compliance documentation.
        </li>
        <li>
          <strong style={{ color: '#0D1F3C' }}>Compliance-grade medical cleaning: roughly $55–$80/hour.</strong>{' '}
          Colour-coded zones, hospital-grade products used at correct contact
          times, trained cleaners, and a documented record of every clean. This
          is the tier a practice with accreditation obligations actually needs.
        </li>
      </ul>

      <p>
        After-hours cleans price toward the upper end of the band, and weekend
        work carries genuine premiums — cleaner wages on Saturdays and Sundays
        attract penalty rates under the Cleaning Services Award, and an honest
        quote passes that through rather than pretending it doesn&apos;t exist.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        What that means per month
      </h2>

      <p>
        Hourly rates matter less than your monthly number, which depends on
        floor area and frequency. As a guide, for compliance-grade cleaning of
        a typical Adelaide practice:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>A <strong style={{ color: '#0D1F3C' }}>small practice (~150–250m², cleaned 3 evenings a week)</strong> typically lands around <strong style={{ color: '#0D1F3C' }}>$1,000–$1,500/month ex GST</strong>.</li>
        <li>A <strong style={{ color: '#0D1F3C' }}>mid-size practice (~300–500m², cleaned 5 evenings a week)</strong> typically runs <strong style={{ color: '#0D1F3C' }}>$2,000–$3,500/month ex GST</strong>.</li>
        <li>Large multi-suite medical centres are quoted on walkthrough — economies of scale bring the per-square-metre cost down meaningfully as floor area grows.</li>
      </ul>

      <p>
        Want a number for your actual floor area and schedule?{' '}
        <Link href="/estimate" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          Our estimate tool
        </Link>{' '}
        produces a monthly range in under a minute, built on the same model we
        quote from.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        The five things that move your price
      </h2>

      <ol className="list-decimal pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>Floor area</strong> — the base driver, though not linearly: bigger spaces clean more efficiently per square metre.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Frequency</strong> — more visits per week lowers the per-visit price, because each clean carries less accumulated load. Daily cleaning is not five times the price of once-a-week.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Timing</strong> — business-hours cleans are cheapest; evenings slightly more; weekends carry award penalty rates.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Clinic type</strong> — a day surgery with theatre terminal cleaning prices above a standard GP practice; allied health prices slightly below.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Compliance overhead</strong> — photo documentation, monthly reports and zone systems take real time. This is the line item general cleaners don&apos;t quote for, because they don&apos;t do it.</li>
      </ol>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        Why the cheapest quote usually costs more
      </h2>

      <p>
        A general cleaner at $45/hour looks like a saving against a
        compliance-grade quote. Here&apos;s what the gap actually buys:
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li><strong style={{ color: '#0D1F3C' }}>Documentation you don&apos;t have.</strong> When your accreditation review asks for cleaning records and there are none, the money you saved buys you a non-conformity and a scramble.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Products that don&apos;t disinfect.</strong> Supermarket-grade chemicals in treatment rooms are an audit finding waiting to be written up.</li>
        <li><strong style={{ color: '#0D1F3C' }}>One mop for the whole building.</strong> The most common physical finding in our walkthroughs — and the fastest way to fail an infection-control assessment.</li>
        <li><strong style={{ color: '#0D1F3C' }}>Churn.</strong> Cheap contracts run on churn-heavy labour. The trained cleaner leaves; the untrained replacement doesn&apos;t know your zones exist.</li>
      </ul>

      <p>
        The honest comparison isn&apos;t $45 vs $65 an hour — it&apos;s the cost
        of the cleaning plus the cost of the compliance gap it leaves. Read{' '}
        <Link href="/guides/racgp-cleaning-requirements-checklist" style={{ color: '#2A7FBC', fontWeight: 600 }}>
          our RACGP cleaning requirements checklist
        </Link>{' '}
        to see exactly what that gap looks like.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold pt-4" style={h2Style}>
        Questions to ask any cleaner quoting your practice
      </h2>

      <ul className="list-disc pl-6 space-y-3">
        <li>Can you show me a completed cleaning checklist from another medical client — dated and signed?</li>
        <li>Which TGA-listed disinfectants will you use in our clinical rooms?</li>
        <li>How does your colour-coded zone system work, and can the cleaner on-site explain it?</li>
        <li>Will the same people clean our practice every visit?</li>
        <li>Is the rate fixed for 12 months, and what exactly does it include?</li>
      </ul>

      <p>
        Any provider worth engaging answers all five without hesitation. If the
        answers get vague, the quote isn&apos;t cheap — it&apos;s incomplete.
      </p>
    </ArticleShell>
  )
}
