import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AlertTriangle, CheckCircle2, Clock, LogOut, ShieldCheck } from 'lucide-react'
import { getQCSnapshot } from '@/lib/qc/jobber'
import { computeKpis, STATUS_COLOUR, labourStatus, type KpiResult } from '@/lib/qc/kpis'
import { ZONE_META, type Zone, type QCSnapshot } from '@/lib/qc/types'
import { isAuthed, clearAuthCookie } from '@/lib/qc/auth'

export const metadata: Metadata = {
  title: 'Zenith QC Portal',
  robots: { index: false, follow: false },
}

const NAVY = '#0D1F3C'
const MUTED = '#6B7A8D'
const BORDER = '#E4E9F0'

async function logout() {
  'use server'
  await clearAuthCookie()
  redirect('/portal/login')
}

export default async function QCDashboardPage() {
  if (!(await isAuthed())) redirect('/portal/login')

  const snap = await getQCSnapshot()
  const kpis = computeKpis(snap)

  return (
    <div>
      <Header snap={snap} />
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 80px' }}>
        {snap.isSampleData && <SampleBanner />}
        <SectionTitle>Headline KPIs · {snap.periodLabel}</SectionTitle>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: 16,
          }}
        >
          {kpis.map(k => (
            <KpiCard key={k.id} kpi={k} />
          ))}
        </div>

        <SectionTitle>Labour efficiency · production rate</SectionTitle>
        <LabourPanel snap={snap} />

        <SectionTitle>Zone audit pass-rate · weekly trend</SectionTitle>
        <ZoneTrend snap={snap} />

        <SectionTitle>High-touch verification · latest ATP readings</SectionTitle>
        <AtpTable snap={snap} />

        <SectionTitle>Corrective-action tracker</SectionTitle>
        <Defects snap={snap} />

        <SectionTitle>Per-site scorecard</SectionTitle>
        <SiteScorecard snap={snap} />
      </div>
    </div>
  )
}

/* ── Header ─────────────────────────────────────────────── */
function Header({ snap }: { snap: QCSnapshot }) {
  const openDefects = snap.defects.filter(d => d.status === 'open').length
  return (
    <header style={{ backgroundColor: NAVY, padding: '28px 24px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <ShieldCheck size={22} color="#2A7FBC" />
          <span style={{ color: '#2A7FBC', fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            Zenith QC Portal
          </span>
          <form action={logout} style={{ marginLeft: 'auto' }}>
            <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontSize: 12.5, borderRadius: 8, padding: '5px 11px', cursor: 'pointer' }}>
              <LogOut size={14} /> Log out
            </button>
          </form>
        </div>
        <h1 style={{ color: '#fff', fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 30, fontWeight: 700, margin: 0 }}>
          Compliance dashboard
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 6, fontSize: 14 }}>
          RACGP GP4.1 · {snap.sites.length} sites · {openDefects} open corrective action{openDefects === 1 ? '' : 's'}
        </p>
      </div>
    </header>
  )
}

function SampleBanner() {
  return (
    <div
      style={{
        marginTop: 20,
        padding: '12px 16px',
        borderRadius: 10,
        backgroundColor: '#FFF7E6',
        border: '1px solid #F0D9A0',
        color: '#7A5A00',
        fontSize: 13.5,
        display: 'flex',
        gap: 10,
        alignItems: 'center',
      }}
    >
      <AlertTriangle size={17} />
      <span>
        Showing <strong>sample data</strong>. Wire Jobber in <code>src/lib/qc/jobber.ts</code> (set <code>JOBBER_API_TOKEN</code>) to go live.
      </span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: MUTED, margin: '38px 0 14px' }}>
      {children}
    </h2>
  )
}

/* ── KPI cards ──────────────────────────────────────────── */
function KpiCard({ kpi }: { kpi: KpiResult }) {
  const colour = STATUS_COLOUR[kpi.status]
  const display = kpi.value === null ? '—' : `${kpi.value}${kpi.unit}`
  const targetLabel = kpi.higherIsBetter ? `≥ ${kpi.target}${kpi.unit}` : `< ${kpi.target}${kpi.unit}`
  return (
    <div style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, borderLeft: `4px solid ${colour}` }}>
      <div style={{ fontSize: 12.5, color: MUTED, minHeight: 34, lineHeight: 1.35 }}>{kpi.label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: NAVY, fontFamily: 'var(--font-playfair), Georgia, serif' }}>{display}</span>
        <span style={{ fontSize: 11.5, fontWeight: 600, color: colour, textTransform: 'capitalize' }}>{kpi.status}</span>
      </div>
      <div style={{ fontSize: 11.5, color: MUTED, marginTop: 4 }}>Target {targetLabel}</div>
    </div>
  )
}

/* ── Zone trend (hand-rolled SVG) ───────────────────────── */
function ZoneTrend({ snap }: { snap: QCSnapshot }) {
  if (snap.audits.length === 0)
    return <EmptyState text="No supervisor audits yet — zone pass-rates appear once the weekly audit runs." />
  const weeks = Array.from(new Set(snap.audits.map(a => a.date))).sort()
  const zones: Zone[] = ['yellow', 'red', 'green', 'blue']
  const series = zones.map(z => ({
    zone: z,
    points: weeks.map(w => {
      const vals = snap.audits.filter(a => a.date === w).map(a => a.zoneScores[z])
      return vals.reduce((a, b) => a + b, 0) / (vals.length || 1)
    }),
  }))

  const W = 1040, H = 220, padL = 34, padR = 12, padT = 12, padB = 26
  const min = 80, max = 100
  const x = (i: number) => padL + (i / Math.max(1, weeks.length - 1)) * (W - padL - padR)
  const y = (v: number) => padT + (1 - (v - min) / (max - min)) * (H - padT - padB)

  return (
    <div style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Zone audit pass-rate trend">
        {[80, 85, 90, 95, 100].map(g => (
          <g key={g}>
            <line x1={padL} y1={y(g)} x2={W - padR} y2={y(g)} stroke={BORDER} strokeWidth={1} />
            <text x={4} y={y(g) + 3} fontSize={10} fill={MUTED}>{g}</text>
          </g>
        ))}
        {/* 95% clinical target line */}
        <line x1={padL} y1={y(95)} x2={W - padR} y2={y(95)} stroke="#CA8A04" strokeWidth={1} strokeDasharray="4 4" opacity={0.6} />
        {series.map(s => (
          <g key={s.zone}>
            <polyline
              points={s.points.map((v, i) => `${x(i)},${y(v)}`).join(' ')}
              fill="none"
              stroke={ZONE_META[s.zone].colour}
              strokeWidth={2.5}
            />
            {s.points.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r={3} fill={ZONE_META[s.zone].colour} />
            ))}
          </g>
        ))}
        {weeks.map((w, i) => (
          <text key={w} x={x(i)} y={H - 8} fontSize={10} fill={MUTED} textAnchor="middle">
            {new Date(w).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
          </text>
        ))}
      </svg>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
        {zones.map(z => (
          <span key={z} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: NAVY }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: ZONE_META[z].colour }} />
            {ZONE_META[z].label} — {ZONE_META[z].area}
          </span>
        ))}
        <span style={{ fontSize: 12, color: '#CA8A04' }}>– – 95% clinical target</span>
      </div>
    </div>
  )
}

/* ── ATP table ──────────────────────────────────────────── */
function AtpTable({ snap }: { snap: QCSnapshot }) {
  const siteName = (id: string) => snap.sites.find(s => s.id === id)?.name ?? id
  const rows = snap.verifications
    .flatMap(v => v.atp.map(r => ({ ...r, site: siteName(v.siteId), date: v.date })))
    .sort((a, b) => b.date.localeCompare(a.date))

  if (rows.length === 0)
    return <EmptyState text="No ATP readings yet — these appear after the monthly verification." />

  return (
    <div style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 560 }}>
        <thead>
          <tr style={{ textAlign: 'left', color: MUTED, fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Th>Site</Th><Th>Zone</Th><Th>Surface</Th><Th align="right">RLU</Th><Th align="right">Threshold</Th><Th>Result</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
              <Td>{r.site}</Td>
              <Td><ZoneDot zone={r.zone} /></Td>
              <Td>{r.surface}</Td>
              <Td align="right" style={{ fontWeight: 600, color: r.pass ? NAVY : '#DC2626' }}>{r.rlu}</Td>
              <Td align="right" style={{ color: MUTED }}>&lt; {r.threshold}</Td>
              <Td>
                <span style={{ color: r.pass ? '#1F7A5C' : '#DC2626', fontWeight: 600 }}>
                  {r.pass ? 'Pass' : 'Re-clean'}
                </span>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Defects / corrective actions ───────────────────────── */
function Defects({ snap }: { snap: QCSnapshot }) {
  if (snap.defects.length === 0)
    return <EmptyState text="No corrective actions — all clear." />
  const siteName = (id: string) => snap.sites.find(s => s.id === id)?.name ?? id
  const now = Date.now()
  const sorted = [...snap.defects].sort((a, b) => {
    if (a.status !== b.status) return a.status === 'open' ? -1 : 1
    return a.dueAt.localeCompare(b.dueAt)
  })

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {sorted.map(d => {
        const overdue = d.status === 'open' && new Date(d.dueAt).getTime() < now
        const border = overdue ? '#DC2626' : d.status === 'open' ? '#CA8A04' : '#1F7A5C'
        return (
          <div key={d.id} style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderLeft: `4px solid ${border}`, borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center' }}>
            <ZoneDot zone={d.zone} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, color: NAVY, fontWeight: 600 }}>{d.issue}</div>
              <div style={{ fontSize: 12.5, color: MUTED }}>{siteName(d.siteId)} · {d.location} · {d.assignedTo}</div>
            </div>
            <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
              {d.status === 'closed' ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#1F7A5C', fontSize: 12.5, fontWeight: 600 }}>
                  <CheckCircle2 size={15} /> Closed
                </span>
              ) : (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: overdue ? '#DC2626' : '#CA8A04', fontSize: 12.5, fontWeight: 600 }}>
                  <Clock size={15} /> {overdue ? 'Overdue' : 'Due'} {new Date(d.dueAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ── Per-site scorecard ─────────────────────────────────── */
function SiteScorecard({ snap }: { snap: QCSnapshot }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
      {snap.sites.map(site => {
        const siteAudits = snap.audits.filter(a => a.siteId === site.id).sort((a, b) => b.date.localeCompare(a.date))
        const latest = siteAudits[0]
        const openDefects = snap.defects.filter(d => d.siteId === site.id && d.status === 'open').length
        return (
          <div key={site.id} style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{site.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, margin: '8px 0 12px' }}>
              <span style={{ fontSize: 30, fontWeight: 700, color: NAVY, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                {latest ? `${latest.overallScore}%` : '—'}
              </span>
              <span style={{ fontSize: 12, color: MUTED }}>latest overall</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
              {(['red', 'yellow', 'green', 'blue'] as Zone[]).map(z => (
                <div key={z} style={{ textAlign: 'center' }}>
                  <div style={{ height: 6, borderRadius: 3, backgroundColor: ZONE_META[z].colour, opacity: 0.9 }} />
                  <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginTop: 4 }}>{latest ? `${latest.zoneScores[z]}%` : '—'}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12.5, color: openDefects ? '#CA8A04' : MUTED, marginTop: 12 }}>
              {openDefects ? `${openDefects} open corrective action${openDefects === 1 ? '' : 's'}` : 'No open corrective actions'}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ── Small shared bits ──────────────────────────────────── */
/* ── Labour efficiency / production rate ────────────────── */
function LabourPanel({ snap }: { snap: QCSnapshot }) {
  const labour = snap.labour ?? []
  if (labour.length === 0)
    return <EmptyState text="No labour hours imported yet — quoted-vs-actual appears once Timesheets are pulled." />

  const siteName = (id: string) => snap.sites.find(s => s.id === id)?.name ?? id
  const COLOUR = { healthy: '#1F7A5C', watch: '#CA8A04', over: '#DC2626' } as const
  const LABEL = {
    healthy: 'Under quote — healthy margin',
    watch: 'Slightly over — watch',
    over: 'Over quote — margin risk',
  } as const

  return (
    <>
      <div style={{ fontSize: 12, color: MUTED, margin: '-4px 0 12px' }}>
        Example hours for the test site — swap in real Timesheet figures anytime.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {labour.map(l => {
          const variance = Math.round((l.actualHours - l.quotedHours) * 10) / 10
          const variancePct = Math.round(((l.actualHours - l.quotedHours) / l.quotedHours) * 100)
          const status = labourStatus(l.quotedHours, l.actualHours)
          const colour = COLOUR[status]
          return (
            <div key={l.siteId} style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, borderLeft: `4px solid ${colour}` }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{siteName(l.siteId)}</div>
              <div style={{ display: 'flex', gap: 22, margin: '12px 0' }}>
                <LabourStat label="Quoted" value={`${l.quotedHours}h`} colour={NAVY} />
                <LabourStat label="Actual" value={`${l.actualHours}h`} colour={NAVY} />
                <LabourStat label="Variance" value={`${variance >= 0 ? '+' : ''}${variance}h`} colour={colour} />
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: colour }}>
                {LABEL[status]} ({variancePct >= 0 ? '+' : ''}{variancePct}%)
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 4 }}>{l.visits} visit{l.visits === 1 ? '' : 's'}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
function LabourStat({ label, value, colour }: { label: string; value: string; colour: string }) {
  return (
    <div>
      <div style={{ fontSize: 11.5, color: MUTED }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: colour, fontFamily: 'var(--font-playfair), Georgia, serif' }}>{value}</div>
    </div>
  )
}
function EmptyState({ text }: { text: string }) {
  return (
    <div style={{ backgroundColor: '#fff', border: `1px dashed ${BORDER}`, borderRadius: 12, padding: '22px 18px', textAlign: 'center', fontSize: 13.5, color: MUTED }}>
      {text}
    </div>
  )
}
function ZoneDot({ zone }: { zone: Zone }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: ZONE_META[zone].colour }} />
      {ZONE_META[zone].label}
    </span>
  )
}
function Th({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return <th style={{ padding: '11px 14px', textAlign: align, fontWeight: 600 }}>{children}</th>
}
function Td({ children, align = 'left', style }: { children: React.ReactNode; align?: 'left' | 'right'; style?: React.CSSProperties }) {
  return <td style={{ padding: '11px 14px', textAlign: align, color: NAVY, ...style }}>{children}</td>
}
