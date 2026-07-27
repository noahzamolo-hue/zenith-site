'use client'

import Image from 'next/image'

const services = [
  { name: 'GP Practices', detail: 'RACGP GP4.1 compliant, full accreditation documentation' },
  { name: 'Medical Centres', detail: 'Multi-room, high-volume compliance cleaning' },
  { name: 'Specialist Clinics', detail: 'Dermatology, cardiology, ENT, ophthalmology & more' },
  { name: 'Allied Health', detail: 'Physio, chiropractic, psychology, OT, speech therapy' },
  { name: 'Day Surgeries', detail: 'Theatre terminal cleaning, NSQHS documentation' },
  { name: 'Dental Clinics', detail: 'ADA infection control, aerosol-aware protocols' },
  { name: 'Pathology Centres', detail: 'NATA-aligned, specimen-area safe cleaning' },
  { name: 'Radiology & Imaging', detail: 'Equipment-safe, high patient-throughput cleaning' },
]

const zones = [
  { colour: '#DC2626', label: 'Red Zone', name: 'Bathrooms & Toilets', note: 'Dedicated red-coded equipment only' },
  { colour: '#CA8A04', label: 'Yellow Zone', name: 'Consultation & Treatment', note: 'Clinical-grade disinfection' },
  { colour: '#1F7A5C', label: 'Green Zone', name: 'General & Admin Areas', note: 'TGA-approved surface disinfection' },
  { colour: '#2A7FBC', label: 'Blue Zone', name: 'Kitchen & Food Areas', note: 'Food-safe products, isolated equipment' },
]

// Set to a real number (e.g. '20') once verifiable to switch on the
// track-record stat on the cover. Leave '' and nothing renders — never ship a fabricated count.
const PRACTICES_SERVED = ''

const included = [
  'RACGP GP4.1 colour-coded zone cleaning',
  'TGA-approved hospital-grade disinfectants',
  'Photo-documented compliance checklist after every clean',
  'Police-checked, fully insured cleaners on every visit',
  'Dedicated team — same people every visit',
  'After-hours scheduling — no patient disruption',
  'Monthly compliance report for your accreditation file',
  '24-hour redo guarantee if anything is missed',
  '12-month fixed rate — no price increases',
]

const differentiators = [
  {
    title: 'Built for compliance',
    detail: 'Every clean is designed around RACGP GP4.1 — not adapted from a general commercial cleaning model. Your accreditation file is ready before the reviewer arrives.',
  },
  {
    title: 'Full documentation',
    detail: 'Photo-documented checklists after every visit. Monthly compliance reports compiled and emailed. No chasing, no scrambling.',
  },
  {
    title: 'Dedicated, vetted team',
    detail: 'The same police-checked cleaners every visit. They know your layout, your zones, and your requirements without re-briefing — and they are cleared to work unsupervised after hours in clinical areas.',
  },
  {
    title: 'Adelaide local',
    detail: 'We service practices across metropolitan Adelaide — inner suburbs, eastern, southern, and northern corridors. One call, one contact, one team.',
  },
]

export default function CapabilityStatementPage() {
  return (
    <div className="capability-root">
      <div className="print-toolbar">
        <span className="toolbar-label">Zenith Facility Management — Capability Statement</span>
        <button className="print-btn" onClick={() => window.print()}>
          ↓ Save as PDF
        </button>
      </div>

      {/* ── PAGE 1 ── */}
      <div className="page cover-page">

        {/* Header bar */}
        <div className="cover-header">
          <div className="cover-logo-wrap">
            <Image src="/logo.png" alt="Zenith Facility Management" width={72} height={79} className="cover-logo" />
          </div>
          <div className="cover-header-text">
            <p className="cover-abn">ABN 55 839 625 234</p>
          </div>
        </div>

        {/* Hero content */}
        <div className="cover-hero">
          <p className="cover-eyebrow">Capability Statement</p>
          <h1 className="cover-headline">
            Where Compliance<br />
            Meets <span className="cover-accent">Clinical Excellence</span>
          </h1>
          <p className="cover-tagline">
            RACGP GP4.1 compliant medical cleaning for Adelaide's healthcare facilities — documentation-led, audit-ready, and delivered by a dedicated local team.
          </p>
          {PRACTICES_SERVED && (
            <p className="cover-stat">
              <span className="cover-stat-num">{PRACTICES_SERVED}</span>
              <span className="cover-stat-label">Adelaide practices trust Zenith with their compliance</span>
            </p>
          )}
        </div>

        {/* Credential badges */}
        <div className="cover-badges">
          {['RACGP GP4.1', 'TGA-Approved Products', 'Police-Checked Team', '$20M Public Liability', 'Adelaide Local', 'After-Hours Available', 'Photo-Documented', '24hr Redo Guarantee'].map(b => (
            <span key={b} className="cover-badge">{b}</span>
          ))}
        </div>

        {/* Noah intro */}
        <div className="cover-founder">
          <div className="founder-photo-wrap">
            <Image src="/noah.jpg" alt="Noah Zamolo — Founder" width={80} height={80} className="founder-photo" />
          </div>
          <div className="founder-text">
            <p className="founder-name">Noah Zamolo</p>
            <p className="founder-title">Founder, Zenith Facility Management</p>
            <p className="founder-quote">
              "I started Zenith because too many medical clinics weren't actually following compliance procedures — and most weren't prepared for when an audit arrived. Every client we work with gets the documentation to prove they are."
            </p>
          </div>
        </div>

        {/* Contact strip */}
        <div className="cover-contact">
          <span>0412 496 757</span>
          <span className="contact-divider">·</span>
          <span>noah@zenithfacilitymanagement.com.au</span>
          <span className="contact-divider">·</span>
          <span>zenithfacilitymanagement.com.au</span>
          <span className="contact-divider">·</span>
          <span>Adelaide, South Australia</span>
        </div>
      </div>

      {/* ── PAGE 2 ── */}
      <div className="page content-page">

        {/* Services */}
        <div className="section">
          <p className="section-eyebrow">Who We Serve</p>
          <h2 className="section-heading">Adelaide medical facilities we clean</h2>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.name} className="service-item">
                <div className="service-dot" />
                <div>
                  <p className="service-name">{s.name}</p>
                  <p className="service-detail">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="services-area">
            Servicing all metropolitan Adelaide suburbs — CBD, North Adelaide, Norwood, Burnside, Unley, Mitcham, Marion, Holdfast Bay, Port Adelaide, Tea Tree Gully, Salisbury, Campbelltown, Prospect, Glenelg, and surrounding areas.
          </p>
        </div>

        <div className="divider" />

        {/* Zone system */}
        <div className="section">
          <p className="section-eyebrow">RACGP GP4.1 Compliance</p>
          <h2 className="section-heading">Colour-coded zone cleaning system</h2>
          <p className="section-intro">
            Every room in your practice carries a different infection risk. Our zone system prevents cross-contamination by ensuring equipment from one zone never enters another — exactly as required under RACGP GP4.1.
          </p>
          <div className="zones-grid">
            {zones.map(z => (
              <div key={z.label} className="zone-card" style={{ borderTop: `3px solid ${z.colour}` }}>
                <div className="zone-dot" style={{ backgroundColor: z.colour }} />
                <p className="zone-label" style={{ color: z.colour }}>{z.label}</p>
                <p className="zone-name">{z.name}</p>
                <p className="zone-note">{z.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* What's included */}
        <div className="section">
          <p className="section-eyebrow">Every Engagement</p>
          <h2 className="section-heading">What's included as standard</h2>
          <div className="included-grid">
            {included.map(item => (
              <div key={item} className="included-item">
                <div className="included-check">✓</div>
                <p className="included-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAGE 3 ── */}
      <div className="page content-page">

        {/* Why Zenith */}
        <div className="section">
          <p className="section-eyebrow">Why Zenith</p>
          <h2 className="section-heading">What makes us different</h2>
          <div className="diff-grid">
            {differentiators.map(d => (
              <div key={d.title} className="diff-card">
                <p className="diff-title">{d.title}</p>
                <p className="diff-detail">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Process */}
        <div className="section">
          <p className="section-eyebrow">Getting Started</p>
          <h2 className="section-heading">How we onboard your practice</h2>
          <div className="process-steps">
            {[
              { n: '01', title: 'Free compliance walkthrough', detail: 'We visit your practice and walk every room against RACGP GP4.1. You receive a written gap report — no cost, no obligation.' },
              { n: '02', title: 'Zone mapping & quote', detail: 'We map your practice into RACGP colour zones and provide a fixed monthly quote based on your size, frequency, and requirements.' },
              { n: '03', title: 'Team briefing & first clean', detail: 'Your dedicated team completes a site induction, then begins your cleaning schedule — fully documented from day one.' },
              { n: '04', title: 'Ongoing compliance reporting', detail: 'Monthly compliance reports emailed to you. Your accreditation file grows automatically with every clean.' },
            ].map(step => (
              <div key={step.n} className="process-step">
                <div className="step-number">{step.n}</div>
                <div className="step-content">
                  <p className="step-title">{step.title}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Compliance credentials */}
        <div className="section">
          <p className="section-eyebrow">Credentials & Coverage</p>
          <div className="credentials-grid">
            <div className="credential-card">
              <p className="cred-label">Compliance Standard</p>
              <p className="cred-value">RACGP GP4.1</p>
              <p className="cred-sub">Standards for General Practices — infection prevention & control</p>
            </div>
            <div className="credential-card">
              <p className="cred-label">Insurance</p>
              <p className="cred-value">Comprehensively Insured</p>
              <p className="cred-sub">$20M public liability, workers compensation & professional indemnity — certificates on request</p>
            </div>
            <div className="credential-card">
              <p className="cred-label">Personnel</p>
              <p className="cred-value">Police-Checked</p>
              <p className="cred-sub">Every cleaner vetted and cleared to work unsupervised in clinical areas</p>
            </div>
            <div className="credential-card">
              <p className="cred-label">Products</p>
              <p className="cred-value">TGA-Approved</p>
              <p className="cred-sub">Hospital-grade disinfectants appropriate to each zone</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta">
          <div className="final-cta-inner">
            <p className="final-cta-heading">Book your free RACGP compliance walkthrough</p>
            <p className="final-cta-sub">No cost. No obligation. A clear picture of where your practice stands — and what needs to change before your next review.</p>
            <div className="final-contact">
              <span className="final-contact-item">📞 0412 496 757</span>
              <span className="final-contact-item">✉ noah@zenithfacilitymanagement.com.au</span>
              <span className="final-contact-item">🌐 zenithfacilitymanagement.com.au</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .capability-root {
          font-family: var(--font-dm-sans), 'DM Sans', -apple-system, sans-serif;
          background: #e5e7eb;
          padding: 0 20px 40px;
          min-height: 100vh;
        }

        .print-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: #0D1F3C;
          position: sticky;
          top: 0;
          z-index: 100;
          margin: 0 -20px 32px;
        }

        .toolbar-label {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        .print-btn {
          background: #2A7FBC;
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .print-btn:hover { opacity: 0.85; }

        .page {
          width: 210mm;
          height: 297mm;
          margin: 0 auto 32px;
          background: #fff;
          box-shadow: 0 4px 32px rgba(0,0,0,0.12);
          position: relative;
          overflow: hidden;
        }

        /* ── COVER PAGE ── */
        .cover-page {
          background: #0D1F3C;
          display: flex;
          flex-direction: column;
          padding: 0;
          height: 297mm;
          justify-content: space-between;
          overflow: hidden;
        }

        .cover-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 36px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .cover-logo-wrap { display: flex; align-items: center; gap: 12px; }
        .cover-logo { object-fit: contain; }
        .cover-abn { color: rgba(255,255,255,0.3); font-size: 10px; letter-spacing: 0.05em; }

        .cover-hero {
          padding: 40px 36px 28px;
          flex: 1;
        }

        .cover-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #2A7FBC;
          margin-bottom: 16px;
        }

        .cover-headline {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 42px;
          font-weight: 700;
          color: #fff;
          line-height: 1.08;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .cover-accent { color: #2A7FBC; }

        .cover-tagline {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 480px;
        }

        .cover-stat {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-top: 24px;
        }

        .cover-stat-num {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 40px;
          font-weight: 700;
          color: #2A7FBC;
          line-height: 1;
        }

        .cover-stat-label {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255,255,255,0.55);
          max-width: 220px;
        }

        .cover-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 36px 32px;
        }

        .cover-badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(42,127,188,0.15);
          color: #2A7FBC;
          border: 1px solid rgba(42,127,188,0.3);
        }

        .cover-founder {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin: 0 36px 32px;
          padding: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
        }

        .founder-photo-wrap {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(42,127,188,0.4);
        }

        .founder-photo { width: 64px; height: 64px; object-fit: cover; object-position: top; }

        .founder-name {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
        }

        .founder-title {
          font-size: 11px;
          color: #2A7FBC;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .founder-quote {
          font-size: 12px;
          line-height: 1.6;
          color: rgba(255,255,255,0.55);
          font-style: italic;
        }

        .cover-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 0;
          align-items: center;
          padding: 16px 36px;
          background: rgba(42,127,188,0.1);
          border-top: 1px solid rgba(42,127,188,0.2);
          font-size: 11px;
          color: rgba(255,255,255,0.5);
        }

        .contact-divider { margin: 0 10px; color: rgba(255,255,255,0.2); }

        /* ── CONTENT PAGES ── */
        .content-page {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .section { margin-bottom: 24px; }

        .section-eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2A7FBC;
          margin-bottom: 6px;
        }

        .section-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0D1F3C;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .section-intro {
          font-size: 12px;
          line-height: 1.65;
          color: #6B7A8D;
          margin-bottom: 14px;
          max-width: 520px;
        }

        .divider {
          height: 1px;
          background: rgba(13,31,60,0.07);
          margin: 4px 0 24px;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .service-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px 12px;
          background: #F7F9FC;
          border-radius: 8px;
          border: 1px solid rgba(13,31,60,0.06);
        }

        .service-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2A7FBC;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .service-name {
          font-size: 11px;
          font-weight: 700;
          color: #0D1F3C;
          margin-bottom: 2px;
        }

        .service-detail {
          font-size: 10px;
          color: #9CA3AF;
          line-height: 1.4;
        }

        .services-area {
          font-size: 11px;
          color: #6B7A8D;
          line-height: 1.6;
          padding: 10px 12px;
          background: rgba(42,127,188,0.05);
          border-left: 3px solid #2A7FBC;
          border-radius: 0 6px 6px 0;
        }

        /* Zones */
        .zones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .zone-card {
          padding: 12px;
          background: #F7F9FC;
          border-radius: 8px;
          border: 1px solid rgba(13,31,60,0.06);
        }

        .zone-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-bottom: 6px;
        }

        .zone-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .zone-name {
          font-size: 11px;
          font-weight: 700;
          color: #0D1F3C;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .zone-note {
          font-size: 9.5px;
          color: #9CA3AF;
          line-height: 1.4;
        }

        /* Included */
        .included-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .included-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .included-check {
          font-size: 11px;
          color: #1F7A5C;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .included-text {
          font-size: 11px;
          color: #374151;
          line-height: 1.5;
        }

        /* Differentiators */
        .diff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .diff-card {
          padding: 14px;
          background: #F7F9FC;
          border-radius: 8px;
          border: 1px solid rgba(13,31,60,0.06);
        }

        .diff-title {
          font-size: 12px;
          font-weight: 700;
          color: #0D1F3C;
          margin-bottom: 5px;
        }

        .diff-detail {
          font-size: 11px;
          color: #6B7A8D;
          line-height: 1.55;
        }

        /* Process */
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .process-step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .step-number {
          font-family: var(--font-dm-mono), 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          color: #2A7FBC;
          flex-shrink: 0;
          width: 24px;
          margin-top: 1px;
        }

        .step-title {
          font-size: 12px;
          font-weight: 700;
          color: #0D1F3C;
          margin-bottom: 3px;
        }

        .step-detail {
          font-size: 11px;
          color: #6B7A8D;
          line-height: 1.5;
        }

        /* Credentials */
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .credential-card {
          padding: 12px;
          background: #0D1F3C;
          border-radius: 8px;
          text-align: center;
        }

        .cred-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 5px;
        }

        .cred-value {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .cred-sub {
          font-size: 9.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.4;
        }

        /* Final CTA */
        .final-cta {
          margin-top: 20px;
          background: linear-gradient(135deg, #1B6CA8 0%, #0D1F3C 100%);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .final-cta-heading {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .final-cta-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          max-width: 420px;
          margin: 0 auto 16px;
        }

        .final-contact {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .final-contact-item {
          font-size: 11px;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
        }

        /* ── PRINT STYLES ── */
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { margin: 0; background: #fff; }
          .capability-root { background: none; padding: 0; }
          .print-toolbar { display: none; }
          .page {
            margin: 0;
            box-shadow: none;
            page-break-after: always;
            width: 100%;
            min-height: auto;
          }
          .page:last-child { page-break-after: avoid; }
        }

        @page {
          size: A4;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
