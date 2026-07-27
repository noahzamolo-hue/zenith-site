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

function getSizeLabel(sqm: number): string {
  if (sqm < 100) return 'Small practice'
  if (sqm < 250) return 'Standard GP clinic'
  if (sqm < 500) return 'Mid-size premises'
  if (sqm < 800) return 'Large clinic'
  return 'Medical centre'
}

// Logarithmic scale: 50–1500m²
function sliderToSqm(val: number): number {
  const min = Math.log(50)
  const max = Math.log(1500)
  return Math.round(Math.exp(min + (val / 100) * (max - min)))
}

function sqmToSlider(sqm: number): number {
  const min = Math.log(50)
  const max = Math.log(1500)
  return Math.round(((Math.log(sqm) - min) / (max - min)) * 100)
}

export default function StepSize({ data, onChange, onNext, onBack }: Props) {
  const [visible, setVisible] = useState(false)
  const sqm = data.sizeSqm || 200

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ sizeSqm: sliderToSqm(Number(e.target.value)) })
  }

  return (
    <div className={`step ${visible ? 'visible' : ''}`}>
      <h2 className="question">How big is the space?</h2>
      <p className="hint">Drag to estimate — we'll confirm during the site visit.</p>

      <div className="display">
        <span className="sqm-number">{sqm.toLocaleString()}</span>
        <span className="sqm-unit">m²</span>
      </div>
      <p className="size-label">{getSizeLabel(sqm)}</p>

      <div className="slider-wrap">
        <input
          type="range"
          min={0}
          max={100}
          value={sqmToSlider(sqm)}
          onChange={handleSlider}
          className="slider"
        />
        <div className="slider-bounds">
          <span>50 m²</span>
          <span>1,500 m²</span>
        </div>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} />

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
          margin: 0 0 40px;
        }

        .display {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .sqm-number {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: #0D1F3C;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .sqm-unit {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 18px;
          color: #6B7280;
          padding-bottom: 10px;
        }

        .size-label {
          text-align: center;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #9CA3AF;
          margin: 0 0 36px;
        }

        .slider-wrap {
          margin-bottom: 32px;
        }

        .slider {
          width: 100%;
          -webkit-appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            #0D1F3C 0%,
            #0D1F3C ${sqmToSlider(sqm)}%,
            rgba(13,31,60,0.15) ${sqmToSlider(sqm)}%,
            rgba(13,31,60,0.15) 100%
          );
          outline: none;
          cursor: pointer;
          border-radius: 2px;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0D1F3C;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(13,31,60,0.25);
          transition: transform 0.15s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .slider-bounds {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          color: #9CA3AF;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  )
}
