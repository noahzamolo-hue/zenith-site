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

const ALL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const QUICK_PRESETS = [
  { label: 'Daily', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], sub: '7 days' },
  { label: 'Weekdays', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], sub: '5 days' },
  { label: '3× per week', days: ['Mon', 'Wed', 'Fri'], sub: 'Best balance' },
  { label: 'Weekly', days: ['Mon'], sub: 'Once a week' },
]

export default function StepFrequency({ data, onChange, onBack, onNext }: Props) {
  const [visible, setVisible] = useState(false)
  const selectedDays = data.selectedDays || []

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const toggleDay = (day: string) => {
    const current = selectedDays
    const next = current.includes(day)
      ? current.filter(d => d !== day)
      : [...current, day]
    // Keep order
    const ordered = ALL_DAYS.filter(d => next.includes(d))
    onChange({ selectedDays: ordered, daysPerWeek: ordered.length })
  }

  const applyPreset = (days: string[]) => {
    onChange({ selectedDays: days, daysPerWeek: days.length })
  }

  const count = selectedDays.length

  const getFrequencyNote = (n: number) => {
    if (n === 0) return 'Select at least one day'
    if (n === 7) return 'Full coverage — every day'
    if (n >= 5) return 'High frequency — clinical standard'
    if (n === 3) return 'Best balance of cost and hygiene'
    if (n === 2) return 'Twice-weekly coverage'
    return 'Once a week'
  }

  return (
    <div className={`step ${visible ? 'visible' : ''}`}>
      <h2 className="question">How often?</h2>
      <p className="hint">More frequent cleaning = lower per-visit cost and better-maintained premises.</p>

      {/* Quick presets */}
      <div className="presets">
        {QUICK_PRESETS.map(p => {
          const active =
            p.days.length === selectedDays.length &&
            p.days.every(d => selectedDays.includes(d))
          return (
            <button
              key={p.label}
              className={`preset-btn ${active ? 'active' : ''}`}
              onClick={() => applyPreset(p.days)}
            >
              {p.label}
              <span className="preset-sub">{p.sub}</span>
            </button>
          )
        })}
      </div>

      {/* Or custom */}
      <p className="custom-label">Or pick specific days</p>
      <div className="day-grid">
        {ALL_DAYS.map(day => (
          <button
            key={day}
            className={`day-btn ${selectedDays.includes(day) ? 'selected' : ''}`}
            onClick={() => toggleDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="summary">
        <span className="summary-count">{count}</span>
        <span className="summary-text">
          {count === 1 ? 'day per week' : 'days per week'} —{' '}
          {getFrequencyNote(count)}
        </span>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={count === 0} />

      <style jsx>{`
        .step {
          width: 100%;
          max-width: 500px;
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
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .presets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 20px;
        }

        .preset-btn {
          border: 1.5px solid rgba(13,31,60,0.13);
          background: #fff;
          padding: 13px 14px;
          text-align: left;
          cursor: pointer;
          border-radius: 2px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #0D1F3C;
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: border-color 0.2s, background 0.2s;
        }

        .preset-btn:hover {
          border-color: rgba(13,31,60,0.35);
        }

        .preset-btn.active {
          border-color: #0D1F3C;
          background: #F0F4FA;
        }

        .preset-sub {
          font-size: 11px;
          font-weight: 400;
          color: #9CA3AF;
        }

        .custom-label {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: #0D1F3C;
          opacity: 0.45;
          text-transform: uppercase;
          margin: 0 0 12px;
        }

        .day-grid {
          display: flex;
          gap: 7px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .day-btn {
          border: 1.5px solid rgba(13,31,60,0.15);
          background: #fff;
          padding: 9px 14px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: #0D1F3C;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.15s;
        }

        .day-btn:hover {
          border-color: rgba(13,31,60,0.35);
          background: #F9FAFB;
        }

        .day-btn.selected {
          background: #0D1F3C;
          border-color: #0D1F3C;
          color: #fff;
        }

        .summary {
          display: flex;
          align-items: baseline;
          gap: 10px;
          padding: 14px 16px;
          background: rgba(13,31,60,0.04);
          border-left: 3px solid #0D1F3C;
          margin-bottom: 28px;
        }

        .summary-count {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #0D1F3C;
          line-height: 1;
        }

        .summary-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 13px;
          color: #4A5568;
        }
      `}</style>
    </div>
  )
}
