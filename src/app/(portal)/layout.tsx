import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenith QC Portal',
  robots: { index: false, follow: false }, // internal / client-only tool
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ minHeight: '100vh', backgroundColor: '#F7F9FC' }}>{children}</div>
}
