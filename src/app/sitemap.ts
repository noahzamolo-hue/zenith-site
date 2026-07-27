import { MetadataRoute } from 'next'
import { clinicTypes } from '@/lib/clinicTypes'
import { locations } from '@/lib/locations'
import { guides } from '@/lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://zenithfacilitymanagement.com.au'
  const now = new Date()

  const clinicPages = clinicTypes.map(c => ({
    url: `${base}/services/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationPages = locations.map(l => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const guidePages = guides.map(g => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...clinicPages,
    ...locationPages,
    { url: `${base}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    ...guidePages,
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/estimate`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
