'use client'

import { useEffect, useState } from 'react'

interface Props {
  onStart: () => void
}

export default function StepSplash({ onStart }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`splash ${visible ? 'visible' : ''}`}>
      <div className="brand-tag">ZENITH FACILITY MANAGEMENT</div>
      <h1 className="headline">
        See what your{' '}
        <em>RACGP-compliant</em>{' '}
        clean actually costs.
      </h1>
      <p className="sub">
        No hidden margins. No mystery pricing. A full cost breakdown
        built for your practice — in under a minute.
      </p>
      <button className="start-btn" onClick={onStart}>
        Get started →
      </button>
      <p className="disclaimer">Takes about 60 seconds. No obligation.</p>

      <style jsx>{`
        .splash {
          text-align: center;
          max-width: 560px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .splash.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .brand-tag {
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #0D1F3C;
          opacity: 0.55;
          margin-bottom: 28px;
        }

        .headline {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #0D1F3C;
          line-height: 1.2;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .headline em {
          font-style: italic;
          color: #1B6CA8;
        }

        .sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          color: #4A5568;
          line-height: 1.65;
          max-width: 420px;
          margin: 0 auto 40px;
        }

        .start-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0D1F3C;
          color: #fff;
          border: none;
          padding: 16px 36px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          border-radius: 2px;
        }

        .start-btn:hover {
          background: #1a3060;
          transform: translateY(-1px);
        }

        .disclaimer {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin-top: 16px;
        }
      `}</style>
    </div>
  )
}
