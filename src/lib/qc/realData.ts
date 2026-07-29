/* ─────────────────────────────────────────────────────────────
   REAL DATA (manually imported from Jobber)
   Parsed from the downloaded Jobber checklist PDFs. Scores are
   COMPUTED here from the raw answers via the same engine the
   live dashboard would use — nothing hand-scored.

   To add a month: append audits / verifications / visits parsed
   from the next batch of downloaded checklists.
   ───────────────────────────────────────────────────────────── */

import type { QCSnapshot, Site, VisitLog, SiteAudit, Verification, Defect, Zone, SiteLabour } from './types'
import { zoneScoreFromRatings, atpThreshold, atpPass, type Rating } from './kpis'

const SITE_ID = 'test-dummy'
const DATE = '2026-07-29T18:00:00.000Z'

const sites: Site[] = [{ id: SITE_ID, name: 'Medical Test Dummy — Mount Barker' }]

// ── Per-Visit Clean (all required tasks ticked) ──
const visits: VisitLog[] = [
  {
    id: 'visit-2026-07-29',
    siteId: SITE_ID,
    date: DATE,
    cleaner: 'Carisle Team',
    tasksComplete: true,
    consumablesComplete: true,
    onTime: true,
  },
]

// ── Weekly Supervisor Audit — raw Pass/Fail/N/A per item ──
const auditRatings: Record<Zone, Rating[]> = {
  red: ['pass', 'fail', 'pass', 'fail', 'pass', 'na'], // toilets, basins, floors, consumables, equipment, waste
  yellow: ['fail', 'fail', 'pass', 'fail', 'fail', 'pass'], // exam beds, dust-free, floors, high-touch, sharps, cross-zone
  green: ['pass', 'fail', 'pass', 'na', 'na'], // reception, seating, door hardware, floors, bins
  blue: ['pass', 'pass', 'pass'], // benches, appliances, bins
}
const zoneScores = {
  red: zoneScoreFromRatings(auditRatings.red) ?? 0,
  yellow: zoneScoreFromRatings(auditRatings.yellow) ?? 0,
  green: zoneScoreFromRatings(auditRatings.green) ?? 0,
  blue: zoneScoreFromRatings(auditRatings.blue) ?? 0,
}
const audits: SiteAudit[] = [
  {
    id: 'audit-2026-07-29',
    siteId: SITE_ID,
    date: DATE,
    zoneScores,
    overallScore: Math.round((zoneScores.red + zoneScores.yellow + zoneScores.green + zoneScores.blue) / 4),
    defectsCount: 0, // none logged on the form (see note in chat)
  },
]

// ── Monthly Verification — UV marker + ATP RLU readings ──
const atpRaw: [string, Zone, number][] = [
  ['Exam bed surface', 'yellow', 280],
  ['Clinical door handle', 'yellow', 400],
  ['Bathroom tap', 'red', 400],
  ['Reception counter', 'green', 200],
  ['Kitchen bench', 'blue', 250],
]
const verifications: Verification[] = [
  {
    id: 'verify-2026-07-29',
    siteId: SITE_ID,
    date: DATE,
    uvPointsChecked: 6,
    uvPointsPassed: 3, // door handle + light switch + bathroom tap passed; 3 failed
    atp: atpRaw.map(([surface, zone, rlu]) => ({
      surface,
      zone,
      rlu,
      threshold: atpThreshold(zone),
      pass: atpPass(rlu, zone),
    })),
  },
]

// No defects were logged on the audit form, so the tracker is empty.
const defects: Defect[] = []

// ── Labour vs quote (EXAMPLE figures until real Timesheet hours are sent) ──
// Actual hours come auto from Jobber Timesheets once the API is wired.
const labour: SiteLabour[] = [
  { siteId: SITE_ID, quotedHours: 3.0, actualHours: 3.5, visits: 1 },
]

/** Returns the imported snapshot, or null if nothing has been imported. */
export function realSnapshot(): QCSnapshot | null {
  if (sites.length === 0) return null
  return {
    periodLabel: 'Imported from Jobber · Jul 2026',
    sites,
    audits,
    defects,
    verifications,
    visits,
    labour,
    isSampleData: false,
  }
}
