import type { Metadata } from 'next'
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: { absolute: 'Medical & Healthcare Cleaning Adelaide | Zenith Facility Management' },
  description: "Compliance-grade cleaning for Adelaide's healthcare sector — GP practices, dental, allied health, specialists, day surgeries, pathology and radiology. Cleaned to your accreditation standard: RACGP, NSQHS, ADA, NATA. Book a free compliance walkthrough.",
  alternates: { canonical: 'https://zenithfacilitymanagement.com.au' },
  openGraph: {
    title: 'Zenith Facility Management | RACGP Compliant Medical Cleaning Adelaide',
    description: 'Clinical-grade cleaning for Adelaide medical clinics. RACGP GP4.1 compliant, fully documented, audit-ready.',
    url: 'https://zenithfacilitymanagement.com.au',
    images: [{ url: '/logo.png', width: 96, height: 105, alt: 'Zenith Facility Management' }],
  },
}
import TrustStrip from "@/components/home/TrustStrip";
import ProblemSection from "@/components/home/ProblemSection";
import Comparison from "@/components/home/Comparison";
import ComplianceProcess from "@/components/home/ComplianceProcess";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import ClinicTypesGrid from "@/components/home/ClinicTypesGrid";
import { faqs } from "@/lib/faqs";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <Comparison />
      <ClinicTypesGrid />
      <ComplianceProcess />
      <FAQ />
      <FinalCTA />
    </>
  );
}
