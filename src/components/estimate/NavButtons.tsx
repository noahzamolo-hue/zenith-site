'use client'

interface Props {
  onBack: () => void
  onNext: () => void
  nextDisabled?: boolean
  nextLabel?: string
}

export default function NavButtons({
  onBack,
  onNext,
  nextDisabled = false,
  nextLabel = 'Next →',
}: Props) {
  return (
    <div className="nav">
      <button className="back-btn" onClick={onBack} aria-label="Go back">
        ←
      </button>
      <button
        className={`next-btn ${nextDisabled ? 'disabled' : ''}`}
        onClick={onNext}
        disabled={nextDisabled}
      >
        {nextLabel}
      </button>

      <style jsx>{`
        .nav {
          display: flex;
          gap: 10px;
          align-items: stretch;
        }

        .back-btn {
          background: #fff;
          border: 1.5px solid rgba(13,31,60,0.18);
          color: #0D1F3C;
          padding: 14px 18px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }

        .back-btn:hover {
          border-color: rgba(13,31,60,0.4);
        }

        .next-btn {
          flex: 1;
          background: #0D1F3C;
          color: #fff;
          border: none;
          padding: 16px 28px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }

        .next-btn:hover:not(.disabled) {
          background: #1a3060;
          transform: translateY(-1px);
        }

        .next-btn.disabled {
          background: rgba(13,31,60,0.25);
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}
