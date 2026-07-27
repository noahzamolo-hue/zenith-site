export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  readMinutes: number
  datePublished: string
  dateModified: string
}

export const guides: Guide[] = [
  {
    slug: 'medical-cleaning-cost-adelaide',
    title: 'What Medical Cleaning Actually Costs in Adelaide (2026)',
    description:
      'Real numbers for Adelaide medical cleaning — hourly rates, what drives monthly pricing up or down, and why the cheapest quote usually costs practices more at accreditation time.',
    category: 'Pricing',
    readMinutes: 7,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
  },
  {
    slug: 'prepare-practice-accreditation-audit',
    title: 'How to Prepare Your Practice for an Accreditation Audit',
    description:
      'A practical preparation plan for your next accreditation review — what surveyors look at, the cleaning and documentation evidence to have ready, and the timeline to work backwards from.',
    category: 'Compliance',
    readMinutes: 8,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
  },
  {
    slug: 'colour-coded-cleaning-explained',
    title: 'Colour-Coded Cleaning Explained: Why the Zones Matter',
    description:
      'What the red, yellow, green and blue cleaning zones actually mean, the cross-contamination problem they solve, and how to tell if your cleaner is really following the system.',
    category: 'Infection Control',
    readMinutes: 6,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
  },
  {
    slug: 'cleaning-documentation-accreditation',
    title: 'Cleaning Documentation: What Your Accreditor Will Ask For',
    description:
      'The exact cleaning records accreditation surveyors request — checklists, schedules, product evidence and reports — and how to build a file that answers every question in minutes.',
    category: 'Compliance',
    readMinutes: 7,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
  },
  {
    slug: 'racgp-cleaning-requirements-checklist',
    title: 'The RACGP Cleaning Requirements Checklist for GP Practices',
    description:
      'What RACGP GP4.1 actually requires of your practice cleaning — zones, products, documentation and schedules — laid out as a practical checklist you can walk your practice against today.',
    category: 'Compliance',
    readMinutes: 8,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug)
}
