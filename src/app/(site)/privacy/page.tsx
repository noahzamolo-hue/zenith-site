import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zenith Facility Management. How we collect, use, and protect your personal information.',
}

const sections = [
  {
    heading: 'Who we are',
    content: `Zenith Facility Management (ABN 55 839 625 234) is an Adelaide-based commercial cleaning company specialising in RACGP-compliant medical and clinical cleaning. We operate at zenithfacilitymanagement.com.au and can be contacted at noah@zenithfacilitymanagement.com.au or 0412 496 757.`,
  },
  {
    heading: 'What information we collect',
    content: `We collect personal information when you:

• Complete our online estimate tool — including your name, email address, phone number, practice name, practice type, and floor area.
• Submit our contact form — including your name, email address, phone number, practice name, and any message you provide.
• Contact us directly by phone or email.

We do not collect sensitive information (such as health records or financial information) and we do not collect information from children.`,
  },
  {
    heading: 'Why we collect it',
    content: `We collect your personal information to:

• Respond to your enquiry or estimate request.
• Contact you to arrange a free compliance walkthrough.
• Send you relevant information about our services where you have indicated interest.
• Improve our website and services.

We will not use your information for any purpose that is unrelated to the above without your consent.`,
  },
  {
    heading: 'How we store and protect your information',
    content: `Your information is stored securely in our CRM platform (GoHighLevel) and is accessible only to authorised Zenith Facility Management personnel. We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access.

We do not store credit card or payment information on our systems.`,
  },
  {
    heading: 'Who we share your information with',
    content: `We do not sell your personal information to third parties.

We may share your information with trusted service providers who assist us in operating our business, including:

• GoHighLevel (CRM and marketing automation platform)
• Google Analytics (website analytics — anonymised usage data only)
• Vercel (website hosting)

These providers are required to handle your information in accordance with applicable privacy laws.`,
  },
  {
    heading: 'Marketing communications',
    content: `If you have submitted an enquiry or estimate request, we may contact you by email or phone with information relevant to your enquiry. Every email we send includes an unsubscribe link. You can also opt out at any time by emailing noah@zenithfacilitymanagement.com.au or calling 0412 496 757.

We comply with the Australian Spam Act 2003.`,
  },
  {
    heading: 'Cookies and analytics',
    content: `Our website uses Google Analytics to understand how visitors use the site. This collects anonymised data including pages visited, time on site, and general location. No personally identifiable information is collected via cookies without your direct input.

You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.`,
  },
  {
    heading: 'Accessing or correcting your information',
    content: `Under the Australian Privacy Act 1988, you have the right to access the personal information we hold about you and to request corrections if it is inaccurate, out of date, or incomplete.

To make a request, contact us at noah@zenithfacilitymanagement.com.au. We will respond within 30 days.`,
  },
  {
    heading: 'Complaints',
    content: `If you believe we have breached the Australian Privacy Principles, you can make a complaint by contacting us at noah@zenithfacilitymanagement.com.au. We will investigate and respond within 30 days.

If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
  },
  {
    heading: 'Changes to this policy',
    content: `We may update this Privacy Policy from time to time. The current version will always be available at zenithfacilitymanagement.com.au/privacy. Last updated: June 2026.`,
  },
]

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F7F9FC' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: '#0D1F3C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#2A7FBC' }}
          >
            Legal
          </p>
          <h1
            className="text-white text-4xl md:text-5xl font-bold leading-[1.08]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/50 mt-4 text-base">
            Zenith Facility Management — ABN 55 839 625 234
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-2xl p-8 md:p-12 space-y-10"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(13,31,60,0.07)' }}
          >
            <p className="text-base leading-relaxed" style={{ color: '#6B7A8D' }}>
              Zenith Facility Management is committed to protecting your privacy in accordance with the{' '}
              <strong style={{ color: '#0D1F3C' }}>Australian Privacy Act 1988</strong> and the Australian Privacy Principles (APPs). This policy explains what personal information we collect, why we collect it, and how we use and protect it.
            </p>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: '#0D1F3C', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {s.heading}
                </h2>
                <div className="text-base leading-relaxed whitespace-pre-line" style={{ color: '#6B7A8D' }}>
                  {s.content}
                </div>
              </div>
            ))}

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#F7F9FC', border: '1px solid rgba(13,31,60,0.07)' }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: '#0D1F3C' }}>Contact us about privacy</p>
              <p className="text-sm" style={{ color: '#6B7A8D' }}>
                Email:{' '}
                <a href="mailto:noah@zenithfacilitymanagement.com.au" style={{ color: '#2A7FBC' }}>
                  noah@zenithfacilitymanagement.com.au
                </a>
                <br />
                Phone: <a href="tel:+61412496757" style={{ color: '#2A7FBC' }}>0412 496 757</a>
                <br />
                Zenith Facility Management, Adelaide SA
              </p>
            </div>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: '#9CA3AF' }}>
            <Link href="/" style={{ color: '#2A7FBC' }}>← Back to home</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
