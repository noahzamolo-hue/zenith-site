/* ─────────────────────────────────────────────────────────────
   KPI DEFINITIONS + COMPUTATION
   Turns a QCSnapshot into the 9 headline KPIs with pass/fail
   against target. Pure functions — no I/O — so they're trivial
   to test and reuse in the client PDF later.
   ───────────────────────────────────────────────────────────── */

import type { QCSnapshot, Zone } from './types'

export type KpiStatus = 'pass' | 'watch' | 'fail'

export interface KpiResult {
  id: string
  label: string
  value: number | null // null = no data this period
  unit: '%' | 'h'
  target: number
  /** true when higher is better (%), false when lower is better (hours). */
  higherIsBetter: boolean
  status: KpiStatus
  hint: string
}

const pct = (num: number, den: number): number | null =>
  den === 0 ? null : Math.round((num / den) * 1000) / 10

const avg = (xs: number[]): number | null =>
  xs.length === 0 ? null : Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10

/** Status vs target, with a 5-point "watch" band just below target. */
function statusFor(value: number | null, target: number, higherIsBetter: boolean): KpiStatus {
  if (value === null) return 'watch'
  if (higherIsBetter) {
    if (value >= target) return 'pass'
    if (value >= target - 5) return 'watch'
    return 'fail'
  } else {
    if (value <= target) return 'pass'
    if (value <= target * 1.5) return 'watch'
    return 'fail'
  }
}

function zoneAvg(snap: QCSnapshot, zone: Zone): number | null {
  return avg(snap.audits.map(a => a.zoneScores[zone]))
}

function otherZonesAvg(snap: QCSnapshot): number | null {
  const vals: number[] = []
  for (const a of snap.audits) {
    vals.push(a.zoneScores.red, a.zoneScores.green, a.zoneScores.blue)
  }
  return avg(vals)
}

/** Median hours from raised → closed for defects closed this period. */
function defectRectificationHours(snap: QCSnapshot): number | null {
  const closed = snap.defects.filter(d => d.status === 'closed' && d.closedAt)
  const hours = closed
    .map(d => (new Date(d.closedAt!).getTime() - new Date(d.raisedAt).getTime()) / 3.6e6)
    .sort((a, b) => a - b)
  if (hours.length === 0) return null
  const mid = Math.floor(hours.length / 2)
  const median = hours.length % 2 ? hours[mid] : (hours[mid - 1] + hours[mid]) / 2
  return Math.round(median * 10) / 10
}

export function computeKpis(snap: QCSnapshot): KpiResult[] {
  const yellow = zoneAvg(snap, 'yellow')
  const others = otherZonesAvg(snap)

  const uvChecked = snap.verifications.reduce((n, v) => n + v.uvPointsChecked, 0)
  const uvPassed = snap.verifications.reduce((n, v) => n + v.uvPointsPassed, 0)
  const uvRate = pct(uvPassed, uvChecked)

  const clinicalSwabs = snap.verifications.flatMap(v => v.atp).filter(s => s.zone === 'yellow')
  const atpRate = pct(clinicalSwabs.filter(s => s.pass).length, clinicalSwabs.length)

  const taskRate = pct(snap.visits.filter(v => v.tasksComplete).length, snap.visits.length)
  const consumRate = pct(snap.visits.filter(v => v.consumablesComplete).length, snap.visits.length)
  const onTimeRate = pct(snap.visits.filter(v => v.onTime).length, snap.visits.length)

  const rectify = defectRectificationHours(snap)

  const defs: Omit<KpiResult, 'status'>[] = [
    { id: 'yellow-pass', label: 'Clinical audit pass (Yellow)', value: yellow, unit: '%', target: 95, higherIsBetter: true, hint: 'Avg Yellow-zone score across supervisor audits' },
    { id: 'other-pass', label: 'Audit pass (Red / Green / Blue)', value: others, unit: '%', target: 90, higherIsBetter: true, hint: 'Avg score across non-clinical zones' },
    { id: 'uv-pass', label: 'High-touch UV verification', value: uvRate, unit: '%', target: 90, higherIsBetter: true, hint: 'Marked points found already wiped' },
    { id: 'atp-pass', label: 'ATP clinical surfaces under threshold', value: atpRate, unit: '%', target: 90, higherIsBetter: true, hint: 'Yellow-zone swabs below RLU threshold' },
    { id: 'task-complete', label: 'Task completion rate', value: taskRate, unit: '%', target: 100, higherIsBetter: true, hint: 'Visits with all required tasks ticked' },
    { id: 'consumables', label: 'Consumables compliance', value: consumRate, unit: '%', target: 100, higherIsBetter: true, hint: 'Visits with consumables fully restocked' },
    { id: 'attendance', label: 'On-time attendance', value: onTimeRate, unit: '%', target: 98, higherIsBetter: true, hint: 'Arrived within the scheduled window' },
    { id: 'rectify', label: 'Defect rectification (median)', value: rectify, unit: 'h', target: 24, higherIsBetter: false, hint: 'Median hours from defect raised to closed' },
  ]

  return defs.map(d => ({ ...d, status: statusFor(d.value, d.target, d.higherIsBetter) }))
}

export const STATUS_COLOUR: Record<KpiStatus, string> = {
  pass: '#1F7A5C',
  watch: '#CA8A04',
  fail: '#DC2626',
}

export type Rating = 'pass' | 'fail' | 'na'

/**
 * Zone score from per-item Pass / Fail / N/A ratings — the automatic
 * scoring the supervisor never has to do by hand. N/A items are excluded
 * from the denominator. Returns null when no items are applicable.
 * Used by the Jobber integration to turn checklist answers into zone %s.
 */
export function zoneScoreFromRatings(ratings: Rating[]): number | null {
  const passes = ratings.filter(r => r === 'pass').length
  const applicable = ratings.filter(r => r !== 'na').length
  return applicable === 0 ? null : Math.round((passes / applicable) * 1000) / 10
}

/** ATP pass threshold in RLU by zone — clinical is stricter. */
export function atpThreshold(zone: Zone): number {
  return zone === 'yellow' ? 250 : 500
}

export type LabourStatus = 'healthy' | 'watch' | 'over'

/**
 * Margin health from quoted vs actual hours. At/under quote = healthy
 * (job's more efficient than priced); up to 10% over = watch; beyond = over
 * (margin bleeding — underpriced or slow). This is the 30/70 margin signal.
 */
export function labourStatus(quotedHours: number, actualHours: number): LabourStatus {
  if (actualHours <= quotedHours) return 'healthy'
  if (actualHours <= quotedHours * 1.1) return 'watch'
  return 'over'
}

/**
 * Whether an ATP reading passes for its zone. The supervisor types only
 * the RLU number; pass/fail is decided here, not by hand.
 */
export function atpPass(rlu: number, zone: Zone): boolean {
  return rlu < atpThreshold(zone)
}
