# Zenith QC System

Quality control for RACGP-compliant medical cleaning, built to run in **Jobber** (capture) with a **compliance dashboard** in zenith-site at `/portal/qc` (analysis + client reporting).

## Why this exists

Clinics accredited against the **RACGP Standards for General Practices (5th ed.)** must *demonstrate a system*: infection risks identified, cleaning matched to risk, and evidence it was done. Most cleaners can't produce that evidence. Zenith can — that is the competitive edge and the retention tool.

## The four-zone model (matches the site)

| Zone | Colour | Areas | Risk |
|------|--------|-------|------|
| 🔴 Red | `#DC2626` | Bathrooms, toilets, sluice, clinical waste | Highest contamination |
| 🟡 Yellow | `#CA8A04` | Consult, treatment, procedure rooms | Highest infection risk |
| 🟢 Green | `#1F7A5C` | Reception, waiting, corridors, admin | High-touch traffic |
| 🔵 Blue | `#2A7FBC` | Staff kitchen, tea points, food surfaces | Food safety |

## The layers

```
JOBBER (capture, mobile, onsite)          ZENITH-SITE (analyse + report)
─────────────────────────────            ──────────────────────────────
Form 1  Per-Visit Clean Checklist    →    KPI dashboard  (/portal/qc)
Form 2  Weekly Supervisor Audit      →    Zone pass-rate trends
Form 3  High-Touch Verification      →    ATP RLU tracking
        (UV markers + ATP swabs)          Corrective-action tracker
Photos + signature + GPS timestamp   →    Monthly client compliance PDF
```

Jobber captures; it does **not** calculate audit pass-rates or trend ATP scores — that's what the dashboard is for.

## KPIs

| # | KPI | Target | Source |
|---|-----|--------|--------|
| 1 | Audit pass rate — Yellow (clinical) | ≥ 95% | Form 2 |
| 2 | Audit pass rate — Red / Green / Blue | ≥ 90% | Form 2 |
| 3 | High-touch verification (UV pass) | ≥ 90% | Form 3 |
| 4 | ATP cleanliness (clinical surfaces) | ≥ 90% under threshold | Form 3 |
| 5 | Task completion rate | 100% | Form 1 |
| 6 | Defect rectification time | < 24 h | Form 2 → dashboard |
| 7 | Consumables compliance | 100% | Form 1 |
| 8 | Attendance / on-time | ≥ 98% | Jobber GPS/timestamp |
| 9 | Complaints per site / month | < 1 | Client Hub / manual |

## Files

- `jobber-form-1-per-visit-checklist.md`
- `jobber-form-2-weekly-supervisor-audit.md`
- `jobber-form-3-high-touch-verification.md`
- `sop-uv-marker-audit.md`
- `sop-atp-testing.md`

## Setup order

1. Buy the kit (see SOPs): UV gel markers + UV torch (~$30), ATP luminometer + swabs (~$350–500).
2. In Jobber → **Settings → Job Forms**, build Forms 1–3 from the specs (field-by-field).
3. Attach Form 1 to every recurring clean; Form 2 as a weekly job for the supervisor; Form 3 monthly (or weekly for Yellow zones).
4. Train the team on the two SOPs.
5. Wire the dashboard to Jobber (see `src/lib/qc/jobber.ts`) — until then it runs on sample data.
