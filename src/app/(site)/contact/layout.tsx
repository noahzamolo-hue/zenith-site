import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free RACGP Compliance Walkthrough',
  description:
    'Book a free on-site compliance walkthrough for your Adelaide GP practice, specialist clinic, or medical centre. No obligation — just a clear picture of where you stand against RACGP GP4.1.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
