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

export default function StepTiming({ data, onChange, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`step ${visible ? 'visible' : ''}`}>
      <h2 className="question">When should we clean?</h2>
      <p className="hint">After-hours avoids disruption to patients and staff — but has penalty rates built in.</p>

      <div className="options">
        <button
          className={`option ${data.timing === 'business' ? 'selected' : ''}`}
          onClick={() => onChange({ timing: 'business' })}
        >
          <span className="opt-icon">☀️</span>
          <div className="opt-content">
            <span className="opt-label">Business hours</span>
            <span className="opt-sub">Standard rates</span>
          </div>
          <span className="opt-num">1</span>
        </button>

        <button
          className={`option ${data.timing === 'after-hours' ? 'selected' : ''}`}
          onClick={() => onChange({ timing: 'after-hours' })}
        >
          <span className="opt-icon">🌙</span>
          <div className="opt-content">
            <span className="opt-label">After hours</span>
            <span className="opt-sub">Evening / overnight — zero disruption</span>
          </div>
          <span className="opt-num">2</span>
        </button>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="See my breakdown →" nextDisabled={!data.timing} />

      <style jsx>{`
        .step {
          width: 100%;
          max-width: 480px;
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
          line-height: 1.6;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }

        .option {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          background: #fff;
          border: 1.5px solid rgba(13,31,60,0.13);
          padding: 20px 20px;
          text-align: left;
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }

        .option:hover {
          border-color: rgba(13,31,60,0.35);
          transform: translateY(-1px);
        }

        .option.selected {
          border-color: #0D1F3C;
          background: #F0F4FA;
        }

        .opt-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .opt-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }

        .opt-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0D1F3C;
        }

        .opt-sub {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          color: #9CA3AF;
        }

        .opt-num {
          position: absolute;
          top: 12px;
          right: 14px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          color: #C4C9D4;
        }
      `}</style>
    </div>
  )
}
