import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical & Clinical Cleaning Services Adelaide',
  description:
    'RACGP GP4.1 compliant cleaning for GP practices, specialist clinics, allied health, day surgeries, dental, pathology, radiology, and medical centres across Adelaide SA.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
