import type { Metadata } from 'next'
import EstimateFlow from '@/components/estimate/EstimateFlow'

export const metadata: Metadata = {
  title: 'Get Your Free RACGP Compliance Estimate',
  description:
    'Find out what your RACGP-compliant medical cleaning actually costs. No hidden margins — a full cost breakdown built for your Adelaide practice in under a minute.',
  alternates: { canonical: 'https://zenithfacilitymanagement.com.au/estimate' },
}

export default function EstimatePage() {
  return <EstimateFlow />
}
