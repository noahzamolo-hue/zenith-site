import type { Metadata } from 'next'
import { Inter, Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-8DQ4VG429J'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Zenith Facility Management | RACGP Compliant Medical Cleaning Adelaide',
    template: '%s | Zenith Facility Management',
  },
  description: 'Clinical-grade medical cleaning for Adelaide GP practices, specialist clinics, allied health, day surgeries, dental, and medical centres. RACGP GP4.1 compliant. Book your free compliance walkthrough today.',
  metadataBase: new URL('https://zenithfacilitymanagement.com.au'),
  openGraph: {
    siteName: 'Zenith Facility Management',
    locale: 'en_AU',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zenith Facility Management',
    description: 'RACGP GP4.1 compliant medical and clinical cleaning for Adelaide GP practices, specialist clinics, allied health, day surgeries, dental clinics, pathology centres, radiology centres, and medical centres.',
    url: 'https://zenithfacilitymanagement.com.au',
    telephone: '+61412496757',
    email: 'noah@zenithfacilitymanagement.com.au',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Adelaide, South Australia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Adelaide',
      addressRegion: 'SA',
      addressCountry: 'AU',
    },
    openingHours: 'Mo-Fr 06:00-20:00',
    priceRange: '$$',
    knowsAbout: [
      'RACGP GP4.1 compliance',
      'Medical cleaning',
      'Clinical cleaning',
      'Infection control',
      'TGA-approved disinfectants',
      'GP practice cleaning',
      'Specialist clinic cleaning',
      'Allied health cleaning',
      'Day surgery cleaning',
      'Dental clinic cleaning',
      'Pathology cleaning',
      'Radiology cleaning',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Clinic Cleaning', areaServed: 'Adelaide SA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RACGP Compliance Audit', areaServed: 'Adelaide SA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Maintenance Program', areaServed: 'Adelaide SA' } },
      ],
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} ${dmSans.variable} ${dmMono.variable} min-h-screen flex flex-col`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>
        {children}
      </body>
    </html>
  )
}