/* ─────────────────────────────────────────────────────────────
   SAMPLE DATA
   Realistic stand-in so the dashboard renders before Jobber is
   wired. Replace by returning live data from jobber.ts.
   ───────────────────────────────────────────────────────────── */

import type { QCSnapshot, SiteAudit, Defect, Verification, VisitLog, Zone } from './types'

const SITES = [
  { id: 's1', name: 'Prospect Family Practice' },
  { id: 's2', name: 'Norwood Specialist Clinic' },
  { id: 's3', name: 'Glenelg Allied Health' },
]

// Four weekly audit dates (most recent last), relative to today.
function weeksAgo(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() - n * 7)
  d.setHours(6, 30, 0, 0)
  return d.toISOString()
}
function daysAgo(n: number, hour = 19): string {
  const d = new Date()
  d.setDate(d.getDate() - n)
  d.setHours(hour, 0, 0, 0)
  return d.toISOString()
}

const audits: SiteAudit[] = []
// score profiles per site over 4 weeks (yellow, red, green, blue)
const profiles: Record<string, [number, number, number, number][]> = {
  s1: [[92, 88, 90, 95], [95, 92, 93, 96], [96, 94, 95, 98], [97, 95, 96, 100]],
  s2: [[94, 90, 92, 96], [93, 91, 90, 95], [96, 93, 94, 97], [98, 96, 97, 100]],
  s3: [[88, 85, 89, 92], [90, 88, 91, 94], [91, 90, 92, 95], [93, 91, 94, 96]],
}
let auditN = 1
for (const site of SITES) {
  profiles[site.id].forEach(([y, r, g, b], wk) => {
    const overall = Math.round((y + r + g + b) / 4)
    audits.push({
      id: `a${auditN++}`,
      siteId: site.id,
      date: weeksAgo(3 - wk),
      zoneScores: { yellow: y, red: r, green: g, blue: b },
      overallScore: overall,
      defectsCount: overall >= 95 ? 0 : overall >= 90 ? 1 : 2,
    })
  })
}

const defects: Defect[] = [
  { id: 'd1', siteId: 's3', zone: 'red', location: 'Patient toilet — tap base', issue: 'Limescale residue on tap', raisedAt: daysAgo(9, 7), dueAt: daysAgo(8, 7), assignedTo: 'Maria (cleaner)', status: 'closed', closedAt: daysAgo(8, 20) },
  { id: 'd2', siteId: 's3', zone: 'yellow', location: 'Treatment room 2 — bed rail', issue: 'Dust on underside of rail', raisedAt: daysAgo(9, 7), dueAt: daysAgo(8, 7), assignedTo: 'Maria (cleaner)', status: 'closed', closedAt: daysAgo(9, 21) },
  { id: 'd3', siteId: 's1', zone: 'green', location: 'Waiting room — chair arms', issue: 'Two chairs missed', raisedAt: daysAgo(2, 7), dueAt: daysAgo(1, 7), assignedTo: 'James (cleaner)', status: 'open' },
  { id: 'd4', siteId: 's2', zone: 'yellow', location: 'Consult 3 — keyboard', issue: 'Not wiped, visible marks', raisedAt: daysAgo(3, 7), dueAt: daysAgo(2, 7), assignedTo: 'Supervisor', status: 'closed', closedAt: daysAgo(2, 18) },
]

function reading(surface: string, zone: Zone, rlu: number): Verification['atp'][number] {
  const threshold = zone === 'yellow' ? 250 : 500
  return { surface, zone, rlu, threshold, pass: rlu < threshold }
}

const verifications: Verification[] = [
  {
    id: 'v1', siteId: 's1', date: daysAgo(1),
    uvPointsChecked: 6, uvPointsPassed: 6,
    atp: [reading('Exam bed surface', 'yellow', 110), reading('Clinical door handle', 'yellow', 180), reading('Bathroom tap', 'red', 240), reading('Reception counter', 'green', 300), reading('Kitchen bench', 'blue', 210)],
  },
  {
    id: 'v2', siteId: 's2', date: daysAgo(4),
    uvPointsChecked: 6, uvPointsPassed: 5,
    atp: [reading('Exam bed surface', 'yellow', 140), reading('Clinical door handle', 'yellow', 220), reading('Bathroom tap', 'red', 310), reading('Reception counter', 'green', 260), reading('Kitchen bench', 'blue', 190)],
  },
  {
    id: 'v3', siteId: 's3', date: daysAgo(8),
    uvPointsChecked: 6, uvPointsPassed: 5,
    atp: [reading('Exam bed surface', 'yellow', 190), reading('Clinical door handle', 'yellow', 280), reading('Bathroom tap', 'red', 360), reading('Reception counter', 'green', 340), reading('Kitchen bench', 'blue', 260)],
  },
]

// Per-visit logs across the last 20 days, mostly compliant.
const visits: VisitLog[] = []
let visitN = 1
for (const site of SITES) {
  for (let day = 0; day < 20; day++) {
    if (day % 2 === 1) continue // clean every other day
    const glitch = (day + Number(site.id.slice(1))) % 11 === 0
    visits.push({
      id: `vl${visitN++}`,
      siteId: site.id,
      date: daysAgo(day),
      cleaner: site.id === 's3' ? 'Maria' : 'James',
      tasksComplete: !glitch,
      consumablesComplete: (day + Number(site.id.slice(1))) % 9 !== 0,
      onTime: (day + Number(site.id.slice(1))) % 13 !== 0,
    })
  }
}

export function sampleSnapshot(): QCSnapshot {
  return {
    periodLabel: 'Last 4 weeks',
    sites: SITES,
    audits,
    defects,
    verifications,
    visits,
    isSampleData: true,
  }
}
