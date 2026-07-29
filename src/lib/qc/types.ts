/* ─────────────────────────────────────────────────────────────
   QC DATA MODEL
   Shapes the data captured in the three Jobber Job Forms
   (see docs/qc-system/) into types the dashboard consumes.
   ───────────────────────────────────────────────────────────── */

export type Zone = 'red' | 'yellow' | 'green' | 'blue'

export const ZONE_META: Record<Zone, { label: string; colour: string; area: string }> = {
  red: { label: 'Red', colour: '#DC2626', area: 'Bathrooms & toilets' },
  yellow: { label: 'Yellow', colour: '#CA8A04', area: 'Clinical rooms' },
  green: { label: 'Green', colour: '#1F7A5C', area: 'General & reception' },
  blue: { label: 'Blue', colour: '#2A7FBC', area: 'Kitchen & food' },
}

export interface Site {
  id: string
  name: string
}

/** One weekly supervisor audit — Jobber Form 2. */
export interface SiteAudit {
  id: string
  siteId: string
  date: string // ISO
  zoneScores: Record<Zone, number> // 0–100 (%)
  overallScore: number // 0–100 (%)
  defectsCount: number
}

/** A logged defect / corrective action — Jobber Form 2 defects section. */
export interface Defect {
  id: string
  siteId: string
  zone: Zone
  location: string
  issue: string
  raisedAt: string // ISO
  dueAt: string // ISO (default +24h)
  assignedTo: string
  status: 'open' | 'closed'
  closedAt?: string // ISO
}

/** One ATP swab reading — Jobber Form 3. */
export interface AtpReading {
  surface: string
  zone: Zone
  rlu: number
  threshold: number
  pass: boolean
}

/** One high-touch verification event — Jobber Form 3. */
export interface Verification {
  id: string
  siteId: string
  date: string // ISO
  uvPointsChecked: number
  uvPointsPassed: number
  atp: AtpReading[]
}

/** Daily per-visit checklist rollup — Jobber Form 1. */
export interface VisitLog {
  id: string
  siteId: string
  date: string // ISO
  cleaner: string
  tasksComplete: boolean // all required checkboxes ticked
  consumablesComplete: boolean
  onTime: boolean // arrived within scheduled window
}

/** Labour vs quote for a site over the period — Jobber Timesheets (actual) vs quoted hours. */
export interface SiteLabour {
  siteId: string
  quotedHours: number // target hours priced for the period
  actualHours: number // hours actually clocked (Jobber Timesheets)
  visits: number // visits the hours cover
}

/** Everything the dashboard needs for a reporting period. */
export interface QCSnapshot {
  periodLabel: string
  sites: Site[]
  audits: SiteAudit[]
  defects: Defect[]
  verifications: Verification[]
  visits: VisitLog[]
  /** Labour hours per site (optional — present once Timesheets are imported). */
  labour?: SiteLabour[]
  /** true when served from sampleData (Jobber not yet wired). */
  isSampleData: boolean
}
