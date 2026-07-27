'use client'

import { useEffect, useRef, useState } from 'react'
import { EstimateData } from './EstimateFlow'
import { calculateEstimate } from '../../lib/pricing'
import { sendLeadToGHL } from '../../lib/ghl'

interface Props {
  data: EstimateData
  onReset: () => void
}

// Draw the donut chart on canvas
function drawDonut(
  canvas: HTMLCanvasElement,
  segments: { value: number; color: string }[],
  total: number
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const size = canvas.offsetWidth
  canvas.width = size * dpr
  canvas.height = size * dpr
  ctx.scale(dpr, dpr)

  const cx = size / 2
  const cy = size / 2
  const outerR = size * 0.43
  const innerR = size * 0.28
  const gap = 0.025

  let startAngle = -Math.PI / 2

  segments.forEach(seg => {
    const fraction = seg.value / total
    const sweep = fraction * Math.PI * 2 - gap
    ctx.beginPath()
    ctx.moveTo(cx + outerR * Math.cos(startAngle), cy + outerR * Math.sin(startAngle))
    ctx.arc(cx, cy, outerR, startAngle, startAngle + sweep)
    ctx.arc(cx, cy, innerR, startAngle + sweep, startAngle, true)
    ctx.closePath()
    ctx.fillStyle = seg.color
    ctx.fill()
    startAngle += sweep + gap
  })
}

export default function StepResult({ data, onReset }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(false)
  const sentRef = useRef(false)
  const estimate = calculateEstimate(data)

  const segments = [
    { label: 'Service delivery', sub: 'Cleaning team, products & equipment on-site', value: estimate.service, color: '#0D1F3C' },
    { label: 'Compliance', sub: 'RACGP systems, TGA products, colour-coded zones', value: estimate.compliance, color: '#1B6CA8' },
    { label: 'Quality assurance', sub: 'Inspections, walkthroughs, reporting', value: estimate.quality, color: '#E8A020' },
    { label: 'Admin & insurance', sub: 'Cover, scheduling, account management', value: estimate.admin, color: '#C0392B' },
  ]

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  // Fire lead into GHL once, on result screen load
  useEffect(() => {
    if (sentRef.current) return
    sentRef.current = true
    sendLeadToGHL(data, estimate)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'estimate_completed', {
        event_category: 'engagement',
        event_label: data.spaceType,
        value: estimate.monthlyTotal,
      })
    }
  }, [data, estimate])

  useEffect(() => {
    if (!canvasRef.current) return
    drawDonut(canvasRef.current, segments, estimate.monthlyTotal)
  }, [estimate])

  const fmt = (n: number) => `$${n.toLocaleString()}`

  return (
    <div className={`result ${visible ? 'visible' : ''}`}>
      {/* Chart area */}
      <div className="chart-row">
        <div className="donut-wrap">
          <canvas ref={canvasRef} className="donut-canvas" />
          <div className="donut-centre">
            <span className="donut-total">~{fmt(estimate.monthlyTotal)}</span>
            <span className="donut-label">per month ex GST</span>
          </div>
        </div>

        <div className="legend">
          {segments.map(s => (
            <div key={s.label} className="legend-item">
              <span className="legend-dot" style={{ background: s.color }} />
              <div className="legend-content">
                <span className="legend-amount">{fmt(s.value)}</span>
                <span className="legend-title">{s.label}</span>
                <span className="legend-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total banner */}
      <div className="total-banner">
        <p className="banner-eyebrow">YOUR ESTIMATED MONTHLY INVESTMENT</p>
        <p className="banner-total">{fmt(estimate.rangeLow)} – {fmt(estimate.rangeHigh)}</p>
        <p className="banner-sub">
          That's ~{fmt(estimate.perVisit)} per visit · {estimate.visitsPerMonth} visits/month
        </p>
        <p className="banner-gst">
          {fmt(Math.round(estimate.rangeLow * 1.1))} – {fmt(Math.round(estimate.rangeHigh * 1.1))}/month inc. GST
        </p>
      </div>

      {/* Trust signals */}
      <div className="trust-grid">
        {[
          { icon: '✓', title: 'RACGP GP4.1 compliant', sub: 'Colour-coded zones, TGA-approved products' },
          { icon: '🛡', title: '$20M public liability', sub: 'Full coverage for medical environments' },
          { icon: '🔍', title: 'Compliance walkthroughs', sub: 'Regular quality checks on-site' },
          { icon: '☎', title: 'Dedicated contact', sub: 'One person to call — not a call centre' },
        ].map(t => (
          <div key={t.title} className="trust-item">
            <span className="trust-icon">{t.icon}</span>
            <div>
              <span className="trust-title">{t.title}</span>
              <span className="trust-sub">{t.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        <strong>This is an estimate.</strong> Final pricing is confirmed after a free compliance walkthrough where we assess access, infection-control requirements, and any specialist needs. No obligation.
      </div>

      {/* CTA */}
      <div className="cta-section">
        <p className="cta-headline">Like what you see? Let's walk the site and lock in the details.</p>
        <a href="/contact?source=estimate" className="cta-btn">
          Book your free RACGP compliance walkthrough →
        </a>
        <button className="reset-btn" onClick={onReset}>Start over</button>
      </div>

      <style jsx>{`
        .result {
          width: 100%;
          max-width: 640px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .result.visible { opacity: 1; transform: translateY(0); }

        .chart-row {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 24px;
        }

        @media (max-width: 540px) {
          .chart-row { flex-direction: column; align-items: flex-start; }
        }

        .donut-wrap {
          position: relative;
          flex-shrink: 0;
          width: 160px;
          height: 160px;
        }

        .donut-canvas {
          width: 160px;
          height: 160px;
          display: block;
        }

        .donut-centre {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
        }

        .donut-total {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: #0D1F3C;
          line-height: 1.1;
        }

        .donut-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          color: #9CA3AF;
          margin-top: 2px;
        }

        .legend {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legend-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .legend-content {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .legend-amount {
          font-family: var(--font-dm-mono), monospace;
          font-size: 13px;
          font-weight: 600;
          color: #0D1F3C;
        }

        .legend-title {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
        }

        .legend-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #9CA3AF;
          line-height: 1.4;
        }

        .total-banner {
          background: #0D1F3C;
          color: #fff;
          padding: 28px 28px 24px;
          text-align: center;
          margin-bottom: 20px;
          border-radius: 2px;
        }

        .banner-eyebrow {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          opacity: 0.55;
          margin: 0 0 10px;
        }

        .banner-total {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(1.5rem, 5vw, 2.4rem);
          font-weight: 700;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .banner-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          opacity: 0.7;
          margin: 0 0 4px;
        }

        .banner-gst {
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          opacity: 0.4;
          margin: 0;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        @media (max-width: 480px) {
          .trust-grid { grid-template-columns: 1fr; }
        }

        .trust-item {
          background: #fff;
          border: 1px solid rgba(13,31,60,0.1);
          padding: 14px 14px;
          border-radius: 2px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .trust-icon {
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .trust-title {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #0D1F3C;
          margin-bottom: 2px;
        }

        .trust-sub {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #9CA3AF;
          line-height: 1.4;
        }

        .disclaimer {
          background: #FFFBEB;
          border-left: 3px solid #E8A020;
          padding: 13px 16px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #4A5568;
          line-height: 1.6;
          margin-bottom: 28px;
          border-radius: 0 2px 2px 0;
        }

        .cta-section {
          text-align: center;
          padding-bottom: 48px;
        }

        .cta-headline {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin: 0 0 16px;
        }

        .cta-btn {
          display: inline-block;
          background: #1B6CA8;
          color: #fff;
          text-decoration: none;
          padding: 16px 28px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
          margin-bottom: 16px;
        }

        .cta-btn:hover {
          background: #155a90;
          transform: translateY(-1px);
        }

        .reset-btn {
          display: block;
          margin: 0 auto;
          background: none;
          border: none;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #9CA3AF;
          cursor: pointer;
          text-decoration: underline;
          padding: 4px;
        }

        .reset-btn:hover { color: #0D1F3C; }
      `}</style>
    </div>
  )
}
