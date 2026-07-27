'use client'

import { useState, useEffect } from 'react'
import { EstimateData } from './EstimateFlow'
import NavButtons from './NavButtons'

interface Props {
  data: Partial<EstimateData>
  onChange: (d: Partial<EstimateData>) => void
  onNext: () => void
  onBack: () => void
}

export default function StepDetails({ data, onChange, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const valid = !!(data.name && data.practice && data.email && data.phone)

  return (
    <div className={`step ${visible ? 'visible' : ''}`}>
      <h2 className="question">Who's this quote for?</h2>
      <p className="hint">We'll send your breakdown by email — no spam, just your numbers.</p>

      <div className="grid">
        <div className="field">
          <label>Your name</label>
          <input
            type="text"
            value={data.name || ''}
            onChange={e => onChange({ name: e.target.value })}
            placeholder="Jane Smith"
          />
        </div>
        <div className="field">
          <label>Practice / Business</label>
          <input
            type="text"
            value={data.practice || ''}
            onChange={e => onChange({ practice: e.target.value })}
            placeholder="Adelaide Family Medical"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={data.email || ''}
            onChange={e => onChange({ email: e.target.value })}
            placeholder="jane@practice.com.au"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={e => onChange({ phone: e.target.value })}
            placeholder="04xx xxx xxx"
          />
        </div>
      </div>

      <p className="consent">
        By continuing, you agree to Zenith Facility Management contacting you about this quote. We won't share your details with anyone else.
      </p>

      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!valid} />

      <style jsx>{`
        .step {
          width: 100%;
          max-width: 540px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .step.visible { opacity: 1; transform: translateY(0); }

        .question {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 700;
          color: #0D1F3C;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .hint {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: #6B7280;
          margin: 0 0 32px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }

        @media (max-width: 480px) {
          .grid { grid-template-columns: 1fr; }
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: #0D1F3C;
          opacity: 0.55;
          text-transform: uppercase;
        }

        input {
          border: 1px solid rgba(13, 31, 60, 0.18);
          background: #fff;
          padding: 13px 15px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          color: #0D1F3C;
          outline: none;
          border-radius: 2px;
          transition: border-color 0.2s;
        }

        input:focus {
          border-color: #0D1F3C;
        }

        input::placeholder {
          color: #C4C9D4;
        }

        .consent {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #9CA3AF;
          line-height: 1.6;
          margin-bottom: 28px;
        }
      `}</style>
    </div>
  )
}
