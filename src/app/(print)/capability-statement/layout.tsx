import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false }, // print/PDF page — not in sitemap
}

export default function CapabilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
