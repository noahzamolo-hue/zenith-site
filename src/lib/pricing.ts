import { EstimateData } from '../components/estimate/EstimateFlow'

/* ─────────────────────────────────────────────────────────────
   PRICING MODEL — Adelaide medical cleaning

   Rates target the Adelaide market (2025/26 benchmarks: standard
   commercial $33–55/hr, medical $55–80/hr nationally, small clinic
   $500–1,500/mo, medium centre $1,500–5,000/mo):

     weekday business  $59/hr
     weekday evening   $65/hr
     Saturday          $79/hr
     Sunday            $95/hr   (≈ wage pass-through — don't discount)

   Zenith retains 30%; the contractor (a supervisor employing
   cleaners at Cleaning Services Award MA000022 rates, ~$36–65/hr
   loaded depending on penalties) keeps 70% of the fixed monthly
   price. His margin lives in the gap between QUOTED hours (1.5 hr
   minimum callout, conservative productivity below) and ACTUAL
   crew hours on dense evening runs stacking 3–4 clinics — not in
   the headline rate. Scattered one-off small sites won't be
   profitable for him; cluster jobs geographically.
   ───────────────────────────────────────────────────────────── */

// Medical-grade detail clean at a once-a-week baseline. More
// frequent visits accumulate less soil, so per-visit hours shrink
// via FREQUENCY_FACTORS (daily works out to ~230 m²/hr). Larger
// premises also clean faster per m² — open waiting areas, repeated
// consult-room layouts, setup/travel amortised over more floor —
// so productivity tapers from 160 m²/hr at ≤200 m² up to 210 m²/hr
// at ≥1,000 m². Keeps small-clinic quotes mid-market while making
// large-centre quotes contestable in tenders.
const PRODUCTIVITY_SMALL = 160
const PRODUCTIVITY_LARGE = 210
const TAPER_START_SQM = 200
const TAPER_END_SQM = 1000
const MIN_HOURS_PER_VISIT = 1.5
const WEEKS_PER_MONTH = 4.33

const RATE_BUSINESS = 59
const RATE_AFTER = 65
const RATE_SATURDAY = 79
const RATE_SUNDAY = 95

const FREQUENCY_FACTORS: Record<number, number> = {
  1: 1.0,
  2: 0.92,
  3: 0.85,
  4: 0.8,
  5: 0.75,
  6: 0.72,
  7: 0.7,
}

const SPACE_MULTIPLIERS: Record<string, number> = {
  'gp-practice': 1.0,
  'allied-health': 0.95,
  'specialist-clinic': 1.05,
  'medical-centre': 1.1,
  'day-surgery': 1.25,
  'other': 1.0,
}

const BREAKDOWN_SPLIT = { service: 0.68, compliance: 0.14, quality: 0.1 }

export type EstimateBreakdown = {
  monthlyTotal: number
  monthlyIncGST: number
  // Presented range around the point estimate — final pricing is
  // confirmed at the walkthrough, so the tool quotes a band rather
  // than anchoring to one figure.
  rangeLow: number
  rangeHigh: number
  perVisit: number
  visitsPerMonth: number
  service: number
  compliance: number
  quality: number
  admin: number
}

function productivityForSize(sqm: number): number {
  if (sqm <= TAPER_START_SQM) return PRODUCTIVITY_SMALL
  if (sqm >= TAPER_END_SQM) return PRODUCTIVITY_LARGE
  const t = (sqm - TAPER_START_SQM) / (TAPER_END_SQM - TAPER_START_SQM)
  return PRODUCTIVITY_SMALL + t * (PRODUCTIVITY_LARGE - PRODUCTIVITY_SMALL)
}

const roundTo10 = (n: number) => Math.round(n / 10) * 10

function rateForDay(day: string, timing: EstimateData['timing']): number {
  if (day === 'Sun') return RATE_SUNDAY
  if (day === 'Sat') return RATE_SATURDAY
  return timing === 'after-hours' ? RATE_AFTER : RATE_BUSINESS
}

export function calculateEstimate(data: EstimateData): EstimateBreakdown {
  const sqm = data.sizeSqm || 100
  const selectedDays = data.selectedDays && data.selectedDays.length ? data.selectedDays : ['Mon']
  const spaceMultiplier = SPACE_MULTIPLIERS[data.spaceType] ?? 1.0
  const frequencyFactor = FREQUENCY_FACTORS[selectedDays.length] ?? 1.0
  const hoursPerVisit = Math.max(
    (sqm / productivityForSize(sqm)) * spaceMultiplier * frequencyFactor,
    MIN_HOURS_PER_VISIT
  )
  const weeklyCost = selectedDays.reduce(
    (sum, day) => sum + hoursPerVisit * rateForDay(day, data.timing),
    0
  )
  const monthlyTotal = Math.round(weeklyCost * WEEKS_PER_MONTH)
  const monthlyIncGST = Math.round(monthlyTotal * 1.1)
  const visitsPerMonth = Math.round(selectedDays.length * WEEKS_PER_MONTH)
  const service = Math.round(monthlyTotal * BREAKDOWN_SPLIT.service)
  const compliance = Math.round(monthlyTotal * BREAKDOWN_SPLIT.compliance)
  const quality = Math.round(monthlyTotal * BREAKDOWN_SPLIT.quality)
  return {
    monthlyTotal,
    monthlyIncGST,
    rangeLow: roundTo10(monthlyTotal * 0.92),
    rangeHigh: roundTo10(monthlyTotal * 1.08),
    perVisit: visitsPerMonth ? Math.round(monthlyTotal / visitsPerMonth) : 0,
    visitsPerMonth,
    service,
    compliance,
    quality,
    // Remainder so the breakdown always sums exactly to the total
    admin: monthlyTotal - service - compliance - quality,
  }
}
