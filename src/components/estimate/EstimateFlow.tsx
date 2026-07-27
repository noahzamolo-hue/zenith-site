'use client'

import { useState } from 'react'
import StepSplash from './StepSplash'
import StepDetails from './StepDetails'
import StepSpaceType from './StepSpaceType'
import StepSize from './StepSize'
import StepFrequency from './StepFrequency'
import StepTiming from './StepTiming'
import StepResult from './StepResult'

export type EstimateData = {
  name: string
  practice: string
  email: string
  phone: string
  spaceType: string
  sizeSqm: number
  daysPerWeek: number
  selectedDays: string[]
  timing: 'business' | 'after-hours'
}

export type Step = 'splash' | 'details' | 'space' | 'size' | 'frequency' | 'timing' | 'result'

const STEP_ORDER: Step[] = ['splash', 'details', 'space', 'size', 'frequency', 'timing', 'result']

const STEP_LABELS: Record<Step, string> = {
  splash: '',
  details: 'YOUR DETAILS',
  space: 'PREMISES',
  size: 'SIZE',
  frequency: 'FREQUENCY',
  timing: 'TIMING',
  result: 'YOUR ESTIMATE',
}

const STEP_NUMBERS: Partial<Record<Step, number>> = {
  details: 1,
  space: 2,
  size: 3,
  frequency: 4,
  timing: 5,
}

export default function EstimateFlow() {
  const [step, setStep] = useState<Step>('splash')
  const [data, setData] = useState<Partial<EstimateData>>({
    sizeSqm: 200,
    daysPerWeek: 3,
    selectedDays: ['Mon', 'Wed', 'Fri'],
  })

  const currentIndex = STEP_ORDER.indexOf(step)
  const progress = step === 'splash' ? 0 : (currentIndex / (STEP_ORDER.length - 2)) * 100

  const next = () => {
    const next = STEP_ORDER[currentIndex + 1]
    if (next) setStep(next)
  }

  const back = () => {
    const prev = STEP_ORDER[currentIndex - 1]
    if (prev) setStep(prev)
  }

  const update = (partial: Partial<EstimateData>) => {
    setData(prev => ({ ...prev, ...partial }))
  }

  const reset = () => {
    setStep('splash')
    setData({ sizeSqm: 200, daysPerWeek: 3, selectedDays: ['Mon', 'Wed', 'Fri'] })
  }

  const stepNum = STEP_NUMBERS[step]
  const stepLabel = STEP_LABELS[step]

  return (
    <div className="zenith-estimate-wrapper">
      {/* Progress bar */}
      {step !== 'splash' && step !== 'result' && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Step label */}
      {stepNum && (
        <div className="step-label">
          <span className="step-num">0{stepNum}</span>
          <span className="step-dash">—</span>
          <span className="step-name">{stepLabel}</span>
        </div>
      )}

      {/* Steps */}
      <div className="step-container">
        {step === 'splash' && <StepSplash onStart={next} />}
        {step === 'details' && (
          <StepDetails data={data} onChange={update} onNext={next} onBack={back} />
        )}
        {step === 'space' && (
          <StepSpaceType data={data} onChange={update} onNext={next} onBack={back} />
        )}
        {step === 'size' && (
          <StepSize data={data} onChange={update} onNext={next} onBack={back} />
        )}
        {step === 'frequency' && (
          <StepFrequency data={data} onChange={update} onNext={next} onBack={back} />
        )}
        {step === 'timing' && (
          <StepTiming data={data} onChange={update} onNext={next} onBack={back} />
        )}
        {step === 'result' && (
          <StepResult data={data as EstimateData} onReset={reset} />
        )}
      </div>

      <style jsx>{`
        .zenith-estimate-wrapper {
          min-height: 100vh;
          background-color: #F7F6F2;
          font-family: var(--font-playfair), Georgia, serif;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(13, 31, 60, 0.12);
          z-index: 100;
        }

        .progress-fill {
          height: 100%;
          background: #0D1F3C;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-label {
          position: fixed;
          top: 130px;
          left: 32px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #0D1F3C;
          opacity: 0.6;
          z-index: 100;
        }

        .step-container {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 160px 32px 100px;
        }
      `}</style>
    </div>
  )
}
