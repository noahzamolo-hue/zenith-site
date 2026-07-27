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

const SPACE_TYPES = [
  { id: 'gp-practice', label: 'GP Practice', icon: '🏥', desc: 'General practice / bulk billing' },
  { id: 'specialist-clinic', label: 'Specialist Clinic', icon: '⚕️', desc: 'Specialist rooms / consulting' },
  { id: 'allied-health', label: 'Allied Health', icon: '🩺', desc: 'Physio, dental, psychology etc.' },
  { id: 'medical-centre', label: 'Medical Centre', icon: '🏢', desc: 'Multi-practice or large centre' },
  { id: 'day-surgery', label: 'Day Surgery', icon: '🔬', desc: 'Procedure rooms / theatre' },
  { id: 'other', label: 'Other', icon: '📋', desc: 'Something else — we\'ll discuss' },
]

export default function StepSpaceType({ data, onChange, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const select = (id: string) => {
    onChange({ spaceType: id })
  }

  return (
    <div className={`step ${visible ? 'visible' : ''}`}>
      <h2 className="question">What kind of space?</h2>
      <p className="hint">Pick the closest match.</p>

      <div className="grid">
        {SPACE_TYPES.map((s, i) => (
          <button
            key={s.id}
            className={`card ${data.spaceType === s.id ? 'selected' : ''}`}
            onClick={() => select(s.id)}
          >
            <span className="card-num">{i + 1}</span>
            <span className="card-icon">{s.icon}</span>
            <span className="card-label">{s.label}</span>
            <span className="card-desc">{s.desc}</span>
          </button>
        ))}
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.spaceType} />

      <style jsx>{`
        .step {
          width: 100%;
          max-width: 560px;
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
          margin: 0 0 28px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }

        @media (max-width: 480px) {
          .grid { grid-template-columns: 1fr; }
        }

        .card {
          position: relative;
          background: #fff;
          border: 1.5px solid rgba(13, 31, 60, 0.13);
          padding: 18px 16px 16px;
          text-align: left;
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card:hover {
          border-color: rgba(13, 31, 60, 0.35);
          transform: translateY(-1px);
        }

        .card.selected {
          border-color: #0D1F3C;
          background: #F0F4FA;
        }

        .card-num {
          position: absolute;
          top: 10px;
          right: 12px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          color: #C4C9D4;
          letter-spacing: 0.05em;
        }

        .card-icon {
          font-size: 22px;
          line-height: 1;
          margin-bottom: 4px;
        }

        .card-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0D1F3C;
        }

        .card-desc {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          line-height: 1.4;
        }
      `}</style>
    </div>
  )
}
