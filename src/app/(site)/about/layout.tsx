import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Adelaide Medical Cleaning Specialists',
  description:
    "Zenith was founded because too many Adelaide medical clinics weren't audit-ready. We provide RACGP GP4.1 compliant cleaning with full photo documentation — so your practice is always prepared.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
